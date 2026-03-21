#!/bin/bash

# ─────────────────────────────────────────────
#  GymTrack — Build & Sync script
#  Run this before opening Android Studio
# ─────────────────────────────────────────────

set -e  # stop on any error

echo ""
echo "╔══════════════════════════════════════╗"
echo "║       GymTrack — Build Script        ║"
echo "╚══════════════════════════════════════╝"
echo ""

# ── 1. Go to the right folder ──────────────────
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "📁 Working directory: $SCRIPT_DIR"
echo ""

# ── 2. Install dependencies ────────────────────
echo "📦 Installing npm dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# ── 3. Copy latest App.js if needed ───────────
# (optional: copies gym-tracker.jsx → src/App.js automatically)
if [ -f "gym-tracker.jsx" ]; then
  echo "📋 Copying gym-tracker.jsx → src/App.js..."
  cp gym-tracker.jsx src/App.js
  echo "✅ App.js updated"
  echo ""
fi

# ── 4. Build the React app ─────────────────────
echo "🔨 Building React app (npm run build)..."
npm run build
echo "✅ Build complete"
echo ""

# ── 5. Sync Capacitor ─────────────────────────
echo "🔄 Syncing Capacitor (npx cap sync)..."
npx cap sync
echo "✅ Capacitor sync complete"
echo ""

# ── 6. Open Android Studio ────────────────────
echo "🚀 Opening Android Studio..."
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Once Android Studio opens:                              ║"
echo "║                                                          ║"
echo "║  To build a SIGNED APK (for updates):                    ║"
echo "║    Build → Generate Signed Bundle / APK                  ║"
echo "║    → APK → Choose existing keystore → Release → Finish   ║"
echo "║                                                          ║"
echo "║  APK will be in:                                         ║"
echo "║    android/app/release/app-release.apk                   ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

npx cap open android

echo ""
echo "✅ Done! Android Studio should be open."
