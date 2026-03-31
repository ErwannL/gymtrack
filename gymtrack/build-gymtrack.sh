
#!/bin/bash

# ─────────────────────────────────────────────────────────────────
#  GymTrack — Full Build Script (no Android Studio needed)
#  Usage:
#    ./build-gymtrack.sh              → debug APK
#    ./build-gymtrack.sh --release    → signed release APK
#    ./build-gymtrack.sh --release v1.9.2  → build + git tag + push
# ─────────────────────────────────────────────────────────────────

set -e

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

echo ""
echo -e "${BOLD}╔══════════════════════════════════════╗${NC}"
echo -e "${BOLD}║       GymTrack — Build Script        ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════╝${NC}"
echo ""

RELEASE=false
PUSH_TAG=""
for arg in "$@"; do
  if [ "$PREV" = "--push" ] || [[ "$arg" == v* && "$RELEASE" = true ]]; then
    PUSH_TAG="$arg"
  fi
  case $arg in --release) RELEASE=true ;; esac
  PREV="$arg"
done

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
echo -e "${BLUE}📁 $SCRIPT_DIR${NC}"
echo ""

# 1. Copy jsx → App.js
if [ -f "gym-tracker.jsx" ]; then
  echo -e "${YELLOW}📋 Copying gym-tracker.jsx → src/App.js...${NC}"
  cp gym-tracker.jsx src/App.js
  echo -e "${GREEN}✅ Done${NC}"
else
  echo -e "${YELLOW}⚠️  gym-tracker.jsx not found, using src/App.js as is.${NC}"
fi
echo ""

# 2. npm install
echo -e "${YELLOW}📦 npm install...${NC}"
npm install --silent
echo -e "${GREEN}✅ Done${NC}"
echo ""

# 3. Update appVersion in App.js if tag provided
if [ -n "$PUSH_TAG" ]; then
  echo -e "${YELLOW}✏️  Updating appVersion in App.js to $PUSH_TAG...${NC}"
  sed -i.bak -E "s/appVersion:\"v[0-9.]+\"/appVersion:\"$PUSH_TAG\"/g" src/App.js
  sed -i.bak -E "s/appVersion:\"v[0-9.]+\"/appVersion:\"$PUSH_TAG\"/g" src/App.js
  # Also update French translation (portable sed range)
  sed -i.bak -E "/fr:/,/appVersion:/s/appVersion:\"v[0-9.]+\"/appVersion:\"$PUSH_TAG\"/" src/App.js
  rm -f src/App.js.bak
  echo -e "${GREEN}✅ appVersion updated${NC}"
  echo ""
fi
# 4. React build
echo -e "${YELLOW}🔨 npm run build...${NC}"
npm run build
echo -e "${GREEN}✅ React build done${NC}"
echo ""

# 4. Capacitor sync
echo -e "${YELLOW}🔄 cap sync...${NC}"
npx cap sync android
echo -e "${GREEN}✅ Capacitor synced${NC}"
echo ""

# 5. Gradle build
cd android
if [ "$RELEASE" = true ]; then
  echo -e "${YELLOW}🏗️  Building signed release APK...${NC}"
  if [ ! -f "keystore.properties" ]; then
    echo -e "${RED}❌ android/keystore.properties not found!${NC}"
    echo ""
    echo "  Create it with these 4 lines:"
    echo "    storeFile=../my-release-key.jks"
    echo "    storePassword=YOURPASSWORD"
    echo "    keyAlias=YOURALIAS"
    echo "    keyPassword=YOURKEYPASSWORD"
    echo ""
    echo "  Then in android/app/build.gradle, add inside android {}:"
    echo "    signingConfigs {"
    echo "      release {"
    echo "        def props = new Properties()"
    echo "        props.load(new FileInputStream(rootProject.file('keystore.properties')))"
    echo "        storeFile     file(props['storeFile'])"
    echo "        storePassword props['storePassword']"
    echo "        keyAlias      props['keyAlias']"
    echo "        keyPassword   props['keyPassword']"
    echo "      }"
    echo "    }"
    echo "    buildTypes { release { signingConfig signingConfigs.release } }"
    exit 1
  fi
  ./gradlew assembleRelease --quiet
  APK_SRC="app/build/outputs/apk/release/app-release.apk"
  APK_DEST="$SCRIPT_DIR/gymtrack-release.apk"
else
  echo -e "${YELLOW}🏗️  Building debug APK...${NC}"
  ./gradlew assembleDebug --quiet
  APK_SRC="app/build/outputs/apk/debug/app-debug.apk"
  APK_DEST="$SCRIPT_DIR/gymtrack-debug.apk"
fi
cd "$SCRIPT_DIR"

if [ -f "android/$APK_SRC" ]; then
  cp "android/$APK_SRC" "$APK_DEST"
  SIZE=$(du -sh "$APK_DEST" | cut -f1)
  echo -e "${GREEN}✅ APK ready: ${BOLD}$(basename $APK_DEST)${NC}${GREEN} ($SIZE)${NC}"
else
  echo -e "${RED}❌ APK not found${NC}"; exit 1
fi
echo ""

# 6. Git tag + push (optional)
if [ -n "$PUSH_TAG" ]; then
  echo -e "${YELLOW}🏷️  Releasing $PUSH_TAG...${NC}"
  VERSION="${PUSH_TAG#v}"
  node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json'));p.version='$VERSION';fs.writeFileSync('package.json',JSON.stringify(p,null,2));"
  git add -A
  git commit -m "release: $PUSH_TAG" || true
  git tag -a "$PUSH_TAG" -m "GymTrack $PUSH_TAG" 2>/dev/null || git tag -f "$PUSH_TAG" -m "GymTrack $PUSH_TAG"
  # Only push if not running in GitHub Actions (no push in CI)
  if [ -z "$GITHUB_ACTIONS" ]; then
    if [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ]; then
      git push origin main
    fi
    git push origin "$PUSH_TAG" --force
  fi
  REPO=$(git remote get-url origin | sed 's/.*github.com[:/]//' | sed 's/\.git$//')
  echo -e "${GREEN}✅ Tag $PUSH_TAG pushed${NC}"
  echo -e "${BLUE}🚀 GitHub Actions building release...${NC}"
  echo -e "${BLUE}   https://github.com/$REPO/releases${NC}"

  # Require GH_PAT for release and upload
  if [ -z "$GH_PAT" ]; then
    echo -e "${RED}❌ GH_PAT (GitHub token) is required to create a release and upload the APK.${NC}"
    echo "  Export your token: export GH_PAT=ghp_xxx"
    exit 1
  fi
  AUTH_HEADER="-H \"Authorization: token $GH_PAT\""
  # Create release if needed
  RELEASE_ID=$(curl -s -H "Authorization: token $GH_PAT" "https://api.github.com/repos/$REPO/releases/tags/$PUSH_TAG" | grep '"id":' | head -1 | sed 's/[^0-9]*//g')
  if [ -z "$RELEASE_ID" ]; then
    echo -e "${YELLOW}📝 Creating GitHub release for $PUSH_TAG...${NC}"
    RELEASE_ID=$(curl -s -X POST -H "Authorization: token $GH_PAT" \
      -d "{\"tag_name\":\"$PUSH_TAG\",\"name\":\"$PUSH_TAG\",\"body\":\"Release $PUSH_TAG\"}" \
      "https://api.github.com/repos/$REPO/releases" | grep '"id":' | head -1 | sed 's/[^0-9]*//g')
    echo -e "${GREEN}✅ Release created for $PUSH_TAG${NC}"
  else
    echo -e "${GREEN}✅ Release already exists for $PUSH_TAG${NC}"
  fi
  # Upload APK
  if [ -f "$APK_DEST" ]; then
    echo -e "${YELLOW}⬆️  Uploading APK to GitHub release...${NC}"
    curl -s -X POST -H "Authorization: token $GH_PAT" \
      -H "Content-Type: application/vnd.android.package-archive" \
      --data-binary @"$APK_DEST" \
      "https://uploads.github.com/repos/$REPO/releases/$RELEASE_ID/assets?name=$(basename $APK_DEST)" > /dev/null
    echo -e "${GREEN}✅ APK uploaded to release $PUSH_TAG${NC}"
  else
    echo -e "${RED}❌ APK file not found for upload${NC}"
    exit 1
  fi
fi

echo ""
echo -e "${GREEN}${BOLD}╔══════════════════════════╗${NC}"
echo -e "${GREEN}${BOLD}║   Build complete! ✅     ║${NC}"
echo -e "${GREEN}${BOLD}╚══════════════════════════╝${NC}"
echo ""
