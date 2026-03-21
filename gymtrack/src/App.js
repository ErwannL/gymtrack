import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";

// ─── i18n ─────────────────────────────────────────────────────────────────────
const LangCtx = createContext("en");
const useLang = () => useContext(LangCtx);

const TR = {
  en: {
    appVersion:"v1.2",
    navTrain:"Train", navStats:"Stats", navSetup:"Setup",
    trainTitle:"Training Session", trainSub:"Log your workout in real time",
    trainDate:"Date", trainView:"VIEW",
    trainActive:"● active",
    trainStartTimer:"▶ Start gym timer",
    timerPause:"⏸ Pause", timerResume:"▶ Resume", timerSave:"💾 Save",
    timerPaused:"Paused — tap Resume to continue",
    timerSavedTitle:"Timer saved", timerReset:"Reset",
    sessionInProgress:"SESSION IN PROGRESS",
    circuitsLabel:(n)=>`CIRCUITS (${n})`,
    templatesBtn:"Templates", newCircuitBtn:"+ New circuit",
    savedTemplatesTitle:"Saved templates",
    machinesRounds:(m,r)=>`${m} machines · ${r} rounds`,
    useBtn:"Use", repeatBtn:"🔁 Repeat this session",
    emptyCircuits:"Tap \"+ New circuit\" to start",
    machinesLabel:(n)=>`MACHINES (${n})`,
    addMachineBtn:"+ Add machine", cancelBtn:"✕ Cancel",
    emptyMachines:"Tap \"+ Add machine\" to start",
    saveSessionBtn:(c,m)=>`Save session${c?` · ${c} circuit${c!==1?"s":""}`:""} ${m?`· ${m} machine${m!==1?"s":""}`:""} `,
    sessionSaved:"✓ Session saved!",
    confirmSaveMsg:"Session done? Tap again to confirm.",
    circuitsView:"Circuits", circuitsViewSub:"View/add circuits",
    machinesView:"Machines", machinesViewSub:"View/add machines",
    newCircuitName:"New circuit",
    circuitNameLabel:"Circuit name", circuitNamePH:"e.g. Upper body A",
    roundsLabel:"Rounds",
    machinesInCircuit:"MACHINES IN CIRCUIT",
    addMachineToCircuit:"+ Add machine to circuit",
    circuitRoundsDone:"Circuit rounds completed",
    circuitRoundHint:(n)=>`1 round = all ${n} machine${n!==1?"s":""} once`,
    saveAsTemplate:"💾 Save as template", templateSavedBtn:"✓ Template saved!",
    weightKg:"Weight (kg)", setsLabel:"Sets", repsLabel:"Reps",
    seqCheckLabel:(r,d,s)=>`Sets (${r} reps each) — ${d}/${s}`,
    durationMin:"Duration (min)", distanceKm:"Distance (km)", calories:"Calories",
    repsPerRound:"Reps/round",
    addAMachine:"Add a machine",
    allTypes:"All types", weightType:"⚖️ Weight", cardioType:"🏃 Cardio",
    allCats:"All cats", noMachinesFilter:"No machines match this filter.",
    mixedSession:"Mixed session", circuitSession:"Circuit session", soloSession:"Machine by machine",
    noWeightRecorded:"no weight recorded",
    repsTotal:(r)=>`= ${r} total reps`,
    repsPerRoundLabel:"reps/round",
    newPR:"🏆 NEW PR!",
    restTimerTitle:"Rest timer",
    restTimerSkip:"Skip rest",
    machineChecked:"Done!",
    statsTitle:"Stats Dashboard", statsSub:"Your full training overview",
    tabOverview:"📊 Overview", tabMachines:"🏋️ Machines", tabSessions:"📅 Sessions",
    statTotal:"Total", statMonth:"Month", statWeek:"Week",
    statAvgDur:"Avg duration", statLongest:"Longest", statStreak:"Streak",
    statStreakSub:"days in a row",
    thisWeek:"THIS WEEK",
    sessionsByDay:"SESSIONS BY DAY (all time)",
    sessionsPerWeek:"SESSIONS PER WEEK",
    sessionsPerWeekSub:(avg)=>`Each bar = one week (Sun–Sat). Avg: ${avg}/week`,
    sessionDuration:"SESSION DURATION (min)",
    shortest:"Shortest:", avgLabel:"Avg:", longestLabel:"Longest:",
    totalGymTime:"Total gym time:",
    allMachinesLabel:"ALL MACHINES",
    notEnoughData:"Not enough data (need ≥2 sessions)",
    tapDot:"Tap any dot to see exact value and date",
    weightOverTime:"WEIGHT OVER TIME (kg)",
    weightStart:"Start:", weightLatest:"Latest:",
    repsPerSetTitle:"REPS PER SET OVER TIME",
    repsPerSetSub:"How many reps you do each set",
    repsMin:"Min:", repsMax:"Max:",
    setsPerSession:"SETS PER SESSION",
    setsPerSessionSub:"Number of sets each workout",
    volumePerSession:"VOLUME PER SESSION (sets × reps)",
    volumePerSessionSub:"Total reps done in each session — reflects overall workload",
    weightRepsTitle:"WEIGHT — + REPS/SET ╌╌",
    weightRepsSub:"Weight going up + reps stable = strength gain. Weight stable + reps going up = endurance gain.",
    weightVolTitle:"WEIGHT — + VOLUME ╌╌",
    weightVolSub:"Decrease weight but increase volume = progression through volume.",
    totalVolLifted:"Total volume lifted",
    durationOverTime:"DURATION OVER TIME (min)",
    distanceOverTime:"DISTANCE OVER TIME (km)",
    caloriesOverTime:"CALORIES BURNED OVER TIME",
    totalDistance:"Total distance",
    prLabel:"PR", avgWeight:"Avg weight", minWeight:"Min weight", totalSetsLabel:"Total sets",
    sessionsCount:(n)=>`${n} session${n!==1?"s":""}`,
    bestDistance:"Best distance",
    goalLabel:"Goal", goalProgress:"Progress toward goal",
    noGoal:"No goal set", setGoal:"Set a goal in Setup",
    consistency:"CONSISTENCY",
    bestWeek:"Best week", avgPerWeekLabel:"Avg per week", daysActive:"Days active", currentStreak:"Streak",
    allSessionsTitle:"ALL SESSIONS — tap to expand",
    tapForDetails:"tap →",
    setupTitle:"Equipment & Setup", setupSub:"Manage machines and categories",
    categoriesLabel:"CATEGORIES",
    newCatPH:"New category name", addCatBtn:"Add", newCatBtn:"+ New category",
    machinesSetupLabel:"MACHINES", addNewMachine:"+ Add new",
    circuitTemplatesLabel:"CIRCUIT TEMPLATES",
    dataLabel:"DATA",
    sessionHistory:"Session history",
    sessionsRecorded:(n)=>`${n} sessions recorded`,
    clearAll:"Clear all", confirmDeleteBtn:"⚠️ Confirm",
    confirmDeleteMsg:(n)=>`Permanently deletes all ${n} sessions. Tap "Confirm" again.`,
    newMachineTitle:"New machine", editMachineTitle:"Edit machine",
    machineNameLabel:"Machine name *", machineNamePH:"e.g. Leg Extension",
    typeLabel:"Type", typeDesc:"(determines what you track)",
    weightMachineLabel:"Weight machine", weightMachineSub:"tracks kg, sets, reps",
    cardioMachineLabel:"Cardio", cardioMachineSub:"tracks time, km, kcal",
    catsLabel:"Categories", catsDesc:"(muscle groups / workout type)",
    cardioTip:"Tip: \"Cardio\" category is optional for pure cardio equipment.",
    seatLabel:"Seat / pad settings", seatPH:"e.g. Seat: 3, Back pad: 4",
    photoLabel:"Machine photo", takePhoto:"📷 Take photo", changePhoto:"📷 Change photo",
    goalWeightLabel:"Goal weight (kg)", goalWeightPH:"e.g. 130",
    colorLabel:"Color",
    updateBtn:"Update", addMachineFormBtn:"Add machine",
    pickCategoryWarn:"Pick at least one category",
    editTplTitle:"Edit circuit template", addMachineToTpl:"+ Add machine", saveTplBtn:"Save template",
    restTimerSetup:"Rest timer (seconds)",
    reminderSetup:"Inactivity reminder (days)",
    reminderOff:"Off",
    reminderMsg:(d)=>`💪 You haven't trained in ${d} days — time to hit the gym!`,
  },
  fr: {
    appVersion:"v1.2",
    navTrain:"Entraîner", navStats:"Stats", navSetup:"Config",
    trainTitle:"Séance d'entraînement", trainSub:"Enregistrez votre séance en temps réel",
    trainDate:"Date", trainView:"VUE",
    trainActive:"● actif",
    trainStartTimer:"▶ Démarrer le chrono",
    timerPause:"⏸ Pause", timerResume:"▶ Reprendre", timerSave:"💾 Sauver",
    timerPaused:"En pause — appuyez sur Reprendre pour continuer",
    timerSavedTitle:"Chrono sauvegardé", timerReset:"Réinitialiser",
    sessionInProgress:"SÉANCE EN COURS",
    circuitsLabel:(n)=>`CIRCUITS (${n})`,
    templatesBtn:"Modèles", newCircuitBtn:"+ Nouveau circuit",
    savedTemplatesTitle:"Modèles sauvegardés",
    machinesRounds:(m,r)=>`${m} machines · ${r} tours`,
    useBtn:"Utiliser", repeatBtn:"🔁 Refaire cette séance",
    emptyCircuits:"Appuyez sur \"+ Nouveau circuit\" pour commencer",
    machinesLabel:(n)=>`MACHINES (${n})`,
    addMachineBtn:"+ Ajouter machine", cancelBtn:"✕ Annuler",
    emptyMachines:"Appuyez sur \"+ Ajouter machine\" pour commencer",
    saveSessionBtn:(c,m)=>`Sauver séance${c?` · ${c} circuit${c!==1?"s":""}`:""} ${m?`· ${m} machine${m!==1?"s":""}`:""} `,
    sessionSaved:"✓ Séance sauvegardée !",
    confirmSaveMsg:"Séance terminée ? Appuyez encore pour confirmer.",
    circuitsView:"Circuits", circuitsViewSub:"Voir/ajouter des circuits",
    machinesView:"Machines", machinesViewSub:"Voir/ajouter des machines",
    newCircuitName:"Nouveau circuit",
    circuitNameLabel:"Nom du circuit", circuitNamePH:"ex. Haut du corps A",
    roundsLabel:"Tours",
    machinesInCircuit:"MACHINES DU CIRCUIT",
    addMachineToCircuit:"+ Ajouter machine au circuit",
    circuitRoundsDone:"Tours du circuit complétés",
    circuitRoundHint:(n)=>`1 tour = toutes les ${n} machine${n!==1?"s":""} une fois`,
    saveAsTemplate:"💾 Sauver comme modèle", templateSavedBtn:"✓ Modèle sauvegardé !",
    weightKg:"Poids (kg)", setsLabel:"Séries", repsLabel:"Reps",
    seqCheckLabel:(r,d,s)=>`Séries (${r} reps chacune) — ${d}/${s}`,
    durationMin:"Durée (min)", distanceKm:"Distance (km)", calories:"Calories",
    repsPerRound:"Reps/tour",
    addAMachine:"Ajouter une machine",
    allTypes:"Tous types", weightType:"⚖️ Musculation", cardioType:"🏃 Cardio",
    allCats:"Toutes catégories", noMachinesFilter:"Aucune machine ne correspond.",
    mixedSession:"Séance mixte", circuitSession:"Séance en circuit", soloSession:"Machine par machine",
    noWeightRecorded:"pas de poids enregistré",
    repsTotal:(r)=>`= ${r} reps au total`,
    repsPerRoundLabel:"reps/tour",
    newPR:"🏆 NOUVEAU RECORD !",
    restTimerTitle:"Temps de repos",
    restTimerSkip:"Passer",
    machineChecked:"Fait !",
    statsTitle:"Tableau de bord", statsSub:"Vue complète de vos entraînements",
    tabOverview:"📊 Aperçu", tabMachines:"🏋️ Machines", tabSessions:"📅 Séances",
    statTotal:"Total", statMonth:"Mois", statWeek:"Semaine",
    statAvgDur:"Durée moy.", statLongest:"Plus longue", statStreak:"Série",
    statStreakSub:"jours consécutifs",
    thisWeek:"CETTE SEMAINE",
    sessionsByDay:"SÉANCES PAR JOUR (total)",
    sessionsPerWeek:"SÉANCES PAR SEMAINE",
    sessionsPerWeekSub:(avg)=>`Chaque barre = une semaine. Moy. : ${avg}/semaine`,
    sessionDuration:"DURÉE DES SÉANCES (min)",
    shortest:"Plus courte :", avgLabel:"Moy. :", longestLabel:"Plus longue :",
    totalGymTime:"Temps total à la salle :",
    allMachinesLabel:"TOUTES LES MACHINES",
    notEnoughData:"Pas assez de données (besoin ≥2 séances)",
    tapDot:"Appuyez sur un point pour voir la valeur et la date",
    weightOverTime:"POIDS AU FIL DU TEMPS (kg)",
    weightStart:"Début :", weightLatest:"Dernier :",
    repsPerSetTitle:"REPS PAR SÉRIE AU FIL DU TEMPS",
    repsPerSetSub:"Combien de reps vous faites par série",
    repsMin:"Min :", repsMax:"Max :",
    setsPerSession:"SÉRIES PAR SÉANCE",
    setsPerSessionSub:"Nombre de séries par entraînement",
    volumePerSession:"VOLUME PAR SÉANCE (séries × reps)",
    volumePerSessionSub:"Total des reps — reflète la charge globale",
    weightRepsTitle:"POIDS — + REPS/SÉRIE ╌╌",
    weightRepsSub:"Poids en hausse + reps stables = gain de force. Poids stable + reps en hausse = endurance.",
    weightVolTitle:"POIDS — + VOLUME ╌╌",
    weightVolSub:"Diminuer le poids + augmenter le volume = progression par volume.",
    totalVolLifted:"Volume total soulevé",
    durationOverTime:"DURÉE AU FIL DU TEMPS (min)",
    distanceOverTime:"DISTANCE AU FIL DU TEMPS (km)",
    caloriesOverTime:"CALORIES BRÛLÉES AU FIL DU TEMPS",
    totalDistance:"Distance totale",
    prLabel:"Record", avgWeight:"Poids moy.", minWeight:"Poids min.", totalSetsLabel:"Séries totales",
    sessionsCount:(n)=>`${n} séance${n!==1?"s":""}`,
    bestDistance:"Meilleure distance",
    goalLabel:"Objectif", goalProgress:"Progression vers l'objectif",
    noGoal:"Pas d'objectif", setGoal:"Définir dans Config",
    consistency:"RÉGULARITÉ",
    bestWeek:"Meilleure semaine", avgPerWeekLabel:"Moy. par semaine", daysActive:"Jours actifs", currentStreak:"Série actuelle",
    allSessionsTitle:"TOUTES LES SÉANCES — appuyer pour détails",
    tapForDetails:"→",
    setupTitle:"Équipement & Config.", setupSub:"Gérez vos machines et catégories",
    categoriesLabel:"CATÉGORIES",
    newCatPH:"Nom de la nouvelle catégorie", addCatBtn:"Ajouter", newCatBtn:"+ Nouvelle catégorie",
    machinesSetupLabel:"MACHINES", addNewMachine:"+ Ajouter",
    circuitTemplatesLabel:"MODÈLES DE CIRCUITS",
    dataLabel:"DONNÉES",
    sessionHistory:"Historique des séances",
    sessionsRecorded:(n)=>`${n} séance${n!==1?"s":""} enregistrée${n!==1?"s":""}`,
    clearAll:"Tout supprimer", confirmDeleteBtn:"⚠️ Confirmer",
    confirmDeleteMsg:(n)=>`Supprime définitivement les ${n} séances. Appuyez encore.`,
    newMachineTitle:"Nouvelle machine", editMachineTitle:"Modifier la machine",
    machineNameLabel:"Nom de la machine *", machineNamePH:"ex. Presse jambes",
    typeLabel:"Type", typeDesc:"(détermine ce que vous suivez)",
    weightMachineLabel:"Musculation", weightMachineSub:"suit kg, séries, reps",
    cardioMachineLabel:"Cardio", cardioMachineSub:"suit temps, km, kcal",
    catsLabel:"Catégories", catsDesc:"(groupes musculaires / type)",
    cardioTip:"Astuce : la catégorie \"Cardio\" est facultative pour les appareils cardio purs.",
    seatLabel:"Réglages siège / appui", seatPH:"ex. Siège : 3, Appui dos : 4",
    photoLabel:"Photo de la machine", takePhoto:"📷 Prendre une photo", changePhoto:"📷 Changer la photo",
    goalWeightLabel:"Objectif de poids (kg)", goalWeightPH:"ex. 130",
    colorLabel:"Couleur",
    updateBtn:"Mettre à jour", addMachineFormBtn:"Ajouter machine",
    pickCategoryWarn:"Sélectionnez au moins une catégorie",
    editTplTitle:"Modifier le modèle de circuit", addMachineToTpl:"+ Ajouter machine", saveTplBtn:"Sauver le modèle",
    restTimerSetup:"Timer de repos (secondes)",
    reminderSetup:"Rappel d'inactivité (jours)",
    reminderOff:"Désactivé",
    reminderMsg:(d)=>`💪 Tu n'as pas été à la salle depuis ${d} jours — c'est l'heure !`,
  },
};

// ─── Palette ───────────────────────────────────────────────────────────────────
const C = {
  bg:"#0d0e10", bg2:"#15171a", card:"#21252b",
  border:"#2c3038", accent:"#f97316", accentDim:"#7c3a0d",
  text:"#e8eaed", muted:"#7a8292", success:"#22c55e", danger:"#ef4444",
  blue:"#3b82f6", purple:"#a855f7", teal:"#14b8a6", yellow:"#eab308",
};

const KEY = "gymtracker_v7";
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)||"null"); } catch { return null; } };
const save = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} };

// Session-in-progress context — makes the live timer available everywhere
const SessionCtx = createContext(null);

const defaultData = () => ({
  machines: [
    { id:"m1", name:"Chest Press",    machineType:"weight", categories:["Push","Chest"],     notes:"Seat: 3, Back: 4",     color:"#ef4444", goalWeight:null, photo:null },
    { id:"m2", name:"Lat Pulldown",   machineType:"weight", categories:["Pull","Back"],      notes:"Seat: 2, Knee pad: 5", color:"#3b82f6", goalWeight:null, photo:null },
    { id:"m3", name:"Leg Press",      machineType:"weight", categories:["Legs"],             notes:"Seat: position 2",     color:"#22c55e", goalWeight:null, photo:null },
    { id:"m4", name:"Shoulder Press", machineType:"weight", categories:["Push","Shoulders"], notes:"Seat: 3",              color:"#a855f7", goalWeight:null, photo:null },
    { id:"m5", name:"Cable Row",      machineType:"weight", categories:["Pull","Back"],      notes:"Chest pad: 4",         color:"#f97316", goalWeight:null, photo:null },
    { id:"m6", name:"Treadmill",      machineType:"cardio", categories:["Cardio"],           notes:"",                     color:"#14b8a6", goalWeight:null, photo:null },
    { id:"m7", name:"Stationary Bike",machineType:"cardio", categories:["Cardio","Legs"],    notes:"",                     color:"#eab308", goalWeight:null, photo:null },
  ],
  categories: ["Push","Pull","Legs","Core","Chest","Back","Shoulders","Arms","Cardio","Other"],
  savedCircuits: [],
  sessions: [],
  settings: { restTimerSecs: 90, reminderDays: 3 },
});

const uid = () => Math.random().toString(36).slice(2,10);
const fmtDur  = (s) => { if(!s&&s!==0) return "—"; const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60; return h>0?`${h}h ${m}m`:m>0?`${m}m ${sec}s`:`${sec}s`; };
const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});
const fmtDateShort = (d) => { const dt=new Date(d); return `${String(dt.getDate()).padStart(2,"0")}/${String(dt.getMonth()+1).padStart(2,"0")}`; };
const todayStr = () => new Date().toISOString().slice(0,10);
const startOfWeekMs = () => { const d=new Date(); d.setDate(d.getDate()-d.getDay()); d.setHours(0,0,0,0); return d.getTime(); };
const getCats = (m) => Array.isArray(m?.categories) ? m.categories : (m?.category ? [m.category] : []);

// ─── Shared UI ─────────────────────────────────────────────────────────────────
const Btn = ({ children, onClick, variant="primary", small, style, disabled }) => {
  const base = { border:"none", borderRadius:8, cursor:disabled?"default":"pointer", fontWeight:600,
    fontFamily:"inherit", transition:"all .15s", padding:small?"6px 12px":"10px 20px",
    fontSize:small?12:14, opacity:disabled?.4:1, lineHeight:"1.2" };
  const vs = {
    primary:{ background:C.accent, color:"#fff" }, ghost:{ background:"transparent", color:C.muted, border:`1px solid ${C.border}` },
    danger:{ background:C.danger, color:"#fff" }, success:{ background:C.success, color:"#0a0a0a" },
    outline:{ background:"transparent", border:`1px solid ${C.accent}`, color:C.accent },
    purple:{ background:C.purple, color:"#fff" }, teal:{ background:C.teal, color:"#fff" },
    yellow:{ background:C.yellow, color:"#0a0a0a" },
  };
  return <button disabled={disabled} onClick={onClick} style={{...base,...vs[variant],...style}}>{children}</button>;
};

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{ background:C.card, borderRadius:12, border:`1px solid ${C.border}`,
    padding:16, cursor:onClick?"pointer":undefined, ...style }}>{children}</div>
);

const Input = ({ value, onChange, placeholder, type="text", style }) => (
  <input type={type} value={value} min={type==="number"?"0":undefined}
    onChange={e=>{ const v=e.target.value; onChange(type==="number"&&v!==""&&+v<0?"0":v); }}
    placeholder={placeholder}
    style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text,
      padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none", ...style }} />
);

const SecLabel = ({ children, style }) => (
  <div style={{ fontSize:11, fontWeight:700, color:C.muted, letterSpacing:"0.07em", margin:"18px 0 8px", ...style }}>{children}</div>
);

const CatBadge = ({ cat }) => (
  <span style={{ background:C.bg2, border:`1px solid ${C.border}`, color:C.muted, borderRadius:5, padding:"1px 7px", fontSize:10, fontWeight:600 }}>{cat}</span>
);

const TypeBadge = ({ type }) => {
  if (type==="cardio") return <span style={{background:C.teal+"22",border:`1px solid ${C.teal}44`,color:C.teal,borderRadius:5,padding:"1px 7px",fontSize:10,fontWeight:700}}>CARDIO</span>;
  if (type==="weight") return <span style={{background:C.accent+"22",border:`1px solid ${C.accent}44`,color:C.accent,borderRadius:5,padding:"1px 7px",fontSize:10,fontWeight:700}}>WEIGHT</span>;
  return null;
};

// ─── Rest Timer overlay ───────────────────────────────────────────────────────
const RestTimer = ({ seconds, onDone, T }) => {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) { onDone(); return; }
    const iv = setInterval(() => setLeft(l => { if (l<=1){clearInterval(iv);onDone();return 0;} return l-1; }), 1000);
    return () => clearInterval(iv);
  }, []);
  const pct = (left / seconds) * 100;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onDone}>
      <div style={{background:C.card,borderRadius:20,padding:"32px 40px",textAlign:"center",minWidth:200}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:13,fontWeight:700,color:C.muted,marginBottom:12,letterSpacing:"0.06em"}}>{T.restTimerTitle.toUpperCase()}</div>
        <svg width="120" height="120" viewBox="0 0 120 120" style={{display:"block",margin:"0 auto 16px"}}>
          <circle cx="60" cy="60" r="52" fill="none" stroke={C.border} strokeWidth="8"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke={C.accent} strokeWidth="8"
            strokeDasharray={`${2*Math.PI*52}`}
            strokeDashoffset={`${2*Math.PI*52*(1-pct/100)}`}
            strokeLinecap="round" transform="rotate(-90 60 60)"
            style={{transition:"stroke-dashoffset .9s linear"}}/>
          <text x="60" y="67" textAnchor="middle" fill={C.text} fontSize="32" fontWeight="800" fontFamily="monospace">{left}</text>
        </svg>
        <Btn small variant="ghost" onClick={onDone}>{T.restTimerSkip}</Btn>
      </div>
    </div>
  );
};

// ─── Session banner (visible on all pages when session active) ─────────────────
const SessionBanner = ({ T, lang }) => {
  const ctx = useContext(SessionCtx);
  const [elapsed, setElapsed] = useState(ctx?.elapsedRef?.current || 0);
  useEffect(() => {
    if (!ctx?.active) return;
    const iv = setInterval(() => setElapsed(ctx.elapsedRef.current), 1000);
    return () => clearInterval(iv);
  }, [ctx?.active]);
  if (!ctx?.active) return null;
  const h=Math.floor(elapsed/3600),m=Math.floor((elapsed%3600)/60),s=elapsed%60;
  return (
    <div style={{background:C.accent,padding:"6px 14px",display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:8,height:8,borderRadius:"50%",background:"#fff",animation:"pulse 1s infinite"}}/>
      <span style={{fontSize:12,fontWeight:700,color:"#fff",flex:1}}>{T.sessionInProgress}</span>
      <span style={{fontFamily:"monospace",fontSize:14,fontWeight:800,color:"#fff"}}>
        {h>0&&`${String(h).padStart(2,"0")}:`}{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}
      </span>
    </div>
  );
};

// ─── Inactivity reminder banner ───────────────────────────────────────────────
const InactivityBanner = ({ sessions, settings, T, lang }) => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  const days = settings?.reminderDays || 0;
  if (!days) return null;
  const lastDate = sessions.length ? sessions[sessions.length-1].date : null;
  if (!lastDate) return null;
  const daysSince = Math.floor((new Date() - new Date(lastDate)) / 86400000);
  if (daysSince < days) return null;
  return (
    <div style={{background:C.purple+"22",border:`1px solid ${C.purple}44`,borderRadius:10,padding:"10px 14px",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
      <span style={{fontSize:20}}>💪</span>
      <div style={{flex:1,fontSize:13,color:C.text}}>{T.reminderMsg(daysSince)}</div>
      <span onClick={()=>setDismissed(true)} style={{color:C.muted,cursor:"pointer",fontSize:16}}>✕</span>
    </div>
  );
};

// ─── Charts ───────────────────────────────────────────────────────────────────
const LineChart = ({ points, labels, color=C.accent, height=52, unit="" }) => {
  const [tip, setTip] = useState(null);
  const T = TR[useLang()];
  if (!points||points.length<2) return <div style={{height,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted,fontSize:11}}>{T.notEnoughData}</div>;
  const W=280, H=height, PAD=28;
  const valid=points.filter(v=>v!=null&&v!==0&&!isNaN(v));
  if (!valid.length) return null;
  const mx=Math.max(...valid), mn=Math.min(...valid), yMid=(mx+mn)/2;
  const px=i=>PAD+(i/(points.length-1))*(W-PAD*2);
  const py=v=>H-8-((v-mn)/(mx-mn||1))*(H-16);
  const d=points.map((v,i)=>`${i===0?"M":"L"}${px(i).toFixed(1)},${py(v||mn).toFixed(1)}`).join(" ");
  return (
    <div style={{position:"relative",userSelect:"none"}} onClick={()=>setTip(null)}>
      <div style={{position:"absolute",left:0,top:0,height:H,display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none",width:PAD-4}}>
        <span style={{fontSize:8,color:C.muted,lineHeight:"10px",textAlign:"right"}}>{mx%1===0?mx:mx.toFixed(1)}{unit}</span>
        <span style={{fontSize:8,color:C.muted,lineHeight:"10px",textAlign:"right"}}>{yMid%1===0?Math.round(yMid):yMid.toFixed(1)}{unit}</span>
        <span style={{fontSize:8,color:C.muted,lineHeight:"10px",textAlign:"right"}}>{mn%1===0?mn:mn.toFixed(1)}{unit}</span>
      </div>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{overflow:"visible",display:"block"}}>
        {[mx,yMid,mn].map((v,i)=><line key={i} x1={PAD} x2={W-PAD} y1={py(v)} y2={py(v)} stroke={C.border} strokeWidth="0.5" strokeDasharray="3,3"/>)}
        <path d={`${d} L${px(points.length-1)},${H} L${PAD},${H} Z`} fill={color} fillOpacity="0.08"/>
        <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {points.map((v,i)=>(
          <circle key={i} cx={px(i)} cy={py(v||mn)} r={tip?.i===i?6:4}
            fill={tip?.i===i?"#fff":C.card} stroke={color} strokeWidth="2" style={{cursor:"pointer"}}
            onClick={e=>{e.stopPropagation();setTip(tip?.i===i?null:{i,v,label:labels?.[i]||"",x:px(i),y:py(v||mn)});}}/>
        ))}
      </svg>
      {tip&&(
        <div style={{position:"absolute",background:C.bg,border:`1.5px solid ${color}`,borderRadius:8,
          padding:"5px 12px",fontSize:12,color:C.text,pointerEvents:"none",zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),75)}%`,top:Math.max(tip.y-36,0),
          transform:"translateX(-50%)",whiteSpace:"nowrap",boxShadow:"0 4px 16px rgba(0,0,0,.6)"}}>
          <span style={{fontWeight:800,color}}>{tip.v!=null?tip.v:""}{unit}</span>
          {tip.label&&<span style={{color:C.muted,marginLeft:6,fontSize:11}}>{tip.label}</span>}
        </div>
      )}
      {labels&&labels.length>=2&&(
        <div style={{display:"flex",justifyContent:"space-between",marginTop:2,paddingLeft:PAD,paddingRight:PAD}}>
          <span style={{fontSize:8,color:C.muted}}>{labels[0]}</span>
          {labels.length>2&&<span style={{fontSize:8,color:C.muted}}>{labels[Math.floor(labels.length/2)]}</span>}
          <span style={{fontSize:8,color:C.muted}}>{labels[labels.length-1]}</span>
        </div>
      )}
    </div>
  );
};

const DualLineChart = ({ aPoints, bPoints, aColor, bColor=C.blue, aUnit="", bUnit="", height=60, aLabel="", bLabel="" }) => {
  const [tip, setTip] = useState(null);
  const n=Math.max(aPoints.length,bPoints.length);
  if (n<2) return null;
  const W=280, H=height, PAD=28;
  const mkS=pts=>{ const v=pts.filter(x=>x>0); return v.length?{mx:Math.max(...v),mn:Math.min(...v)}:{mx:1,mn:0}; };
  const aS=mkS(aPoints), bS=mkS(bPoints);
  const pxA=i=>PAD+(i/(aPoints.length-1))*(W-PAD*2);
  const pxB=i=>PAD+(i/(bPoints.length-1))*(W-PAD*2);
  const pyA=v=>H-8-((v-aS.mn)/(aS.mx-aS.mn||1))*(H-16);
  const pyB=v=>H-8-((v-bS.mn)/(bS.mx-bS.mn||1))*(H-16);
  const dA=aPoints.map((v,i)=>`${i===0?"M":"L"}${pxA(i).toFixed(1)},${pyA(v||0).toFixed(1)}`).join(" ");
  const dB=bPoints.map((v,i)=>`${i===0?"M":"L"}${pxB(i).toFixed(1)},${pyB(v||0).toFixed(1)}`).join(" ");
  return (
    <div style={{position:"relative",userSelect:"none"}} onClick={()=>setTip(null)}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{overflow:"visible",display:"block"}}>
        <path d={dA} fill="none" stroke={aColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d={dB} fill="none" stroke={bColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5,3"/>
        {aPoints.map((v,i)=>(<circle key={"a"+i} cx={pxA(i)} cy={pyA(v||0)} r={tip?.s==="a"&&tip?.i===i?6:4} fill={C.card} stroke={aColor} strokeWidth="2" style={{cursor:"pointer"}} onClick={e=>{e.stopPropagation();setTip(tip?.s==="a"&&tip?.i===i?null:{s:"a",i,v,x:pxA(i),y:pyA(v||0)});}}/>))}
        {bPoints.map((v,i)=>(<circle key={"b"+i} cx={pxB(i)} cy={pyB(v||0)} r={tip?.s==="b"&&tip?.i===i?5:3} fill={C.card} stroke={bColor} strokeWidth="2" style={{cursor:"pointer"}} onClick={e=>{e.stopPropagation();setTip(tip?.s==="b"&&tip?.i===i?null:{s:"b",i,v,x:pxB(i),y:pyB(v||0)});}}/>))}
      </svg>
      {tip&&(
        <div style={{position:"absolute",background:C.bg,border:`1.5px solid ${tip.s==="a"?aColor:bColor}`,borderRadius:8,
          padding:"5px 12px",fontSize:12,color:C.text,pointerEvents:"none",zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),75)}%`,top:Math.max(tip.y-36,0),
          transform:"translateX(-50%)",whiteSpace:"nowrap",boxShadow:"0 4px 16px rgba(0,0,0,.6)"}}>
          <span style={{fontWeight:800,color:tip.s==="a"?aColor:bColor}}>{tip.v}{tip.s==="a"?aUnit:bUnit}</span>
          <span style={{color:C.muted,marginLeft:5,fontSize:11}}>{tip.s==="a"?aLabel:bLabel}</span>
        </div>
      )}
    </div>
  );
};

const BarChart = ({ data:cd, color=C.accent, height=50 }) => {
  const max=Math.max(...cd.map(d=>d.value),1);
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:3,height:height+28}}>
      {cd.map((d,i)=>(
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
          <div style={{fontSize:9,color:C.muted,height:12,lineHeight:"12px"}}>{d.value>0?d.value:""}</div>
          <div style={{width:"100%",background:d.highlight?C.accent:color,borderRadius:"3px 3px 0 0",height:Math.max(2,(d.value/max)*height),transition:"height .4s"}}/>
          <div style={{fontSize:9,color:d.highlight?C.accent:C.muted,textAlign:"center",fontWeight:d.highlight?700:400}}>{d.label}</div>
        </div>
      ))}
    </div>
  );
};

// ─── Gym Timer ────────────────────────────────────────────────────────────────
const GymTimer = ({ elapsedRef, onSave, T }) => {
  const [elapsed, setElapsed] = useState(elapsedRef?.current||0);
  const [running, setRunning] = useState(true);
  const [saved,   setSaved]   = useState(false);
  const offsetRef = useRef(elapsedRef?.current||0), startRef = useRef(Date.now());
  useEffect(() => {
    if (!running) return;
    const iv=setInterval(()=>{ const v=offsetRef.current+Math.floor((Date.now()-startRef.current)/1000); setElapsed(v); if(elapsedRef) elapsedRef.current=v; },1000);
    return ()=>clearInterval(iv);
  }, [running]);
  const togglePause=()=>{ if(running){offsetRef.current=elapsed;}else{startRef.current=Date.now();} setRunning(r=>!r); };
  const handleSave=()=>{ setSaved(true); onSave(elapsed); };
  const h=Math.floor(elapsed/3600),m=Math.floor((elapsed%3600)/60),s=elapsed%60;
  return (
    <div style={{background:C.bg2,borderRadius:10,padding:"10px 14px",marginBottom:14,border:`1px solid ${running?C.success+"55":C.border}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:8,height:8,borderRadius:"50%",flexShrink:0,background:running?C.success:C.yellow}}/>
        <div style={{fontFamily:"monospace",fontSize:22,fontWeight:800,color:C.accent,letterSpacing:2}}>
          {h>0&&`${String(h).padStart(2,"0")}:`}{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}
        </div>
        <div style={{flex:1}}/>
        <Btn small variant={running?"ghost":"outline"} onClick={togglePause}>{running?T.timerPause:T.timerResume}</Btn>
        {!saved?<Btn small variant="success" onClick={handleSave}>{T.timerSave}</Btn>
          :<span style={{fontSize:12,color:C.success,fontWeight:700}}>✓ {fmtDur(elapsed)}</span>}
      </div>
      {!running&&<div style={{fontSize:11,color:C.yellow,marginTop:5}}>{T.timerPaused}</div>}
    </div>
  );
};

// ─── Sequential checkboxes (solo sets) ────────────────────────────────────────
const SeqCheck = ({ count, done, onToggle, label, color=C.accent }) => {
  const checked=done.filter(Boolean).length;
  const handleClick=(i)=>{ if(done[i]){if(i===checked-1)onToggle(i);}else{if(i===checked)onToggle(i);} };
  return (
    <div>
      <div style={{fontSize:11,color:C.muted,marginBottom:5}}>{label}</div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
        {Array.from({length:count},(_,i)=>{
          const isOn=!!done[i],isNext=i===checked,isLast=i===checked-1,inter=isOn?isLast:isNext;
          return (
            <div key={i} onClick={()=>handleClick(i)}
              style={{width:32,height:32,borderRadius:7,cursor:inter?"pointer":"default",
                border:`2px solid ${isOn?color:inter?color+"66":C.border}`,
                background:isOn?color:inter?color+"18":"transparent",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:12,color:isOn?"#fff":inter?color:C.muted,fontWeight:700,transition:"all .15s",opacity:inter||isOn?1:.4}}>
              {i+1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Type filter pills ────────────────────────────────────────────────────────
const TypeFilter = ({ value, onChange, T, small=false }) => (
  <div style={{display:"flex",gap:5}}>
    {[{v:null,label:T.allTypes},{v:"weight",label:T.weightType},{v:"cardio",label:T.cardioType}].map(({v,label})=>{
      const isActive=v===null?value===null:value===v;
      return (
        <span key={String(v)} onClick={()=>onChange(value===v?null:v)}
          style={{padding:small?"3px 9px":"5px 14px",borderRadius:18,cursor:"pointer",fontSize:small?11:12,fontWeight:600,
            border:`${small?"1.5":"2"}px solid ${isActive?C.accent:C.border}`,
            background:isActive?C.accent+"22":"transparent",color:isActive?C.accent:C.muted,transition:"all .15s"}}>
          {label}
        </span>
      );
    })}
  </div>
);

// ─── Machine picker ───────────────────────────────────────────────────────────
const MachinePicker = ({ machines, exclude=[], onPick, onClose, categories=[], savedCircuits=[], T }) => {
  const [catFilter,  setCatFilter]  = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [tplFilter,  setTplFilter]  = useState(null);
  let available=machines.filter(m=>!exclude.includes(m.id));
  if (typeFilter) available=available.filter(m=>m.machineType===typeFilter);
  if (catFilter)  available=available.filter(m=>getCats(m).includes(catFilter));
  if (tplFilter)  available=available.filter(m=>{const sc=savedCircuits.find(c=>c.id===tplFilter);return sc?sc.machineIds.includes(m.id):true;});
  return (
    <Card style={{border:`1px solid ${C.accent}`,marginBottom:12}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div style={{fontSize:13,fontWeight:700,color:C.text}}>{T.addAMachine}</div>
        <span onClick={onClose} style={{color:C.muted,cursor:"pointer",fontSize:18}}>✕</span>
      </div>
      <div style={{marginBottom:6}}><TypeFilter value={typeFilter} onChange={setTypeFilter} T={T} small/></div>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
        <span onClick={()=>{setCatFilter(null);setTplFilter(null);}} style={{padding:"3px 9px",borderRadius:12,cursor:"pointer",fontSize:11,fontWeight:600,border:`1.5px solid ${!catFilter&&!tplFilter?C.blue:C.border}`,color:!catFilter&&!tplFilter?C.blue:C.muted}}>{T.allCats}</span>
        {categories.map(c=>(<span key={c} onClick={()=>{setCatFilter(catFilter===c?null:c);setTplFilter(null);}} style={{padding:"3px 9px",borderRadius:12,cursor:"pointer",fontSize:11,fontWeight:600,border:`1.5px solid ${catFilter===c?C.blue:C.border}`,color:catFilter===c?C.blue:C.muted}}>{c}</span>))}
        {savedCircuits.map(sc=>(<span key={sc.id} onClick={()=>{setTplFilter(tplFilter===sc.id?null:sc.id);setCatFilter(null);}} style={{padding:"3px 9px",borderRadius:12,cursor:"pointer",fontSize:11,fontWeight:600,border:`1.5px solid ${tplFilter===sc.id?C.teal:C.border}`,color:tplFilter===sc.id?C.teal:C.muted}}>📋 {sc.name}</span>))}
      </div>
      {available.length===0 ? <div style={{color:C.muted,fontSize:13}}>{T.noMachinesFilter}</div>
        : <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
            {available.map(m=>(<div key={m.id} onClick={()=>{onPick(m.id);onClose();}} style={{padding:"7px 14px",borderRadius:20,cursor:"pointer",border:`2px solid ${m.color}`,background:m.color+"22",color:m.color,fontWeight:600,fontSize:13}}>{m.name}</div>))}
          </div>}
    </Card>
  );
};

// ─── PR flash badge ───────────────────────────────────────────────────────────
const PRFlash = ({ show, T }) => {
  if (!show) return null;
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:4,background:C.yellow,borderRadius:8,padding:"3px 10px",fontSize:12,fontWeight:800,color:"#0a0a0a",animation:"prPop .4s ease"}}>
      {T.newPR}
    </div>
  );
};

// ─── Solo machine block ───────────────────────────────────────────────────────
const SoloMachineBlock = ({ machine, data, onUpdate, onRemove, T, restSecs, sessions }) => {
  const [open,   setOpen]   = useState(true);
  const [weight, setWeight] = useState(data.weight||"");
  const [sets,   setSets]   = useState(data.sets||3);
  const [reps,   setReps]   = useState(data.reps||12);
  const [done,   setDone]   = useState(data.done||[]);
  const [durMin, setDurMin] = useState(data.durMin||"");
  const [km,     setKm]     = useState(data.km||"");
  const [kcal,   setKcal]   = useState(data.kcal||"");
  const [showRest, setShowRest] = useState(false);
  const isCardio = machine.machineType==="cardio";
  const push = (patch) => onUpdate(isCardio?{durMin,km,kcal,...patch}:{weight,sets,reps,done,...patch});
  const clamp = (v) => v===""?"":String(Math.max(0,+v));

  // PR detection
  const allEx = (sessions||[]).flatMap(s=>(s.exercises||[]).flatMap(ex=>{
    if(ex.type==="solo"&&ex.machineId===machine.id) return [ex];
    if(ex.type==="circuit"&&(ex.machineIds||[]).includes(machine.id)) return [{weight:ex.machineData?.[machine.id]?.weight}];
    return [];
  }));
  const prWeight = allEx.map(e=>parseFloat(e.weight)).filter(v=>v>0).reduce((a,b)=>Math.max(a,b),0);
  const isNewPR = !!weight && parseFloat(weight) > prWeight && prWeight > 0;

  const toggleDone=(i)=>{
    const n=Array.from({length:sets},(_,j)=>j<done.length?!!done[j]:false);
    n[i]=!n[i]; setDone(n); push({done:n});
    if (!n[i]) return; // unchecking — no rest timer
    if (restSecs > 0) setShowRest(true);
  };
  const allDone = isCardio?(!!durMin||!!km):done.filter(Boolean).length>=sets&&sets>0;

  return (
    <>
      {showRest&&<RestTimer seconds={restSecs} onDone={()=>setShowRest(false)} T={T}/>}
      <Card style={{marginBottom:10,borderLeft:`3px solid ${machine.color}`}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div onClick={()=>setOpen(o=>!o)} style={{flex:1,cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:10,height:10,borderRadius:"50%",flexShrink:0,background:allDone?C.success:machine.color}}/>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                <span style={{fontWeight:700,fontSize:15,color:C.text}}>{machine.name}</span>
                <TypeBadge type={machine.machineType}/>
                {isNewPR&&<PRFlash show T={T}/>}
              </div>
              {machine.notes&&<div style={{fontSize:11,color:C.muted}}>{machine.notes}</div>}
            </div>
          </div>
          <div style={{display:"flex",gap:5,alignItems:"center"}}>
            {getCats(machine).map(c=><CatBadge key={c} cat={c}/>)}
            <span onClick={()=>setOpen(o=>!o)} style={{color:C.muted,cursor:"pointer",fontSize:12}}>{open?"▲":"▼"}</span>
            <span onClick={onRemove} style={{color:C.danger,cursor:"pointer",fontSize:14}}>✕</span>
          </div>
        </div>
        {open&&(
          <div style={{marginTop:12,borderTop:`1px solid ${C.border}`,paddingTop:12}}>
            {machine.photo&&<img src={machine.photo} alt="" style={{width:"100%",borderRadius:8,marginBottom:10,maxHeight:120,objectFit:"cover"}}/>}
            {isCardio?(
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <div style={{flex:1,minWidth:70}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.durationMin}</div>
                  <Input value={durMin} onChange={v=>{const s=clamp(v);setDurMin(s);push({durMin:s});}} type="number" placeholder="min"/></div>
                <div style={{flex:1,minWidth:70}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.distanceKm}</div>
                  <Input value={km} onChange={v=>{const s=clamp(v);setKm(s);push({km:s});}} type="number" placeholder="km"/></div>
                <div style={{flex:1,minWidth:70}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.calories}</div>
                  <Input value={kcal} onChange={v=>{const s=clamp(v);setKcal(s);push({kcal:s});}} type="number" placeholder="kcal"/></div>
              </div>
            ):(
              <>
                <div style={{display:"flex",gap:8,marginBottom:14}}>
                  <div style={{flex:2}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.weightKg}</div>
                    <Input value={weight} onChange={v=>{const s=clamp(v);setWeight(s);push({weight:s});}} type="number" placeholder="kg"/></div>
                  <div style={{flex:1}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.setsLabel}</div>
                    <Input value={sets} onChange={v=>{const n=Math.max(1,+v);setSets(n);setDone([]);push({sets:n,done:[]});}} type="number"/></div>
                  <div style={{flex:1}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.repsLabel}</div>
                    <Input value={reps} onChange={v=>{const n=Math.max(1,+v);setReps(n);push({reps:n});}} type="number"/></div>
                </div>
                <SeqCheck count={sets} done={done} onToggle={toggleDone} label={T.seqCheckLabel(reps,done.filter(Boolean).length,sets)} color={machine.color}/>
              </>
            )}
          </div>
        )}
      </Card>
    </>
  );
};

// ─── Circuit machine row (with free checkbox + drag handle) ──────────────────
const CircuitMachineRow = ({ machine, data, onUpdate, onRemove, T, restSecs, onDragStart, onDragOver, onDrop, dragOver }) => {
  const isCardio = machine.machineType==="cardio";
  const [weight, setWeight] = useState(data.weight||"");
  const [reps,   setReps]   = useState(data.reps||12);
  const [durMin, setDurMin] = useState(data.durMin||"");
  const [km,     setKm]     = useState(data.km||"");
  const [checked,setChecked]= useState(data.checked||false);
  const [showRest,setShowRest]=useState(false);
  const push=(patch)=>onUpdate(isCardio?{durMin,km,checked,...patch}:{weight,reps,checked,...patch});
  const clamp=(v)=>v===""?"":String(Math.max(0,+v));

  const handleCheck=()=>{
    const next=!checked; setChecked(next); push({checked:next});
    if (next && restSecs>0) setShowRest(true);
  };

  return (
    <>
      {showRest&&<RestTimer seconds={restSecs} onDone={()=>setShowRest(false)} T={T}/>}
      <div
        draggable
        onDragStart={onDragStart}
        onDragOver={e=>{e.preventDefault();onDragOver();}}
        onDrop={onDrop}
        style={{background:C.bg2,borderRadius:9,border:`1px solid ${dragOver?C.accent:C.border}`,
          borderLeft:`3px solid ${machine.color}`,padding:"10px 12px",marginBottom:7,
          transition:"border-color .15s",opacity:checked?.6:1}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          {/* Drag handle */}
          <span style={{color:C.muted,cursor:"grab",fontSize:14,flexShrink:0}}>⠿</span>
          {/* Free checkbox */}
          <div onClick={handleCheck}
            style={{width:22,height:22,borderRadius:6,flexShrink:0,cursor:"pointer",
              border:`2px solid ${checked?C.success:machine.color}`,
              background:checked?C.success:"transparent",
              display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s"}}>
            {checked&&<span style={{color:"#0a0a0a",fontSize:12,fontWeight:800}}>✓</span>}
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
              <span style={{fontWeight:700,fontSize:14,color:checked?C.muted:C.text,textDecoration:checked?"line-through":"none"}}>{machine.name}</span>
              <TypeBadge type={machine.machineType}/>
              {getCats(machine).map(c=><CatBadge key={c} cat={c}/>)}
            </div>
            {machine.notes&&<div style={{fontSize:11,color:C.muted,marginTop:2}}>{machine.notes}</div>}
          </div>
          <span onClick={onRemove} style={{color:C.danger,cursor:"pointer",fontSize:13}}>✕</span>
        </div>
        {!checked&&(
          <div style={{display:"flex",gap:8,marginTop:10}}>
            {isCardio?<>
              <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.durationMin}</div>
                <Input value={durMin} onChange={v=>{const s=clamp(v);setDurMin(s);push({durMin:s});}} type="number" placeholder="min"/></div>
              <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.distanceKm}</div>
                <Input value={km} onChange={v=>{const s=clamp(v);setKm(s);push({km:s});}} type="number" placeholder="km"/></div>
            </>:<>
              <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.weightKg}</div>
                <Input value={weight} onChange={v=>{const s=clamp(v);setWeight(s);push({weight:s});}} type="number" placeholder="kg"/></div>
              <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.repsPerRound}</div>
                <Input value={reps} onChange={v=>{const n=Math.max(1,+v);setReps(n);push({reps:n});}} type="number"/></div>
            </>}
          </div>
        )}
      </div>
    </>
  );
};

// ─── Circuit block ────────────────────────────────────────────────────────────
const CircuitBlock = ({ circuit, allMachines, onUpdate, onRemove, onSaveTemplate, categories, savedCircuits, T, restSecs }) => {
  const [open,       setOpen]       = useState(true);
  const [name,       setName]       = useState(circuit.name||"");
  const [rounds,     setRounds]     = useState(circuit.rounds||3);
  const [roundsDone, setRoundsDone] = useState(circuit.roundsDone||[]);
  const [showPicker, setShowPicker] = useState(false);
  const [justSaved,  setJustSaved]  = useState(false);
  const [dragIdx,    setDragIdx]    = useState(null);
  const [dragOverIdx,setDragOverIdx]= useState(null);

  const push=(patch)=>onUpdate({name,rounds,roundsDone,machineData:circuit.machineData,...patch});
  const toggleRound=(i)=>{
    const n=Array.from({length:rounds},(_,j)=>j<roundsDone.length?!!roundsDone[j]:false);
    n[i]=!n[i]; setRoundsDone(n);
    // FIX 3: when checking off a round, reset all machine checkboxes for the next round
    if (n[i]) {
      const clearedMd={};
      circuit.machineIds.forEach(mId=>{ clearedMd[mId]={...(circuit.machineData?.[mId]||{}),checked:false}; });
      push({roundsDone:n,machineData:{...circuit.machineData,...clearedMd}});
    } else {
      push({roundsDone:n});
    }
  };
  const updateMD=(mId,patch)=>{ const md={...(circuit.machineData||{}),[mId]:{...(circuit.machineData?.[mId]||{}),...patch}}; push({machineData:md}); };
  const removeMachine=(mId)=>onUpdate({...circuit,name,rounds,roundsDone,machineIds:circuit.machineIds.filter(id=>id!==mId)});
  const handleSaveTpl=()=>{ onSaveTemplate({name:name||"Unnamed",machineIds:circuit.machineIds,rounds,machineData:circuit.machineData||{}}); setJustSaved(true); setTimeout(()=>setJustSaved(false),2000); };
  const allDone=roundsDone.filter(Boolean).length>=rounds&&rounds>0;

  // Drag & drop reorder
  const handleDrop=(dropIdx)=>{
    if (dragIdx===null||dragIdx===dropIdx) { setDragIdx(null); setDragOverIdx(null); return; }
    const ids=[...circuit.machineIds];
    const [moved]=ids.splice(dragIdx,1); ids.splice(dropIdx,0,moved);
    onUpdate({...circuit,name,rounds,roundsDone,machineIds:ids});
    setDragIdx(null); setDragOverIdx(null);
  };

  const checkedCount = circuit.machineIds.filter(mId=>circuit.machineData?.[mId]?.checked).length;

  return (
    <Card style={{marginBottom:12,border:`1px solid ${C.purple}44`}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:open?12:0}}>
        <div style={{width:10,height:10,borderRadius:"50%",flexShrink:0,background:allDone?C.success:C.purple}}/>
        <div style={{flex:1,cursor:"pointer"}} onClick={()=>setOpen(o=>!o)}>
          <div style={{fontWeight:700,fontSize:15,color:C.text}}>{name||T.newCircuitName}</div>
          <div style={{fontSize:11,color:C.muted}}>
            {circuit.machineIds.length} machines · {rounds} {T.roundsLabel.toLowerCase()}
            {checkedCount>0&&<span style={{color:C.success}}> · {checkedCount}/{circuit.machineIds.length} ✓</span>}
          </div>
        </div>
        <span onClick={()=>setOpen(o=>!o)} style={{color:C.muted,cursor:"pointer",fontSize:12}}>{open?"▲":"▼"}</span>
        <span onClick={onRemove} style={{color:C.danger,cursor:"pointer",fontSize:14}}>✕</span>
      </div>
      {open&&(
        <>
          <div style={{display:"flex",gap:8,marginBottom:12}}>
            <div style={{flex:3}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.circuitNameLabel}</div>
              <Input value={name} onChange={v=>{setName(v);push({name:v});}} placeholder={T.circuitNamePH}/></div>
            <div style={{flex:1}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.roundsLabel}</div>
              <Input value={rounds} type="number" onChange={v=>{const n=Math.max(1,+v);setRounds(n);setRoundsDone([]);push({rounds:n,roundsDone:[]});}}/></div>
          </div>
          <SecLabel style={{margin:"0 0 7px"}}>{T.machinesInCircuit}</SecLabel>
          {circuit.machineIds.length===0&&!showPicker&&<div style={{color:C.muted,fontSize:13,textAlign:"center",padding:"8px 0",marginBottom:4}}>—</div>}
          {circuit.machineIds.map((mId,idx)=>{ const m=allMachines.find(x=>x.id===mId); if(!m) return null;
            const roundCount=roundsDone.filter(Boolean).length;
            return (
              <CircuitMachineRow key={`${mId}-r${roundCount}`} machine={m} data={circuit.machineData?.[mId]||{}}
                onUpdate={p=>updateMD(mId,p)} onRemove={()=>removeMachine(mId)} T={T} restSecs={restSecs}
                onDragStart={()=>setDragIdx(idx)}
                onDragOver={()=>setDragOverIdx(idx)}
                onDrop={()=>handleDrop(idx)}
                dragOver={dragOverIdx===idx&&dragIdx!==idx}/>
            );
          })}
          {showPicker
            ?<MachinePicker machines={allMachines} exclude={circuit.machineIds} categories={categories} savedCircuits={savedCircuits} T={T}
                onPick={mId=>onUpdate({...circuit,name,rounds,roundsDone,machineIds:[...circuit.machineIds,mId]})}
                onClose={()=>setShowPicker(false)}/>
            :<Btn small variant="ghost" onClick={()=>setShowPicker(true)} style={{width:"100%",marginBottom:14}}>{T.addMachineToCircuit}</Btn>
          }
          {circuit.machineIds.length>0&&(
            <div style={{borderTop:`1px solid ${C.border}`,paddingTop:12}}>
              <SeqCheck count={rounds} done={roundsDone} onToggle={toggleRound} label={T.circuitRoundsDone} color={C.purple}/>
              <div style={{fontSize:11,color:C.muted,marginTop:6,marginBottom:10}}>{T.circuitRoundHint(circuit.machineIds.length)}</div>
              <Btn small variant={justSaved?"success":"teal"} onClick={handleSaveTpl} style={{width:"100%"}}>
                {justSaved?T.templateSavedBtn:T.saveAsTemplate}
              </Btn>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

// ─── Session detail overlay ───────────────────────────────────────────────────
const SessionDetail = ({ session, machines, onClose, T }) => {
  const getMachine=id=>machines.find(m=>m.id===id);
  const exercises=session.exercises||[];
  const sessionType=exercises.some(e=>e.type==="circuit")&&exercises.some(e=>e.type==="solo")?T.mixedSession
    :exercises.some(e=>e.type==="circuit")?T.circuitSession:T.soloSession;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:100,overflowY:"auto",padding:"16px 14px 80px"}} onClick={onClose}>
      <div style={{maxWidth:460,margin:"0 auto"}} onClick={e=>e.stopPropagation()}>
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
            <div>
              <div style={{fontSize:18,fontWeight:800,color:C.text}}>{fmtDate(session.date)}</div>
              <div style={{fontSize:12,color:C.muted,marginTop:2}}>{sessionType}{session.gymDuration?` · ⏱ ${fmtDur(session.gymDuration)}`:""}</div>
            </div>
            <span onClick={onClose} style={{fontSize:22,color:C.muted,cursor:"pointer",lineHeight:1}}>✕</span>
          </div>
          {exercises.map((ex,i)=>{
            if (ex.type==="circuit") return (
              <div key={i} style={{marginBottom:16,paddingBottom:16,borderBottom:`1px solid ${C.border}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:C.purple,flexShrink:0}}/>
                  <span style={{fontWeight:700,color:C.purple,fontSize:14}}>{ex.circuitName||"Circuit"}</span>
                  <span style={{fontSize:12,color:C.muted}}>{ex.rounds} {T.roundsLabel.toLowerCase()} · {ex.roundsDone?.filter(Boolean).length||0} done</span>
                </div>
                {(ex.machineIds||[]).map((mId,mi)=>{
                  const m=getMachine(mId), isCardio=m?.machineType==="cardio", md=ex.machineData?.[mId]||{};
                  return (
                    <div key={mi} style={{marginLeft:18,marginBottom:8,paddingBottom:8,borderBottom:`1px solid ${C.border}22`}}>
                      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                        <div style={{width:8,height:8,borderRadius:"50%",background:m?.color||C.muted,flexShrink:0}}/>
                        <span style={{fontWeight:600,color:C.text,fontSize:13}}>{m?.name||(ex.machineNames?.[mi])||mId}</span>
                        {m&&<TypeBadge type={m.machineType}/>}
                      </div>
                      {isCardio?(
                        <div style={{fontSize:12,display:"flex",gap:12,marginLeft:14}}>
                          {md.durMin&&<span style={{color:C.teal,fontWeight:600}}>{md.durMin} min</span>}
                          {md.km&&<span style={{color:C.blue,fontWeight:600}}>{md.km} km</span>}
                        </div>
                      ):(
                        <div style={{fontSize:12,display:"flex",gap:12,marginLeft:14,flexWrap:"wrap"}}>
                          {md.weight?<span style={{color:C.accent,fontWeight:700}}>{md.weight} kg</span>:<span style={{color:C.muted}}>{T.noWeightRecorded}</span>}
                          {md.reps&&<span style={{color:C.muted}}>{md.reps} {T.repsPerRoundLabel}</span>}
                          <span style={{color:C.muted}}>{T.repsTotal((md.reps||0)*ex.rounds)}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
            const m=getMachine(ex.machineId), isCardio=m?.machineType==="cardio";
            return (
              <div key={i} style={{marginBottom:12,paddingBottom:12,borderBottom:`1px solid ${C.border}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:m?.color||C.muted,flexShrink:0}}/>
                  <span style={{fontWeight:700,color:C.text,fontSize:14}}>{ex.machineName||(m?.name)||"?"}</span>
                  {m&&<TypeBadge type={m.machineType}/>}
                </div>
                {isCardio?(
                  <div style={{display:"flex",gap:16,fontSize:13}}>
                    {ex.durMin&&<span style={{color:C.teal,fontWeight:600}}>{ex.durMin} min</span>}
                    {ex.km&&<span style={{color:C.blue,fontWeight:600}}>{ex.km} km</span>}
                    {ex.kcal&&<span style={{color:C.yellow,fontWeight:600}}>{ex.kcal} kcal</span>}
                  </div>
                ):(
                  <div style={{display:"flex",gap:12,fontSize:13,flexWrap:"wrap"}}>
                    {ex.weight?<span style={{color:C.accent,fontWeight:700}}>{ex.weight} kg</span>:<span style={{color:C.muted}}>{T.noWeightRecorded}</span>}
                    {(ex.sets||ex.reps)&&<span style={{color:C.muted}}>{ex.sets||"?"} {T.setsLabel.toLowerCase()} × {ex.reps||"?"} {T.repsLabel.toLowerCase()}</span>}
                    {ex.done&&<span style={{color:C.success}}>{ex.done.filter(Boolean).length}/{ex.sets} done</span>}
                  </div>
                )}
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 1 — Training
// ══════════════════════════════════════════════════════════════════════════════
const TrainingPage = ({ data, setData, T, lang, pendingRepeat, onRepeatConsumed }) => {
  const sessionCtx = useContext(SessionCtx);
  const [sessionDate,  setSessionDate]  = useState(todayStr());
  const [mode,         setMode]         = useState("circuit");
  const [soloIds,      setSoloIds]      = useState([]);
  const [soloData,     setSoloData]     = useState({});
  const [showSoloPicker,setShowSoloPicker]=useState(false);
  const [circuits,     setCircuits]     = useState([]);
  const [showSaved,    setShowSaved]    = useState(false);
  const [gymDuration,  setGymDuration]  = useState(null);
  const [saved,        setSaved]        = useState(false);
  const [confirmSave,  setConfirmSave]  = useState(false);
  const restSecs = data.settings?.restTimerSecs ?? 90;

  // FIX 5: consume pendingRepeat when we arrive on Train tab
  useEffect(() => {
    if (!pendingRepeat) return;
    const s = pendingRepeat;
    const exs = s.exercises||[];
    const newSoloIds = exs.filter(e=>e.type==="solo"||!e.type).map(e=>e.machineId).filter(Boolean);
    const newSoloData = {};
    exs.filter(e=>e.type==="solo"||!e.type).forEach(e=>{ if(e.machineId) newSoloData[e.machineId]={weight:e.weight,sets:e.sets,reps:e.reps,done:[],durMin:e.durMin,km:e.km,kcal:e.kcal}; });
    const newCircuits = exs.filter(e=>e.type==="circuit").map(c=>({id:uid(),name:c.circuitName||"",machineIds:c.machineIds||[],rounds:c.rounds||3,roundsDone:[],machineData:Object.fromEntries(Object.entries(c.machineData||{}).map(([k,v])=>([k,{...v,checked:false}])))}));
    setSoloIds(newSoloIds); setSoloData(newSoloData); setCircuits(newCircuits);
    setSessionDate(todayStr());
    if (!sessionCtx?.active) sessionCtx?.startSession?.();
    onRepeatConsumed?.();
  }, [pendingRepeat]);

  const addSoloMachine  =(id)=>{ if(!soloIds.includes(id)) setSoloIds(s=>[...s,id]); setShowSoloPicker(false); };
  const removeSoloMachine=(id)=>setSoloIds(s=>s.filter(x=>x!==id));
  const updateSoloData  =(id,patch)=>setSoloData(d=>({...d,[id]:{...d[id],...patch}}));
  const addCircuit=(tpl=null)=>{ setCircuits(cs=>[...cs,tpl?{id:uid(),name:tpl.name,machineIds:[...tpl.machineIds],rounds:tpl.rounds,roundsDone:[],machineData:{...tpl.machineData}}:{id:uid(),name:"",machineIds:[],rounds:3,roundsDone:[],machineData:{}}]); setShowSaved(false); };
  const removeCircuit=(cid)=>setCircuits(cs=>cs.filter(c=>c.id!==cid));
  const updateCircuit=(cid,patch)=>setCircuits(cs=>cs.map(c=>c.id===cid?{...c,...patch}:c));
  const saveCircuitTemplate=(tpl)=>setData(d=>({...d,savedCircuits:[...(d.savedCircuits||[]).filter(c=>c.name!==tpl.name),{...tpl,id:uid()}]}));
  const handleTimerSave=(v)=>{ sessionCtx?.elapsedRef && (sessionCtx.elapsedRef.current=v); setGymDuration(v); };

  const hasSolo    = soloIds.length>0;
  const hasCircuit = circuits.some(c=>c.machineIds.length>0);
  const canSave    = hasSolo||hasCircuit;

  const doSave=()=>{
    const dur = gymDuration ?? (sessionCtx?.active ? sessionCtx.elapsedRef.current : null);
    const soloEx=soloIds.map(id=>({type:"solo",machineId:id,machineName:data.machines.find(m=>m.id===id)?.name,...(soloData[id]||{})}));
    const circEx=circuits.filter(c=>c.machineIds.length>0).map(c=>({type:"circuit",circuitId:c.id,circuitName:c.name||"Unnamed",machineIds:c.machineIds,machineNames:c.machineIds.map(id=>data.machines.find(m=>m.id===id)?.name),rounds:c.rounds,roundsDone:c.roundsDone,machineData:c.machineData||{}}));
    const session={id:uid(),date:sessionDate,mode,gymDuration:dur,exercises:[...circEx,...soloEx]};
    setData(d=>({...d,sessions:[...d.sessions,session]}));
    sessionCtx?.endSession?.();
    setSaved(true);
    setTimeout(()=>{ setSaved(false); setSoloIds([]); setSoloData({}); setCircuits([]); setGymDuration(null); },2500);
  };
  const handleSaveClick=()=>{
    if (!canSave) return;
    if (!confirmSave){setConfirmSave(true);setTimeout(()=>setConfirmSave(false),4000);return;}
    setConfirmSave(false); doSave();
  };

  const savedCircuits=data.savedCircuits||[];

  return (
    <div style={{padding:"0 0 110px"}}>
      <InactivityBanner sessions={data.sessions} settings={data.settings} T={T} lang={lang}/>
      <div style={{marginBottom:14}}>
        <div style={{fontSize:22,fontWeight:800,color:C.text}}>{T.trainTitle}</div>
        <div style={{fontSize:13,color:C.muted}}>{T.trainSub}</div>
      </div>
      <Card style={{marginBottom:14}}>
        <div style={{marginBottom:12}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.trainDate}</div>
          <input type="date" value={sessionDate} onChange={e=>setSessionDate(e.target.value)}
            style={{background:C.bg2,border:`1px solid ${C.border}`,borderRadius:8,color:C.text,padding:"8px 12px",fontSize:14,width:"100%",boxSizing:"border-box",fontFamily:"inherit",outline:"none"}}/></div>
        <div style={{fontSize:11,color:C.muted,marginBottom:6,fontWeight:700,letterSpacing:"0.05em"}}>{T.trainView}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {[{key:"circuit",icon:"🔄",title:T.circuitsView,sub:T.circuitsViewSub},{key:"solo",icon:"🏋️",title:T.machinesView,sub:T.machinesViewSub}].map(({key,icon,title})=>(
            <div key={key} onClick={()=>setMode(key)}
              style={{padding:"10px",borderRadius:10,cursor:"pointer",textAlign:"center",
                border:`2px solid ${mode===key?(key==="circuit"?C.purple:C.accent):C.border}`,
                background:mode===key?(key==="circuit"?C.purple+"18":C.accent+"18"):"transparent"}}>
              <div style={{fontSize:18,marginBottom:3}}>{icon}</div>
              <div style={{fontWeight:700,fontSize:12,color:mode===key?(key==="circuit"?C.purple:C.accent):C.text}}>{title}</div>
              {(key==="circuit"?hasCircuit:hasSolo)&&<div style={{fontSize:10,color:C.success}}>{T.trainActive}</div>}
            </div>
          ))}
        </div>
      </Card>

      {/* Timer */}
      {!sessionCtx?.active&&gymDuration===null&&(
        <Btn onClick={()=>sessionCtx?.startSession?.()} variant="outline" style={{width:"100%",marginBottom:14}}>{T.trainStartTimer}</Btn>
      )}
      {sessionCtx?.active&&<GymTimer elapsedRef={sessionCtx.elapsedRef} onSave={handleTimerSave} T={T}/>}
      {gymDuration!==null&&(
        <div style={{display:"flex",alignItems:"center",gap:10,background:C.success+"18",border:`1px solid ${C.success}44`,borderRadius:10,padding:"10px 14px",marginBottom:14}}>
          <span>✅</span><div><div style={{fontWeight:700,color:C.success,fontSize:13}}>{T.timerSavedTitle}</div><div style={{fontSize:12,color:C.muted}}>{fmtDur(gymDuration)}</div></div>
          <div style={{flex:1}}/><Btn small variant="ghost" onClick={()=>setGymDuration(null)}>{T.timerReset}</Btn>
        </div>
      )}

      {mode==="circuit"&&(
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <SecLabel style={{margin:0}}>{T.circuitsLabel(circuits.length)}</SecLabel>
            <div style={{display:"flex",gap:6}}>
              {savedCircuits.length>0&&<Btn small variant="teal" onClick={()=>setShowSaved(s=>!s)}>{showSaved?"✕":""} {T.templatesBtn}</Btn>}
              <Btn small variant="purple" onClick={()=>{ addCircuit(); if(!sessionCtx?.active) sessionCtx?.startSession?.(); }}>{T.newCircuitBtn}</Btn>
            </div>
          </div>
          {showSaved&&(
            <Card style={{marginBottom:12,border:`1px solid ${C.teal}55`}}>
              <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:10}}>{T.savedTemplatesTitle}</div>
              {savedCircuits.map(sc=>(
                <div key={sc.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:`1px solid ${C.border}`}}>
                  <div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{sc.name}</div>
                    <div style={{fontSize:11,color:C.muted}}>{T.machinesRounds(sc.machineIds?.length||0,sc.rounds)}</div></div>
                  <Btn small variant="teal" onClick={()=>addCircuit(sc)}>{T.useBtn}</Btn>
                </div>
              ))}
              <div style={{fontSize:11,color:C.muted,marginTop:8}}>{lang==="fr"?"Pour supprimer un modèle, allez dans Config.":"To delete a template, go to Setup."}</div>
            </Card>
          )}
          {circuits.length===0&&!showSaved&&(
            <div style={{textAlign:"center",padding:"36px 0",color:C.muted}}>
              <div style={{fontSize:36,marginBottom:8}}>🔄</div><div style={{fontSize:14}}>{T.emptyCircuits}</div>
            </div>
          )}
          {circuits.map(c=>(
            <CircuitBlock key={c.id} circuit={c} allMachines={data.machines}
              onUpdate={patch=>updateCircuit(c.id,patch)} onRemove={()=>removeCircuit(c.id)}
              onSaveTemplate={saveCircuitTemplate} categories={data.categories} savedCircuits={savedCircuits} T={T} restSecs={restSecs}/>
          ))}
        </>
      )}

      {mode==="solo"&&(
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <SecLabel style={{margin:0}}>{T.machinesLabel(soloIds.length)}</SecLabel>
            <Btn small variant="outline" onClick={()=>setShowSoloPicker(p=>!p)}>{showSoloPicker?T.cancelBtn:T.addMachineBtn}</Btn>
          </div>
          {showSoloPicker&&<MachinePicker machines={data.machines} exclude={soloIds} categories={data.categories} savedCircuits={savedCircuits} T={T} onPick={id=>{addSoloMachine(id);if(!sessionCtx?.active)sessionCtx?.startSession?.();}} onClose={()=>setShowSoloPicker(false)}/>}
          {soloIds.length===0&&!showSoloPicker&&<div style={{textAlign:"center",padding:"36px 0",color:C.muted}}><div style={{fontSize:36,marginBottom:8}}>🏋️</div><div>{T.emptyMachines}</div></div>}
          {soloIds.map(id=>{ const m=data.machines.find(x=>x.id===id); if(!m) return null;
            return <SoloMachineBlock key={id} machine={m} data={soloData[id]||{}} onUpdate={p=>updateSoloData(id,p)} onRemove={()=>removeSoloMachine(id)} T={T} restSecs={restSecs} sessions={data.sessions}/>;
          })}
        </>
      )}

      {canSave&&(
        <div style={{position:"fixed",bottom:62,left:0,right:0,padding:"10px 16px",background:C.bg,borderTop:`1px solid ${C.border}`}}>
          {confirmSave&&<div style={{fontSize:12,color:C.yellow,textAlign:"center",marginBottom:6,fontWeight:600}}>⚠️ {T.confirmSaveMsg}</div>}
          <Btn onClick={handleSaveClick} style={{width:"100%"}} variant={saved?"success":confirmSave?"outline":"primary"}>
            {saved?T.sessionSaved:confirmSave?`✓ ${lang==="fr"?"Confirmer":"Confirm"}`:T.saveSessionBtn(circuits.filter(c=>c.machineIds.length>0).length||0,hasSolo?soloIds.length:0)}
          </Btn>
        </div>
      )}

    </div>
  );
};

// ─── collect exercise entries ─────────────────────────────────────────────────
const collectExEntries = (sessions) => sessions.flatMap(s => {
  return (s.exercises||[]).flatMap(ex=>{
    if (ex.type==="circuit") {
      return (ex.machineIds||[]).map((mId,i)=>({
        type:"circuit", machineId:mId, machineName:ex.machineNames?.[i]||mId, date:s.date,
        weight:ex.machineData?.[mId]?.weight||"", reps:+(ex.machineData?.[mId]?.reps||0),
        durMin:ex.machineData?.[mId]?.durMin||"", km:ex.machineData?.[mId]?.km||"", sets:+(ex.rounds||0),
      }));
    }
    return [{...ex, date:s.date}];
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 2 — Stats
// ══════════════════════════════════════════════════════════════════════════════
const StatsPage = ({ data, setData, T, lang, onRepeat }) => {
  const { sessions, machines } = data;
  const [selMachine,    setSelMachine]    = useState(null);
  const [statTab,       setStatTab]       = useState("overview");
  const [detailSession, setDetailSession] = useState(null);
  const [typeFilter,    setTypeFilter]    = useState(null);

  if (!sessions.length) return (
    <div style={{textAlign:"center",padding:"60px 0",color:C.muted}}>
      <div style={{fontSize:40}}>📊</div><div style={{marginTop:8}}>{T.statsSub}</div>
    </div>
  );

  const now=new Date();
  const total=sessions.length;
  const thisWeek=sessions.filter(s=>new Date(s.date).getTime()>=startOfWeekMs()).length;
  const thisMonth=sessions.filter(s=>(now-new Date(s.date))/86400000<30).length;
  const withDur=sessions.filter(s=>s.gymDuration);
  const avgDur=withDur.length?Math.round(withDur.reduce((a,s)=>a+s.gymDuration,0)/withDur.length):null;
  const longestDur=withDur.length?Math.max(...withDur.map(s=>s.gymDuration)):null;
  const shortDur=withDur.length?Math.min(...withDur.map(s=>s.gymDuration)):null;
  const totalTime=withDur.reduce((a,s)=>a+s.gymDuration,0);

  let streak=0; const td=new Date();
  const allDates=[...new Set(sessions.map(s=>s.date))].sort();
  for(let i=0;i<100;i++){
    const ds=td.toISOString().slice(0,10);
    if(allDates.includes(ds)){streak++;td.setDate(td.getDate()-1);}
    else if(i===0){td.setDate(td.getDate()-1);if(!allDates.includes(td.toISOString().slice(0,10)))break;}
    else break;
  }

  const dows=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dowCounts=dows.map((label,i)=>({label,value:sessions.filter(s=>new Date(s.date).getDay()===i).length}));
  const weekMs=startOfWeekMs();
  const thisWeekDow=dows.map((label,i)=>({label,highlight:new Date().getDay()===i,value:sessions.filter(s=>new Date(s.date).getTime()>=weekMs&&new Date(s.date).getDay()===i).length}));
  const sessByWeek=(()=>{ const wks={}; sessions.forEach(s=>{ const d=new Date(s.date); d.setDate(d.getDate()-d.getDay()); d.setHours(0,0,0,0); const k=d.toISOString().slice(0,10); wks[k]=(wks[k]||0)+1; }); return Object.entries(wks).sort(([a],[b])=>a<b?-1:1).slice(-8).map(([k,v])=>({label:fmtDateShort(k),value:v})); })();
  const avgPerWeek=sessByWeek.length?(sessByWeek.reduce((a,w)=>a+w.value,0)/sessByWeek.length).toFixed(1):"—";
  const durPts=withDur.slice(-12).map(s=>Math.round(s.gymDuration/60));
  const durLabels=withDur.slice(-12).map(s=>fmtDateShort(s.date));
  const allEx=collectExEntries(sessions);

  const machineStats=machines.map(m=>{
    const exs=allEx.filter(e=>e.machineId===m.id);
    if(!exs.length) return null;
    const isCardio=m.machineType==="cardio";
    if (isCardio) {
      const kms=exs.map(e=>parseFloat(e.km)).filter(Boolean);
      const durs=exs.map(e=>parseFloat(e.durMin)).filter(Boolean);
      return {...m,isCardio:true,sessions:exs.length,
        bestKm:kms.length?Math.max(...kms):null, bestDur:durs.length?Math.max(...durs):null,
        totalKm:kms.reduce((a,b)=>a+b,0),
        kmHist:exs.map(e=>({date:e.date,v:parseFloat(e.km)||0})),
        durHist:exs.map(e=>({date:e.date,v:parseFloat(e.durMin)||0})),
        kcalHist:exs.map(e=>({date:e.date,v:parseFloat(e.kcal)||0})),
      };
    }
    const weights=exs.map(e=>parseFloat(e.weight)).filter(v=>!isNaN(v)&&v>0);
    const pr=weights.length?Math.max(...weights):null;
    const avgW=weights.length?+(weights.reduce((a,b)=>a+b,0)/weights.length).toFixed(1):null;
    const minW=weights.length?Math.min(...weights):null;
    const totalSets=exs.reduce((a,e)=>a+(+e.sets||0),0);
    const totalVol=exs.reduce((a,e)=>a+(+e.sets||0)*(+e.reps||0)*(parseFloat(e.weight)||0),0);
    const goal=m.goalWeight?parseFloat(m.goalWeight):null;
    const goalPct=goal&&pr?Math.min(100,Math.round((pr/goal)*100)):null;
    return {...m,isCardio:false,sessions:exs.length,pr,avgW,minW,totalSets,totalVolume:Math.round(totalVol),goal,goalPct,
      wHist:exs.map(e=>({date:e.date,v:parseFloat(e.weight)||0})),
      sHist:exs.map(e=>({date:e.date,v:+e.sets||0})),
      rHist:exs.map(e=>({date:e.date,v:(+e.sets||0)*(+e.reps||0)})),
      repsHist:exs.map(e=>({date:e.date,v:+e.reps||0})),
    };
  }).filter(Boolean);

  const filteredMachineStats=typeFilter?machineStats.filter(m=>m.machineType===typeFilter):machineStats;

  const SB=({label,value,color=C.accent,sub})=>(
    <Card style={{textAlign:"center",flex:1,minWidth:80,padding:12}}>
      <div style={{fontSize:20,fontWeight:800,color}}>{value}</div>
      <div style={{fontSize:11,fontWeight:600,color:C.text,marginTop:2}}>{label}</div>
      {sub&&<div style={{fontSize:10,color:C.muted}}>{sub}</div>}
    </Card>
  );
  const TabBtn=({id,label})=>(
    <div onClick={()=>{setStatTab(id);setSelMachine(null);}}
      style={{flex:1,textAlign:"center",padding:"8px 4px",cursor:"pointer",fontSize:12,fontWeight:600,
        borderBottom:`2px solid ${statTab===id?C.accent:"transparent"}`,color:statTab===id?C.accent:C.muted}}>
      {label}
    </div>
  );
  const selM=selMachine?machineStats.find(m=>m.id===selMachine):null;

  const WeightMachineCharts=({m})=>{
    const wPts=m.wHist.filter(p=>p.v>0).map(p=>p.v), wLabs=m.wHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date));
    const sPts=m.sHist.filter(p=>p.v>0).map(p=>p.v), sLabs=m.sHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date));
    const rPts=m.rHist.filter(p=>p.v>0).map(p=>p.v), rLabs=m.rHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date));
    const rpPts=m.repsHist.filter(p=>p.v>0).map(p=>p.v), rpLabs=m.repsHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date));
    return (
      <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,marginBottom:16}}>
          {[{label:T.prLabel,value:m.pr?`${m.pr}kg`:"—",color:C.accent},{label:T.avgWeight,value:m.avgW?`${m.avgW}kg`:"—",color:C.yellow},{label:T.minWeight,value:m.minW?`${m.minW}kg`:"—",color:C.muted},{label:T.totalSetsLabel,value:m.totalSets,color:C.muted}].map((s,i)=>(
            <div key={i} style={{background:C.bg2,borderRadius:8,padding:"6px 8px",textAlign:"center"}}>
              <div style={{fontSize:14,fontWeight:800,color:s.color}}>{s.value}</div>
              <div style={{fontSize:9,color:C.muted}}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Goal progress bar */}
        {m.goal&&(
          <div style={{marginBottom:16,background:C.bg2,borderRadius:10,padding:"10px 14px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <span style={{fontSize:12,fontWeight:700,color:C.text}}>🎯 {T.goalLabel}: {m.goal}kg</span>
              <span style={{fontSize:12,fontWeight:800,color:m.goalPct>=100?C.success:C.accent}}>{m.goalPct??0}%</span>
            </div>
            <div style={{height:10,borderRadius:5,background:C.border,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${m.goalPct??0}%`,background:m.goalPct>=100?C.success:C.accent,borderRadius:5,transition:"width .6s"}}/>
            </div>
            <div style={{fontSize:11,color:C.muted,marginTop:4}}>
              {m.pr?`${T.prLabel}: ${m.pr}kg`:"—"} {m.goalPct>=100?"🏆":m.pr?`→ ${(m.goal-m.pr).toFixed(1)}kg ${lang==="fr"?"restant":"to go"}`:""}
            </div>
          </div>
        )}
        {m.totalVolume>0&&<div style={{background:C.bg2,borderRadius:8,padding:"8px 12px",marginBottom:14,display:"flex",justifyContent:"space-between"}}><span style={{fontSize:12,color:C.muted}}>{T.totalVolLifted}</span><span style={{fontSize:14,fontWeight:800,color:C.purple}}>{m.totalVolume.toLocaleString()} kg</span></div>}
        {wPts.length>=2&&(<div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.weightOverTime}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.tapDot}</div>
          <LineChart points={wPts} labels={wLabs} color={m.color} height={56} unit=" kg"/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11}}>
            <span style={{color:C.muted}}>{T.weightStart} {wPts[0]}kg</span>
            <span style={{color:wPts[wPts.length-1]>=wPts[0]?C.success:C.accent,fontWeight:700}}>{T.weightLatest} {wPts[wPts.length-1]}kg {wPts[wPts.length-1]>wPts[0]?"↑":wPts[wPts.length-1]<wPts[0]?"↓":"→"}</span>
          </div>
        </div>)}
        {rpPts.length>=2&&(<div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.repsPerSetTitle}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.repsPerSetSub}</div>
          <LineChart points={rpPts} labels={rpLabs} color={C.blue} height={48} unit=" reps"/>
        </div>)}
        {sPts.length>=2&&(<div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.setsPerSession}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.setsPerSessionSub}</div>
          <LineChart points={sPts} labels={sLabs} color={C.purple} height={44} unit=" sets"/>
        </div>)}
        {rPts.length>=2&&(<div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.volumePerSession}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.volumePerSessionSub}</div>
          <LineChart points={rPts} labels={rLabs} color={C.teal} height={48} unit=" reps"/>
        </div>)}
        {wPts.length>=2&&rpPts.length>=2&&(<div style={{marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.weightRepsTitle}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.weightRepsSub}</div>
          <DualLineChart aPoints={wPts} bPoints={rpPts} aColor={m.color} bColor={C.blue} aUnit=" kg" bUnit=" reps" aLabel="kg" bLabel="reps" height={60}/>
        </div>)}
        {wPts.length>=2&&rPts.length>=2&&(<div>
          <div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:2}}>{T.weightVolTitle}</div>
          <div style={{fontSize:10,color:C.muted,marginBottom:6}}>{T.weightVolSub}</div>
          <DualLineChart aPoints={wPts} bPoints={rPts} aColor={m.color} bColor={C.teal} aUnit=" kg" bUnit=" reps" aLabel="kg" bLabel="vol" height={60}/>
        </div>)}
      </>
    );
  };

  return (
    <div style={{padding:"0 0 80px"}}>
      {detailSession&&<SessionDetail session={detailSession} machines={machines} onClose={()=>setDetailSession(null)} T={T}/>}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:22,fontWeight:800,color:C.text}}>{T.statsTitle}</div>
        <div style={{fontSize:13,color:C.muted}}>{T.statsSub}</div>
      </div>
      <div style={{display:"flex",borderBottom:`1px solid ${C.border}`,marginBottom:14}}>
        {[{id:"overview",label:T.tabOverview},{id:"machine",label:T.tabMachines},{id:"sessions",label:T.tabSessions}].map(({id,label})=><TabBtn key={id} id={id} label={label}/>)}
      </div>

      {statTab==="overview"&&(
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:8}}>
            <SB label={T.statTotal} value={total} color={C.accent}/>
            <SB label={T.statMonth} value={thisMonth} color={C.blue}/>
            <SB label={T.statWeek}  value={thisWeek}  color={C.purple}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:14}}>
            <SB label={T.statAvgDur}  value={avgDur?fmtDur(avgDur):"—"}         color={C.yellow}/>
            <SB label={T.statLongest} value={longestDur?fmtDur(longestDur):"—"} color={C.teal}/>
            <SB label={T.statStreak}  value={`${streak}d`}                       color={C.success} sub={T.statStreakSub}/>
          </div>
          <Card style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:8}}>{T.thisWeek}</div><BarChart data={thisWeekDow} color={C.purple} height={40}/></Card>
          <Card style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:8}}>{T.sessionsByDay}</div><BarChart data={dowCounts} height={50}/></Card>
          {sessByWeek.length>=2&&(<Card style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:2}}>{T.sessionsPerWeek}</div><div style={{fontSize:11,color:C.muted,marginBottom:8}}>{T.sessionsPerWeekSub(avgPerWeek)}</div><BarChart data={sessByWeek} color={C.blue} height={50}/></Card>)}
          {durPts.length>=2&&(<Card style={{marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:4}}>{T.sessionDuration}</div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:11}}>
              <span style={{color:C.muted}}>{T.shortest} {fmtDur(shortDur)}</span>
              <span style={{color:C.accent}}>{T.avgLabel} {fmtDur(avgDur)}</span>
              <span style={{color:C.teal}}>{T.longestLabel} {fmtDur(longestDur)}</span>
            </div>
            <LineChart points={durPts} labels={durLabels} color={C.blue} height={56} unit=" min"/>
            {totalTime>0&&<div style={{fontSize:11,color:C.muted,marginTop:6,textAlign:"right"}}>{T.totalGymTime} {fmtDur(totalTime)}</div>}
          </Card>)}
        </>
      )}

      {statTab==="machine"&&(
        <>
          <div style={{marginBottom:12}}><TypeFilter value={typeFilter} onChange={v=>{setTypeFilter(v);setSelMachine(null);}} T={T}/></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12}}>
            {filteredMachineStats.map(m=>(
              <div key={m.id} onClick={()=>setSelMachine(selMachine===m.id?null:m.id)}
                style={{padding:"5px 12px",borderRadius:18,cursor:"pointer",fontSize:12,fontWeight:600,
                  border:`2px solid ${selMachine===m.id?m.color:C.border}`,
                  background:selMachine===m.id?m.color+"22":"transparent",
                  color:selMachine===m.id?m.color:C.muted,transition:"all .15s"}}>
                {m.name}
              </div>
            ))}
          </div>
          {selM&&(
            <Card style={{marginBottom:14,borderLeft:`3px solid ${selM.color}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                    <span style={{fontSize:16,fontWeight:800,color:C.text}}>{selM.name}</span><TypeBadge type={selM.machineType}/>
                  </div>
                  {selM.photo&&<img src={selM.photo} alt="" style={{width:"100%",borderRadius:8,marginTop:8,maxHeight:100,objectFit:"cover"}}/>}
                  <div style={{display:"flex",flexWrap:"wrap",gap:4,marginTop:4}}>{getCats(selM).map(c=><CatBadge key={c} cat={c}/>)}</div>
                  <div style={{fontSize:12,color:C.muted,marginTop:4}}>{T.sessionsCount(selM.sessions)}</div>
                </div>
                {!selM.isCardio&&selM.pr&&<div style={{textAlign:"right"}}><div style={{fontSize:10,color:C.muted}}>🏆 {T.prLabel}</div><div style={{fontSize:28,fontWeight:900,color:C.accent}}>{selM.pr} kg</div></div>}
                {selM.isCardio&&(selM.bestKm||selM.bestDur)&&<div style={{textAlign:"right"}}>
                  {selM.bestKm&&<><div style={{fontSize:10,color:C.muted}}>🏅 {T.bestDistance}</div><div style={{fontSize:22,fontWeight:800,color:C.teal}}>{selM.bestKm} km</div></>}
                </div>}
              </div>
              {!selM.isCardio&&<WeightMachineCharts m={selM}/>}
              {selM.isCardio&&(<>
                {selM.durHist.filter(p=>p.v>0).length>=2&&(<div style={{marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:4}}>{T.durationOverTime}</div><LineChart points={selM.durHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.durHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date))} color={C.teal} height={52} unit=" min"/></div>)}
                {selM.kmHist.filter(p=>p.v>0).length>=2&&(<div style={{marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:4}}>{T.distanceOverTime}</div><LineChart points={selM.kmHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kmHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date))} color={C.blue} height={52} unit=" km"/></div>)}
                {selM.kcalHist&&selM.kcalHist.filter(p=>p.v>0).length>=2&&(<div><div style={{fontSize:11,fontWeight:700,color:C.muted,marginBottom:4}}>{T.caloriesOverTime}</div><LineChart points={selM.kcalHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kcalHist.filter(p=>p.v>0).map(p=>fmtDateShort(p.date))} color={C.yellow} height={44} unit=" kcal"/></div>)}
                {selM.totalKm>0&&<div style={{background:C.bg2,borderRadius:8,padding:"8px 12px",marginTop:12,display:"flex",justifyContent:"space-between"}}><span style={{fontSize:12,color:C.muted}}>{T.totalDistance}</span><span style={{fontSize:14,fontWeight:800,color:C.teal}}>{selM.totalKm.toFixed(1)} km</span></div>}
              </>)}
            </Card>
          )}
          <SecLabel>{T.allMachinesLabel}</SecLabel>
          {filteredMachineStats.map(m=>(
            <Card key={m.id} style={{marginBottom:8,borderLeft:`3px solid ${m.color}`,padding:"12px 14px"}} onClick={()=>setSelMachine(selMachine===m.id?null:m.id)}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                    <span style={{fontWeight:700,fontSize:14,color:C.text}}>{m.name}</span><TypeBadge type={m.machineType}/>{getCats(m).map(c=><CatBadge key={c} cat={c}/>)}
                  </div>
                  <div style={{fontSize:11,color:C.muted,marginTop:2}}>{T.sessionsCount(m.sessions)} · {m.isCardio?(m.bestKm?`${T.bestDistance}: ${m.bestKm}km`:""):`${m.totalSets} sets`}</div>
                  {!m.isCardio&&m.goal&&m.goalPct!==null&&(
                    <div style={{marginTop:4}}>
                      <div style={{height:4,borderRadius:2,background:C.border,width:120,overflow:"hidden"}}>
                        <div style={{height:"100%",width:`${m.goalPct}%`,background:m.goalPct>=100?C.success:C.accent,borderRadius:2}}/>
                      </div>
                      <div style={{fontSize:10,color:C.muted,marginTop:2}}>🎯 {m.goalPct}% → {m.goal}kg</div>
                    </div>
                  )}
                </div>
                {!m.isCardio&&m.pr&&<div style={{textAlign:"right"}}><div style={{fontSize:9,color:C.muted}}>{T.prLabel}</div><div style={{fontSize:18,fontWeight:800,color:C.accent}}>{m.pr}kg</div></div>}
              </div>
            </Card>
          ))}
        </>
      )}

      {statTab==="sessions"&&(
        <>
          <Card style={{marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:10}}>{T.consistency}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
              {(()=>{
                const sessByMonth=(()=>{ const m={}; sessions.forEach(s=>{ const k=s.date.slice(0,7); m[k]=(m[k]||0)+1; }); return Object.values(m); })();
                const avgSessMonth=sessByMonth.length?(sessByMonth.reduce((a,b)=>a+b,0)/sessByMonth.length).toFixed(1):"—";
                const avgSessWeek=sessByWeek.length?(sessByWeek.reduce((a,w)=>a+w.value,0)/sessByWeek.length).toFixed(1):"—";
                const timeByWeek=(()=>{ const wks={}; withDur.forEach(s=>{ const d=new Date(s.date); d.setDate(d.getDate()-d.getDay()); const k=d.toISOString().slice(0,10); wks[k]=(wks[k]||0)+s.gymDuration; }); return Object.values(wks); })();
                const avgTimeWeek=timeByWeek.length?Math.round(timeByWeek.reduce((a,b)=>a+b,0)/timeByWeek.length/60):null;
                const timeByMonth=(()=>{ const m={}; withDur.forEach(s=>{ const k=s.date.slice(0,7); m[k]=(m[k]||0)+s.gymDuration; }); return Object.values(m); })();
                const avgTimeMonth=timeByMonth.length?Math.round(timeByMonth.reduce((a,b)=>a+b,0)/timeByMonth.length/60):null;
                return [
                  {label:lang==="fr"?"Moy. séances/sem.":"Avg sessions/week",  value:avgSessWeek+" sess.", color:C.blue},
                  {label:lang==="fr"?"Moy. séances/mois":"Avg sessions/month", value:avgSessMonth+" sess.", color:C.purple},
                  {label:lang==="fr"?"Moy. temps/sem.":"Avg gym time/week",    value:avgTimeWeek?`${avgTimeWeek} min`:"—", color:C.yellow},
                  {label:lang==="fr"?"Moy. temps/mois":"Avg gym time/month",   value:avgTimeMonth?`${avgTimeMonth} min`:"—", color:C.teal},
                  {label:T.bestWeek, value:Math.max(...sessByWeek.map(w=>w.value),0)+" sess.", color:C.success},
                  {label:T.daysActive, value:[...new Set(sessions.map(s=>s.date))].length, color:C.accent},
                  {label:T.currentStreak, value:`${streak} ${T.statStreakSub}`, color:streak>=3?C.success:C.muted},
                  {label:lang==="fr"?"Total salle":"Total gym time", value:totalTime?fmtDur(totalTime):"—", color:C.blue},
                ].map((s,i)=>(
                  <div key={i} style={{background:C.bg2,borderRadius:8,padding:"10px 12px"}}>
                    <div style={{fontSize:16,fontWeight:800,color:s.color}}>{s.value}</div>
                    <div style={{fontSize:11,color:C.muted}}>{s.label}</div>
                  </div>
                ));
              })()}
            </div>
          </Card>
          <SecLabel>{T.allSessionsTitle}</SecLabel>
          {[...sessions].reverse().map(s=>{
            const exs=s.exercises||[];
            const circs=exs.filter(e=>e.type==="circuit");
            const solos=exs.filter(e=>e.type==="solo"||!e.type);
            return (
              <SessionCard key={s.id} session={s} circs={circs} solos={solos}
                onOpen={()=>setDetailSession(s)}
                onDelete={()=>setData(d=>({...d,sessions:d.sessions.filter(x=>x.id!==s.id)}))}
                onUpdateDuration={(dur)=>setData(d=>({...d,sessions:d.sessions.map(x=>x.id===s.id?{...x,gymDuration:dur}:x)}))}
                onRepeat={()=>onRepeat?.(s)}
                T={T} lang={lang}/>
            );
          })}
        </>
      )}
    </div>
  );
};

// ─── Session card ─────────────────────────────────────────────────────────────
const SessionCard = ({ session:s, circs, solos, onOpen, onDelete, onUpdateDuration, onRepeat, T, lang }) => {
  const [editDur,    setEditDur]    = useState(false);
  const [durInput,   setDurInput]   = useState(s.gymDuration?String(Math.round(s.gymDuration/60)):"");
  const [delConfirm, setDelConfirm] = useState(false);
  const saveDur=(e)=>{ e.stopPropagation(); const mins=parseInt(durInput,10); onUpdateDuration(mins>0?mins*60:null); setEditDur(false); };
  const handleDelete=(e)=>{ e.stopPropagation(); if(!delConfirm){setDelConfirm(true);setTimeout(()=>setDelConfirm(false),3000);}else onDelete(); };
  const handleEditDur=(e)=>{ e.stopPropagation(); setEditDur(p=>!p); setDurInput(s.gymDuration?String(Math.round(s.gymDuration/60)):""); };
  return (
    <Card style={{marginBottom:8,padding:"12px 14px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{flex:1,cursor:"pointer"}} onClick={onOpen}>
          <div style={{fontWeight:600,color:C.text,fontSize:14}}>{fmtDate(s.date)}</div>
          <div style={{fontSize:11,color:C.muted,marginTop:1,lineHeight:1.6}}>
            {circs.map((c,i)=><span key={i} style={{color:C.purple}}>{c.circuitName||"Circuit"} ×{c.rounds}{i<circs.length-1?" + ":""}</span>)}
            {circs.length>0&&solos.length>0&&<span style={{color:C.muted}}> + </span>}
            {solos.map((e,i)=><span key={i}>{e.machineName||"?"}{i<solos.length-1?" · ":""}</span>)}
          </div>
          {s.gymDuration&&!editDur&&<div style={{fontSize:11,color:C.blue,marginTop:2}}>⏱ {fmtDur(s.gymDuration)}</div>}
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center",flexShrink:0,marginLeft:8}}>
          {onRepeat&&<span onClick={e=>{e.stopPropagation();onRepeat();}}
            style={{fontSize:15,color:C.teal,cursor:"pointer"}} title={lang==="fr"?"Refaire cette séance":"Repeat this session"}>🔁</span>}
          <span onClick={handleEditDur} style={{fontSize:15,color:editDur?C.accent:C.muted,cursor:"pointer"}}>⏱</span>
          <span onClick={handleDelete} style={{fontSize:14,cursor:"pointer",fontWeight:700,color:delConfirm?C.danger:C.muted,background:delConfirm?C.danger+"22":"transparent",borderRadius:4,padding:"1px 4px"}}>
            {delConfirm?"✕✕":"✕"}
          </span>
          <span style={{fontSize:10,color:C.muted,cursor:"pointer"}} onClick={e=>{e.stopPropagation();onOpen();}}>{T.tapForDetails}</span>
        </div>
      </div>
      {editDur&&(
        <div onClick={e=>e.stopPropagation()} style={{display:"flex",gap:8,alignItems:"center",marginTop:8,paddingTop:8,borderTop:`1px solid ${C.border}`,flexWrap:"wrap"}}>
          <span style={{fontSize:12,color:C.muted,flexShrink:0}}>{lang==="fr"?"Durée (min) :":"Duration (min):"}</span>
          <input type="number" min="0" value={durInput} onChange={e=>setDurInput(e.target.value)} onClick={e=>e.stopPropagation()}
            style={{background:C.bg2,border:`1px solid ${C.border}`,borderRadius:8,color:C.text,padding:"5px 10px",fontSize:13,width:70,fontFamily:"inherit",outline:"none"}}/>
          <Btn small onClick={saveDur} variant="success">{lang==="fr"?"OK":"Save"}</Btn>
          <Btn small onClick={e=>{e.stopPropagation();setEditDur(false);}} variant="ghost">{lang==="fr"?"Annuler":"Cancel"}</Btn>
        </div>
      )}
      {delConfirm&&<div style={{fontSize:11,color:C.danger,marginTop:5}}>{lang==="fr"?"Appuyez encore sur ✕✕ pour confirmer.":"Tap ✕✕ again to confirm deletion."}</div>}
    </Card>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE 3 — Setup
// ══════════════════════════════════════════════════════════════════════════════
const COLORS=["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6","#ec4899","#14b8a6"];
const inlineInputStyle={background:C.bg2,border:`1px solid ${C.border}`,borderRadius:8,color:C.text,padding:"8px 12px",fontSize:14,width:"100%",boxSizing:"border-box",fontFamily:"inherit",outline:"none"};
const inlineInputSmStyle={background:C.bg2,border:`1px solid ${C.border}`,borderRadius:8,color:C.text,padding:"6px 10px",fontSize:13,width:"100%",boxSizing:"border-box",fontFamily:"inherit",outline:"none"};

const CircuitTemplateEditor = ({ template, machines, categories, savedCircuits, onSave, onCancel, T, lang }) => {
  const [name,setName]=useState(template.name);
  const [rounds,setRounds]=useState(template.rounds||3);
  const [mIds,setMIds]=useState([...template.machineIds]);
  const [md,setMd]=useState({...(template.machineData||{})});
  const [showPicker,setShowPicker]=useState(false);
  const clamp=(v)=>v===""?"":String(Math.max(0,+v));
  return (
    <Card style={{marginBottom:12,border:`1px solid ${C.teal}`}}>
      <div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:12}}>{T.editTplTitle}</div>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <div style={{flex:3}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.circuitNameLabel}</div><input value={name} onChange={e=>setName(e.target.value)} placeholder={T.circuitNamePH} style={inlineInputStyle}/></div>
        <div style={{flex:1}}><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.roundsLabel}</div><input value={rounds} type="number" min="1" onChange={e=>setRounds(Math.max(1,+e.target.value))} style={inlineInputStyle}/></div>
      </div>
      {mIds.map(mId=>{ const m=machines.find(x=>x.id===mId); if(!m) return null; const isCardio=m.machineType==="cardio";
        return (
          <div key={mId} style={{background:C.bg2,borderRadius:8,border:`1px solid ${C.border}`,borderLeft:`3px solid ${m.color}`,padding:"8px 10px",marginBottom:6}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontWeight:600,color:C.text,flex:1}}>{m.name}</span><TypeBadge type={m.machineType}/><span onClick={()=>setMIds(ids=>ids.filter(id=>id!==mId))} style={{color:C.danger,cursor:"pointer",fontSize:13}}>✕</span></div>
            <div style={{display:"flex",gap:8,marginTop:8}}>
              {isCardio?<>
                <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.durationMin}</div><input value={md[mId]?.durMin||""} min="0" onChange={e=>setMd(d=>({...d,[mId]:{...d[mId],durMin:clamp(e.target.value)}}))} type="number" placeholder="min" style={inlineInputSmStyle}/></div>
                <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.distanceKm}</div><input value={md[mId]?.km||""} min="0" onChange={e=>setMd(d=>({...d,[mId]:{...d[mId],km:clamp(e.target.value)}}))} type="number" placeholder="km" style={inlineInputSmStyle}/></div>
              </>:<>
                <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.weightKg}</div><input value={md[mId]?.weight||""} min="0" onChange={e=>setMd(d=>({...d,[mId]:{...d[mId],weight:clamp(e.target.value)}}))} type="number" placeholder="kg" style={inlineInputSmStyle}/></div>
                <div style={{flex:1}}><div style={{fontSize:10,color:C.muted,marginBottom:3}}>{T.repsLabel}</div><input value={md[mId]?.reps||""} min="0" onChange={e=>setMd(d=>({...d,[mId]:{...d[mId],reps:Math.max(0,+e.target.value)}}))} type="number" style={inlineInputSmStyle}/></div>
              </>}
            </div>
          </div>
        );
      })}
      {showPicker?<MachinePicker machines={machines} exclude={mIds} categories={categories} savedCircuits={savedCircuits} T={T} onPick={mId=>{setMIds(ids=>[...ids,mId]);setShowPicker(false);}} onClose={()=>setShowPicker(false)}/>
        :<Btn small variant="ghost" onClick={()=>setShowPicker(true)} style={{width:"100%",marginBottom:12}}>{T.addMachineToTpl}</Btn>}
      <div style={{display:"flex",gap:8,marginTop:8}}>
        <Btn onClick={()=>onSave({...template,name,rounds,machineIds:mIds,machineData:md})} style={{flex:1}}>{T.saveTplBtn}</Btn>
        <Btn onClick={onCancel} variant="ghost">{lang==="fr"?"Annuler":"Cancel"}</Btn>
      </div>
    </Card>
  );
};

const MachineForm = ({ machine, categories, onSave, onCancel, T, lang }) => {
  const [name,    setName]    = useState(machine?.name||"");
  const [selCats, setSelCats] = useState(getCats(machine)||[]);
  const [notes,   setNotes]   = useState(machine?.notes||"");
  const [color,   setColor]   = useState(machine?.color||COLORS[0]);
  const [mType,   setMType]   = useState(machine?.machineType||"weight");
  const [goal,    setGoal]    = useState(machine?.goalWeight||"");
  const [photo,   setPhoto]   = useState(machine?.photo||null);
  const [photoDelConfirm, setPhotoDelConfirm] = useState(false);
  const toggleCat=(cat)=>setSelCats(cs=>cs.includes(cat)?cs.filter(c=>c!==cat):[...cs,cat]);

  const handlePhoto=(e)=>{
    const file=e.target.files[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=ev=>setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <Card style={{marginBottom:12,border:`1px solid ${C.accent}`}}>
      <div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:12}}>{machine?T.editMachineTitle:T.newMachineTitle}</div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        <div><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.machineNameLabel}</div>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder={T.machineNamePH} style={inlineInputStyle}/></div>

        <div>
          <div style={{fontSize:11,color:C.muted,marginBottom:6}}>{T.typeLabel} <span style={{fontWeight:400}}>{T.typeDesc}</span></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[{v:"weight",icon:"⚖️",label:T.weightMachineLabel,sub:T.weightMachineSub},{v:"cardio",icon:"🏃",label:T.cardioMachineLabel,sub:T.cardioMachineSub}].map(({v,icon,label,sub})=>(
              <div key={v} onClick={()=>setMType(v)}
                style={{padding:"8px",borderRadius:8,cursor:"pointer",textAlign:"center",
                  border:`2px solid ${mType===v?(v==="weight"?C.accent:C.teal):C.border}`,
                  background:mType===v?(v==="weight"?C.accent+"18":C.teal+"18"):"transparent"}}>
                <div style={{fontSize:16,marginBottom:2}}>{icon}</div>
                <div style={{fontSize:11,fontWeight:600,color:mType===v?(v==="weight"?C.accent:C.teal):C.muted}}>{label}</div>
                <div style={{fontSize:10,color:C.muted}}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{fontSize:11,color:C.muted,marginBottom:6}}>{T.catsLabel} <span style={{fontWeight:400}}>{T.catsDesc}</span></div>
          {mType==="cardio"&&<div style={{fontSize:10,color:C.teal,marginBottom:6}}>{T.cardioTip}</div>}
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {categories.map(cat=>{ const on=selCats.includes(cat); return <div key={cat} onClick={()=>toggleCat(cat)} style={{padding:"5px 12px",borderRadius:18,cursor:"pointer",fontSize:12,fontWeight:600,border:`2px solid ${on?C.accent:C.border}`,background:on?C.accent+"22":"transparent",color:on?C.accent:C.muted,transition:"all .15s"}}>{cat}</div>; })}
          </div>
          {selCats.length===0&&<div style={{fontSize:11,color:C.danger,marginTop:4}}>{T.pickCategoryWarn}</div>}
        </div>

        <div><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.seatLabel}</div>
          <input value={notes} onChange={e=>setNotes(e.target.value)} placeholder={T.seatPH} style={inlineInputStyle}/></div>

        {mType==="weight"&&(
          <div><div style={{fontSize:11,color:C.muted,marginBottom:4}}>{T.goalWeightLabel}</div>
            <input value={goal} type="number" min="0" onChange={e=>setGoal(e.target.value)} placeholder={T.goalWeightPH} style={inlineInputStyle}/></div>
        )}

        {/* Photo capture */}
        <div>
          <div style={{fontSize:11,color:C.muted,marginBottom:6}}>{T.photoLabel}</div>
          {photo&&<img src={photo} alt="" style={{width:"100%",borderRadius:8,marginBottom:8,maxHeight:140,objectFit:"cover"}}/>}
          <label>
            <div style={{background:"transparent",border:`1px solid ${C.border}`,borderRadius:8,color:C.muted,fontWeight:600,fontSize:12,padding:"6px 12px",textAlign:"center",cursor:"pointer",lineHeight:"1.2",display:"block"}}>
              {photo?T.changePhoto:T.takePhoto}
            </div>
            <input type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={handlePhoto}/>
          </label>
          {photo&&<div
            onClick={()=>{
              if(!photoDelConfirm){setPhotoDelConfirm(true);setTimeout(()=>setPhotoDelConfirm(false),3000);}
              else{setPhoto(null);setPhotoDelConfirm(false);}
            }}
            style={{fontSize:11,color:photoDelConfirm?C.danger:C.muted,cursor:"pointer",textAlign:"center",marginTop:4,fontWeight:photoDelConfirm?700:400}}>
            {photoDelConfirm?(lang==="fr"?"Appuyer encore pour confirmer":"Tap again to confirm"):`✕ ${lang==="fr"?"Supprimer la photo":"Remove photo"}`}
          </div>}
        </div>

        <div>
          <div style={{fontSize:11,color:C.muted,marginBottom:6}}>{T.colorLabel}</div>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            {/* Native color picker — opens OS color wheel on mobile */}
            <label style={{position:"relative",cursor:"pointer",flexShrink:0}} title={lang==="fr"?"Choisir une couleur":"Pick any color"}>
              <div style={{width:36,height:36,borderRadius:"50%",background:color,border:"3px solid #fff",boxShadow:`0 0 0 2px ${color}`,cursor:"pointer",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontSize:14,filter:"brightness(0) invert(1)",opacity:.7}}>🎨</span>
              </div>
              <input type="color" value={color} onChange={e=>setColor(e.target.value)}
                style={{position:"absolute",inset:0,opacity:0,cursor:"pointer",width:"100%",height:"100%"}}/>
            </label>
            <div style={{width:1,height:28,background:C.border,flexShrink:0}}/>
            {/* Quick swatches */}
            {COLORS.map(c=>(
              <div key={c} onClick={()=>setColor(c)}
                style={{width:24,height:24,borderRadius:"50%",background:c,cursor:"pointer",
                  border:color===c?"3px solid #fff":"2px solid transparent",
                  boxShadow:color===c?`0 0 0 2px ${c}`:"none",
                  transition:"all .15s",flexShrink:0}}/>
            ))}
          </div>
          <div style={{fontSize:10,color:C.muted,marginTop:6}}>
            {lang==="fr"?"🎨 = roue chromatique complète · pastilles = couleurs rapides":"🎨 = full color wheel · dots = quick picks"}
          </div>
        </div>

        <div style={{display:"flex",gap:8}}>
          <Btn onClick={()=>{ if(!name.trim()||!selCats.length) return; onSave({name:name.trim(),machineType:mType,categories:selCats,notes,color,goalWeight:goal||null,photo}); }} style={{flex:1}}>{machine?T.updateBtn:T.addMachineFormBtn}</Btn>
          <Btn onClick={onCancel} variant="ghost">{lang==="fr"?"Annuler":"Cancel"}</Btn>
        </div>
      </div>
    </Card>
  );
};

const SettingsPage = ({ data, setData, T, lang }) => {
  const [adding,     setAdding]     = useState(false);
  const [editing,    setEditing]    = useState(null);
  const [editingTpl, setEditingTpl] = useState(null);
  const [newCat,     setNewCat]     = useState("");
  const [addingCat,  setAddingCat]  = useState(false);
  const [clearStep,  setClearStep]  = useState(0);
  const [catFilter,  setCatFilter]  = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const addMachine   =(form)=>{ setData(d=>({...d,machines:[...d.machines,{id:uid(),...form}]})); setAdding(false); };
  const updateMachine=(id,form)=>{ setData(d=>({...d,machines:d.machines.map(m=>m.id===id?{...m,...form}:m)})); setEditing(null); };
  const deleteMachine=(id)=>setData(d=>({...d,machines:d.machines.filter(m=>m.id!==id)}));
  const moveMachine  =(id,dir)=>setData(d=>{ const ms=[...d.machines],i=ms.findIndex(m=>m.id===id); if(i+dir<0||i+dir>=ms.length)return d; [ms[i],ms[i+dir]]=[ms[i+dir],ms[i]]; return {...d,machines:ms}; });
  const addCategory  =()=>{ const c=newCat.trim(); if(!c||data.categories.includes(c))return; setData(d=>({...d,categories:[...d.categories,c]})); setNewCat(""); setAddingCat(false); };
  const delCategory  =(cat)=>setData(d=>({...d,categories:d.categories.filter(c=>c!==cat)}));
  const clearSessions=()=>{ if(clearStep===0){setClearStep(1);setTimeout(()=>setClearStep(0),4000);return;} const n={...data,sessions:[]}; save(n); setData(()=>n); setClearStep(0); };
  const updateTemplate=(updated)=>{ setData(d=>({...d,savedCircuits:d.savedCircuits.map(c=>c.id===updated.id?updated:c)})); setEditingTpl(null); };
  const updateSettings=(patch)=>setData(d=>({...d,settings:{...(d.settings||{}), ...patch}}));

  let filtered=data.machines;
  if (typeFilter) filtered=filtered.filter(m=>m.machineType===typeFilter);
  if (catFilter)  filtered=filtered.filter(m=>getCats(m).includes(catFilter));

  const settings=data.settings||{};

  return (
    <div style={{padding:"0 0 80px"}}>
      <div style={{marginBottom:14}}>
        <div style={{fontSize:22,fontWeight:800,color:C.text}}>{T.setupTitle}</div>
        <div style={{fontSize:13,color:C.muted}}>{T.setupSub}</div>
      </div>

      {/* ── App settings ── */}
      <SecLabel>{lang==="fr"?"PRÉFÉRENCES":"PREFERENCES"}</SecLabel>
      <Card style={{marginBottom:14}}>
        {/* Rest timer */}
        <div style={{marginBottom:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
            <div style={{fontSize:13,fontWeight:600,color:C.text}}>⏱ {T.restTimerSetup}</div>
            <span style={{fontSize:14,fontWeight:800,color:settings.restTimerSecs===0?C.muted:C.accent}}>
              {settings.restTimerSecs===0?(lang==="fr"?"Désactivé":"Off"):`${settings.restTimerSecs}s`}
            </span>
          </div>
          <input type="range" min="0" max="300" step="15"
            value={settings.restTimerSecs??90}
            onChange={e=>updateSettings({restTimerSecs:+e.target.value})}
            style={{width:"100%",accentColor:C.accent}}/>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:C.muted,marginTop:2}}>
            <span>{lang==="fr"?"Off":"Off"}</span><span>1 min</span><span>2 min</span><span>5 min</span>
          </div>
          {settings.restTimerSecs===0&&<div style={{fontSize:11,color:C.muted,marginTop:4,fontStyle:"italic"}}>{lang==="fr"?"Aucun timer ne s'affichera après les séries.":"No timer will appear after sets."}</div>}
        </div>
        {/* Inactivity reminder */}
        <div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
            <div style={{fontSize:13,fontWeight:600,color:C.text}}>🔔 {T.reminderSetup}</div>
            <span style={{fontSize:14,fontWeight:800,color:C.purple}}>{settings.reminderDays?`${settings.reminderDays}j`:T.reminderOff}</span>
          </div>
          <input type="range" min="0" max="14" step="1" value={settings.reminderDays||0}
            onChange={e=>updateSettings({reminderDays:+e.target.value})}
            style={{width:"100%",accentColor:C.purple}}/>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:C.muted,marginTop:2}}>
            <span>{T.reminderOff}</span><span>3j</span><span>7j</span><span>14j</span>
          </div>
        </div>
      </Card>

      <SecLabel>{T.categoriesLabel}</SecLabel>
      <Card style={{marginBottom:14}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>
          {data.categories.map(cat=>(
            <div key={cat} style={{display:"flex",alignItems:"center",gap:4,background:C.bg2,borderRadius:20,padding:"4px 10px",border:`1px solid ${C.border}`}}>
              <span style={{fontSize:13,color:C.text}}>{cat}</span>
              <span onClick={()=>delCategory(cat)} style={{fontSize:12,color:C.danger,cursor:"pointer",marginLeft:2}}>✕</span>
            </div>
          ))}
        </div>
        {addingCat?<div style={{display:"flex",gap:8}}>
            <input value={newCat} onChange={e=>setNewCat(e.target.value)} placeholder={T.newCatPH} style={{...inlineInputStyle,flex:1}}/>
            <Btn small onClick={addCategory}>{T.addCatBtn}</Btn><Btn small variant="ghost" onClick={()=>setAddingCat(false)}>{lang==="fr"?"Annuler":"Cancel"}</Btn>
          </div>
          :<Btn small variant="outline" onClick={()=>setAddingCat(true)}>{T.newCatBtn}</Btn>}
      </Card>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <SecLabel style={{margin:"18px 0 8px"}}>{T.machinesSetupLabel}</SecLabel>
        {!adding&&<Btn small variant="outline" onClick={()=>setAdding(true)}>{T.addNewMachine}</Btn>}
      </div>
      <div style={{marginBottom:6}}><TypeFilter value={typeFilter} onChange={setTypeFilter} T={T} small/></div>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
        <span onClick={()=>setCatFilter(null)} style={{padding:"3px 9px",borderRadius:12,cursor:"pointer",fontSize:11,fontWeight:600,border:`1.5px solid ${!catFilter?C.blue:C.border}`,color:!catFilter?C.blue:C.muted}}>{T.allCats}</span>
        {data.categories.map(c=><span key={c} onClick={()=>setCatFilter(catFilter===c?null:c)} style={{padding:"3px 9px",borderRadius:12,cursor:"pointer",fontSize:11,fontWeight:600,border:`1.5px solid ${catFilter===c?C.blue:C.border}`,color:catFilter===c?C.blue:C.muted}}>{c}</span>)}
      </div>

      {adding&&<MachineForm categories={data.categories} onSave={addMachine} onCancel={()=>setAdding(false)} T={T} lang={lang}/>}
      {filtered.map(m=>{ const realIdx=data.machines.findIndex(x=>x.id===m.id); return (
        <div key={m.id}>
          {editing===m.id
            ?<MachineForm machine={m} categories={data.categories} onSave={f=>updateMachine(m.id,f)} onCancel={()=>setEditing(null)} T={T} lang={lang}/>
            :(<Card style={{marginBottom:8,borderLeft:`3px solid ${m.color}`,padding:"12px 14px"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                {m.photo&&<img src={m.photo} alt="" style={{width:40,height:40,borderRadius:8,objectFit:"cover",flexShrink:0}}/>}
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                    <span style={{fontWeight:700,color:C.text,fontSize:14}}>{m.name}</span><TypeBadge type={m.machineType}/>{getCats(m).map(c=><CatBadge key={c} cat={c}/>)}
                  </div>
                  {m.notes&&<div style={{fontSize:11,color:C.muted,marginTop:2}}>{m.notes}</div>}
                  {m.goalWeight&&<div style={{fontSize:11,color:C.accent,marginTop:2}}>🎯 {lang==="fr"?"Objectif":"Goal"}: {m.goalWeight}kg</div>}
                </div>
                <div style={{display:"flex",gap:4}}>
                  <Btn small variant="ghost" onClick={()=>moveMachine(m.id,-1)} disabled={realIdx===0}>↑</Btn>
                  <Btn small variant="ghost" onClick={()=>moveMachine(m.id,1)} disabled={realIdx===data.machines.length-1}>↓</Btn>
                  <Btn small variant="ghost" onClick={()=>setEditing(m.id)}>✎</Btn>
                  <Btn small variant="danger" onClick={()=>deleteMachine(m.id)}>✕</Btn>
                </div>
              </div>
            </Card>)
          }
        </div>
      );})}

      {(data.savedCircuits||[]).length>0&&(
        <><SecLabel>{T.circuitTemplatesLabel}</SecLabel>
          {data.savedCircuits.map(sc=>(
            <div key={sc.id}>
              {editingTpl===sc.id
                ?<CircuitTemplateEditor template={sc} machines={data.machines} categories={data.categories} savedCircuits={data.savedCircuits} onSave={updateTemplate} onCancel={()=>setEditingTpl(null)} T={T} lang={lang}/>
                :(<Card style={{marginBottom:8,borderLeft:`3px solid ${C.teal}`,padding:"12px 14px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <div style={{fontWeight:700,color:C.text,fontSize:14}}>{sc.name}</div>
                      <div style={{fontSize:11,color:C.muted}}>{sc.machineIds?.map(id=>data.machines.find(m=>m.id===id)?.name).filter(Boolean).join(" · ")}</div>
                      <div style={{fontSize:11,color:C.muted}}>{sc.rounds} {T.roundsLabel.toLowerCase()}</div>
                    </div>
                    <div style={{display:"flex",gap:4}}>
                      <Btn small variant="ghost" onClick={()=>setEditingTpl(sc.id)}>✎</Btn>
                      <Btn small variant="danger" onClick={()=>setData(d=>({...d,savedCircuits:d.savedCircuits.filter(c=>c.id!==sc.id)}))}>✕</Btn>
                    </div>
                  </div>
                </Card>)
              }
            </div>
          ))}
        </>
      )}

      <SecLabel>{T.dataLabel}</SecLabel>
      <Card style={{marginBottom:10}}>
        <div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:10}}>EXPORT / IMPORT</div>
        <div style={{display:"flex",gap:8,marginBottom:8}}>
          <Btn variant="outline" small style={{flex:1}} onClick={()=>{
            const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
            const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url;
            a.download=`gymtrack-backup-${todayStr()}.json`; a.click(); URL.revokeObjectURL(url);
          }}>⬇ {lang==="fr"?"Exporter":"Export"}</Btn>
          <label style={{flex:1}}>
            <div style={{background:"transparent",border:`1px solid ${C.accent}`,borderRadius:8,color:C.accent,fontWeight:600,fontSize:12,padding:"6px 12px",textAlign:"center",cursor:"pointer",lineHeight:"1.2",display:"block",userSelect:"none"}}>
              ⬆ {lang==="fr"?"Importer":"Import"}
            </div>
            <input type="file" accept=".json" style={{display:"none"}} onChange={e=>{
              const file=e.target.files[0]; if(!file) return;
              const reader=new FileReader();
              reader.onload=ev=>{ try { const imp=JSON.parse(ev.target.result); if(!imp.machines||!imp.sessions){alert(lang==="fr"?"Fichier invalide.":"Invalid file.");return;} if(window.confirm(lang==="fr"?"Remplacer toutes les données ?":"Replace all data?")){save(imp);setData(()=>imp);} } catch{alert(lang==="fr"?"Erreur de lecture.":"Could not read file.");} };
              reader.readAsText(file); e.target.value="";
            }}/>
          </label>
        </div>
        <div style={{fontSize:11,color:C.muted}}>{lang==="fr"?"Sauvegarde toutes vos machines, circuits et séances.":"Saves all your machines, circuits and sessions."}</div>
      </Card>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div><div style={{fontWeight:600,color:C.text}}>{T.sessionHistory}</div><div style={{fontSize:12,color:C.muted}}>{T.sessionsRecorded(data.sessions.length)}</div></div>
          <Btn small variant="danger" onClick={clearSessions}>{clearStep===1?T.confirmDeleteBtn:T.clearAll}</Btn>
        </div>
        {clearStep===1&&<div style={{marginTop:8,fontSize:12,color:C.danger}}>{T.confirmDeleteMsg(data.sessions.length)}</div>}
      </Card>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [data, setDataRaw] = useState(()=>{
    const s=load();
    if(!s) return defaultData();
    if(!s.categories) s.categories=["Push","Pull","Legs","Core","Chest","Back","Shoulders","Arms","Cardio","Other"];
    if(!s.savedCircuits) s.savedCircuits=[];
    if(!s.settings) s.settings={restTimerSecs:90,reminderDays:3};
    s.machines=s.machines.map(m=>({machineType:"weight",goalWeight:null,photo:null,...m,categories:Array.isArray(m.categories)?m.categories:(m.category?[m.category]:["Other"])}));
    return s;
  });
  const [page,    setPage]    = useState(0);
  const [lang,    setLang]    = useState("en");
  const T = TR[lang];

  // Session-in-progress state (global, shared via context)
  const [sessionActive, setSessionActive] = useState(false);
  const elapsedRef = useRef(0);
  const startSession = useCallback(()=>{ elapsedRef.current=0; setSessionActive(true); },[]);
  const endSession   = useCallback(()=>{ setSessionActive(false); },[]);
  const sessionCtx   = { active:sessionActive, elapsedRef, startSession, endSession };

  const setData = useCallback((updater)=>{ setDataRaw(d=>{ const n=typeof updater==="function"?updater(d):updater; save(n); return n; }); },[]);

  // Repeat session — lifted to App so Stats can trigger it and navigate to Train
  const [pendingRepeat, setPendingRepeat] = useState(null);
  const triggerRepeat = useCallback((session) => {
    setPendingRepeat(session);
    setPage(0);
  }, []);
  const tabs=[{icon:"🏋️",label:T.navTrain},{icon:"📊",label:T.navStats},{icon:"⚙️",label:T.navSetup}];

  return (
    <LangCtx.Provider value={lang}>
      <SessionCtx.Provider value={sessionCtx}>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}} @keyframes prPop{0%{transform:scale(.7);opacity:0}70%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}`}</style>
        <div style={{background:C.bg,minHeight:"100vh",fontFamily:"'Segoe UI',system-ui,sans-serif",color:C.text}}>
          <div style={{maxWidth:480,margin:"0 auto"}}>
            {/* Header */}
            <div style={{padding:"14px 14px 8px",borderBottom:`1px solid ${C.border}`,marginBottom:0,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:32,height:32,borderRadius:8,background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>💪</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                  <div style={{fontWeight:800,fontSize:16,color:C.text,letterSpacing:"-0.5px"}}>GymTrack</div>
                  <div style={{fontSize:10,color:C.muted}}>{T.appVersion}</div>
                </div>
                <div style={{fontSize:11,color:C.muted}}>
                  {new Date().toLocaleDateString(lang==="fr"?"fr-FR":"en-GB",{weekday:"long",day:"numeric",month:"long"})}
                </div>
              </div>
              {/* Language toggle — SVG flags */}
              <div onClick={()=>setLang(l=>l==="en"?"fr":"en")}
                title={lang==="en"?"Passer en français":"Switch to English"}
                style={{cursor:"pointer",borderRadius:"50%",overflow:"hidden",width:34,height:34,flexShrink:0,border:`2px solid ${C.border}`,transition:"border-color .15s",display:"flex",alignItems:"center",justifyContent:"center"}}
                onMouseEnter={e=>e.currentTarget.style.borderColor=C.accent}
                onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
                {lang==="en"?(
                  <svg width="34" height="34" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="40" fill="#012169"/>
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/>
                    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
                  </svg>
                ):(
                  <svg width="34" height="34" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="40" fill="#002395"/>
                    <rect x="20" width="20" height="40" fill="#fff"/>
                    <rect x="40" width="20" height="40" fill="#ED2939"/>
                  </svg>
                )}
              </div>
            </div>
            {/* Session banner — always visible */}
            <SessionBanner T={T} lang={lang}/>
            {/* Pages */}
            <div style={{padding:"0 14px"}}>
              {page===0&&<TrainingPage data={data} setData={setData} T={T} lang={lang} pendingRepeat={pendingRepeat} onRepeatConsumed={()=>setPendingRepeat(null)}/>}
              {page===1&&<StatsPage    data={data} setData={setData} T={T} lang={lang} onRepeat={triggerRepeat}/>}
              {page===2&&<SettingsPage data={data} setData={setData} T={T} lang={lang}/>}
            </div>
          </div>
          {/* Nav */}
          <div style={{position:"fixed",bottom:0,left:0,right:0,background:C.bg2,borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-around",padding:"8px 0 10px"}}>
            {tabs.map((t,i)=>(
              <div key={i} onClick={()=>setPage(i)}
                style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer",padding:"4px 20px",borderRadius:8,color:page===i?C.accent:C.muted,transition:"color .15s",position:"relative"}}>
                <div style={{fontSize:20}}>{t.icon}</div>
                <div style={{fontSize:11,fontWeight:page===i?700:400}}>{t.label}</div>
                {/* Session active dot on Train tab */}
                {i===0&&sessionActive&&<div style={{position:"absolute",top:2,right:14,width:8,height:8,borderRadius:"50%",background:C.success,border:`2px solid ${C.bg2}`}}/>}
              </div>
            ))}
          </div>
        </div>
      </SessionCtx.Provider>
    </LangCtx.Provider>
  );
}
