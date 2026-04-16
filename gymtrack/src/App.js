
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from "react"; // eslint-disable-line no-unused-vars

const LangCtx = createContext("en");
const useLang = () => useContext(LangCtx);
const SessionCtx = createContext(null);

// ─── Translations ──────────────────────────────────────────────────────────────
const TR = {
  en: {
    appVersion:"v2.5",
    navTrain:"Train", navStats:"Stats", navSetup:"Setup", navPlan:"Plan",
    fitnessScore:"Fitness Score", fitnessScoreSub:"This week vs your average",
    fitnessFreq:"Frequency", fitnessVol:"Volume", fitnessStreak:"Streak", fitnessConsist:"Consistency",
    bodyWeightTitle:"BODY WEIGHT", bodyWeightAdd:"Log weight", bodyWeightPH:"kg",
    bwCurrent:"Current", bwStart:"Start", bwChange:"Total change",
    bwTrend7:"7-day trend", bwTrend30:"30-day trend",
    bwAvg:"Average", bwMin:"Min", bwMax:"Max",
    bwGaining:"gaining", bwLosing:"losing", bwStable:"stable",
    bwPeriods:"PERIOD COMPARISON",
    bwThisWeek:"This week", bwLastWeek:"Last week",
    bwThisMonth:"This month", bwLastMonth:"Last month",
    bwNoData:"No data yet — log your weight!",
    bwEntries:(n) => `${n} entr${n!==1?"ies":"y"}`,
    progressionSuggest:(kg) => `💡 Try ${kg}kg next session — you nailed all sets!`,
    sessionNotesLabel:"Session notes", sessionNotesPH:"How did it feel? Any pain? Coach tips...",
    sessionNotesHint:"Notes saved with this session",
    trainTitle:"Training Session", trainSub:"Log your workout in real time",
    trainDate:"Date",
    trainStartTimer:"▶ Start gym timer",
    timerPause:"⏸ Pause", timerResume:"▶ Resume", timerSave:"💾 Save", timerStop:"■ Stop",
    timerPaused:"Paused — tap Resume to continue",
    timerSavedTitle:"Timer saved", timerReset:"Reset",
    sessionInProgress:"SESSION IN PROGRESS",
    circuitsLabel:(n) => `CIRCUITS (${n})`,
    templatesBtn:"Templates", newCircuitBtn:"+ New circuit",
    savedTemplatesTitle:"Saved templates",
    machinesRounds:(m,r) => `${m} machines · ${r} rounds`,
    useBtn:"Use", repeatBtn:"🔁 Repeat this session",
    emptyCircuits:'Tap "+ New circuit" to start',
    machinesLabel:(n) => `MACHINES (${n})`,
    addMachineBtn:"+ Add machine", cancelBtn:"✕ Cancel",
    emptyMachines:'Tap "+ Add machine" to start',
    saveSessionBtn:(c,m) => `Save session${c ? ` · ${c} circuit${c!==1?"s":""}` : ""} ${m ? `· ${m} machine${m!==1?"s":""}` : ""}`,
    sessionSaved:"✓ Session saved!",
    confirmSaveMsg:"Session done? Tap again to confirm.",
    circuitsView:"Circuits", machinesView:"Machines",
    newCircuitName:"New circuit",
    circuitNameLabel:"Circuit name", circuitNamePH:"e.g. Upper body A",
    roundsLabel:"Rounds",
    machinesInCircuit:"MACHINES IN CIRCUIT",
    addMachineToCircuit:"+ Add machine to circuit",
    circuitRoundsDone:"Circuit rounds completed",
    circuitRoundHint:(n) => `1 round = all ${n} machine${n!==1?"s":""} once`,
    saveAsTemplate:"💾 Save as template", templateSavedBtn:"✓ Template saved!",
    weightKg:"Weight (kg)", setsLabel:"Sets", repsLabel:"Reps",
    seqCheckLabel:(r,d,s) => `Sets (${r} reps each) — ${d}/${s}`,
    durationMin:"Duration (min)", distanceKm:"Distance (km)", calories:"Calories",
    repsPerRound:"Reps/round", repsPerRoundLabel:"reps/round",
    addAMachine:"Add a machine",
    allTypes:"All types", weightType:"⚖️ Weight", cardioType:"🏃 Cardio",
    allCats:"All cats", noMachinesFilter:"No machines match this filter.",
    mixedSession:"Mixed session", circuitSession:"Circuit session", soloSession:"Machine by machine",
    noWeightRecorded:"no weight recorded",
    repsTotal:(r) => `= ${r} total reps`,
    newPR:"🏆 NEW PR!", prInSession:"⭐ PR",
    restTimerTitle:"Rest timer", restTimerSkip:"Skip rest",
    lastWeightUsed:"Last used:",
    statsTitle:"Stats Dashboard", statsSub:"Your full training overview",
    tabOverview:"📊 Overview", tabMachines:"🏋️ Machines", tabSessions:"📅 Sessions",
    statTotal:"Total", statMonth:"Month", statWeek:"Week",
    statAvgDur:"Avg duration", statLongest:"Longest", statStreak:"Streak",
    statStreakSub:"days in a row",
    roundsDoneLabel:(done,total) => `${done}/${total} rounds ✓`,
    daysAgo:(n) => `${n}d ago`,
    thisWeek:"THIS WEEK",
    sessionsByDay:"SESSIONS BY DAY (all time)",
    sessionsPerWeek:"SESSIONS PER WEEK",
    sessionsPerWeekSub:(avg) => `Each bar = one week. Avg: ${avg}/week`,
    sessionDuration:"SESSION DURATION (min)",
    shortest:"Shortest:", avgLabel:"Avg:", longestLabel:"Longest:",
    totalGymTime:"Total gym time:",
    heatmapTitle:"ACTIVITY — LAST 12 WEEKS",
    muscleVolumeTitle:"VOLUME BY MUSCLE GROUP (this month)",
    muscleVolumeSub:"Based on kg × sets × reps",
    allMachinesLabel:"ALL MACHINES",
    notEnoughData:"Not enough data (need ≥2 sessions)",
    tapDot:"Tap any dot to see exact value and date",
    weightOverTime:"WEIGHT OVER TIME (kg)",
    weightStart:"Start:", weightLatest:"Latest:",
    repsPerSetTitle:"REPS PER SET OVER TIME", repsPerSetSub:"Reps per set each session",
    setsPerSession:"SETS PER SESSION", setsPerSessionSub:"Number of sets each workout",
    volumePerSession:"VOLUME PER SESSION", volumePerSessionSub:"Total reps × weight per session",
    weightRepsTitle:"WEIGHT + REPS", weightRepsSub:"Solid = weight, dashed = reps",
    weightVolTitle:"WEIGHT + VOLUME", weightVolSub:"Solid = weight, dashed = volume",
    totalVolLifted:"Total volume lifted",
    durationOverTime:"DURATION OVER TIME (min)",
    distanceOverTime:"DISTANCE OVER TIME (km)",
    caloriesOverTime:"CALORIES BURNED",
    totalDistance:"Total distance",
    prLabel:"PR", avgWeight:"Avg weight", minWeight:"Min weight", totalSetsLabel:"Total sets",
    sessionsCount:(n) => `${n} session${n!==1?"s":""}`,
    bestDistance:"Best distance",
    goalLabel:"Goal",
    consistency:"CONSISTENCY",
    bestWeek:"Best week", daysActive:"Days active", currentStreak:"Streak",
    allSessionsTitle:"ALL SESSIONS — tap to expand",
    tapForDetails:"tap →",
    setupTitle:"Equipment & Setup", setupSub:"Manage machines and categories",
    categoriesLabel:"CATEGORIES",
    newCatPH:"New category name", addCatBtn:"Add", newCatBtn:"+ New category",
    machinesSetupLabel:"MACHINES", addNewMachine:"+ Add new",
    circuitTemplatesLabel:"CIRCUIT TEMPLATES",
    dataLabel:"DATA",
    sessionHistory:"Session history",
    sessionsRecorded:(n) => `${n} sessions recorded`,
    clearAll:"Clear all", confirmDeleteBtn:"⚠️ Confirm",
    confirmDeleteMsg:(n) => `Permanently deletes all ${n} sessions. Tap again.`,
    newMachineTitle:"New machine", editMachineTitle:"Edit machine",
    machineNameLabel:"Machine name *", machineNamePH:"e.g. Leg Extension",
    typeLabel:"Type", typeDesc:"(determines what you track)",
    weightMachineLabel:"Weight machine", weightMachineSub:"tracks kg, sets, reps",
    cardioMachineLabel:"Cardio", cardioMachineSub:"tracks time, km, kcal",
    catsLabel:"Categories", catsDesc:"(muscle groups / workout type)",
    cardioTip:'Tip: "Cardio" category is optional for pure cardio equipment.',
    seatLabel:"Seat / pad settings", seatPH:"e.g. Seat: 3, Back pad: 4",
    photoLabel:"Machine photo", takePhoto:"📷 Take photo", changePhoto:"📷 Change photo",
    goalWeightLabel:"Goal weight (kg)", goalWeightPH:"e.g. 130",
    goalKmLabel:"Goal distance (km)", goalKmPH:"e.g. 10",
    goalDurLabel:"Goal duration (min)", goalDurPH:"e.g. 45",
    goalKcalLabel:"Goal calories", goalKcalPH:"e.g. 400",
    cardioGoalsLabel:"Cardio goals",
    unilateralLabel:"Unilateral (one side)", unilateralHint:"Split sets: Left / Right",
    unilateralLeft:"Left", unilateralRight:"Right",
    bothSides:"Both sides",
    goalProgressTitle:"GOAL PROGRESS",
    goalProgressSub:(pct) => `${pct}% of goal reached`,
    noGoalSet:"No goal set — add one in Setup",
    goalReached:"🏆 Goal reached!",
    colorLabel:"Color",
    updateBtn:"Update", addMachineFormBtn:"Add machine",
    pickCategoryWarn:"Pick at least one category",
    editTplTitle:"Edit circuit template", addMachineToTpl:"+ Add machine", saveTplBtn:"Save template",
    restTimerSetup:"Rest timer (seconds)",
    reminderSetup:"Inactivity reminder (days)",
    reminderOff:"Off",
    reminderMsg:(d) => `💪 You haven't trained in ${d} days — time to hit the gym!`,
    planTitle:"Planned Sessions", planSub:"Plan ahead — coach tips, ideas, future workouts.",
    newPlanBtn:"+ New plan",
    emptyPlans:"No planned sessions yet.\nAdd ideas, coach tips, future workouts.",
    planNameLabel:"Session title", planNamePH:"e.g. Leg day — coach advice",
    planDateLabel:"Planned for", planNotesLabel:"Notes / tips",
    planNotesPH:"Coach told me to try... / Saw video about...",
    planSaveBtn:"Save plan",
    planLoadBtn:"▶ Start this session",
    planLoaded:"✓ Loaded! Go to Train tab.",
    planCircuitsLabel:"Circuits in this plan",
    planMachinesLabel:"Machines in this plan",
    planUpcoming:"UPCOMING", planPast:"PAST PLANS", planToday:"Today",
  },
  fr: {
    appVersion:"v2.5",
    navTrain:"Entraîner", navStats:"Stats", navSetup:"Config", navPlan:"Planifier",
    fitnessScore:"Score de forme", fitnessScoreSub:"Cette semaine vs ta moyenne",
    fitnessFreq:"Fréquence", fitnessVol:"Volume", fitnessStreak:"Série", fitnessConsist:"Régularité",
    bodyWeightTitle:"POIDS CORPOREL", bodyWeightAdd:"Peser", bodyWeightPH:"kg",
    bwCurrent:"Actuel", bwStart:"Départ", bwChange:"Variation totale",
    bwTrend7:"Tendance 7j", bwTrend30:"Tendance 30j",
    bwAvg:"Moyenne", bwMin:"Min", bwMax:"Max",
    bwGaining:"en hausse", bwLosing:"en baisse", bwStable:"stable",
    bwPeriods:"COMPARAISON PAR PÉRIODE",
    bwThisWeek:"Cette sem.", bwLastWeek:"Sem. passée",
    bwThisMonth:"Ce mois", bwLastMonth:"Mois passé",
    bwNoData:"Aucune donnée — pèse-toi !",
    bwEntries:(n) => `${n} mesure${n!==1?"s":""}`,
    progressionSuggest:(kg) => `💡 Essaie ${kg}kg la prochaine fois — tous tes sets réussis !`,
    sessionNotesLabel:"Notes de séance", sessionNotesPH:"Comment c'était ? Douleurs ? Conseils coach...",
    sessionNotesHint:"Notes sauvegardées avec cette séance",
    trainTitle:"Séance d'entraînement", trainSub:"Enregistrez votre séance en temps réel",
    trainDate:"Date",
    trainStartTimer:"▶ Démarrer le chrono",
    timerPause:"⏸ Pause", timerResume:"▶ Reprendre", timerSave:"💾 Sauver", timerStop:"■ Arrêter",
    timerPaused:"En pause — appuyez sur Reprendre pour continuer",
    timerSavedTitle:"Chrono sauvegardé", timerReset:"Réinitialiser",
    sessionInProgress:"SÉANCE EN COURS",
    circuitsLabel:(n) => `CIRCUITS (${n})`,
    templatesBtn:"Modèles", newCircuitBtn:"+ Nouveau circuit",
    savedTemplatesTitle:"Modèles sauvegardés",
    machinesRounds:(m,r) => `${m} machines · ${r} tours`,
    useBtn:"Utiliser", repeatBtn:"🔁 Refaire cette séance",
    emptyCircuits:'Appuyez sur "+ Nouveau circuit" pour commencer',
    machinesLabel:(n) => `MACHINES (${n})`,
    addMachineBtn:"+ Ajouter machine", cancelBtn:"✕ Annuler",
    emptyMachines:'Appuyez sur "+ Ajouter machine" pour commencer',
    saveSessionBtn:(c,m) => `Sauver séance${c ? ` · ${c} circuit${c!==1?"s":""}` : ""} ${m ? `· ${m} machine${m!==1?"s":""}` : ""}`,
    sessionSaved:"✓ Séance sauvegardée !",
    confirmSaveMsg:"Séance terminée ? Appuyez encore pour confirmer.",
    circuitsView:"Circuits", machinesView:"Machines",
    newCircuitName:"Nouveau circuit",
    circuitNameLabel:"Nom du circuit", circuitNamePH:"ex. Haut du corps A",
    roundsLabel:"Tours",
    machinesInCircuit:"MACHINES DU CIRCUIT",
    addMachineToCircuit:"+ Ajouter machine au circuit",
    circuitRoundsDone:"Tours du circuit complétés",
    circuitRoundHint:(n) => `1 tour = toutes les ${n} machine${n!==1?"s":""} une fois`,
    saveAsTemplate:"💾 Sauver comme modèle", templateSavedBtn:"✓ Modèle sauvegardé !",
    weightKg:"Poids (kg)", setsLabel:"Séries", repsLabel:"Reps",
    seqCheckLabel:(r,d,s) => `Séries (${r} reps chacune) — ${d}/${s}`,
    durationMin:"Durée (min)", distanceKm:"Distance (km)", calories:"Calories",
    repsPerRound:"Reps/tour", repsPerRoundLabel:"reps/tour",
    addAMachine:"Ajouter une machine",
    allTypes:"Tous types", weightType:"⚖️ Musculation", cardioType:"🏃 Cardio",
    allCats:"Toutes catégories", noMachinesFilter:"Aucune machine ne correspond.",
    mixedSession:"Séance mixte", circuitSession:"Séance en circuit", soloSession:"Machine par machine",
    noWeightRecorded:"pas de poids enregistré",
    repsTotal:(r) => `= ${r} reps au total`,
    newPR:"🏆 NOUVEAU RECORD !", prInSession:"⭐ Record",
    restTimerTitle:"Temps de repos", restTimerSkip:"Passer",
    lastWeightUsed:"Dernier poids :",
    statsTitle:"Tableau de bord", statsSub:"Vue complète de vos entraînements",
    tabOverview:"📊 Aperçu", tabMachines:"🏋️ Machines", tabSessions:"📅 Séances",
    statTotal:"Total", statMonth:"Mois", statWeek:"Semaine",
    statAvgDur:"Durée moy.", statLongest:"Plus longue", statStreak:"Série",
    statStreakSub:"jours consécutifs",
    roundsDoneLabel:(done,total) => `${done}/${total} tours ✓`,
    daysAgo:(n) => `${n}j`,
    thisWeek:"CETTE SEMAINE",
    sessionsByDay:"SÉANCES PAR JOUR (total)",
    sessionsPerWeek:"SÉANCES PAR SEMAINE",
    sessionsPerWeekSub:(avg) => `Chaque barre = une semaine. Moy. : ${avg}/semaine`,
    sessionDuration:"DURÉE DES SÉANCES (min)",
    shortest:"Plus courte :", avgLabel:"Moy. :", longestLabel:"Plus longue :",
    totalGymTime:"Temps total à la salle :",
    heatmapTitle:"ACTIVITÉ — 12 DERNIÈRES SEMAINES",
    muscleVolumeTitle:"VOLUME PAR GROUPE MUSCULAIRE (ce mois)",
    muscleVolumeSub:"Basé sur kg × séries × reps",
    allMachinesLabel:"TOUTES LES MACHINES",
    notEnoughData:"Pas assez de données (besoin ≥2 séances)",
    tapDot:"Appuyez sur un point pour voir la valeur et la date",
    weightOverTime:"POIDS AU FIL DU TEMPS (kg)",
    weightStart:"Début :", weightLatest:"Dernier :",
    repsPerSetTitle:"REPS PAR SÉRIE", repsPerSetSub:"Reps par série par séance",
    setsPerSession:"SÉRIES PAR SÉANCE", setsPerSessionSub:"Nombre de séries par entraînement",
    volumePerSession:"VOLUME PAR SÉANCE", volumePerSessionSub:"Reps × poids par séance",
    weightRepsTitle:"POIDS + REPS", weightRepsSub:"Trait = poids, pointillé = reps",
    weightVolTitle:"POIDS + VOLUME", weightVolSub:"Trait = poids, pointillé = volume",
    totalVolLifted:"Volume total soulevé",
    durationOverTime:"DURÉE AU FIL DU TEMPS (min)",
    distanceOverTime:"DISTANCE AU FIL DU TEMPS (km)",
    caloriesOverTime:"CALORIES BRÛLÉES",
    totalDistance:"Distance totale",
    prLabel:"Record", avgWeight:"Poids moy.", minWeight:"Poids min.", totalSetsLabel:"Séries totales",
    sessionsCount:(n) => `${n} séance${n!==1?"s":""}`,
    bestDistance:"Meilleure distance",
    goalLabel:"Objectif",
    consistency:"RÉGULARITÉ",
    bestWeek:"Meilleure semaine", daysActive:"Jours actifs", currentStreak:"Série actuelle",
    allSessionsTitle:"TOUTES LES SÉANCES — appuyer pour détails",
    tapForDetails:"→",
    setupTitle:"Équipement & Config.", setupSub:"Gérez vos machines et catégories",
    categoriesLabel:"CATÉGORIES",
    newCatPH:"Nom de la nouvelle catégorie", addCatBtn:"Ajouter", newCatBtn:"+ Nouvelle catégorie",
    machinesSetupLabel:"MACHINES", addNewMachine:"+ Ajouter",
    circuitTemplatesLabel:"MODÈLES DE CIRCUITS",
    dataLabel:"DONNÉES",
    sessionHistory:"Historique des séances",
    sessionsRecorded:(n) => `${n} séance${n!==1?"s":""} enregistrée${n!==1?"s":""}`,
    clearAll:"Tout supprimer", confirmDeleteBtn:"⚠️ Confirmer",
    confirmDeleteMsg:(n) => `Supprime définitivement les ${n} séances. Appuyez encore.`,
    newMachineTitle:"Nouvelle machine", editMachineTitle:"Modifier la machine",
    machineNameLabel:"Nom de la machine *", machineNamePH:"ex. Presse jambes",
    typeLabel:"Type", typeDesc:"(détermine ce que vous suivez)",
    weightMachineLabel:"Musculation", weightMachineSub:"suit kg, séries, reps",
    cardioMachineLabel:"Cardio", cardioMachineSub:"suit temps, km, kcal",
    catsLabel:"Catégories", catsDesc:"(groupes musculaires / type)",
    cardioTip:'Astuce : la catégorie "Cardio" est facultative pour les appareils cardio purs.',
    seatLabel:"Réglages siège / appui", seatPH:"ex. Siège : 3, Appui dos : 4",
    photoLabel:"Photo de la machine", takePhoto:"📷 Prendre une photo", changePhoto:"📷 Changer la photo",
    goalWeightLabel:"Objectif de poids (kg)", goalWeightPH:"ex. 130",
    goalKmLabel:"Objectif distance (km)", goalKmPH:"ex. 10",
    goalDurLabel:"Objectif durée (min)", goalDurPH:"ex. 45",
    goalKcalLabel:"Objectif calories", goalKcalPH:"ex. 400",
    cardioGoalsLabel:"Objectifs cardio",
    unilateralLabel:"Unilatéral (un côté)", unilateralHint:"Séries séparées : Gauche / Droite",
    unilateralLeft:"Gauche", unilateralRight:"Droite",
    bothSides:"Les deux côtés",
    goalProgressTitle:"PROGRESSION OBJECTIF",
    goalProgressSub:(pct) => `${pct}% de l'objectif atteint`,
    noGoalSet:"Pas d'objectif — en ajouter un dans Config",
    goalReached:"🏆 Objectif atteint !",
    colorLabel:"Couleur",
    updateBtn:"Mettre à jour", addMachineFormBtn:"Ajouter machine",
    pickCategoryWarn:"Sélectionnez au moins une catégorie",
    editTplTitle:"Modifier le modèle de circuit", addMachineToTpl:"+ Ajouter machine", saveTplBtn:"Sauver le modèle",
    restTimerSetup:"Timer de repos (secondes)",
    reminderSetup:"Rappel d'inactivité (jours)",
    reminderOff:"Off",
    reminderMsg:(d) => `💪 Tu n'as pas été à la salle depuis ${d} jours — c'est l'heure !`,
    planTitle:"Séances planifiées", planSub:"Planifie à l'avance — conseils coach, idées, futures séances.",
    newPlanBtn:"+ Nouveau plan",
    emptyPlans:"Aucun plan pour l'instant.\nAjoute des idées, conseils de coach, séances futures.",
    planNameLabel:"Titre de la séance", planNamePH:"ex. Jambes — conseil coach",
    planDateLabel:"Prévue le", planNotesLabel:"Notes / conseils",
    planNotesPH:"Mon coach m'a dit... / J'ai vu une vidéo sur...",
    planSaveBtn:"Sauver le plan",
    planLoadBtn:"▶ Démarrer cette séance",
    planLoaded:"✓ Chargé ! Va dans l'onglet Entraîner.",
    planCircuitsLabel:"Circuits du plan",
    planMachinesLabel:"Machines du plan",
    planUpcoming:"À VENIR", planPast:"PLANS PASSÉS", planToday:"Aujourd'hui",
  },
};

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg:"#0d0e10", bg2:"#15171a", card:"#21252b",
  border:"#2c3038", accent:"#f97316", text:"#e8eaed", muted:"#7a8292",
  success:"#22c55e", danger:"#ef4444", blue:"#3b82f6",
  purple:"#a855f7", teal:"#14b8a6", yellow:"#eab308",
};

// ─── Storage ──────────────────────────────────────────────────────────────────
const KEY = "gymtracker";
const DATA_VER = 3;
const OLD_KEYS = ["gymtracker_v7","gymtracker_v6","gymtracker_v5","gymtracker_v4","gymtracker_v3"];
const load = () => { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch { return null; } };
const loadLegacy = () => {
  for (const k of OLD_KEYS) {
    try { const r = localStorage.getItem(k); if (r) { const p = JSON.parse(r); if (p && (p.machines || p.sessions)) return { data: p, key: k }; } } catch {}
  }
  return null;
};
const deleteLegacy = () => OLD_KEYS.forEach(k => { try { localStorage.removeItem(k); } catch {} });
const save = (d) => { try { localStorage.setItem(KEY, JSON.stringify({ ...d, _v: DATA_VER })); } catch {} };

const defaultData = () => ({
  machines: [
    { id:"m1", name:"Chest Press",    machineType:"weight", categories:["Push","Chest"],     notes:"Seat: 3",  color:"#ef4444", goalWeight:null, photo:null },
    { id:"m2", name:"Lat Pulldown",   machineType:"weight", categories:["Pull","Back"],      notes:"",         color:"#3b82f6", goalWeight:null, photo:null },
    { id:"m3", name:"Leg Press",      machineType:"weight", categories:["Legs"],             notes:"",         color:"#22c55e", goalWeight:null, photo:null },
    { id:"m4", name:"Shoulder Press", machineType:"weight", categories:["Push","Shoulders"], notes:"",         color:"#a855f7", goalWeight:null, photo:null },
    { id:"m5", name:"Cable Row",      machineType:"weight", categories:["Pull","Back"],      notes:"",         color:"#f97316", goalWeight:null, photo:null },
    { id:"m6", name:"Treadmill",      machineType:"cardio", categories:["Cardio"],           notes:"",         color:"#14b8a6", goalWeight:null, photo:null },
    { id:"m7", name:"Bike",           machineType:"cardio", categories:["Cardio","Legs"],    notes:"",         color:"#eab308", goalWeight:null, photo:null },
  ],
  categories: ["Push","Pull","Legs","Core","Chest","Back","Shoulders","Arms","Cardio","Other"],
  savedCircuits: [],
  sessions: [],
  plannedSessions: [],
  settings: { restTimerSecs: 90, reminderDays: 3 },
  bodyWeights: [], // [{date, kg}]
});

// ─── Utils ────────────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 10);
const fmtDur = (s) => {
  if (!s && s !== 0) return "—";
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h > 0 ? `${h}h ${m}m` : m > 0 ? `${m}m ${sec}s` : `${sec}s`;
};
const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" });
const fmtDateShort = (d) => { const dt = new Date(d); return `${String(dt.getDate()).padStart(2,"0")}/${String(dt.getMonth()+1).padStart(2,"0")}`; };
const todayStr = () => new Date().toISOString().slice(0, 10);
const weekStartMs = () => { const d = new Date(); d.setDate(d.getDate()-d.getDay()); d.setHours(0,0,0,0); return d.getTime(); };
const getCats = (m) => Array.isArray(m?.categories) ? m.categories : (m?.category ? [m.category] : []);
const normalizeData = (s) => {
  if (!s) return defaultData();
  if (!s.categories) s.categories = ["Push","Pull","Legs","Core","Chest","Back","Shoulders","Arms","Cardio","Other"];
  if (!s.savedCircuits) s.savedCircuits = [];
  if (!s.settings) s.settings = { restTimerSecs: 90, reminderDays: 3 };
  if (!s.plannedSessions) s.plannedSessions = [];
  if (!s.bodyWeights) s.bodyWeights = [];
  s.machines = s.machines.map(m => ({
    machineType:"weight", goalWeight:null, goalKm:null, goalDurMin:null, goalKcal:null, photo:null, unilateral:false, ...m,
    categories: Array.isArray(m.categories) ? m.categories : (m.category ? [m.category] : ["Other"]),
  }));
  return s;
};

// ─── Shared UI ─────────────────────────────────────────────────────────────────
const COLORS = ["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6","#ec4899","#14b8a6"];

const Btn = ({ children, onClick, variant="primary", small, style, disabled }) => {
  const base = {
    border:"none", borderRadius:8, cursor: disabled ? "default" : "pointer",
    fontWeight:600, fontFamily:"inherit", transition:"all .15s",
    padding: small ? "6px 12px" : "10px 20px",
    fontSize: small ? 12 : 14, opacity: disabled ? .4 : 1, lineHeight:"1.2",
  };
  const vs = {
    primary: { background:C.accent, color:"#fff" },
    ghost: { background:"transparent", color:C.muted, border:`1px solid ${C.border}` },
    danger: { background:C.danger, color:"#fff" },
    success: { background:C.success, color:"#0a0a0a" },
    outline: { background:"transparent", border:`1px solid ${C.accent}`, color:C.accent },
    purple: { background:C.purple, color:"#fff" },
    teal: { background:C.teal, color:"#fff" },
    yellow: { background:C.yellow, color:"#0a0a0a" },
  };
  return <button disabled={disabled} onClick={onClick} style={{ ...base, ...vs[variant], ...style }}>{children}</button>;
};

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{ background:C.card, borderRadius:12, border:`1px solid ${C.border}`, padding:16, cursor: onClick ? "pointer" : undefined, ...style }}>
    {children}
  </div>
);

const Input = ({ value, onChange, placeholder, type="text", style }) => (
  <input
    type={type} value={value}
    min={type === "number" ? "0" : undefined}
    onChange={e => { const v = e.target.value; onChange(type==="number" && v!=="" && +v<0 ? "0" : v); }}
    placeholder={placeholder}
    style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none", ...style }}
  />
);

const SecLabel = ({ children, style }) => (
  <div style={{ fontSize:11, fontWeight:700, color:C.muted, letterSpacing:"0.07em", margin:"18px 0 8px", ...style }}>{children}</div>
);

const CatBadge = ({ cat }) => (
  <span style={{ background:C.bg2, border:`1px solid ${C.border}`, color:C.muted, borderRadius:5, padding:"1px 7px", fontSize:10, fontWeight:600 }}>{cat}</span>
);

const TypeBadge = ({ type }) => {
  if (type === "cardio") return <span style={{ background:C.teal+"22", border:`1px solid ${C.teal}44`, color:C.teal, borderRadius:5, padding:"1px 7px", fontSize:10, fontWeight:700 }}>CARDIO</span>;
  if (type === "weight") return <span style={{ background:C.accent+"22", border:`1px solid ${C.accent}44`, color:C.accent, borderRadius:5, padding:"1px 7px", fontSize:10, fontWeight:700 }}>WEIGHT</span>;
  return null;
};

const TypeFilter = ({ value, onChange, T, small }) => (
  <div style={{ display:"flex", gap:5 }}>
    {[{ v:null, label:T.allTypes }, { v:"weight", label:T.weightType }, { v:"cardio", label:T.cardioType }].map(({ v, label }) => {
      const active = v === null ? value === null : value === v;
      return (
        <span key={String(v)} onClick={() => onChange(value === v ? null : v)}
          style={{ padding: small ? "3px 9px" : "5px 14px", borderRadius:18, cursor:"pointer", fontSize: small ? 11 : 12, fontWeight:600,
            border:`2px solid ${active ? C.accent : C.border}`, background: active ? C.accent+"22" : "transparent",
            color: active ? C.accent : C.muted, transition:"all .15s" }}>
          {label}
        </span>
      );
    })}
  </div>
);

// ─── Charts ───────────────────────────────────────────────────────────────────
// ─── GoalLineChart: LineChart with a goal reference line ─────────────────────
const GoalLineChart = ({ points, labels, goal, color=C.accent, height=52 }) => {
  const [tip, setTip] = useState(null);
  const T = TR[useLang()];
  if (!points || points.length < 2) return null;
  const W=280, H=height, PAD=28;
  const valid = points.filter(v => v > 0);
  if (!valid.length) return null;
  const allVals = [...valid, goal].filter(Boolean);
  const mx = Math.max(...allVals), mn = Math.min(...allVals);
  const yPad = (mx - mn) * 0.12;
  const yMin = mn - yPad, yMax = mx + yPad;
  const py = v => H - 8 - ((v - yMin) / (yMax - yMin || 1)) * (H - 16);

  const timestamps = labels ? labels.map(parseDateLabel) : null;
  const hasTs = timestamps && timestamps.every(t => t !== null);
  const tMin = hasTs ? Math.min(...timestamps) : 0;
  const tRange = hasTs ? (Math.max(...timestamps) - tMin || 1) : (points.length - 1 || 1);
  const px = i => hasTs ? PAD + ((timestamps[i] - tMin) / tRange) * (W - PAD*2) : PAD + (i/(points.length-1))*(W-PAD*2);

  const d = points.map((v,i) => `${i===0?"M":"L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  const goalY = py(goal);
  const goalColor = points[points.length-1] >= goal ? C.success : C.yellow;

  return (
    <div style={{ position:"relative", userSelect:"none" }} onClick={() => setTip(null)}>
      <div style={{ position:"absolute", left:0, top:0, height:H, display:"flex", flexDirection:"column", justifyContent:"space-between", pointerEvents:"none", width:PAD-4 }}>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mx.toFixed(0)}</span>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mn.toFixed(0)}</span>
      </div>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow:"visible", display:"block" }}>
        {/* Goal reference line */}
        {goal && goalY >= 0 && goalY <= H && (
          <g>
            <line x1={PAD} x2={W-PAD} y1={goalY} y2={goalY} stroke={goalColor} strokeWidth="1.5" strokeDasharray="6,3" opacity="0.8"/>
            <text x={W-PAD+3} y={goalY+4} fill={goalColor} fontSize="8" fontFamily="inherit" fontWeight="700">🎯</text>
          </g>
        )}
        {/* Fill area */}
        <path d={`${d} L${px(points.length-1).toFixed(1)},${H} L${PAD},${H} Z`} fill={color} fillOpacity="0.1"/>
        {/* Line */}
        <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Dots */}
        {points.map((v,i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r={tip?.i===i ? 6 : 4}
            fill={tip?.i===i ? "#fff" : C.card} stroke={color} strokeWidth="2" style={{ cursor:"pointer" }}
            onClick={e => { e.stopPropagation(); setTip(tip?.i===i ? null : { i, v, x:px(i), y:py(v), label:labels?.[i]||"" }); }}/>
        ))}
      </svg>
      {tip && (
        <div style={{ position:"absolute", background:C.bg, border:`1.5px solid ${color}`, borderRadius:8,
          padding:"5px 12px", fontSize:12, color:C.text, pointerEvents:"none", zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),75)}%`, top:Math.max(tip.y-36,0),
          transform:"translateX(-50%)", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(0,0,0,.6)" }}>
          <span style={{ fontWeight:800, color }}>{tip.v}kg</span>
          {tip.label && <span style={{ color:C.muted, marginLeft:6, fontSize:11 }}>{fmtLabelDisplay(tip.label)}</span>}
          {goal && <span style={{ color:goalColor, marginLeft:6, fontSize:10 }}>{tip.v>=goal?"✓":""}{((tip.v/goal)*100).toFixed(0)}%</span>}
        </div>
      )}
      {labels && labels.length >= 2 && (
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:2, paddingLeft:PAD, paddingRight:PAD }}>
          <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labels[0])}</span>
          <span style={{ fontSize:8, color:goalColor, fontWeight:700 }}>🎯 {goal}kg</span>
          <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labels[labels.length-1])}</span>
        </div>
      )}
    </div>
  );
};

// Parse date label to timestamp for proportional X spacing
// Accepts YYYY-MM-DD (preferred) or DD/MM (legacy)
const parseDateLabel = (label) => {
  if (!label) return null;
  // YYYY-MM-DD format (ISO) - most reliable
  if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
    const ts = new Date(label + "T12:00:00").getTime();
    return isNaN(ts) ? null : ts;
  }
  // DD/MM fallback - pick year that makes date closest to today & in the past
  if (label.includes("/")) {
    const parts = label.split("/");
    if (parts.length < 2) return null;
    const d = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
    if (isNaN(d) || isNaN(m)) return null;
    const now = new Date();
    // Try last 2 years, pick the one in the past closest to now
    let best = null;
    for (let y = now.getFullYear(); y >= now.getFullYear() - 2; y--) {
      const dt = new Date(y, m-1, d, 12, 0, 0);
      if (dt <= now && (best === null || dt > best)) best = dt;
    }
    return best ? best.getTime() : null;
  }
  return null;
};

// Format ISO date as DD/MM for display
const fmtLabelDisplay = (label) => {
  if (!label) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
    const dt = new Date(label + "T12:00:00");
    return `${String(dt.getDate()).padStart(2,"0")}/${String(dt.getMonth()+1).padStart(2,"0")}`;
  }
  return label;
};

const LineChart = ({ points, labels, color=C.accent, height=52, unit="" }) => {
  const [tip, setTip] = useState(null);
  const T = TR[useLang()];
  if (!points || points.length < 2) {
    return <div style={{ height, display:"flex", alignItems:"center", justifyContent:"center", color:C.muted, fontSize:11 }}>{T.notEnoughData}</div>;
  }
  const W=280, H=height, PAD=28;
  const valid = points.filter(v => v != null && v !== 0 && !isNaN(v));
  if (!valid.length) return null;
  const mx = Math.max(...valid), mn = Math.min(...valid);

  // Fix 10: Time-proportional X axis
  const timestamps = labels ? labels.map(parseDateLabel) : null;
  const hasTimestamps = timestamps && timestamps.every(t => t !== null);
  const tMin = hasTimestamps ? Math.min(...timestamps) : 0;
  const tMax = hasTimestamps ? Math.max(...timestamps) : points.length - 1;
  const tRange = tMax - tMin || 1;

  const px = i => {
    if (hasTimestamps) return PAD + ((timestamps[i] - tMin) / tRange) * (W - PAD*2);
    return PAD + (i / (points.length-1)) * (W - PAD*2);
  };
  // Y axis: add 5% padding above and below to avoid points on edges
  const yPad = (mx - mn) * 0.1;
  const yMin = mn - yPad, yMax = mx + yPad;
  const py = v => H - 8 - ((v - yMin) / (yMax - yMin || 1)) * (H - 16);

  const d = points.map((v,i) => `${i===0?"M":"L"}${px(i).toFixed(1)},${py(v||yMin).toFixed(1)}`).join(" ");

  return (
    <div style={{ position:"relative", userSelect:"none" }} onClick={() => setTip(null)}>
      <div style={{ position:"absolute", left:0, top:0, height:H, display:"flex", flexDirection:"column", justifyContent:"space-between", pointerEvents:"none", width:PAD-4 }}>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mx%1===0?mx:mx.toFixed(1)}{unit}</span>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{((mx+mn)/2)%1===0?Math.round((mx+mn)/2):((mx+mn)/2).toFixed(1)}{unit}</span>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mn%1===0?mn:mn.toFixed(1)}{unit}</span>
      </div>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow:"visible", display:"block" }}>
        {[mx, (mx+mn)/2, mn].map((v,i) => <line key={i} x1={PAD} x2={W-PAD} y1={py(v)} y2={py(v)} stroke={C.border} strokeWidth="0.5" strokeDasharray="3,3"/>)}
        <path d={`${d} L${px(points.length-1).toFixed(1)},${H} L${PAD},${H} Z`} fill={color} fillOpacity="0.08"/>
        <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {points.map((v,i) => (
          <circle key={i} cx={px(i)} cy={py(v||mn)} r={tip?.i===i ? 6 : 4}
            fill={tip?.i===i ? "#fff" : C.card} stroke={color} strokeWidth="2" style={{ cursor:"pointer" }}
            onClick={e => { e.stopPropagation(); setTip(tip?.i===i ? null : { i, v, label: labels?.[i]||"", x:px(i), y:py(v||yMin) }); }}/>
        ))}
      </svg>
      {tip && (
        <div style={{ position:"absolute", background:C.bg, border:`1.5px solid ${color}`, borderRadius:8,
          padding:"5px 12px", fontSize:12, color:C.text, pointerEvents:"none", zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),75)}%`, top:Math.max(tip.y-36,0),
          transform:"translateX(-50%)", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(0,0,0,.6)" }}>
          <span style={{ fontWeight:800, color }}>{tip.v}{unit}</span>
          {tip.label && <span style={{ color:C.muted, marginLeft:6, fontSize:11 }}>{fmtLabelDisplay(tip.label)}</span>}
        </div>
      )}
      {labels && labels.length >= 2 && (
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:2, paddingLeft:PAD, paddingRight:PAD }}>
          <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labels[0])}</span>
          {labels.length > 2 && <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labels[Math.floor(labels.length/2)])}</span>}
          <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labels[labels.length-1])}</span>
        </div>
      )}
    </div>
  );
};

const DualLineChart = ({ aPoints, bPoints, aColor, bColor=C.blue, aUnit="", bUnit="", height=60, aLabel="", bLabel="" }) => {
  const [tip, setTip] = useState(null);
  if (Math.max(aPoints.length, bPoints.length) < 2) return null;
  const W=280, H=height, PAD=28;
  const mkS = pts => { const v = pts.filter(x => x>0); return v.length ? { mx:Math.max(...v), mn:Math.min(...v) } : { mx:1, mn:0 }; };
  const aS = mkS(aPoints), bS = mkS(bPoints);
  const pxA = i => PAD + (i/(aPoints.length-1))*(W-PAD*2);
  const pxB = i => PAD + (i/(bPoints.length-1))*(W-PAD*2);
  const pyA = v => H - 8 - ((v-aS.mn)/(aS.mx-aS.mn||1))*(H-16);
  const pyB = v => H - 8 - ((v-bS.mn)/(bS.mx-bS.mn||1))*(H-16);
  const dA = aPoints.map((v,i) => `${i===0?"M":"L"}${pxA(i).toFixed(1)},${pyA(v||0).toFixed(1)}`).join(" ");
  const dB = bPoints.map((v,i) => `${i===0?"M":"L"}${pxB(i).toFixed(1)},${pyB(v||0).toFixed(1)}`).join(" ");
  return (
    <div style={{ position:"relative", userSelect:"none" }} onClick={() => setTip(null)}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow:"visible", display:"block" }}>
        <path d={dA} fill="none" stroke={aColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d={dB} fill="none" stroke={bColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5,3"/>
        {aPoints.map((v,i) => (
          <circle key={"a"+i} cx={pxA(i)} cy={pyA(v||0)} r={tip?.s==="a"&&tip?.i===i?6:4}
            fill={C.card} stroke={aColor} strokeWidth="2" style={{ cursor:"pointer" }}
            onClick={e => { e.stopPropagation(); setTip(tip?.s==="a"&&tip?.i===i ? null : { s:"a", i, v, x:pxA(i), y:pyA(v||0) }); }}/>
        ))}
        {bPoints.map((v,i) => (
          <circle key={"b"+i} cx={pxB(i)} cy={pyB(v||0)} r={tip?.s==="b"&&tip?.i===i?5:3}
            fill={C.card} stroke={bColor} strokeWidth="2" style={{ cursor:"pointer" }}
            onClick={e => { e.stopPropagation(); setTip(tip?.s==="b"&&tip?.i===i ? null : { s:"b", i, v, x:pxB(i), y:pyB(v||0) }); }}/>
        ))}
      </svg>
      {tip && (
        <div style={{ position:"absolute", background:C.bg, border:`1.5px solid ${tip.s==="a"?aColor:bColor}`, borderRadius:8,
          padding:"5px 12px", fontSize:12, color:C.text, pointerEvents:"none", zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),75)}%`, top:Math.max(tip.y-36,0),
          transform:"translateX(-50%)", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(0,0,0,.6)" }}>
          <span style={{ fontWeight:800, color: tip.s==="a" ? aColor : bColor }}>{tip.v}{tip.s==="a"?aUnit:bUnit}</span>
          <span style={{ color:C.muted, marginLeft:5, fontSize:11 }}>{tip.s==="a"?aLabel:bLabel}</span>
        </div>
      )}
    </div>
  );
};

const BarChart = ({ data: cd, color=C.accent, height=50 }) => {
  const max = Math.max(...cd.map(d => d.value), 1);
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:height+28 }}>
      {cd.map((d,i) => (
        <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
          <div style={{ fontSize:9, color:C.muted, height:12, lineHeight:"12px" }}>{d.value > 0 ? d.value : ""}</div>
          <div style={{ width:"100%", background: d.highlight ? C.accent : color, borderRadius:"3px 3px 0 0", height:Math.max(2,(d.value/max)*height), transition:"height .4s" }}/>
          <div style={{ fontSize:9, color: d.highlight ? C.accent : C.muted, textAlign:"center", fontWeight: d.highlight ? 700 : 400 }}>{d.label}</div>
        </div>
      ))}
    </div>
  );
};

// ─── Heatmap / Calendar ────────────────────────────────────────────────────────
const Heatmap = ({ sessions, T, lang }) => {
  const [selected, setSelected] = useState(null);
  const fr = lang === "fr";

  const sessionMap = {};
  sessions.forEach(s => {
    if (!sessionMap[s.date]) sessionMap[s.date] = [];
    sessionMap[s.date].push(s);
  });

  const today = new Date(); today.setHours(0,0,0,0);
  const todayStr2 = todayStr(); // use same function as rest of app (local date)

  // Build last 12 weeks as a real calendar: show current month + previous month if needed
  // We'll show a 3-month mini calendar (current + 2 previous)
  const months = [];
  for (let m = 2; m >= 0; m--) {
    const d = new Date(today.getFullYear(), today.getMonth() - m, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  const dayNames = fr
    ? ["L","M","M","J","V","S","D"]
    : ["M","T","W","T","F","S","S"];
  const monthNames = fr
    ? ["Janv","Févr","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"]
    : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const getCellStyle = (ds) => {
    if (!ds) return {};
    const dt = new Date(ds); dt.setHours(0,0,0,0);
    const isFuture = dt > today;
    const count = sessionMap[ds]?.length || 0;
    const isSelected = selected?.ds === ds;
    const isToday = ds === todayStr2;
    if (isFuture) return { color: C.muted+"44", cursor:"default" };
    return {
      background: count === 0 ? "transparent"
        : count === 1 ? C.accent+"44"
        : count === 2 ? C.accent+"88"
        : C.accent,
      color: count > 0 ? (count >= 2 ? "#fff" : C.text) : C.muted,
      fontWeight: count > 0 ? 700 : 400,
      border: isSelected ? `2px solid #fff` : isToday ? `2px solid ${C.accent}` : "none",
      cursor: "pointer",
    };
  };

  return (
    <Card style={{ marginBottom:12 }}>
      <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:12 }}>{T.heatmapTitle}</div>

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {months.map(({ year, month }) => {
          const firstDay = new Date(year, month, 1);
          const lastDay = new Date(year, month + 1, 0).getDate();
          // Monday-first: 0=Mon...6=Sun
          let startDow = firstDay.getDay(); // 0=Sun
          startDow = startDow === 0 ? 6 : startDow - 1; // convert to Mon=0

          const cells = [];
          // empty slots before 1st
          for (let i = 0; i < startDow; i++) cells.push(null);
          for (let d = 1; d <= lastDay; d++) cells.push(d);

          return (
            <div key={`${year}-${month}`}>
              {/* Month header */}
              <div style={{ fontSize:12, fontWeight:700, color:C.accent, marginBottom:6 }}>
                {monthNames[month]} {year}
              </div>
              {/* Day names header */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3, marginBottom:3 }}>
                {dayNames.map((d,i) => (
                  <div key={i} style={{ textAlign:"center", fontSize:9, color:C.muted, fontWeight:600 }}>{d}</div>
                ))}
              </div>
              {/* Days grid */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3 }}>
                {cells.map((day, i) => {
                  if (!day) return <div key={i}/>;
                  const ds = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
                  const dt = new Date(ds); dt.setHours(0,0,0,0);
                  const isFuture = dt > today;
                  const count = sessionMap[ds]?.length || 0;
                  const isSelected = selected?.ds === ds;
                  const isToday = ds === todayStr2;
                  const bg = count === 0 ? "transparent"
                    : count === 1 ? C.accent+"44"
                    : count === 2 ? C.accent+"88"
                    : C.accent;
                  return (
                    <div key={i}
                      onClick={() => {
                        if (isFuture) return;
                        setSelected(isSelected ? null : { ds, count, sessions: sessionMap[ds]||[], dt });
                      }}
                      style={{
                        height:28, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:11,
                        background: isFuture ? "transparent"
                          : isToday && count === 0 ? C.accent+"44"
                          : bg,
                        color: isFuture ? C.muted+"33"
                          : count > 0 ? "#fff"
                          : isToday ? C.accent
                          : C.muted,
                        fontWeight: isToday || count > 0 ? 800 : 400,
                        border: isSelected ? `2px solid #fff` : isToday ? `2px solid ${C.accent}` : "none",
                        cursor: isFuture ? "default" : "pointer",
                        transition:"all .1s",
                        boxShadow: isToday ? `0 0 8px ${C.accent}66` : "none",
                      }}>
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:12, flexWrap:"wrap" }}>
        <span style={{ fontSize:10, color:C.muted }}>{fr ? "Moins" : "Less"}</span>
        {[C.bg2, C.accent+"44", C.accent+"88", C.accent].map((c,i) => (
          <div key={i} style={{ width:14, height:14, borderRadius:3, background:c, border:`1px solid ${C.border}33` }}/>
        ))}
        <span style={{ fontSize:10, color:C.muted }}>{fr ? "Plus" : "More"}</span>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:4 }}>
          <div style={{ width:14, height:14, borderRadius:3, border:`2px solid ${C.accent}` }}/>
          <span style={{ fontSize:10, color:C.muted }}>{fr ? "Aujourd'hui" : "Today"}</span>
        </div>
      </div>

      {/* Selected day popup */}
      {selected && (
        <div style={{ marginTop:10, borderTop:`1px solid ${C.border}`, paddingTop:10 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
            <div style={{ fontWeight:700, fontSize:13, color: selected.count > 0 ? C.accent : C.text }}>
              {selected.dt.toLocaleDateString(fr ? "fr-FR" : "en-GB", { weekday:"long", day:"numeric", month:"long" })}
            </div>
            <span onClick={() => setSelected(null)} style={{ color:C.muted, cursor:"pointer", fontSize:16 }}>✕</span>
          </div>
          {selected.count === 0
            ? <div style={{ fontSize:12, color:C.muted, fontStyle:"italic" }}>
                {fr ? "Pas d'entraînement ce jour-là." : "No training this day."}
              </div>
            : selected.sessions.map((s, si) => {
                const exs = s.exercises || [];
                const circs = exs.filter(e => e.type === "circuit");
                const solos = exs.filter(e => e.type === "solo" || !e.type);
                return (
                  <div key={si} style={{ background:C.bg2, borderRadius:8, padding:"8px 10px", marginBottom:6 }}>
                    {s.gymDuration && <div style={{ fontSize:11, color:C.blue, marginBottom:4 }}>⏱ {fmtDur(s.gymDuration)}</div>}
                    {s.notes && <div style={{ fontSize:11, color:C.blue, fontStyle:"italic", marginBottom:6, borderLeft:`2px solid ${C.blue}44`, paddingLeft:8 }}>📝 {s.notes}</div>}
                    {circs.map((c, ci) => (
                      <div key={ci} style={{ fontSize:12, color:C.purple, marginBottom:3 }}>
                        🔄 {c.circuitName||"Circuit"} · {c.rounds} {fr?"tours":"rounds"} · {(c.machineIds||[]).length} machines
                      </div>
                    ))}
                    {solos.map((e, ei) => {
                      const hasW = e.weight && parseFloat(e.weight) > 0;
                      return (
                        <div key={ei} style={{ fontSize:12, color:C.text, marginBottom:2 }}>
                          🏋️ {e.machineName||"?"}
                          {hasW && <span style={{ color:C.accent, fontWeight:700 }}> · {e.weight}kg</span>}
                          {e.sets && e.reps && <span style={{ color:C.muted }}> · {e.sets}×{e.reps}</span>}
                          {e.durMin && <span style={{ color:C.teal }}> · {e.durMin}min</span>}
                          {e.km && <span style={{ color:C.blue }}> · {e.km}km</span>}
                        </div>
                      );
                    })}
                  </div>
                );
              })
          }
        </div>
      )}
    </Card>
  );
};

// ─── Muscle Volume Chart ───────────────────────────────────────────────────────
const PieChart = ({ data, size=140 }) => {
  const [hovered, setHovered] = useState(null);
  if (!data || !data.length) return null;
  const total = data.reduce((a, d) => a + d.value, 0);
  if (!total) return null;
  const cx = size / 2, cy = size / 2, r = size * 0.38, rInner = size * 0.18;
  let angle = -Math.PI / 2;
  const slices = data.map(d => {
    const sweep = (d.value / total) * 2 * Math.PI;
    const start = angle;
    angle += sweep;
    return { ...d, start, sweep, end: angle, pct: Math.round((d.value / total) * 100) };
  }).filter(s => s.pct > 0);

  const arc = (s, e, outerR, innerR) => {
    if (Math.abs(e - s) >= 2 * Math.PI - 0.001) {
      // Full circle
      return `M ${cx} ${cy - outerR} A ${outerR} ${outerR} 0 1 1 ${cx - 0.001} ${cy - outerR} Z
              M ${cx} ${cy - innerR} A ${innerR} ${innerR} 0 1 0 ${cx - 0.001} ${cy - innerR} Z`;
    }
    const x1 = cx + outerR * Math.cos(s), y1 = cy + outerR * Math.sin(s);
    const x2 = cx + outerR * Math.cos(e), y2 = cy + outerR * Math.sin(e);
    const x3 = cx + innerR * Math.cos(e), y3 = cy + innerR * Math.sin(e);
    const x4 = cx + innerR * Math.cos(s), y4 = cy + innerR * Math.sin(s);
    const large = e - s > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${large} 0 ${x4} ${y4} Z`;
  };

  const hov = hovered !== null ? slices[hovered] : null;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display:"block", overflow:"visible" }}>
      {slices.map((s, i) => {
        const isHov = hovered === i;
        const outerR = isHov ? r + 5 : r;
        return (
          <path key={i} d={arc(s.start, s.end, outerR, rInner)}
            fill={s.color} opacity={hovered !== null && !isHov ? 0.55 : 1}
            style={{ cursor:"pointer", transition:"all .15s" }}
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === i ? null : i)}/>
        );
      })}
      {hov
        ? <>
            <text x={cx} y={cy - 7} textAnchor="middle" fill={hov.color} fontSize={size*0.13} fontWeight="800" fontFamily="inherit">{hov.pct}%</text>
            <text x={cx} y={cy + 9} textAnchor="middle" fill={C.muted} fontSize={size*0.085} fontFamily="inherit">{hov.cat.length > 8 ? hov.cat.slice(0,7)+"…" : hov.cat}</text>
          </>
        : <text x={cx} y={cy + 5} textAnchor="middle" fill={C.muted} fontSize={size*0.09} fontFamily="inherit">{data.length}</text>
      }
    </svg>
  );
};

const PIE_COLORS_LIST = ["#f97316","#3b82f6","#22c55e","#a855f7","#14b8a6","#eab308","#ef4444","#ec4899","#06b6d4","#84cc16"];

const buildCatData = (sessions, machines) => {
  const setsByCat = {};
  sessions.forEach(s => {
    (s.exercises||[]).forEach(ex => {
      const entries = ex.type === "circuit"
        ? (ex.machineIds||[]).map(mId => ({ machineId:mId, sets:+(ex.rounds||1) }))
        : [{ machineId:ex.machineId, sets:+(ex.sets||1) }];
      entries.forEach(e => {
        const m = machines.find(x => x.id === e.machineId);
        if (!m || m.machineType !== "weight") return;
        getCats(m).filter(c => c !== "Cardio" && c !== "Other").forEach(cat => {
          setsByCat[cat] = (setsByCat[cat]||0) + e.sets;
        });
      });
    });
  });
  const entries = Object.entries(setsByCat).filter(([,v]) => v > 0).sort(([,a],[,b]) => b-a);
  return entries.map(([cat, value], i) => ({ cat, value, color: PIE_COLORS_LIST[i % PIE_COLORS_LIST.length] }));
};

const MuscleVolumeChart = ({ sessions, machines, T, lang }) => {
  const [activeTab, setActiveTab] = useState("month");
  const now = new Date();
  const weekly  = sessions.filter(s => (now - new Date(s.date)) / 86400000 <  7);
  const monthly = sessions.filter(s => (now - new Date(s.date)) / 86400000 < 30);
  const fr = lang === "fr";

  const tabs = [
    { id:"week",  label: fr ? "Semaine" : "Week",  data: buildCatData(weekly,  machines) },
    { id:"month", label: fr ? "Mois"    : "Month", data: buildCatData(monthly, machines) },
    { id:"total", label: fr ? "Total"   : "Total", data: buildCatData(sessions, machines) },
  ];
  const active = tabs.find(t => t.id === activeTab);
  const pieData = active?.data || [];
  const totalSets = pieData.reduce((a, d) => a + d.value, 0);

  return (
    <Card style={{ marginBottom:12 }}>
      <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:8 }}>
        {fr ? "RÉPARTITION MUSCULAIRE" : "MUSCLE BREAKDOWN"}
      </div>
      {/* Tab switcher */}
      <div style={{ display:"flex", gap:4, marginBottom:14 }}>
        {tabs.map(t => (
          <div key={t.id} onClick={() => setActiveTab(t.id)}
            style={{ flex:1, textAlign:"center", padding:"5px 0", borderRadius:8, cursor:"pointer", fontSize:11, fontWeight:700,
              background: activeTab===t.id ? C.accent+"22" : "transparent",
              border:`1.5px solid ${activeTab===t.id ? C.accent : C.border}`,
              color: activeTab===t.id ? C.accent : C.muted }}>
            {t.label}
          </div>
        ))}
      </div>

      {pieData.length === 0
        ? <div style={{ textAlign:"center", padding:"20px 0", color:C.muted, fontSize:12 }}>
            {fr ? "Pas de données pour cette période." : "No data for this period."}
          </div>
        : <div style={{ display:"flex", gap:12, alignItems:"center" }}>
            {/* Pie */}
            <div style={{ flexShrink:0 }}>
              <PieChart data={pieData} size={130}/>
            </div>
            {/* Legend */}
            <div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}>
              {pieData.map(d => {
                const pct = Math.round((d.value / totalSets) * 100);
                return (
                  <div key={d.cat} style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:10, height:10, borderRadius:"50%", background:d.color, flexShrink:0 }}/>
                    <span style={{ fontSize:12, color:C.text, flex:1, fontWeight:600 }}>{d.cat}</span>
                    <span style={{ fontSize:12, fontWeight:800, color:d.color }}>{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
      }
    </Card>
  );
};

// ─── Fitness Score ────────────────────────────────────────────────────────────
const computeFitnessScore = (sessions) => {
  const todayIso = todayStr();
  const msDay = 86400000;
  // Compare by date string to avoid timezone issues
  const daysSince = ds => {
    if (!ds) return 999;
    // Parse dates as local dates to avoid UTC offset issues
    const [y1,m1,d1] = todayIso.split('-').map(Number);
    const [y2,m2,d2] = ds.split('-').map(Number);
    const t1 = new Date(y1,m1-1,d1).getTime();
    const t2 = new Date(y2,m2-1,d2).getTime();
    return Math.round((t1 - t2) / msDay);
  };

  // Days since last session
  const sorted = [...sessions].sort((a,b) => a.date < b.date ? 1 : -1);
  const lastSessionDays = sorted.length ? daysSince(sorted[0].date) : 999;

  // Recency score (0-35): based on days since last session
  // 0 days = 35, 1 day = 30, 2 days = 25, 3 days = 18, 4 days = 10, 5+ days = 0
  const recencyScore = lastSessionDays === 0 ? 35
    : lastSessionDays === 1 ? 30
    : lastSessionDays === 2 ? 23
    : lastSessionDays === 3 ? 15
    : lastSessionDays === 4 ? 7
    : 0;

  // Weekly frequency score (0-30): sessions in last 7 days
  const last7d = sessions.filter(s => daysSince(s.date) >= 0 && daysSince(s.date) < 7);
  const freqScore = Math.min(30, last7d.length * 10); // 3+ sessions = max

  // Streak score (0-20): consecutive days trained
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const [y,m,d] = todayIso.split('-').map(Number);
    const dt = new Date(y,m-1,d - i);
    const ds = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
    if (sessions.some(s => s.date === ds)) streak++;
    else if (i > 0) break;
  }
  const streakScore = Math.min(20, streak * 5); // 4+ day streak = max

  // Consistency score (0-15): sessions in last 30 days (normalized by 12)
  const last30d = sessions.filter(s => daysSince(s.date) >= 0 && daysSince(s.date) < 30).length;
  const consistScore = Math.min(15, Math.round((last30d / 12) * 15));

  const total = recencyScore + freqScore + streakScore + consistScore;
  return {
    total, recencyScore, freqScore, streakScore, consistScore,
    lastSessionDays, thisWeekCount: last7d.length, streak, last30d
  };
};

const FitnessScoreCard = ({ sessions, T, lang }) => {
  const sc = computeFitnessScore(sessions);
  const fr = lang === "fr";
  const color = sc.total >= 80 ? C.success : sc.total >= 50 ? C.accent : sc.total >= 25 ? C.yellow : C.danger;
  const label = sc.total >= 80 ? (fr ? "🔥 En feu !" : "🔥 On fire!")
    : sc.total >= 50 ? (fr ? "💪 Bon rythme" : "💪 Good pace")
    : sc.total >= 25 ? (fr ? "😐 Peut mieux faire" : "😐 Getting there")
    : (fr ? "😴 Repos trop long ?" : "😴 Need a session?");
  const components = [
    { label: fr ? "Dernière séance" : "Last session", score: sc.recencyScore, max: 35,
      detail: sc.lastSessionDays === 0 ? (fr ? "Aujourd'hui 🔥" : "Today 🔥")
            : sc.lastSessionDays === 1 ? (fr ? "Hier" : "Yesterday")
            : T.daysAgo(sc.lastSessionDays) },
    { label: T.fitnessFreq, score: sc.freqScore, max: 30, detail: `${sc.thisWeekCount}/7${fr?"j":"d"}` },
    { label: T.fitnessStreak, score: sc.streakScore, max: 20, detail: `${sc.streak} ${fr ? T.statStreakSub.split(" ")[0] : "days"}` },
    { label: T.fitnessConsist, score: sc.consistScore, max: 15, detail: `${sc.last30d}/30${fr?"j":"d"}` },
  ];
  return (
    <Card style={{ marginBottom:14, border:`1px solid ${color}44` }}>
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
        {/* Circular score */}
        <div style={{ position:"relative", flexShrink:0 }}>
          <svg width={80} height={80} viewBox="0 0 80 80">
            <circle cx={40} cy={40} r={34} fill="none" stroke={C.border} strokeWidth={7}/>
            <circle cx={40} cy={40} r={34} fill="none" stroke={color} strokeWidth={7}
              strokeDasharray={String(2*Math.PI*34)}
              strokeDashoffset={String(2*Math.PI*34*(1 - sc.total/100))}
              strokeLinecap="round" transform="rotate(-90 40 40)"
              style={{ transition:"stroke-dashoffset 1s ease" }}/>
            <text x={40} y={44} textAnchor="middle" fill={color} fontSize={22} fontWeight="900" fontFamily="inherit">{sc.total}</text>
          </svg>
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:2 }}>{T.fitnessScore}</div>
          <div style={{ fontSize:16, fontWeight:800, color, marginBottom:2 }}>{label}</div>
          <div style={{ fontSize:11, color:C.muted }}>{T.fitnessScoreSub}</div>
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
        {components.map(({ label, score, max, detail }) => (
          <div key={label}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:2 }}>
              <span style={{ fontSize:11, color:C.muted }}>{label}</span>
              <span style={{ fontSize:11, color:C.muted }}>{detail} · <span style={{ fontWeight:700, color:C.text }}>{score}/{max}</span></span>
            </div>
            <div style={{ height:5, borderRadius:3, background:C.border, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${(score/max)*100}%`, background:color, borderRadius:3, transition:"width 1s ease" }}/>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ─── Body Weight Card ──────────────────────────────────────────────────────────
// ─── Body Weight Chart (colored gradient by trend) ───────────────────────────
const BodyWeightColorChart = ({ sorted, height=80 }) => {
  const [tip, setTip] = useState(null);
  const pts = sorted.slice(-30).map(e => e.kg);
  const labs = sorted.slice(-30).map(e => e.date);
  if (pts.length < 2) return null;

  const W=280, H=height, PAD=28;
  const mx = Math.max(...pts), mn = Math.min(...pts);
  const yPad = Math.max((mx - mn) * 0.15, 0.5);
  const yMin = mn - yPad, yMax = mx + yPad;
  const py = v => H - 8 - ((v - yMin) / (yMax - yMin)) * (H - 16);

  const timestamps = labs.map(parseDateLabel);
  const hasTs = timestamps.every(t => t !== null);
  const tMin = hasTs ? Math.min(...timestamps) : 0;
  const tRange = hasTs ? (Math.max(...timestamps) - tMin || 1) : (pts.length - 1 || 1);
  const px = i => hasTs ? PAD + ((timestamps[i] - tMin) / tRange) * (W - PAD*2) : PAD + (i/(pts.length-1))*(W-PAD*2);

  // Color each segment based on direction
  const segColor = (i) => {
    if (i === 0) return C.blue;
    return pts[i] < pts[i-1] ? C.success : pts[i] > pts[i-1] ? C.danger : C.blue;
  };

  // 5-point moving average for smooth trend line
  const avgPts = pts.map((_, i) => {
    const slice = pts.slice(Math.max(0,i-2), i+3);
    return slice.reduce((a,b)=>a+b,0)/slice.length;
  });

  return (
    <div style={{ position:"relative", userSelect:"none" }} onClick={() => setTip(null)}>
      <div style={{ position:"absolute", left:0, top:0, height:H, display:"flex", flexDirection:"column",
        justifyContent:"space-between", pointerEvents:"none", width:PAD-4 }}>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mx.toFixed(1)}</span>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{((mx+mn)/2).toFixed(1)}</span>
        <span style={{ fontSize:8, color:C.muted, lineHeight:"10px", textAlign:"right" }}>{mn.toFixed(1)}</span>
      </div>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow:"visible", display:"block" }}>
        {/* Grid lines */}
        {[mx,(mx+mn)/2,mn].map((v,i) => (
          <line key={i} x1={PAD} x2={W-PAD} y1={py(v)} y2={py(v)} stroke={C.border} strokeWidth="0.5" strokeDasharray="3,3"/>
        ))}
        {/* Filled area under curve */}
        <defs>
          <linearGradient id="bwGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            {pts.map((v,i) => {
              const pct = (i/(pts.length-1)*100).toFixed(1);
              const col = segColor(i);
              return <stop key={i} offset={`${pct}%`} stopColor={col} stopOpacity="0.15"/>;
            })}
          </linearGradient>
        </defs>
        <path d={[
          `M${px(0).toFixed(1)},${py(pts[0]).toFixed(1)}`,
          ...pts.slice(1).map((v,i)=>`L${px(i+1).toFixed(1)},${py(v).toFixed(1)}`),
          `L${px(pts.length-1).toFixed(1)},${H}`,
          `L${PAD},${H}`,`Z`
        ].join(" ")} fill="url(#bwGrad)"/>
        {/* Colored line segments */}
        {pts.slice(1).map((v, i) => (
          <line key={i}
            x1={px(i).toFixed(1)} y1={py(pts[i]).toFixed(1)}
            x2={px(i+1).toFixed(1)} y2={py(v).toFixed(1)}
            stroke={segColor(i+1)} strokeWidth="2.5" strokeLinecap="round"/>
        ))}
        {/* Trend line (moving average) */}
        {avgPts.length >= 2 && (
          <path d={avgPts.map((v,i)=>`${i===0?"M":"L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ")}
            fill="none" stroke={C.blue} strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
        )}
        {/* Dots */}
        {pts.map((v,i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r={tip?.i===i ? 6 : 3.5}
            fill={tip?.i===i ? "#fff" : C.card} stroke={segColor(i)} strokeWidth="2"
            style={{ cursor:"pointer" }}
            onClick={e => { e.stopPropagation(); setTip(tip?.i===i ? null : { i, v, x:px(i), y:py(v), label:labs[i] }); }}/>
        ))}
      </svg>
      {tip && (
        <div style={{ position:"absolute", background:C.bg, border:`1.5px solid ${segColor(tip.i)}`, borderRadius:8,
          padding:"5px 12px", fontSize:12, color:C.text, pointerEvents:"none", zIndex:10,
          left:`${Math.min(Math.max(tip.x/W*100,15),78)}%`, top:Math.max(tip.y-38,0),
          transform:"translateX(-50%)", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(0,0,0,.6)" }}>
          <span style={{ fontWeight:800, color:segColor(tip.i) }}>{tip.v} kg</span>
          {tip.i > 0 && (
            <span style={{ marginLeft:6, fontSize:10, color: segColor(tip.i) === C.success ? C.success : C.danger }}>
              {pts[tip.i] < pts[tip.i-1] ? "↓" : pts[tip.i] > pts[tip.i-1] ? "↑" : "→"}
              {Math.abs(pts[tip.i]-pts[tip.i-1]).toFixed(1)}
            </span>
          )}
          {tip.label && <span style={{ color:C.muted, marginLeft:6, fontSize:10 }}>{fmtLabelDisplay(tip.label)}</span>}
        </div>
      )}
      <div style={{ display:"flex", justifyContent:"space-between", marginTop:2, paddingLeft:PAD, paddingRight:PAD }}>
        <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labs[0])}</span>
        {labs.length > 2 && <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labs[Math.floor(labs.length/2)])}</span>}
        <span style={{ fontSize:8, color:C.muted }}>{fmtLabelDisplay(labs[labs.length-1])}</span>
      </div>
    </div>
  );
};

const BodyWeightCard = ({ bodyWeights, setData, T, lang }) => {
  const [input, setInput] = useState("");
  const [inputDate, setInputDate] = useState(todayStr());
  const fr = lang === "fr";
  const sorted = [...(bodyWeights||[])].sort((a,b) => a.date < b.date ? -1 : 1);
  const latest = sorted[sorted.length - 1];
  const first = sorted[0];
  const selectedDateEntry = (bodyWeights||[]).find(e => e.date === inputDate);
  const isToday = inputDate === todayStr();

  // ── Trend calculations ──
  const now = new Date();
  const msDay = 86400000;
  const daysAgo = ds => Math.round((now - new Date(ds + "T12:00:00")) / msDay);

  const last7 = sorted.filter(e => daysAgo(e.date) <= 7);
  const last30 = sorted.filter(e => daysAgo(e.date) <= 30);
  const prev7to14 = sorted.filter(e => daysAgo(e.date) > 7 && daysAgo(e.date) <= 14);
  const prev30to60 = sorted.filter(e => daysAgo(e.date) > 30 && daysAgo(e.date) <= 60);

  const avg = arr => arr.length ? +(arr.reduce((a,e)=>a+e.kg,0)/arr.length).toFixed(1) : null;
  const avgLast7 = avg(last7), avgPrev7 = avg(prev7to14);
  const avgLast30 = avg(last30), avgPrev30 = avg(prev30to60);

  // Trend: linear regression slope on last N points
  const trendSlope = (arr) => {
    if (arr.length < 2) return 0;
    const n = arr.length;
    const xs = arr.map((_,i) => i), ys = arr.map(e => e.kg);
    const sx = xs.reduce((a,b)=>a+b,0), sy = ys.reduce((a,b)=>a+b,0);
    const sxy = xs.reduce((a,x,i)=>a+x*ys[i],0), sx2 = xs.reduce((a,x)=>a+x*x,0);
    return (n*sxy - sx*sy) / (n*sx2 - sx*sx);
  };
  const slope7 = trendSlope(last7.slice(-7));
  const slope30 = trendSlope(last30.slice(-30));
  const trendLabel = (slope, T) => {
    if (Math.abs(slope) < 0.05) return { text: T.bwStable, color: C.blue };
    return slope > 0 ? { text: T.bwGaining, color: C.danger } : { text: T.bwLosing, color: C.success };
  };
  const trend7 = trendLabel(slope7, T);
  const trend30 = trendLabel(slope30, T);

  const totalDiff = latest && first && latest !== first ? +(latest.kg - first.kg).toFixed(1) : null;
  const diffColor = totalDiff === null ? C.muted : totalDiff < 0 ? C.success : totalDiff > 0 ? C.danger : C.blue;

  const addEntry = () => {
    const kg = parseFloat(input);
    if (!kg || kg <= 0 || kg > 500) return;
    setData(d => ({
      ...d,
      bodyWeights: [...(d.bodyWeights||[]).filter(e => e.date !== inputDate), { date: inputDate, kg }],
    }));
    setInput("");
  };
  const deleteEntry = (date) => setData(d => ({ ...d, bodyWeights: (d.bodyWeights||[]).filter(e => e.date !== date) }));

  const allKg = sorted.map(e => e.kg);
  const minKg = allKg.length ? Math.min(...allKg) : null;
  const maxKg = allKg.length ? Math.max(...allKg) : null;
  const avgAll = avg(sorted);

  return (
    <Card style={{ marginBottom:12 }}>
      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:12, fontWeight:700, color:C.muted }}>{T.bodyWeightTitle}</div>
        {sorted.length > 0 && (
          <span style={{ fontSize:10, color:C.muted }}>{T.bwEntries(sorted.length)}</span>
        )}
      </div>

      {/* Log row */}
      <div style={{ display:"flex", gap:6, marginBottom:12, alignItems:"center", flexWrap:"wrap" }}>
        <input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)}
          style={{ background:C.bg2, border:`1px solid ${isToday ? C.accent+"66" : C.border}`, borderRadius:8,
            color: isToday ? C.accent : C.text, padding:"6px 10px", fontSize:12, fontFamily:"inherit", outline:"none", flex:1, minWidth:120 }}/>
        <input type="number" min="0" value={input} onChange={e => setInput(e.target.value)}
          placeholder={selectedDateEntry ? `${selectedDateEntry.kg}` : T.bodyWeightPH}
          style={{ background:C.bg2, border:`1px solid ${selectedDateEntry ? C.success : C.border}`, borderRadius:8,
            color:C.text, padding:"6px 10px", fontSize:14, width:68, fontFamily:"inherit", outline:"none" }}/>
        <Btn small onClick={addEntry} variant="outline">
          {selectedDateEntry ? (fr ? "Modifier" : "Update") : T.bodyWeightAdd}
        </Btn>
        {selectedDateEntry && (
          <span onClick={() => deleteEntry(inputDate)} style={{ fontSize:11, color:C.danger, cursor:"pointer" }}>✕</span>
        )}
      </div>

      {sorted.length === 0 && (
        <div style={{ fontSize:12, color:C.muted, textAlign:"center", padding:"20px 0" }}>{T.bwNoData}</div>
      )}

      {sorted.length >= 1 && (
        <>
          {/* Current weight hero */}
          <div style={{ display:"flex", gap:10, marginBottom:12, alignItems:"stretch" }}>
            {/* Big current number */}
            <div style={{ background:C.bg2, borderRadius:10, padding:"10px 14px", flex:1, textAlign:"center", border:`1px solid ${C.border}` }}>
              <div style={{ fontSize:10, color:C.muted, marginBottom:2 }}>{T.bwCurrent}</div>
              <div style={{ fontSize:26, fontWeight:900, color:C.accent, lineHeight:1 }}>{latest.kg}</div>
              <div style={{ fontSize:10, color:C.muted }}>kg</div>
            </div>
            {/* Start */}
            {sorted.length > 1 && (
              <div style={{ background:C.bg2, borderRadius:10, padding:"10px 14px", flex:1, textAlign:"center", border:`1px solid ${C.border}` }}>
                <div style={{ fontSize:10, color:C.muted, marginBottom:2 }}>{T.bwStart}</div>
                <div style={{ fontSize:20, fontWeight:800, color:C.text, lineHeight:1 }}>{first.kg}</div>
                <div style={{ fontSize:10, color:C.muted }}>kg</div>
              </div>
            )}
            {/* Total change */}
            {totalDiff !== null && (
              <div style={{ background:C.bg2, borderRadius:10, padding:"10px 14px", flex:1, textAlign:"center",
                border:`1px solid ${diffColor}44`, background:`${diffColor}11` }}>
                <div style={{ fontSize:10, color:C.muted, marginBottom:2 }}>{T.bwChange}</div>
                <div style={{ fontSize:20, fontWeight:800, color:diffColor, lineHeight:1 }}>
                  {totalDiff > 0 ? "+" : ""}{totalDiff}
                </div>
                <div style={{ fontSize:10, color:diffColor }}>kg</div>
              </div>
            )}
          </div>

          {/* Chart */}
          {sorted.length >= 2 && (
            <div style={{ marginBottom:12 }}>
              <div style={{ display:"flex", gap:12, marginBottom:4 }}>
                <span style={{ fontSize:9, color:C.success }}>● {fr?"baisse":"losing"}</span>
                <span style={{ fontSize:9, color:C.danger }}>● {fr?"hausse":"gaining"}</span>
                <span style={{ fontSize:9, color:C.blue, opacity:.7 }}>--- {fr?"tendance":"trend"}</span>
              </div>
              <BodyWeightColorChart sorted={sorted} height={80}/>
            </div>
          )}

          {/* Stats row */}
          {sorted.length >= 2 && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, marginBottom:12 }}>
              {[
                { label:T.bwMin, value:minKg, color:C.success },
                { label:T.bwAvg, value:avgAll, color:C.blue },
                { label:T.bwMax, value:maxKg, color:C.danger },
              ].map((s,i) => (
                <div key={i} style={{ background:C.bg2, borderRadius:8, padding:"6px 0", textAlign:"center", border:`1px solid ${C.border}` }}>
                  <div style={{ fontSize:14, fontWeight:800, color:s.color }}>{s.value}</div>
                  <div style={{ fontSize:9, color:C.muted }}>{s.label} kg</div>
                </div>
              ))}
            </div>
          )}

          {/* Trend indicators */}
          {(last7.length >= 2 || last30.length >= 2) && (
            <div style={{ display:"flex", gap:8, marginBottom:12 }}>
              {last7.length >= 2 && (
                <div style={{ flex:1, background:C.bg2, borderRadius:8, padding:"8px 10px", border:`1px solid ${trend7.color}33` }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.bwTrend7}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                    <span style={{ fontSize:13, fontWeight:800, color:trend7.color }}>
                      {slope7 > 0.05 ? "↑" : slope7 < -0.05 ? "↓" : "→"}
                      {Math.abs(slope7).toFixed(2)}
                    </span>
                    <span style={{ fontSize:10, color:trend7.color }}>{fr?"kg/j":"kg/day"}</span>
                  </div>
                  <div style={{ fontSize:9, color:trend7.color, fontWeight:600 }}>{trend7.text}</div>
                </div>
              )}
              {last30.length >= 2 && (
                <div style={{ flex:1, background:C.bg2, borderRadius:8, padding:"8px 10px", border:`1px solid ${trend30.color}33` }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.bwTrend30}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                    <span style={{ fontSize:13, fontWeight:800, color:trend30.color }}>
                      {slope30 > 0.05 ? "↑" : slope30 < -0.05 ? "↓" : "→"}
                      {Math.abs(slope30).toFixed(2)}
                    </span>
                    <span style={{ fontSize:10, color:trend30.color }}>{fr?"kg/j":"kg/day"}</span>
                  </div>
                  <div style={{ fontSize:9, color:trend30.color, fontWeight:600 }}>{trend30.text}</div>
                </div>
              )}
            </div>
          )}

          {/* Period comparison */}
          {(avgLast7 || avgLast30) && (avgPrev7 || avgPrev30) && (
            <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:10 }}>
              <div style={{ fontSize:10, fontWeight:700, color:C.muted, marginBottom:8 }}>{T.bwPeriods}</div>
              <div style={{ display:"flex", gap:8 }}>
                {avgLast7 && avgPrev7 && (() => {
                  const d = +(avgLast7 - avgPrev7).toFixed(1);
                  const col = d < 0 ? C.success : d > 0 ? C.danger : C.blue;
                  return (
                    <div style={{ flex:1, background:C.bg2, borderRadius:8, padding:"8px 10px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                        <span style={{ fontSize:10, color:C.muted }}>{T.bwThisWeek}</span>
                        <span style={{ fontSize:10, color:col, fontWeight:700 }}>{d>0?"+":""}{d}kg</span>
                      </div>
                      <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{avgLast7} kg</div>
                      <div style={{ fontSize:10, color:C.muted }}>{fr?"vs":"vs"} {avgPrev7} kg</div>
                    </div>
                  );
                })()}
                {avgLast30 && avgPrev30 && (() => {
                  const d = +(avgLast30 - avgPrev30).toFixed(1);
                  const col = d < 0 ? C.success : d > 0 ? C.danger : C.blue;
                  return (
                    <div style={{ flex:1, background:C.bg2, borderRadius:8, padding:"8px 10px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                        <span style={{ fontSize:10, color:C.muted }}>{T.bwThisMonth}</span>
                        <span style={{ fontSize:10, color:col, fontWeight:700 }}>{d>0?"+":""}{d}kg</span>
                      </div>
                      <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{avgLast30} kg</div>
                      <div style={{ fontSize:10, color:C.muted }}>{fr?"vs":"vs"} {avgPrev30} kg</div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

// ─── PR detection ─────────────────────────────────────────────────────────────
const collectExEntries = (sessions) => sessions.flatMap(s =>
  (s.exercises||[]).flatMap(ex => {
    if (ex.type === "circuit") {
      return (ex.machineIds||[]).map((mId,i) => ({
        machineId:mId, date:s.date,
        weight: ex.machineData?.[mId]?.weight || "",
        reps: +(ex.machineData?.[mId]?.reps||0),
        sets: +(ex.rounds||0),
      }));
    }
    return [{ ...ex, date: s.date }];
  })
);

const getSessionPRs = (session, allSessions) => {
  const prSet = new Set();
  const sessionIdx = allSessions.findIndex(s => s.id === session.id);
  const prior = sessionIdx > 0 ? allSessions.slice(0, sessionIdx) : [];
  const priorPRs = {};
  collectExEntries(prior).forEach(e => {
    const w = parseFloat(e.weight);
    if (w > 0) priorPRs[e.machineId] = Math.max(priorPRs[e.machineId]||0, w);
  });
  collectExEntries([session]).forEach(e => {
    const w = parseFloat(e.weight);
    if (w > 0 && w > (priorPRs[e.machineId]||0)) prSet.add(e.machineId);
  });
  return prSet;
};

// ─── Rest Timer ────────────────────────────────────────────────────────────────
const RestTimer = ({ seconds, onDone, T }) => {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) { try { navigator.vibrate([200,100,200]); } catch {} onDone(); return; }
    const iv = setInterval(() => {
      setLeft(l => {
        if (l <= 1) { clearInterval(iv); try { navigator.vibrate([200,100,200]); } catch {} onDone(); return 0; }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  const pct = (left / seconds) * 100;
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.75)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center" }} onClick={onDone}>
      <div style={{ background:C.card, borderRadius:20, padding:"32px 40px", textAlign:"center", minWidth:200 }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize:13, fontWeight:700, color:C.muted, marginBottom:12, letterSpacing:"0.06em" }}>{T.restTimerTitle.toUpperCase()}</div>
        <svg width="120" height="120" viewBox="0 0 120 120" style={{ display:"block", margin:"0 auto 16px" }}>
          <circle cx="60" cy="60" r="52" fill="none" stroke={C.border} strokeWidth="8"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke={C.accent} strokeWidth="8"
            strokeDasharray={String(2*Math.PI*52)}
            strokeDashoffset={String(2*Math.PI*52*(1-pct/100))}
            strokeLinecap="round" transform="rotate(-90 60 60)"
            style={{ transition:"stroke-dashoffset .9s linear" }}/>
          <text x="60" y="67" textAnchor="middle" fill={C.text} fontSize="32" fontWeight="800" fontFamily="monospace">{left}</text>
        </svg>
        <Btn small variant="ghost" onClick={onDone}>{T.restTimerSkip}</Btn>
      </div>
    </div>
  );
};

// ─── Session Banner ────────────────────────────────────────────────────────────
const SessionBanner = ({ T }) => {
  const ctx = useContext(SessionCtx);
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!ctx?.active) return;
    const iv = setInterval(() => setElapsed(ctx.elapsedRef.current), 1000);
    return () => clearInterval(iv);
  }, [ctx?.active]);
  if (!ctx?.active) return null;
  const h = Math.floor(elapsed/3600), m = Math.floor((elapsed%3600)/60), s = elapsed%60;
  return (
    <div style={{ background:C.accent, padding:"6px 14px", display:"flex", alignItems:"center", gap:10 }}>
      <div style={{ width:8, height:8, borderRadius:"50%", background:"#fff" }}/>
      <span style={{ fontSize:12, fontWeight:700, color:"#fff", flex:1 }}>{T.sessionInProgress}</span>
      <span style={{ fontFamily:"monospace", fontSize:14, fontWeight:800, color:"#fff" }}>
        {h > 0 && `${String(h).padStart(2,"0")}:`}{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}
      </span>
    </div>
  );
};

// ─── Inactivity Banner ─────────────────────────────────────────────────────────
const InactivityBanner = ({ sessions, settings, T }) => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  const days = settings?.reminderDays || 0;
  if (!days) return null;
  const lastDate = sessions.length ? sessions[sessions.length-1].date : null;
  if (!lastDate) return null;
  const daysSince = Math.floor((new Date() - new Date(lastDate)) / 86400000);
  if (daysSince < days) return null;
  return (
    <div style={{ background:C.purple+"22", border:`1px solid ${C.purple}44`, borderRadius:10, padding:"10px 14px", marginBottom:14, display:"flex", alignItems:"center", gap:10 }}>
      <span style={{ fontSize:20 }}>💪</span>
      <div style={{ flex:1, fontSize:13, color:C.text }}>{T.reminderMsg(daysSince)}</div>
      <span onClick={() => setDismissed(true)} style={{ color:C.muted, cursor:"pointer", fontSize:16 }}>✕</span>
    </div>
  );
};

// ─── Gym Timer ─────────────────────────────────────────────────────────────────
const GymTimer = ({ elapsedRef, onSave, onStop, T }) => {
  const [elapsed, setElapsed] = useState(elapsedRef?.current || 0);
  const [running, setRunning] = useState(true);
  const [saved, setSaved] = useState(false);
  const [confirmStop, setConfirmStop] = useState(false);
  const offsetRef = useRef(elapsedRef?.current || 0);
  const startRef = useRef(Date.now());
  useEffect(() => {
    if (!running) return;
    const iv = setInterval(() => {
      const v = offsetRef.current + Math.floor((Date.now() - startRef.current) / 1000);
      setElapsed(v);
      if (elapsedRef) elapsedRef.current = v;
    }, 1000);
    return () => clearInterval(iv);
  }, [running]);
  const togglePause = () => {
    if (running) { offsetRef.current = elapsed; } else { startRef.current = Date.now(); }
    setRunning(r => !r);
  };
  const handleSave = () => { setSaved(true); onSave(elapsed); };
  const handleStop = () => {
    if (!confirmStop) { setConfirmStop(true); setTimeout(() => setConfirmStop(false), 3000); return; }
    onStop && onStop();
  };
  const h = Math.floor(elapsed/3600), m = Math.floor((elapsed%3600)/60), s = elapsed%60;
  return (
    <div style={{ background:C.bg2, borderRadius:10, padding:"10px 14px", marginBottom:14, border:`1px solid ${running ? C.success+"55" : C.border}` }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", flexShrink:0, background: running ? C.success : C.yellow }}/>
        <div style={{ fontFamily:"monospace", fontSize:22, fontWeight:800, color:C.accent, letterSpacing:2 }}>
          {h > 0 && `${String(h).padStart(2,"0")}:`}{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}
        </div>
        <div style={{ flex:1 }}/>
        <Btn small variant={running ? "ghost" : "outline"} onClick={togglePause}>{running ? T.timerPause : T.timerResume}</Btn>
        {saved
          ? <span style={{ fontSize:12, color:C.success, fontWeight:700 }}>✓ {fmtDur(elapsed)}</span>
          : <Btn small variant="success" onClick={handleSave}>{T.timerSave}</Btn>
        }
        <Btn small variant="danger" onClick={handleStop}>{confirmStop ? "⚠️ ?" : T.timerStop}</Btn>
      </div>
      {!running && <div style={{ fontSize:11, color:C.yellow, marginTop:5 }}>{T.timerPaused}</div>}
      {confirmStop && <div style={{ fontSize:11, color:C.danger, marginTop:5 }}>Tap Stop again to reset the timer.</div>}
    </div>
  );
};

// ─── SeqCheck ─────────────────────────────────────────────────────────────────
const SeqCheck = ({ count, done, onToggle, label, color=C.accent }) => {
  const checked = done.filter(Boolean).length;
  const handleClick = (i) => {
    if (done[i]) { if (i === checked-1) onToggle(i); }
    else { if (i === checked) onToggle(i); }
  };
  return (
    <div>
      <div style={{ fontSize:11, color:C.muted, marginBottom:5 }}>{label}</div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
        {Array.from({ length: count }, (_,i) => {
          const isOn = !!done[i], isNext = i===checked, isLast = i===checked-1;
          const interactive = isOn ? isLast : isNext;
          return (
            <div key={i} onClick={() => handleClick(i)}
              style={{ width:32, height:32, borderRadius:7, cursor: interactive ? "pointer" : "default",
                border:`2px solid ${isOn ? color : interactive ? color+"66" : C.border}`,
                background: isOn ? color : interactive ? color+"18" : "transparent",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:12, color: isOn ? "#fff" : interactive ? color : C.muted,
                fontWeight:700, transition:"all .15s", opacity: interactive||isOn ? 1 : .4 }}>
              {i+1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── MachinePicker ─────────────────────────────────────────────────────────────
const MachinePicker = ({ machines, exclude=[], onPick, onClose, categories=[], savedCircuits=[], T }) => {
  const [catFilter, setCatFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  let available = machines.filter(m => !exclude.includes(m.id));
  if (typeFilter) available = available.filter(m => m.machineType === typeFilter);
  if (catFilter) available = available.filter(m => getCats(m).includes(catFilter));
  return (
    <Card style={{ border:`1px solid ${C.accent}`, marginBottom:12 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
        <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{T.addAMachine}</div>
        <span onClick={onClose} style={{ color:C.muted, cursor:"pointer", fontSize:18 }}>✕</span>
      </div>
      <div style={{ marginBottom:6 }}><TypeFilter value={typeFilter} onChange={setTypeFilter} T={T} small/></div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:10 }}>
        <span onClick={() => setCatFilter(null)} style={{ padding:"3px 9px", borderRadius:12, cursor:"pointer", fontSize:11, fontWeight:600, border:`1.5px solid ${!catFilter ? C.blue : C.border}`, color: !catFilter ? C.blue : C.muted }}>{T.allCats}</span>
        {categories.map(c => (
          <span key={c} onClick={() => setCatFilter(catFilter === c ? null : c)}
            style={{ padding:"3px 9px", borderRadius:12, cursor:"pointer", fontSize:11, fontWeight:600, border:`1.5px solid ${catFilter===c ? C.blue : C.border}`, color: catFilter===c ? C.blue : C.muted }}>{c}</span>
        ))}
      </div>
      {available.length === 0
        ? <div style={{ color:C.muted, fontSize:13 }}>{T.noMachinesFilter}</div>
        : <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
            {available.map(m => (
              <div key={m.id} onClick={() => { onPick(m.id); onClose(); }}
                style={{ padding:"7px 14px", borderRadius:20, cursor:"pointer", border:`2px solid ${m.color}`, background:m.color+"22", color:m.color, fontWeight:600, fontSize:13 }}>
                {m.name}
              </div>
            ))}
          </div>
      }
    </Card>
  );
};

// ─── PR Flash ─────────────────────────────────────────────────────────────────
const PRFlash = ({ show, T }) => {
  if (!show) return null;
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:C.yellow, borderRadius:8, padding:"3px 10px", fontSize:12, fontWeight:800, color:"#0a0a0a" }}>
      {T.newPR}
    </div>
  );
};

// ─── SoloMachineBlock ──────────────────────────────────────────────────────────
const SoloMachineBlock = ({ machine, data, onUpdate, onRemove, T, restSecs, sessions }) => {
  const lang = useLang();
  const lastEntry = (() => {
    for (let i = (sessions||[]).length - 1; i >= 0; i--) {
      const exs = sessions[i].exercises || [];
      for (const ex of exs) {
        if (ex.type === "solo" && ex.machineId === machine.id) return ex;
        if (ex.type === "circuit" && (ex.machineIds||[]).includes(machine.id))
          return { weight: ex.machineData?.[machine.id]?.weight, reps: ex.machineData?.[machine.id]?.reps, sets: 3 };
      }
    }
    return null;
  })();

  const [open, setOpen] = useState(true);
  const [weight, setWeight] = useState(data.weight || (lastEntry?.weight || ""));
  const [sets, setSets] = useState(data.sets || (lastEntry?.sets || 3));
  const [reps, setReps] = useState(data.reps || (lastEntry?.reps || 12));
  const [done, setDone] = useState(data.done || []);
  const [doneLeft, setDoneLeft] = useState(data.doneLeft || []);
  const [doneRight, setDoneRight] = useState(data.doneRight || []);
  const [unilateral, setUnilateral] = useState(data.unilateral || machine.unilateral || false);
  const [durMin, setDurMin] = useState(data.durMin || "");
  const [km, setKm] = useState(data.km || "");
  const [kcal, setKcal] = useState(data.kcal || "");
  const [showRest, setShowRest] = useState(false);
  const isCardio = machine.machineType === "cardio";
  const clamp = v => v === "" ? "" : String(Math.max(0, +v));
  const push = patch => onUpdate(isCardio ? { durMin, km, kcal, ...patch } : { weight, sets, reps, done, ...patch });

  const allEx = (sessions||[]).flatMap(s =>
    (s.exercises||[]).flatMap(ex => {
      if (ex.type === "solo" && ex.machineId === machine.id) return [ex];
      if (ex.type === "circuit" && (ex.machineIds||[]).includes(machine.id)) return [{ weight: ex.machineData?.[machine.id]?.weight }];
      return [];
    })
  );
  const prWeight = allEx.map(e => parseFloat(e.weight)).filter(v => v > 0).reduce((a,b) => Math.max(a,b), 0);
  const isNewPR = !!weight && parseFloat(weight) > prWeight && prWeight > 0;

  const toggleDone = i => {
    const n = Array.from({ length: sets }, (_,j) => j < done.length ? !!done[j] : false);
    n[i] = !n[i]; setDone(n); push({ done: n });
    if (n[i] && restSecs > 0) setShowRest(true);
  };
  const allDone = isCardio ? (!!durMin || !!km) :
    unilateral
      ? (doneLeft.filter(Boolean).length >= sets && doneRight.filter(Boolean).length >= sets && sets > 0)
      : (done.filter(Boolean).length >= sets && sets > 0);

  return (
    <div>
      {showRest && <RestTimer seconds={restSecs} onDone={() => setShowRest(false)} T={T}/>}
      <Card style={{ marginBottom:10, borderLeft:`3px solid ${machine.color}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div onClick={() => setOpen(o => !o)} style={{ flex:1, cursor:"pointer", display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:10, height:10, borderRadius:"50%", flexShrink:0, background: allDone ? C.success : machine.color }}/>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                <span style={{ fontWeight:700, fontSize:15, color:C.text }}>{machine.name}</span>
                <TypeBadge type={machine.machineType}/>
                {isNewPR && <PRFlash show T={T}/>}
              </div>
              {machine.notes && <div style={{ fontSize:11, color:C.muted }}>{machine.notes}</div>}
              {!isCardio && lastEntry?.weight && !data.weight && (
                <div style={{ fontSize:10, color:C.muted, marginTop:1 }}>{T.lastWeightUsed} {lastEntry.weight}kg</div>
              )}
            </div>
          </div>
          <div style={{ display:"flex", gap:5, alignItems:"center" }}>
            {getCats(machine).map(c => <CatBadge key={c} cat={c}/>)}
            <span onClick={() => setOpen(o => !o)} style={{ color:C.muted, cursor:"pointer", fontSize:12 }}>{open ? "▲" : "▼"}</span>
            <span onClick={onRemove} style={{ color:C.danger, cursor:"pointer", fontSize:14 }}>✕</span>
          </div>
        </div>
        {open && (
          <div style={{ marginTop:12, borderTop:`1px solid ${C.border}`, paddingTop:12 }}>
            {machine.photo && <img src={machine.photo} alt="" style={{ width:"100%", borderRadius:8, marginBottom:10, maxHeight:120, objectFit:"cover" }}/>}
            {isCardio ? (
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                <div style={{ flex:1, minWidth:70 }}>
                  <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.durationMin}</div>
                  <Input value={durMin} onChange={v => { const s = clamp(v); setDurMin(s); push({ durMin:s }); }} type="number" placeholder="min"/>
                </div>
                <div style={{ flex:1, minWidth:70 }}>
                  <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.distanceKm}</div>
                  <Input value={km} onChange={v => { const s = clamp(v); setKm(s); push({ km:s }); }} type="number" placeholder="km"/>
                </div>
                <div style={{ flex:1, minWidth:70 }}>
                  <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.calories}</div>
                  <Input value={kcal} onChange={v => { const s = clamp(v); setKcal(s); push({ kcal:s }); }} type="number" placeholder="kcal"/>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display:"flex", gap:8, marginBottom:14 }}>
                  <div style={{ flex:2 }}>
                    <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.weightKg}</div>
                    <Input value={weight} onChange={v => { const s = clamp(v); setWeight(s); push({ weight:s }); }} type="number" placeholder="kg"/>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.setsLabel}</div>
                    <input type="number" value={sets}
                      onChange={e => { setSets(e.target.value); }}
                      onBlur={e => { const n = Math.max(1, parseInt(e.target.value)||1); setSets(n); setDone([]); push({ sets:n, done:[] }); }}
                      style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" }}/>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.repsLabel}</div>
                    <input type="number" value={reps}
                      onChange={e => { setReps(e.target.value); }}
                      onBlur={e => { const n = Math.max(1, parseInt(e.target.value)||1); setReps(n); push({ reps:n }); }}
                      style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" }}/>
                  </div>
                </div>
                {/* Unilateral toggle */}
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <div onClick={() => { setUnilateral(u => { const next = !u; push({ unilateral:next, doneLeft:[], doneRight:[] }); return next; }); }}
                    style={{ display:"flex", alignItems:"center", gap:6, cursor:"pointer", background: unilateral ? C.purple+"22" : C.bg2,
                      border:`1px solid ${unilateral ? C.purple : C.border}`, borderRadius:8, padding:"4px 10px", transition:"all .15s" }}>
                    <span style={{ fontSize:14 }}>{unilateral ? "🔀" : "⬆️"}</span>
                    <span style={{ fontSize:11, fontWeight:600, color: unilateral ? C.purple : C.muted }}>
                      {unilateral ? T.unilateralLabel : T.bothSides}
                    </span>
                  </div>
                  {unilateral && <span style={{ fontSize:10, color:C.muted, fontStyle:"italic" }}>{T.unilateralHint}</span>}
                </div>

                {!unilateral ? (
                  <SeqCheck count={sets} done={done} onToggle={toggleDone} label={T.seqCheckLabel(reps, done.filter(Boolean).length, sets)} color={machine.color}/>
                ) : (
                  <div style={{ display:"flex", gap:10 }}>
                    <div style={{ flex:1 }}>
                      <SeqCheck count={sets} done={doneLeft}
                        onToggle={i => {
                          const n = Array.from({length:sets},(_,j)=>j<doneLeft.length?!!doneLeft[j]:false);
                          n[i]=!n[i]; setDoneLeft(n); push({doneLeft:n});
                          if (n[i] && restSecs > 0) setShowRest(true);
                        }}
                        label={T.unilateralLeft} color={C.blue}/>
                    </div>
                    <div style={{ flex:1 }}>
                      <SeqCheck count={sets} done={doneRight}
                        onToggle={i => {
                          const n = Array.from({length:sets},(_,j)=>j<doneRight.length?!!doneRight[j]:false);
                          n[i]=!n[i]; setDoneRight(n); push({doneRight:n});
                          if (n[i] && restSecs > 0) setShowRest(true);
                        }}
                        label={T.unilateralRight} color={C.purple}/>
                    </div>
                  </div>
                )}

                {/* Progression suggestion */}
                {(() => {
                  if (!parseFloat(weight) || !lastEntry?.weight) return null;
                  if (parseFloat(weight) !== parseFloat(lastEntry.weight)) return null;
                  const sameWeightCount = allEx.filter(e => parseFloat(e.weight) === parseFloat(weight)).length;
                  if (sameWeightCount < 3) return null;
                  return (
                    <div style={{ marginTop:8, background:C.blue+"18", border:`1px solid ${C.blue}44`, borderRadius:8, padding:"7px 10px", fontSize:12, color:C.blue, fontWeight:600 }}>
                      {T.progressionSuggest((parseFloat(weight) + 2.5).toFixed(1))}
                      <span style={{ fontSize:10, fontWeight:400, marginLeft:6, color:C.muted }}>({sameWeightCount}× {lang==="fr"?"à ce poids":"at this weight"})</span>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

// ─── CircuitMachineRow ─────────────────────────────────────────────────────────
const CircuitMachineRow = ({ machine, data, onUpdate, onRemove, T, restSecs, onDragStart, onDragOver, onDrop, dragOver }) => {
  const isCardio = machine.machineType === "cardio";
  const [weight, setWeight] = useState(data.weight || "");
  const [reps, setReps] = useState(data.reps || 12);
  const [durMin, setDurMin] = useState(data.durMin || "");
  const [km, setKm] = useState(data.km || "");
  const [checked, setChecked] = useState(data.checked || false);
  const [showRest, setShowRest] = useState(false);
  const clamp = v => v === "" ? "" : String(Math.max(0, +v));
  const push = patch => onUpdate(isCardio ? { durMin, km, checked, ...patch } : { weight, reps, checked, ...patch });
  const handleCheck = () => {
    const next = !checked; setChecked(next); push({ checked: next });
    // Rest timer is handled by CircuitBlock (fires after all machines done)
  };
  return (
    <div>
      {showRest && <RestTimer seconds={restSecs} onDone={() => setShowRest(false)} T={T}/>}
      <div draggable onDragStart={onDragStart} onDragOver={e => { e.preventDefault(); onDragOver(); }} onDrop={onDrop}
        style={{ background:C.bg2, borderRadius:9, border:`1px solid ${dragOver ? C.accent : C.border}`, borderLeft:`3px solid ${machine.color}`, padding:"10px 12px", marginBottom:7, opacity: checked ? .6 : 1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ color:C.muted, cursor:"grab", fontSize:14, flexShrink:0 }}>⠿</span>
          <div onClick={handleCheck}
            style={{ width:22, height:22, borderRadius:6, flexShrink:0, cursor:"pointer",
              border:`2px solid ${checked ? C.success : machine.color}`, background: checked ? C.success : "transparent",
              display:"flex", alignItems:"center", justifyContent:"center", transition:"all .15s" }}>
            {checked && <span style={{ color:"#0a0a0a", fontSize:12, fontWeight:800 }}>✓</span>}
          </div>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
              <span style={{ fontWeight:700, fontSize:14, color: checked ? C.muted : C.text, textDecoration: checked ? "line-through" : "none" }}>{machine.name}</span>
              <TypeBadge type={machine.machineType}/>
              {getCats(machine).map(c => <CatBadge key={c} cat={c}/>)}
            </div>
            {machine.notes && <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{machine.notes}</div>}
          </div>
          <span onClick={onRemove} style={{ color:C.danger, cursor:"pointer", fontSize:13 }}>✕</span>
        </div>
        {!checked && (
          <div style={{ display:"flex", gap:8, marginTop:10 }}>
            {isCardio ? (
              <div style={{ display:"flex", gap:8, flex:1 }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.durationMin}</div>
                  <Input value={durMin} onChange={v => { const s = clamp(v); setDurMin(s); push({ durMin:s }); }} type="number" placeholder="min"/>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.distanceKm}</div>
                  <Input value={km} onChange={v => { const s = clamp(v); setKm(s); push({ km:s }); }} type="number" placeholder="km"/>
                </div>
              </div>
            ) : (
              <div style={{ display:"flex", gap:8, flex:1 }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.weightKg}</div>
                  <Input value={weight} onChange={v => { const s = clamp(v); setWeight(s); push({ weight:s }); }} type="number" placeholder="kg"/>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.repsPerRound}</div>
                  <input type="number" value={reps}
                    onChange={e => setReps(e.target.value)}
                    onBlur={e => { const n = Math.max(1, parseInt(e.target.value)||1); setReps(n); push({ reps:n }); }}
                    style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" }}/>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── CircuitBlock ──────────────────────────────────────────────────────────────
const CircuitBlock = ({ circuit, allMachines, onUpdate, onRemove, onSaveTemplate, categories, savedCircuits, T, restSecs }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(circuit.name || "");
  const [rounds, setRounds] = useState(circuit.rounds || 3);
  const [roundsDone, setRoundsDone] = useState(circuit.roundsDone || []);
  const [showPicker, setShowPicker] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [dragIdx, setDragIdx] = useState(null);
  const [dragOverIdx, setDragOverIdx] = useState(null);
  const [showRest, setShowRest] = useState(false);

  const push = patch => onUpdate({ name, rounds, roundsDone, machineData: circuit.machineData, ...patch });

  const allMachinesChecked = circuit.machineIds.length > 0 && circuit.machineIds.every(mId => circuit.machineData?.[mId]?.checked);

  const toggleRound = i => {
    // Only allow UN-checking a round (auto-check is handled by autoCheckNextRound)
    const n = Array.from({ length: rounds }, (_,j) => j < roundsDone.length ? !!roundsDone[j] : false);
    if (!n[i]) return; // can't manually check, only uncheck
    n[i] = false; setRoundsDone(n);
    push({ roundsDone: n });
  };

  const handleMachineCheck = (mId, checkedVal) => {
    // Build updated machineData including the new checked value
    const newMD = {
      ...(circuit.machineData||{}),
      [mId]: { ...(circuit.machineData?.[mId]||{}), checked: checkedVal }
    };
    // Push the full updated machineData (not just this machine)
    onUpdate({ ...circuit, name, rounds, roundsDone, machineData: newMD });
    
    const allNowChecked = circuit.machineIds.every(id => newMD[id]?.checked);
    if (checkedVal && allNowChecked) {
      if (restSecs > 0) {
        setShowRest(true);
        pendingRoundRef.current = true;
      } else {
        autoCheckNextRound();
      }
    }
  };

  const pendingRoundRef = useRef(false);

  const autoCheckNextRound = () => {
    setRoundsDone(prev => {
      const nextIdx = prev.filter(Boolean).length;
      if (nextIdx >= rounds) return prev;
      const n = Array.from({ length: rounds }, (_,j) => j < prev.length ? !!prev[j] : false);
      n[nextIdx] = true;
      const isLastRound = n.filter(Boolean).length >= rounds;
      let newMachineData = { ...circuit.machineData };
      if (!isLastRound) {
        // Not last round: uncheck all machines for next round
        circuit.machineIds.forEach(id => {
          newMachineData[id] = { ...(circuit.machineData?.[id]||{}), checked: false };
        });
      }
      // Last round: keep machines checked (stays visible until user collapses)
      if (isLastRound) setOpen(false);
      onUpdate({ ...circuit, name, rounds, roundsDone: n, machineData: newMachineData });
      return n;
    });
  };

  const onRestDone = () => {
    setShowRest(false);
    if (pendingRoundRef.current) {
      pendingRoundRef.current = false;
      autoCheckNextRound();
    }
  };

  const updateMD = (mId, patch) => {
    const md = { ...(circuit.machineData||{}), [mId]: { ...(circuit.machineData?.[mId]||{}), ...patch } };
    push({ machineData: md });
  };

  const removeMachine = mId => onUpdate({ ...circuit, name, rounds, roundsDone, machineIds: circuit.machineIds.filter(id => id !== mId) });

  const handleSaveTpl = () => {
    onSaveTemplate({ name: name||"Unnamed", machineIds: circuit.machineIds, rounds, machineData: circuit.machineData||{} });
    setJustSaved(true); setTimeout(() => setJustSaved(false), 2000);
  };

  const handleDrop = dropIdx => {
    if (dragIdx === null || dragIdx === dropIdx) { setDragIdx(null); setDragOverIdx(null); return; }
    const ids = [...circuit.machineIds];
    const [moved] = ids.splice(dragIdx, 1); ids.splice(dropIdx, 0, moved);
    onUpdate({ ...circuit, name, rounds, roundsDone, machineIds: ids });
    setDragIdx(null); setDragOverIdx(null);
  };

  const allDone = roundsDone.filter(Boolean).length >= rounds && rounds > 0;
  const checkedCount = circuit.machineIds.filter(mId => circuit.machineData?.[mId]?.checked).length;

  return (
    <div>
      {showRest && <RestTimer seconds={restSecs} onDone={onRestDone} T={T}/>}
    <Card style={{ marginBottom:12, border:`1px solid ${C.purple}44` }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom: open ? 12 : 0 }}>
        <div style={{ width:10, height:10, borderRadius:"50%", flexShrink:0, background: allDone ? C.success : C.purple }}/>
        <div style={{ flex:1, cursor:"pointer" }} onClick={() => setOpen(o => !o)}>
          <div style={{ fontWeight:700, fontSize:15, color:C.text }}>{name || T.newCircuitName}</div>
          <div style={{ fontSize:11, color:C.muted }}>
            {circuit.machineIds.length} machines · {rounds} {T.roundsLabel.toLowerCase()}
            {roundsDone.filter(Boolean).length > 0 && <span style={{ color:C.success }}> · {T.roundsDoneLabel(roundsDone.filter(Boolean).length, rounds)}</span>}
          </div>
        </div>
        <span onClick={() => setOpen(o => !o)} style={{ color:C.muted, cursor:"pointer", fontSize:12 }}>{open ? "▲" : "▼"}</span>
        <span onClick={onRemove} style={{ color:C.danger, cursor:"pointer", fontSize:14 }}>✕</span>
      </div>
      {open && (
        <div>
          <div style={{ display:"flex", gap:8, marginBottom:12 }}>
            <div style={{ flex:3 }}>
              <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.circuitNameLabel}</div>
              <Input value={name} onChange={v => { setName(v); push({ name: v }); }} placeholder={T.circuitNamePH}/>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.roundsLabel}</div>
              <Input value={rounds} type="number" onChange={v => { const n = Math.max(1,+v); setRounds(n); setRoundsDone([]); push({ rounds:n, roundsDone:[] }); }}/>
            </div>
          </div>
          <SecLabel style={{ margin:"0 0 7px" }}>{T.machinesInCircuit}</SecLabel>
          {circuit.machineIds.length === 0 && !showPicker && (
            <div style={{ color:C.muted, fontSize:13, textAlign:"center", padding:"8px 0", marginBottom:4 }}>—</div>
          )}
          {circuit.machineIds.map((mId, idx) => {
            const m = allMachines.find(x => x.id === mId);
            if (!m) return null;
            const roundCount = roundsDone.filter(Boolean).length;
            return (
              <CircuitMachineRow
                key={`${mId}-r${roundsDone.filter(Boolean).length}-${roundsDone.join("")}`}
                machine={m}
                data={circuit.machineData?.[mId]||{}}
                onUpdate={p => { if ('checked' in p) { handleMachineCheck(mId, p.checked); } else { updateMD(mId, p); } }}
                onRemove={() => removeMachine(mId)}
                T={T} restSecs={restSecs}
                onDragStart={() => setDragIdx(idx)}
                onDragOver={() => setDragOverIdx(idx)}
                onDrop={() => handleDrop(idx)}
                dragOver={dragOverIdx === idx && dragIdx !== idx}
              />
            );
          })}
          {showPicker
            ? <MachinePicker
                machines={allMachines} exclude={circuit.machineIds}
                categories={categories} savedCircuits={savedCircuits} T={T}
                onPick={mId => onUpdate({ ...circuit, name, rounds, roundsDone, machineIds: [...circuit.machineIds, mId] })}
                onClose={() => setShowPicker(false)}/>
            : <Btn small variant="ghost" onClick={() => setShowPicker(true)} style={{ width:"100%", marginBottom:14 }}>{T.addMachineToCircuit}</Btn>
          }
          {circuit.machineIds.length > 0 && (
            <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:12 }}>
              <SeqCheck count={rounds} done={roundsDone} onToggle={toggleRound} label={T.circuitRoundsDone} color={C.purple}/>
              <div style={{ fontSize:11, color:C.muted, marginTop:6, marginBottom:10 }}>{T.circuitRoundHint(circuit.machineIds.length)}</div>
              <Btn small variant={justSaved ? "success" : "teal"} onClick={handleSaveTpl} style={{ width:"100%" }}>
                {justSaved ? T.templateSavedBtn : T.saveAsTemplate}
              </Btn>
            </div>
          )}
        </div>
      )}
    </Card>
    </div>
  );
};

// ─── Session Detail ────────────────────────────────────────────────────────────
const SessionDetail = ({ session, machines, onClose, T }) => {
  const getMachine = id => machines.find(m => m.id === id);
  const exercises = session.exercises || [];
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.85)", zIndex:100, overflowY:"auto", padding:"16px 14px 80px" }} onClick={onClose}>
      <div style={{ maxWidth:460, margin:"0 auto" }} onClick={e => e.stopPropagation()}>
        <Card>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div>
              <div style={{ fontSize:18, fontWeight:800, color:C.text }}>{fmtDate(session.date)}</div>
              {session.gymDuration && <div style={{ fontSize:12, color:C.muted, marginTop:2 }}>⏱ {fmtDur(session.gymDuration)}</div>}
              {session.notes && (
                <div style={{ fontSize:12, color:C.blue, marginTop:6, fontStyle:"italic", borderLeft:`2px solid ${C.blue}44`, paddingLeft:8, lineHeight:1.5 }}>
                  {session.notes}
                </div>
              )}
            </div>
            <span onClick={onClose} style={{ fontSize:22, color:C.muted, cursor:"pointer", lineHeight:1 }}>✕</span>
          </div>
          {exercises.map((ex, i) => {
            if (ex.type === "circuit") {
              return (
                <div key={i} style={{ marginBottom:16, paddingBottom:16, borderBottom:`1px solid ${C.border}` }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                    <div style={{ width:10, height:10, borderRadius:"50%", background:C.purple, flexShrink:0 }}/>
                    <span style={{ fontWeight:700, color:C.purple, fontSize:14 }}>{ex.circuitName||"Circuit"}</span>
                    <span style={{ fontSize:12, color:C.muted }}>{ex.rounds} {T.roundsLabel.toLowerCase()}</span>
                  </div>
                  {(ex.machineIds||[]).map((mId, mi) => {
                    const m = getMachine(mId), md = ex.machineData?.[mId]||{};
                    const isCardio = m?.machineType === "cardio";
                    return (
                      <div key={mi} style={{ marginLeft:18, marginBottom:8, paddingBottom:8, borderBottom:`1px solid ${C.border}22` }}>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                          <div style={{ width:8, height:8, borderRadius:"50%", background:m?.color||C.muted, flexShrink:0 }}/>
                          <span style={{ fontWeight:600, color:C.text, fontSize:13 }}>{m?.name||(ex.machineNames?.[mi])||mId}</span>
                          {m && <TypeBadge type={m.machineType}/>}
                        </div>
                        {isCardio ? (
                          <div style={{ fontSize:12, display:"flex", gap:12, marginLeft:14 }}>
                            {md.durMin && <span style={{ color:C.teal, fontWeight:600 }}>{md.durMin} min</span>}
                            {md.km && <span style={{ color:C.blue, fontWeight:600 }}>{md.km} km</span>}
                          </div>
                        ) : (
                          <div style={{ fontSize:12, display:"flex", gap:12, marginLeft:14, flexWrap:"wrap" }}>
                            {md.weight
                              ? <span style={{ color:C.accent, fontWeight:700 }}>{md.weight} kg</span>
                              : <span style={{ color:C.muted }}>{T.noWeightRecorded}</span>}
                            {md.reps && <span style={{ color:C.muted }}>{md.reps} {T.repsPerRoundLabel}</span>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }
            const m = getMachine(ex.machineId);
            const isCardio = m?.machineType === "cardio";
            return (
              <div key={i} style={{ marginBottom:12, paddingBottom:12, borderBottom:`1px solid ${C.border}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:m?.color||C.muted, flexShrink:0 }}/>
                  <span style={{ fontWeight:700, color:C.text, fontSize:14 }}>{ex.machineName||(m?.name)||"?"}</span>
                  {m && <TypeBadge type={m.machineType}/>}
                </div>
                {isCardio ? (
                  <div style={{ display:"flex", gap:16, fontSize:13 }}>
                    {ex.durMin && <span style={{ color:C.teal, fontWeight:600 }}>{ex.durMin} min</span>}
                    {ex.km && <span style={{ color:C.blue, fontWeight:600 }}>{ex.km} km</span>}
                    {ex.kcal && <span style={{ color:C.yellow, fontWeight:600 }}>{ex.kcal} kcal</span>}
                  </div>
                ) : (
                  <div style={{ display:"flex", gap:12, fontSize:13, flexWrap:"wrap" }}>
                    {ex.weight
                      ? <span style={{ color:C.accent, fontWeight:700 }}>{ex.weight} kg</span>
                      : <span style={{ color:C.muted }}>{T.noWeightRecorded}</span>}
                    {(ex.sets || ex.reps) && <span style={{ color:C.muted }}>{ex.sets||"?"} sets × {ex.reps||"?"} reps</span>}
                    {ex.done && <span style={{ color:C.success }}>{ex.done.filter(Boolean).length}/{ex.sets} done</span>}
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
// PAGE — Training
// ══════════════════════════════════════════════════════════════════════════════
const TrainingPage = ({ data, setData, T, lang, pendingRepeat, onRepeatConsumed }) => {
  const sessionCtx = useContext(SessionCtx);
  const [sessionDate, setSessionDate] = useState(todayStr());
  const [mode, setMode] = useState("circuit");
  const [soloIds, setSoloIds] = useState([]);
  const [soloData, setSoloData] = useState({});
  const [showSoloPicker, setShowSoloPicker] = useState(false);
  const [circuits, setCircuits] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [gymDuration, setGymDuration] = useState(null);
  const [sessionNotes, setSessionNotes] = useState("");
  const [saved, setSaved] = useState(false);
  const [confirmSave, setConfirmSave] = useState(false);
  const [showNotesField, setShowNotesField] = useState(false);
  const [completedPlan, setCompletedPlan] = useState(null);
  const restSecs = data.settings?.restTimerSecs ?? 90;

  useEffect(() => {
    if (!pendingRepeat) return;
    const s = pendingRepeat, exs = s.exercises || [];
    const newSoloIds = exs.filter(e => e.type === "solo" || !e.type).map(e => e.machineId).filter(Boolean);
    const newSoloData = {};
    exs.filter(e => e.type === "solo" || !e.type).forEach(e => {
      if (e.machineId) newSoloData[e.machineId] = { weight:e.weight, sets:e.sets, reps:e.reps, done:[], durMin:e.durMin, km:e.km, kcal:e.kcal };
    });
    const newCircuits = exs.filter(e => e.type === "circuit").map(c => ({
      id: uid(), name: c.circuitName||"", machineIds: c.machineIds||[], rounds: c.rounds||3,
      roundsDone: [], machineData: Object.fromEntries(Object.entries(c.machineData||{}).map(([k,v]) => ([k, { ...v, checked:false }]))),
    }));
    setSoloIds(newSoloIds); setSoloData(newSoloData); setCircuits(newCircuits);
    setSessionDate(todayStr());
    if (!sessionCtx?.active) sessionCtx?.startSession?.();
    onRepeatConsumed?.();
  }, [pendingRepeat]);

  const addSoloMachine = id => { if (!soloIds.includes(id)) setSoloIds(s => [...s, id]); setShowSoloPicker(false); };
  const removeSoloMachine = id => setSoloIds(s => s.filter(x => x !== id));
  const updateSoloData = (id, patch) => setSoloData(d => ({ ...d, [id]: { ...d[id], ...patch } }));
  const addCircuit = (tpl=null) => {
    setCircuits(cs => [...cs, tpl
      ? { id:uid(), name:tpl.name, machineIds:[...tpl.machineIds], rounds:tpl.rounds, roundsDone:[], machineData:{...tpl.machineData} }
      : { id:uid(), name:"", machineIds:[], rounds:3, roundsDone:[], machineData:{} }
    ]);
    setShowSaved(false);
  };
  const removeCircuit = cid => setCircuits(cs => cs.filter(c => c.id !== cid));
  const updateCircuit = (cid, patch) => setCircuits(cs => cs.map(c => c.id === cid ? { ...c, ...patch } : c));
  const saveCircuitTemplate = tpl => setData(d => ({ ...d, savedCircuits: [...(d.savedCircuits||[]).filter(c => c.name !== tpl.name), { ...tpl, id:uid() }] }));
  const handleTimerSave = v => { if (sessionCtx?.elapsedRef) sessionCtx.elapsedRef.current = v; setGymDuration(v); };

  const hasSolo = soloIds.length > 0;
  const hasCircuit = circuits.some(c => c.machineIds.length > 0);
  const canSave = hasSolo || hasCircuit;
  const savedCircuits = data.savedCircuits || [];

  const doSave = () => {
    const dur = gymDuration ?? (sessionCtx?.active ? sessionCtx.elapsedRef.current : null);
    const soloEx = soloIds.map(id => ({ type:"solo", machineId:id, machineName:data.machines.find(m=>m.id===id)?.name, ...(soloData[id]||{}) }));
    const circEx = circuits.filter(c => c.machineIds.length > 0).map(c => ({
      type:"circuit", circuitName:c.name||"Unnamed", machineIds:c.machineIds,
      machineNames: c.machineIds.map(id => data.machines.find(m=>m.id===id)?.name),
      rounds:c.rounds, roundsDone:c.roundsDone, machineData:c.machineData||{},
    }));
    const session = { id:uid(), date:sessionDate, gymDuration:dur, notes:sessionNotes, exercises:[...circEx, ...soloEx] };
    setData(d => ({ ...d, sessions:[...d.sessions, session] }));
    sessionCtx?.endSession?.();
    setSaved(true);
    // Show planned session completion prompt
    const todayPlans = (data.plannedSessions||[]).filter(p => p.date === sessionDate);
    if (todayPlans.length > 0) {
      setTimeout(() => setCompletedPlan(todayPlans[0]), 2600);
    }
    setTimeout(() => { setSaved(false); setSoloIds([]); setSoloData({}); setCircuits([]); setGymDuration(null); setSessionNotes(""); }, 2500);
  };

  const handleSaveClick = () => {
    if (!canSave) return;
    if (!confirmSave) { setConfirmSave(true); setTimeout(() => setConfirmSave(false), 4000); return; }
    setConfirmSave(false); doSave();
  };

  return (
    <div style={{ padding:"0 0 110px" }}>
      <InactivityBanner sessions={data.sessions} settings={data.settings} T={T}/>
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:22, fontWeight:800, color:C.text }}>{T.trainTitle}</div>
        <div style={{ fontSize:13, color:C.muted }}>{T.trainSub}</div>
      </div>
      <Card style={{ marginBottom:14 }}>
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.trainDate}</div>
          <input type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)}
            style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" }}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          {[{ key:"circuit", icon:"🔄", title:T.circuitsView, active:hasCircuit }, { key:"solo", icon:"🏋️", title:T.machinesView, active:hasSolo }].map(({ key, icon, title, active }) => (
            <div key={key} onClick={() => setMode(key)}
              style={{ padding:"10px", borderRadius:10, cursor:"pointer", textAlign:"center",
                border:`2px solid ${mode===key ? (key==="circuit" ? C.purple : C.accent) : C.border}`,
                background: mode===key ? (key==="circuit" ? C.purple+"18" : C.accent+"18") : "transparent" }}>
              <div style={{ fontSize:18, marginBottom:3 }}>{icon}</div>
              <div style={{ fontWeight:700, fontSize:12, color: mode===key ? (key==="circuit" ? C.purple : C.accent) : C.text }}>{title}</div>
              {active && <div style={{ fontSize:10, color:C.success }}>● active</div>}
            </div>
          ))}
        </div>
      </Card>

      {!sessionCtx?.active && gymDuration === null && (
        <Btn onClick={() => sessionCtx?.startSession?.()} variant="outline" style={{ width:"100%", marginBottom:14 }}>{T.trainStartTimer}</Btn>
      )}
      {sessionCtx?.active && (
        <GymTimer elapsedRef={sessionCtx.elapsedRef} onSave={handleTimerSave} T={T}
          onStop={() => { sessionCtx.endSession(); sessionCtx.elapsedRef.current = 0; setGymDuration(null); }}/>
      )}
      {gymDuration !== null && (
        <div style={{ display:"flex", alignItems:"center", gap:10, background:C.success+"18", border:`1px solid ${C.success}44`, borderRadius:10, padding:"10px 14px", marginBottom:14 }}>
          <span>✅</span>
          <div>
            <div style={{ fontWeight:700, color:C.success, fontSize:13 }}>{T.timerSavedTitle}</div>
            <div style={{ fontSize:12, color:C.muted }}>{fmtDur(gymDuration)}</div>
          </div>
          <div style={{ flex:1 }}/>
          <Btn small variant="ghost" onClick={() => setGymDuration(null)}>{T.timerReset}</Btn>
        </div>
      )}

      {mode === "circuit" && (
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <SecLabel style={{ margin:0 }}>{T.circuitsLabel(circuits.length)}</SecLabel>
            <div style={{ display:"flex", gap:6 }}>
              {savedCircuits.length > 0 && (
                <Btn small variant="teal" onClick={() => setShowSaved(s => !s)}>{showSaved ? "✕ " : ""}{T.templatesBtn}</Btn>
              )}
              <Btn small variant="purple" onClick={() => { addCircuit(); if (!sessionCtx?.active) sessionCtx?.startSession?.(); }}>{T.newCircuitBtn}</Btn>
            </div>
          </div>
          {showSaved && (
            <Card style={{ marginBottom:12, border:`1px solid ${C.teal}55` }}>
              <div style={{ fontSize:13, fontWeight:700, color:C.text, marginBottom:10 }}>{T.savedTemplatesTitle}</div>
              {savedCircuits.map(sc => (
                <div key={sc.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:`1px solid ${C.border}` }}>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{sc.name}</div>
                    <div style={{ fontSize:11, color:C.muted }}>{T.machinesRounds(sc.machineIds?.length||0, sc.rounds)}</div>
                  </div>
                  <Btn small variant="teal" onClick={() => addCircuit(sc)}>{T.useBtn}</Btn>
                </div>
              ))}
              <div style={{ fontSize:11, color:C.muted, marginTop:8 }}>
                {lang === "fr" ? "Pour supprimer un modèle, allez dans Config." : "To delete a template, go to Setup."}
              </div>
            </Card>
          )}
          {circuits.length === 0 && !showSaved && (
            <div style={{ textAlign:"center", padding:"36px 0", color:C.muted }}>
              <div style={{ fontSize:36, marginBottom:8 }}>🔄</div>
              <div style={{ fontSize:14 }}>{T.emptyCircuits}</div>
            </div>
          )}
          {circuits.map(c => (
            <CircuitBlock key={c.id} circuit={c} allMachines={data.machines}
              onUpdate={patch => updateCircuit(c.id, patch)} onRemove={() => removeCircuit(c.id)}
              onSaveTemplate={saveCircuitTemplate} categories={data.categories}
              savedCircuits={savedCircuits} T={T} restSecs={restSecs}/>
          ))}
        </div>
      )}

      {mode === "solo" && (
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <SecLabel style={{ margin:0 }}>{T.machinesLabel(soloIds.length)}</SecLabel>
            <Btn small variant="outline" onClick={() => setShowSoloPicker(p => !p)}>{showSoloPicker ? T.cancelBtn : T.addMachineBtn}</Btn>
          </div>
          {showSoloPicker && (
            <MachinePicker machines={data.machines} exclude={soloIds} categories={data.categories}
              savedCircuits={savedCircuits} T={T}
              onPick={id => { addSoloMachine(id); if (!sessionCtx?.active) sessionCtx?.startSession?.(); }}
              onClose={() => setShowSoloPicker(false)}/>
          )}
          {soloIds.length === 0 && !showSoloPicker && (
            <div style={{ textAlign:"center", padding:"36px 0", color:C.muted }}>
              <div style={{ fontSize:36, marginBottom:8 }}>🏋️</div>
              <div>{T.emptyMachines}</div>
            </div>
          )}
          {soloIds.map(id => {
            const m = data.machines.find(x => x.id === id);
            if (!m) return null;
            return (
              <SoloMachineBlock key={id} machine={m} data={soloData[id]||{}}
                onUpdate={p => updateSoloData(id, p)} onRemove={() => removeSoloMachine(id)}
                T={T} restSecs={restSecs} sessions={data.sessions}/>
            );
          })}
        </div>
      )}

      {/* Fix 4: Planned session completion prompt */}
      {completedPlan && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.85)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:C.card, borderRadius:16, padding:24, maxWidth:340, width:"100%", border:`1px solid ${C.success}44` }}>
            <div style={{ fontSize:24, textAlign:"center", marginBottom:12 }}>✅</div>
            <div style={{ fontSize:16, fontWeight:800, color:C.success, textAlign:"center", marginBottom:8 }}>
              {lang==="fr" ? "Séance terminée !" : "Session done!"}
            </div>
            <div style={{ fontSize:13, color:C.muted, textAlign:"center", marginBottom:20 }}>
              {lang==="fr" ? `Plan "${completedPlan.name}"` : `Plan "${completedPlan.name}"`}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <Btn variant="danger" onClick={() => {
                setData(d => ({ ...d, plannedSessions: d.plannedSessions.filter(x => x.id !== completedPlan.id) }));
                setCompletedPlan(null);
              }}>🗑 {lang==="fr" ? "Supprimer ce plan" : "Delete this plan"}</Btn>
              <Btn variant="outline" onClick={() => {
                const newDate = new Date(); newDate.setDate(newDate.getDate() + 7);
                const nd = newDate.toISOString().slice(0,10);
                setData(d => ({ ...d, plannedSessions: d.plannedSessions.map(x => x.id===completedPlan.id ? { ...x, date:nd } : x) }));
                setCompletedPlan(null);
              }}>📅 {lang==="fr" ? "Reporter dans 7 jours" : "Reschedule in 7 days"}</Btn>
              <Btn variant="ghost" onClick={() => setCompletedPlan(null)}>
                📌 {lang==="fr" ? "Laisser tel quel" : "Leave as is"}
              </Btn>
            </div>
          </div>
        </div>
      )}

      {canSave && (
        <div style={{ position:"fixed", bottom:62, left:0, right:0, background:C.bg, borderTop:`1px solid ${C.border}` }}>
          {/* Notes: expandable above the save bar */}
          {showNotesField && (
            <div style={{ padding:"8px 16px 0", borderBottom:`1px solid ${C.border}22` }}>
              <textarea value={sessionNotes} onChange={e => setSessionNotes(e.target.value)}
                placeholder={T.sessionNotesPH} rows={2} autoFocus
                style={{ width:"100%", boxSizing:"border-box", background:C.bg2,
                  border:`1px solid ${C.blue}55`, borderRadius:8, color:C.text,
                  padding:"6px 10px", fontSize:12, fontFamily:"inherit", outline:"none",
                  resize:"none", lineHeight:1.5 }}/>
            </div>
          )}
          <div style={{ padding:"8px 16px 10px", display:"flex", gap:8, alignItems:"center" }}>
            {/* Notes toggle button */}
            <div onClick={() => setShowNotesField(s => !s)}
              title={lang==="fr" ? "Notes de séance" : "Session notes"}
              style={{ width:36, height:36, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
                background: sessionNotes ? C.blue+"22" : C.bg2,
                border:`1px solid ${sessionNotes ? C.blue+"88" : C.border}`,
                cursor:"pointer", flexShrink:0, fontSize:16 }}>
              📝
            </div>
            <div style={{ flex:1 }}>
              {confirmSave && (
                <div style={{ fontSize:11, color:C.yellow, textAlign:"center", marginBottom:4, fontWeight:600 }}>⚠️ {T.confirmSaveMsg}</div>
              )}
              <Btn onClick={handleSaveClick} style={{ width:"100%" }} variant={saved ? "success" : confirmSave ? "outline" : "primary"}>
                {saved ? T.sessionSaved : confirmSave ? `✓ ${lang === "fr" ? "Confirmer" : "Confirm"}` : T.saveSessionBtn(circuits.filter(c=>c.machineIds.length>0).length||0, hasSolo ? soloIds.length : 0)}
              </Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE — Plan
// ══════════════════════════════════════════════════════════════════════════════
const PlanForm = ({ plan, machines, categories, savedCircuits, sessions, onSave, onCancel, T, lang }) => {
  const [name, setName] = useState(plan?.name || "");
  const [date, setDate] = useState(plan?.date || todayStr());
  const [notes, setNotes] = useState(plan?.notes || "");
  const [circuits, setCircuits] = useState(plan?.circuits || []);
  const [soloMachines, setSoloMachines] = useState(plan?.soloMachines || []);
  const [showMPicker, setShowMPicker] = useState(false);
  const [showCPicker, setShowCPicker] = useState(null);
  const [showTplPicker, setShowTplPicker] = useState(false);
  const [showSessionPicker, setShowSessionPicker] = useState(false);
  const inputStyle = { background:C.bg, border:`1px solid ${C.border}`, borderRadius:6, color:C.text, padding:"3px 6px", fontFamily:"inherit", outline:"none" };
  const fr = lang === "fr";

  const loadTemplate = (tpl) => {
    setCircuits(cs => [...cs, { id:uid(), name:tpl.name||"", rounds:tpl.rounds||3, machineIds:[...(tpl.machineIds||[])], machineData:{...(tpl.machineData||{})} }]);
    setShowTplPicker(false);
  };

  const loadSession = (s) => {
    const exs = s.exercises || [];
    const newCircuits = exs.filter(e => e.type === "circuit").map(c => ({
      id:uid(), name:c.circuitName||"", rounds:c.rounds||3,
      machineIds:[...(c.machineIds||[])],
      machineData: Object.fromEntries(Object.entries(c.machineData||{}).map(([k,v]) => [k, { weight:v.weight||"", reps:v.reps||"" }])),
    }));
    const newSolo = exs.filter(e => e.type==="solo"||!e.type).map(e => ({
      machineId:e.machineId, weight:e.weight||"", sets:e.sets||3, reps:e.reps||12,
    })).filter(e => e.machineId);
    setCircuits(cs => [...cs, ...newCircuits]);
    setSoloMachines(sm => [...sm, ...newSolo.filter(e => !sm.find(x => x.machineId===e.machineId))]);
    if (!name && s.date) setName(fr ? `Basé sur ${fmtDate(s.date)}` : `Based on ${fmtDate(s.date)}`);
    setShowSessionPicker(false);
  };

  return (
    <Card style={{ marginBottom:12, border:`1px solid ${C.accent}` }}>
      <div style={{ fontWeight:700, fontSize:15, color:C.text, marginBottom:8 }}>
        {plan ? (fr ? "Modifier le plan" : "Edit plan") : T.newPlanBtn.replace("+ ","")}
      </div>
      {!plan && (sessions||[]).length > 0 && (
        <div style={{ marginBottom:10 }}>
          <Btn small variant="ghost" onClick={() => { setShowSessionPicker(s => !s); setShowTplPicker(false); }} style={{ marginRight:6 }}>
            📋 {fr ? "Importer une séance" : "Import a session"}
          </Btn>
          {savedCircuits.length > 0 && (
            <Btn small variant="purple" onClick={() => { setShowTplPicker(s => !s); setShowSessionPicker(false); }}>
              📦 {fr ? "Ajouter un modèle" : "Add template"}
            </Btn>
          )}
        </div>
      )}
      {showTplPicker && (
        <Card style={{ marginBottom:10, border:`1px solid ${C.purple}44`, padding:10 }}>
          <div style={{ fontSize:12, fontWeight:700, color:C.purple, marginBottom:8 }}>
            {fr ? "Choisir un modèle de circuit" : "Pick a circuit template"}
          </div>
          {savedCircuits.map(sc => (
            <div key={sc.id} onClick={() => loadTemplate(sc)}
              style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:`1px solid ${C.border}`, cursor:"pointer" }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{sc.name}</div>
                <div style={{ fontSize:11, color:C.muted }}>{(sc.machineIds||[]).map(id => machines.find(m=>m.id===id)?.name).filter(Boolean).join(" · ")} · {sc.rounds} rounds</div>
              </div>
              <span style={{ color:C.purple, fontSize:12, fontWeight:700 }}>+</span>
            </div>
          ))}
          <Btn small variant="ghost" onClick={() => setShowTplPicker(false)} style={{ marginTop:6, width:"100%" }}>✕ {fr ? "Fermer" : "Close"}</Btn>
        </Card>
      )}
      {showSessionPicker && (
        <Card style={{ marginBottom:10, border:`1px solid ${C.blue}44`, padding:10 }}>
          <div style={{ fontSize:12, fontWeight:700, color:C.blue, marginBottom:8 }}>
            {fr ? "Importer depuis une séance passée" : "Import from a past session"}
          </div>
          {[...(sessions||[])].reverse().slice(0,10).map(s => {
            const exs = s.exercises||[];
            const circs = exs.filter(e=>e.type==="circuit");
            const solos = exs.filter(e=>e.type==="solo"||!e.type);
            return (
              <div key={s.id} onClick={() => loadSession(s)}
                style={{ padding:"8px 0", borderBottom:`1px solid ${C.border}`, cursor:"pointer" }}>
                <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{fmtDate(s.date)}</div>
                <div style={{ fontSize:11, color:C.muted }}>
                  {circs.map(c => c.circuitName||"Circuit").join(", ")}
                  {circs.length > 0 && solos.length > 0 ? " + " : ""}
                  {solos.map(e => e.machineName||machines.find(m=>m.id===e.machineId)?.name||"?").join(", ")}
                </div>
              </div>
            );
          })}
          <Btn small variant="ghost" onClick={() => setShowSessionPicker(false)} style={{ marginTop:6, width:"100%" }}>✕ {fr ? "Fermer" : "Close"}</Btn>
        </Card>
      )}
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.planNameLabel}</div>
          <Input value={name} onChange={setName} placeholder={T.planNamePH}/>
        </div>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.planDateLabel}</div>
          <input type="date" value={date} onChange={e => setDate(e.target.value)}
            style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" }}/>
        </div>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.planNotesLabel}</div>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder={T.planNotesPH} rows={3}
            style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:13, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none", resize:"vertical" }}/>
        </div>

        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6, fontWeight:700 }}>{T.planCircuitsLabel}</div>
          {circuits.map((c, ci) => (
            <div key={ci} style={{ background:C.bg2, borderRadius:8, padding:"8px 10px", marginBottom:6, border:`1px solid ${C.purple}44` }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                <Input value={c.name} onChange={v => setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, name:v } : x))} placeholder={T.circuitNamePH} style={{ fontSize:12 }}/>
                <span onClick={() => setCircuits(cs => cs.filter((_,i) => i !== ci))} style={{ color:C.danger, cursor:"pointer", fontSize:13, flexShrink:0 }}>✕</span>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                <span style={{ fontSize:10, color:C.muted }}>{T.roundsLabel}:</span>
                <input type="number" min="1" value={c.rounds||3}
                  onChange={e => setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, rounds:Math.max(1,+e.target.value) } : x))}
                  style={{ ...inputStyle, width:50, fontSize:12 }}/>
              </div>
              {(c.machineIds||[]).map(mId => {
                const m = machines.find(x => x.id === mId);
                if (!m) return null;
                const md = c.machineData?.[mId] || {};
                const isCardio = m.machineType === "cardio";
                return (
                  <div key={mId} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4, paddingLeft:8 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:m.color, flexShrink:0 }}/>
                    <span style={{ fontSize:12, color:C.text, flex:1 }}>{m.name}</span>
                    {!isCardio && (
                      <input type="number" min="0" value={md.weight||""} placeholder="kg"
                        onChange={e => setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, machineData:{ ...x.machineData, [mId]:{ ...(x.machineData?.[mId]||{}), weight:e.target.value } } } : x))}
                        style={{ ...inputStyle, width:50, fontSize:11 }}/>
                    )}
                    {!isCardio && (
                      <input type="number" min="0" value={md.reps||""} placeholder="reps"
                        onChange={e => setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, machineData:{ ...x.machineData, [mId]:{ ...(x.machineData?.[mId]||{}), reps:+e.target.value } } } : x))}
                        style={{ ...inputStyle, width:44, fontSize:11 }}/>
                    )}
                    <span onClick={() => setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, machineIds:x.machineIds.filter(id => id !== mId) } : x))} style={{ color:C.danger, cursor:"pointer", fontSize:12 }}>✕</span>
                  </div>
                );
              })}
              {showCPicker === ci
                ? <MachinePicker machines={machines} exclude={c.machineIds||[]} categories={categories} savedCircuits={savedCircuits} T={T}
                    onPick={mId => { setCircuits(cs => cs.map((x,i) => i===ci ? { ...x, machineIds:[...(x.machineIds||[]), mId] } : x)); setShowCPicker(null); }}
                    onClose={() => setShowCPicker(null)}/>
                : <Btn small variant="ghost" onClick={() => setShowCPicker(ci)} style={{ width:"100%", marginTop:4 }}>
                    + {lang === "fr" ? "Ajouter machine" : "Add machine"}
                  </Btn>
              }
            </div>
          ))}
          <Btn small variant="purple" onClick={() => setCircuits(cs => [...cs, { id:uid(), name:"", rounds:3, machineIds:[], machineData:{} }])} style={{ width:"100%", marginBottom:8 }}>
            + {lang === "fr" ? "Ajouter circuit" : "Add circuit"}
          </Btn>
        </div>

        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6, fontWeight:700 }}>{T.planMachinesLabel}</div>
          {soloMachines.map((sm, si) => {
            const m = machines.find(x => x.id === sm.machineId);
            if (!m) return null;
            const isCardio = m.machineType === "cardio";
            return (
              <div key={si} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:6, background:C.bg2, borderRadius:8, padding:"8px 10px", borderLeft:`3px solid ${m.color}` }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:C.text, marginBottom:4 }}>{m.name}</div>
                  {!isCardio && (
                    <div style={{ display:"flex", gap:6 }}>
                      <input type="number" min="0" value={sm.weight||""} placeholder="kg"
                        onChange={e => setSoloMachines(s => s.map((x,i) => i===si ? { ...x, weight:e.target.value } : x))}
                        style={{ ...inputStyle, width:54, fontSize:11 }}/>
                      <input type="number" min="1" value={sm.sets||3} placeholder="sets"
                        onChange={e => setSoloMachines(s => s.map((x,i) => i===si ? { ...x, sets:Math.max(1,+e.target.value) } : x))}
                        style={{ ...inputStyle, width:44, fontSize:11 }}/>
                      <input type="number" min="1" value={sm.reps||12} placeholder="reps"
                        onChange={e => setSoloMachines(s => s.map((x,i) => i===si ? { ...x, reps:Math.max(1,+e.target.value) } : x))}
                        style={{ ...inputStyle, width:44, fontSize:11 }}/>
                    </div>
                  )}
                </div>
                <span onClick={() => setSoloMachines(s => s.filter((_,i) => i !== si))} style={{ color:C.danger, cursor:"pointer", fontSize:13 }}>✕</span>
              </div>
            );
          })}
          {showMPicker && (
            <MachinePicker machines={machines} exclude={soloMachines.map(s => s.machineId)} categories={categories} savedCircuits={savedCircuits} T={T}
              onPick={mId => setSoloMachines(s => [...s, { machineId:mId, weight:"", sets:3, reps:12 }])}
              onClose={() => setShowMPicker(false)}/>
          )}
          {!showMPicker && (
            <Btn small variant="outline" onClick={() => setShowMPicker(true)} style={{ width:"100%" }}>
              + {lang === "fr" ? "Ajouter machine" : "Add machine"}
            </Btn>
          )}
        </div>

        <div style={{ display:"flex", gap:8 }}>
          <Btn onClick={() => { const n = name.trim() || (lang==="fr" ? "Sans titre" : "Unnamed"); onSave({ id: plan?.id||uid(), name:n, date, notes, circuits, soloMachines }); }} style={{ flex:1 }}>{T.planSaveBtn}</Btn>
          <Btn onClick={onCancel} variant="ghost">{lang === "fr" ? "Annuler" : "Cancel"}</Btn>
        </div>
      </div>
    </Card>
  );
};

const PlanCard = ({ plan, today, T, data, loadedId, setLoadedId, onLoadPlan, onEdit, onDelete }) => {
  const isToday = plan.date === today;
  return (
    <Card style={{ marginBottom:8, borderLeft:`3px solid ${isToday ? C.accent : C.purple}` }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
        <div>
          <div style={{ fontWeight:700, color:C.text, fontSize:15 }}>{plan.name}</div>
          <div style={{ fontSize:12, color: isToday ? C.accent : C.muted, marginTop:2, fontWeight: isToday ? 700 : 400 }}>
            {isToday ? T.planToday : fmtDate(plan.date)}
          </div>
        </div>
        <div style={{ display:"flex", gap:6 }}>
          <Btn small variant="ghost" onClick={() => onEdit(plan)}>✎</Btn>
          <Btn small variant="danger" onClick={() => onDelete(plan.id)}>✕</Btn>
        </div>
      </div>
      {plan.notes && (
        <div style={{ fontSize:12, color:C.muted, marginBottom:8, lineHeight:1.5, borderLeft:`2px solid ${C.border}`, paddingLeft:8 }}>{plan.notes}</div>
      )}
      {(plan.circuits||[]).length > 0 && (
        <div style={{ fontSize:11, color:C.purple, marginBottom:4 }}>
          {plan.circuits.map(c => `${c.name||"Circuit"} ×${c.rounds}`).join(" · ")}
        </div>
      )}
      {(plan.soloMachines||[]).length > 0 && (
        <div style={{ fontSize:11, color:C.muted, marginBottom:8 }}>
          {plan.soloMachines.map(s => data.machines.find(m => m.id === s.machineId)?.name || "?").join(" · ")}
        </div>
      )}
      {loadedId === plan.id
        ? <div style={{ fontSize:12, color:C.success, fontWeight:600, textAlign:"center", padding:"6px 0" }}>✓ {T.planLoaded}</div>
        : <Btn variant="teal" small style={{ width:"100%" }} onClick={() => { onLoadPlan(plan); setLoadedId(plan.id); setTimeout(() => setLoadedId(null), 3000); }}>
            {T.planLoadBtn}
          </Btn>
      }
    </Card>
  );
};

const PlanPage = ({ data, setData, T, lang, onLoadPlan }) => {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loadedId, setLoadedId] = useState(null);
  const plans = data.plannedSessions || [];
  const today = todayStr();
  const upcoming = plans.filter(p => p.date >= today).sort((a,b) => a.date < b.date ? -1 : 1);
  const past = plans.filter(p => p.date < today).sort((a,b) => a.date < b.date ? 1 : -1);

  const savePlan = plan => {
    setData(d => ({ ...d, plannedSessions: editing
      ? d.plannedSessions.map(p => p.id === plan.id ? plan : p)
      : [...(d.plannedSessions||[]), plan]
    }));
    setAdding(false); setEditing(null);
  };
  const deletePlan = id => setData(d => ({ ...d, plannedSessions: d.plannedSessions.filter(p => p.id !== id) }));

  return (
    <div style={{ padding:"0 0 80px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
        <div>
          <div style={{ fontSize:22, fontWeight:800, color:C.text }}>{T.planTitle}</div>
          <div style={{ fontSize:13, color:C.muted }}>{T.planSub}</div>
        </div>
        {!adding && !editing && <Btn small variant="outline" onClick={() => setAdding(true)}>{T.newPlanBtn}</Btn>}
      </div>

      {(adding || editing) && (
        <PlanForm plan={editing} machines={data.machines} categories={data.categories}
          savedCircuits={data.savedCircuits||[]} sessions={data.sessions||[]} onSave={savePlan}
          onCancel={() => { setAdding(false); setEditing(null); }} T={T} lang={lang}/>
      )}

      {upcoming.length > 0 && (
        <div>
          <SecLabel>{T.planUpcoming}</SecLabel>
          {upcoming.map(p => (
            <PlanCard key={p.id} plan={p} today={today} T={T} data={data}
              loadedId={loadedId} setLoadedId={setLoadedId}
              onLoadPlan={onLoadPlan} onEdit={setEditing} onDelete={deletePlan}/>
          ))}
        </div>
      )}
      {past.length > 0 && (
        <div>
          <SecLabel>{T.planPast}</SecLabel>
          {past.map(p => (
            <PlanCard key={p.id} plan={p} today={today} T={T} data={data}
              loadedId={loadedId} setLoadedId={setLoadedId}
              onLoadPlan={onLoadPlan} onEdit={setEditing} onDelete={deletePlan}/>
          ))}
        </div>
      )}
      {plans.length === 0 && !adding && (
        <div style={{ textAlign:"center", padding:"48px 0", color:C.muted }}>
          <div style={{ fontSize:40, marginBottom:12 }}>📋</div>
          <div style={{ fontSize:14, lineHeight:1.6, whiteSpace:"pre-line" }}>{T.emptyPlans}</div>
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE — Stats
// ══════════════════════════════════════════════════════════════════════════════
const SessionCard = ({ session: s, circs, solos, hasPR, onOpen, onDelete, onUpdateDuration, onRepeat, T, lang }) => {
  const [editDur, setEditDur] = useState(false);
  const [durInput, setDurInput] = useState(s.gymDuration ? String(Math.round(s.gymDuration/60)) : "");
  const [delConfirm, setDelConfirm] = useState(false);

  const saveDur = e => {
    e.stopPropagation();
    const mins = parseInt(durInput, 10);
    onUpdateDuration(mins > 0 ? mins*60 : null);
    setEditDur(false);
  };
  const handleDelete = e => {
    e.stopPropagation();
    if (!delConfirm) { setDelConfirm(true); setTimeout(() => setDelConfirm(false), 3000); }
    else onDelete();
  };

  return (
    <Card style={{ marginBottom:8, padding:"12px 14px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <div style={{ flex:1, cursor:"pointer" }} onClick={onOpen}>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{ fontWeight:600, color:C.text, fontSize:14 }}>{fmtDate(s.date)}</div>
            {hasPR && <span style={{ fontSize:12, color:C.yellow, fontWeight:700 }}>{T.prInSession}</span>}
          </div>
          <div style={{ fontSize:11, color:C.muted, marginTop:1, lineHeight:1.6 }}>
            {circs.map((c,i) => <span key={i} style={{ color:C.purple }}>{c.circuitName||"Circuit"} ×{c.rounds}{i<circs.length-1?" + ":""}</span>)}
            {circs.length > 0 && solos.length > 0 && <span style={{ color:C.muted }}> + </span>}
            {solos.map((e,i) => <span key={i}>{e.machineName||"?"}{i<solos.length-1?" · ":""}</span>)}
          </div>
          {s.gymDuration && !editDur && <div style={{ fontSize:11, color:C.blue, marginTop:2 }}>⏱ {fmtDur(s.gymDuration)}</div>}
          {s.notes && <div style={{ fontSize:11, color:C.blue, marginTop:2, fontStyle:"italic" }}>📝 {s.notes.length > 60 ? s.notes.slice(0,60)+"…" : s.notes}</div>}
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center", flexShrink:0, marginLeft:8 }}>
          {onRepeat && (
            <span onClick={e => { e.stopPropagation(); onRepeat(); }} style={{ fontSize:15, color:C.teal, cursor:"pointer" }}>🔁</span>
          )}
          <span onClick={e => { e.stopPropagation(); setEditDur(p => !p); setDurInput(s.gymDuration ? String(Math.round(s.gymDuration/60)) : ""); }}
            style={{ fontSize:15, color: editDur ? C.accent : C.muted, cursor:"pointer" }}>⏱</span>
          <span onClick={handleDelete}
            style={{ fontSize:14, cursor:"pointer", fontWeight:700, color: delConfirm ? C.danger : C.muted, background: delConfirm ? C.danger+"22" : "transparent", borderRadius:4, padding:"1px 4px" }}>
            {delConfirm ? "✕✕" : "✕"}
          </span>
          <span style={{ fontSize:10, color:C.muted, cursor:"pointer" }} onClick={e => { e.stopPropagation(); onOpen(); }}>{T.tapForDetails}</span>
        </div>
      </div>
      {editDur && (
        <div onClick={e => e.stopPropagation()} style={{ display:"flex", gap:8, alignItems:"center", marginTop:8, paddingTop:8, borderTop:`1px solid ${C.border}`, flexWrap:"wrap" }}>
          <span style={{ fontSize:12, color:C.muted, flexShrink:0 }}>{lang === "fr" ? "Durée (min) :" : "Duration (min):"}</span>
          <input type="number" min="0" value={durInput} onChange={e => setDurInput(e.target.value)} onClick={e => e.stopPropagation()}
            style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"5px 10px", fontSize:13, width:70, fontFamily:"inherit", outline:"none" }}/>
          <Btn small onClick={saveDur} variant="success">{lang === "fr" ? "OK" : "Save"}</Btn>
          <Btn small onClick={e => { e.stopPropagation(); setEditDur(false); }} variant="ghost">{lang === "fr" ? "Annuler" : "Cancel"}</Btn>
        </div>
      )}
      {delConfirm && (
        <div style={{ fontSize:11, color:C.danger, marginTop:5 }}>
          {lang === "fr" ? "Appuyez encore sur ✕✕ pour confirmer." : "Tap ✕✕ again to confirm deletion."}
        </div>
      )}
    </Card>
  );
};

const StatsPage = ({ data, setData, T, lang, onRepeat }) => {
  const { sessions, machines } = data;
  const [selMachine, setSelMachine] = useState(null);
  const [statTab, setStatTab] = useState("overview");
  const [detailSession, setDetailSession] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  if (!sessions.length) {
    return (
      <div style={{ textAlign:"center", padding:"60px 0", color:C.muted }}>
        <div style={{ fontSize:40 }}>📊</div>
        <div style={{ marginTop:8 }}>{T.statsSub}</div>
      </div>
    );
  }

  const now = new Date();
  const total = sessions.length;
  const thisWeek = sessions.filter(s => new Date(s.date).getTime() >= weekStartMs()).length;
  const thisMonth = sessions.filter(s => (now - new Date(s.date)) / 86400000 < 30).length;
  const withDur = sessions.filter(s => s.gymDuration);
  const avgDur = withDur.length ? Math.round(withDur.reduce((a,s) => a+s.gymDuration, 0) / withDur.length) : null;
  const longestDur = withDur.length ? Math.max(...withDur.map(s => s.gymDuration)) : null;
  const shortDur = withDur.length ? Math.min(...withDur.map(s => s.gymDuration)) : null;
  const totalTime = withDur.reduce((a,s) => a+s.gymDuration, 0);

  let streak = 0;
  const td = new Date();
  const allDates = [...new Set(sessions.map(s => s.date))].sort();
  for (let i = 0; i < 100; i++) {
    const ds = td.toISOString().slice(0,10);
    if (allDates.includes(ds)) { streak++; td.setDate(td.getDate()-1); }
    else if (i === 0) { td.setDate(td.getDate()-1); if (!allDates.includes(td.toISOString().slice(0,10))) break; }
    else break;
  }

  const dows = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dowCounts = dows.map((label,i) => ({ label, value: sessions.filter(s => new Date(s.date).getDay() === i).length }));
  const wMs = weekStartMs();
  const thisWeekDow = dows.map((label,i) => ({
    label, highlight: new Date().getDay() === i,
    value: sessions.filter(s => new Date(s.date).getTime() >= wMs && new Date(s.date).getDay() === i).length,
  }));
  const sessByWeek = (() => {
    const wks = {};
    sessions.forEach(s => {
      const d = new Date(s.date); d.setDate(d.getDate()-d.getDay()); d.setHours(0,0,0,0);
      const k = d.toISOString().slice(0,10);
      wks[k] = (wks[k]||0) + 1;
    });
    return Object.entries(wks).sort(([a],[b]) => a<b?-1:1).slice(-8).map(([k,v]) => ({ label:fmtDateShort(k), value:v }));
  })();
  const avgPerWeek = sessByWeek.length ? (sessByWeek.reduce((a,w) => a+w.value, 0) / sessByWeek.length).toFixed(1) : "—";
  const durPts = withDur.slice(-12).map(s => Math.round(s.gymDuration/60));
  const durLabels = withDur.slice(-12).map(s => s.date);
  const allEx = collectExEntries(sessions);

  const machineStats = machines.map(m => {
    const exs = allEx.filter(e => e.machineId === m.id);
    if (!exs.length) return null;
    const isCardio = m.machineType === "cardio";
    if (isCardio) {
      const kms = exs.map(e => parseFloat(e.km)).filter(Boolean);
      const durs = exs.map(e => parseFloat(e.durMin)).filter(Boolean);
      const kcals = exs.map(e => parseFloat(e.kcal)).filter(Boolean);
      const bestKm = kms.length ? Math.max(...kms) : null;
      const bestDur = durs.length ? Math.max(...durs) : null;
      const bestKcal = kcals.length ? Math.max(...kcals) : null;
      const goalKm = m.goalKm ? parseFloat(m.goalKm) : null;
      const goalDurMin = m.goalDurMin ? parseFloat(m.goalDurMin) : null;
      const goalKcal = m.goalKcal ? parseFloat(m.goalKcal) : null;
      return { ...m, isCardio:true, sessions:exs.length,
        bestKm, totalKm: kms.reduce((a,b) => a+b, 0), bestDur, bestKcal,
        goalKm, goalDurMin, goalKcal,
        goalKmPct: goalKm && bestKm ? Math.min(100, Math.round((bestKm/goalKm)*100)) : null,
        goalDurPct: goalDurMin && bestDur ? Math.min(100, Math.round((bestDur/goalDurMin)*100)) : null,
        goalKcalPct: goalKcal && bestKcal ? Math.min(100, Math.round((bestKcal/goalKcal)*100)) : null,
        kmHist: exs.map(e => ({ date:e.date, v:parseFloat(e.km)||0 })),
        durHist: exs.map(e => ({ date:e.date, v:parseFloat(e.durMin)||0 })),
        kcalHist: exs.map(e => ({ date:e.date, v:parseFloat(e.kcal)||0 })),
      };
    }
    const weights = exs.map(e => parseFloat(e.weight)).filter(v => !isNaN(v) && v > 0);
    const pr = weights.length ? Math.max(...weights) : null;
    const avgW = weights.length ? +(weights.reduce((a,b) => a+b, 0) / weights.length).toFixed(1) : null;
    const minW = weights.length ? Math.min(...weights) : null;
    const totalSets = exs.reduce((a,e) => a + (+e.sets||0), 0);
    const totalVol = exs.reduce((a,e) => a + (+e.sets||0)*(+e.reps||0)*(parseFloat(e.weight)||0), 0);
    const goal = m.goalWeight ? parseFloat(m.goalWeight) : null;
    const goalPct = goal && pr ? Math.min(100, Math.round((pr/goal)*100)) : null;
    return { ...m, isCardio:false, sessions:exs.length, pr, avgW, minW, totalSets, totalVolume:Math.round(totalVol), goal, goalPct,
      wHist: exs.map(e => ({ date:e.date, v:parseFloat(e.weight)||0 })),
      sHist: exs.map(e => ({ date:e.date, v:+e.sets||0 })),
      rHist: exs.map(e => ({ date:e.date, v:(+e.sets||0)*(+e.reps||0) })),
      repsHist: exs.map(e => ({ date:e.date, v:+e.reps||0 })),
    };
  }).filter(Boolean);

  const filteredMS = typeFilter ? machineStats.filter(m => m.machineType === typeFilter) : machineStats;
  const selM = selMachine ? machineStats.find(m => m.id === selMachine) : null;

  const SB = ({ label, value, color=C.accent, sub }) => (
    <Card style={{ textAlign:"center", flex:1, minWidth:80, padding:12 }}>
      <div style={{ fontSize:20, fontWeight:800, color }}>{value}</div>
      <div style={{ fontSize:11, fontWeight:600, color:C.text, marginTop:2 }}>{label}</div>
      {sub && <div style={{ fontSize:10, color:C.muted }}>{sub}</div>}
    </Card>
  );

  const TabBtn = ({ id, label }) => (
    <div onClick={() => { setStatTab(id); setSelMachine(null); }}
      style={{ flex:1, textAlign:"center", padding:"8px 4px", cursor:"pointer", fontSize:12, fontWeight:600,
        borderBottom:`2px solid ${statTab===id ? C.accent : "transparent"}`, color: statTab===id ? C.accent : C.muted }}>
      {label}
    </div>
  );

  const WeightCharts = ({ m }) => {
    const wPts = m.wHist.filter(p => p.v>0).map(p => p.v), wLabs = m.wHist.filter(p => p.v>0).map(p => p.date);
    const sPts = m.sHist.filter(p => p.v>0).map(p => p.v), sLabs = m.sHist.filter(p => p.v>0).map(p => p.date);
    const rPts = m.rHist.filter(p => p.v>0).map(p => p.v), rLabs = m.rHist.filter(p => p.v>0).map(p => p.date);
    const rpPts = m.repsHist.filter(p => p.v>0).map(p => p.v), rpLabs = m.repsHist.filter(p => p.v>0).map(p => p.date);
    return (
      <div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:16 }}>
          {[{ label:T.prLabel, value:m.pr?`${m.pr}kg`:"—", color:C.accent },
            { label:T.avgWeight, value:m.avgW?`${m.avgW}kg`:"—", color:C.yellow },
            { label:T.minWeight, value:m.minW?`${m.minW}kg`:"—", color:C.muted },
            { label:T.totalSetsLabel, value:m.totalSets, color:C.muted }].map((s,i) => (
            <div key={i} style={{ background:C.bg2, borderRadius:8, padding:"6px 8px", textAlign:"center" }}>
              <div style={{ fontSize:14, fontWeight:800, color:s.color }}>{s.value}</div>
              <div style={{ fontSize:9, color:C.muted }}>{s.label}</div>
            </div>
          ))}
        </div>
        {m.goal && (
          <div style={{ marginBottom:16, background:C.bg2, borderRadius:10, padding:"10px 14px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <span style={{ fontSize:12, fontWeight:700, color:C.text }}>🎯 {T.goalLabel}: {m.goal}kg</span>
              <span style={{ fontSize:13, fontWeight:800, color: m.goalPct>=100 ? C.success : C.accent }}>
                {m.goalPct>=100 ? T.goalReached : `${m.goalPct??0}%`}
              </span>
            </div>
            {/* Progress bar with milestone ticks */}
            <div style={{ position:"relative", height:14, borderRadius:7, background:C.border, overflow:"hidden", marginBottom:8 }}>
              <div style={{ height:"100%", width:`${Math.min(100,m.goalPct??0)}%`,
                background: m.goalPct>=100 ? C.success : `linear-gradient(90deg,${C.blue},${C.accent})`,
                borderRadius:7, transition:"width .8s ease" }}/>
              {[25,50,75].map(tick => (
                <div key={tick} style={{ position:"absolute", top:0, left:`${tick}%`, width:1, height:"100%", background:"rgba(0,0,0,.3)" }}/>
              ))}
            </div>
            {/* Stats row */}
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:11 }}>
              <span style={{ color:C.muted }}>{lang==="fr"?"Départ:":"Start:"} {wPts[0]||"—"}kg</span>
              <span style={{ color:C.accent, fontWeight:700 }}>PR: {m.pr||"—"}kg</span>
              <span style={{ color: m.goalPct>=100 ? C.success : C.muted }}>
                {m.goalPct>=100 ? "✓ Done!" : m.pr ? `${(m.goal-m.pr).toFixed(1)}kg ${lang==="fr"?"restant":"to go"}` : ""}
              </span>
            </div>
            {/* Goal line chart: weight history with goal reference line */}
            {wPts.length >= 2 && (
              <div style={{ marginTop:12 }}>
                <div style={{ fontSize:10, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.goalProgressTitle}</div>
                <GoalLineChart points={wPts} labels={wLabs} goal={m.goal} color={m.color} height={52}/>
              </div>
            )}
          </div>
        )}
        {m.totalVolume > 0 && (
          <div style={{ background:C.bg2, borderRadius:8, padding:"8px 12px", marginBottom:14, display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontSize:12, color:C.muted }}>{T.totalVolLifted}</span>
            <span style={{ fontSize:14, fontWeight:800, color:C.purple }}>{m.totalVolume.toLocaleString()} kg</span>
          </div>
        )}
        {wPts.length >= 2 && (
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.weightOverTime}</div>
            <LineChart points={wPts} labels={wLabs} color={m.color} height={56} unit=" kg"/>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:11 }}>
              <span style={{ color:C.muted }}>{T.weightStart} {wPts[0]}kg</span>
              <span style={{ color: wPts[wPts.length-1] >= wPts[0] ? C.success : C.accent, fontWeight:700 }}>
                {T.weightLatest} {wPts[wPts.length-1]}kg {wPts[wPts.length-1] > wPts[0] ? "↑" : wPts[wPts.length-1] < wPts[0] ? "↓" : "→"}
              </span>
            </div>
          </div>
        )}
        {rpPts.length >= 2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.repsPerSetTitle}</div><LineChart points={rpPts} labels={rpLabs} color={C.blue} height={48} unit=" reps"/></div>}
        {sPts.length >= 2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.setsPerSession}</div><LineChart points={sPts} labels={sLabs} color={C.purple} height={44} unit=" sets"/></div>}
        {rPts.length >= 2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.volumePerSession}</div><LineChart points={rPts} labels={rLabs} color={C.teal} height={48} unit=" reps"/></div>}
        {wPts.length >= 2 && rpPts.length >= 2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.weightRepsTitle}</div><DualLineChart aPoints={wPts} bPoints={rpPts} aColor={m.color} bColor={C.blue} aUnit=" kg" bUnit=" reps" aLabel="kg" bLabel="reps" height={60}/></div>}
        {wPts.length >= 2 && rPts.length >= 2 && <div><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.weightVolTitle}</div><DualLineChart aPoints={wPts} bPoints={rPts} aColor={m.color} bColor={C.teal} aUnit=" kg" bUnit=" reps" aLabel="kg" bLabel="vol" height={60}/></div>}
      </div>
    );
  };

  return (
    <div style={{ padding:"0 0 80px" }}>
      {detailSession && <SessionDetail session={detailSession} machines={machines} onClose={() => setDetailSession(null)} T={T}/>}
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:22, fontWeight:800, color:C.text }}>{T.statsTitle}</div>
        <div style={{ fontSize:13, color:C.muted }}>{T.statsSub}</div>
      </div>
      <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, marginBottom:14 }}>
        <TabBtn id="overview" label={T.tabOverview}/>
        <TabBtn id="machine" label={T.tabMachines}/>
        <TabBtn id="sessions" label={T.tabSessions}/>
      </div>

      {statTab === "overview" && (
        <div>
          <FitnessScoreCard sessions={sessions} T={T} lang={lang}/>
          <BodyWeightCard bodyWeights={data.bodyWeights||[]} setData={setData} T={T} lang={lang}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:8 }}>
            <SB label={T.statTotal} value={total} color={C.accent}/>
            <SB label={T.statMonth} value={thisMonth} color={C.blue}/>
            <SB label={T.statWeek} value={thisWeek} color={C.purple}/>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14 }}>
            <SB label={T.statAvgDur} value={avgDur ? fmtDur(avgDur) : "—"} color={C.yellow}/>
            <SB label={T.statLongest} value={longestDur ? fmtDur(longestDur) : "—"} color={C.teal}/>
            <SB label={T.statStreak} value={`${streak}d`} color={C.success} sub={T.statStreakSub}/>
          </div>
          <Heatmap sessions={sessions} T={T} lang={lang}/>
          <MuscleVolumeChart sessions={sessions} machines={machines} T={T} lang={lang}/>
          <Card style={{ marginBottom:12 }}><div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:8 }}>{T.thisWeek}</div><BarChart data={thisWeekDow} color={C.purple} height={40}/></Card>
          <Card style={{ marginBottom:12 }}><div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:8 }}>{T.sessionsByDay}</div><BarChart data={dowCounts} height={50}/></Card>
          {sessByWeek.length >= 2 && (
            <Card style={{ marginBottom:12 }}>
              <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:2 }}>{T.sessionsPerWeek}</div>
              <div style={{ fontSize:11, color:C.muted, marginBottom:8 }}>{T.sessionsPerWeekSub(avgPerWeek)}</div>
              <BarChart data={sessByWeek} color={C.blue} height={50}/>
            </Card>
          )}
          {durPts.length >= 2 && (
            <Card style={{ marginBottom:12 }}>
              <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.sessionDuration}</div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, fontSize:11 }}>
                <span style={{ color:C.muted }}>{T.shortest} {fmtDur(shortDur)}</span>
                <span style={{ color:C.accent }}>{T.avgLabel} {fmtDur(avgDur)}</span>
                <span style={{ color:C.teal }}>{T.longestLabel} {fmtDur(longestDur)}</span>
              </div>
              <LineChart points={durPts} labels={durLabels} color={C.blue} height={56} unit=" min"/>
              {totalTime > 0 && <div style={{ fontSize:11, color:C.muted, marginTop:6, textAlign:"right" }}>{T.totalGymTime} {fmtDur(totalTime)}</div>}
            </Card>
          )}
        </div>
      )}

      {statTab === "machine" && (
        <div>
          <div style={{ marginBottom:12 }}>
            <TypeFilter value={typeFilter} onChange={v => { setTypeFilter(v); setSelMachine(null); }} T={T}/>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
            {filteredMS.map(m => (
              <div key={m.id} onClick={() => setSelMachine(selMachine === m.id ? null : m.id)}
                style={{ padding:"5px 12px", borderRadius:18, cursor:"pointer", fontSize:12, fontWeight:600,
                  border:`2px solid ${selMachine===m.id ? m.color : C.border}`,
                  background: selMachine===m.id ? m.color+"22" : "transparent",
                  color: selMachine===m.id ? m.color : C.muted }}>
                {m.name}
              </div>
            ))}
          </div>
          {selM && (
            <Card style={{ marginBottom:14, borderLeft:`3px solid ${selM.color}` }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                    <span style={{ fontSize:16, fontWeight:800, color:C.text }}>{selM.name}</span>
                    <TypeBadge type={selM.machineType}/>
                  </div>
                  {selM.photo && <img src={selM.photo} alt="" style={{ width:"100%", borderRadius:8, marginTop:8, maxHeight:100, objectFit:"cover" }}/>}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginTop:4 }}>{getCats(selM).map(c => <CatBadge key={c} cat={c}/>)}</div>
                  <div style={{ fontSize:12, color:C.muted, marginTop:4 }}>{T.sessionsCount(selM.sessions)}</div>
                </div>
                {!selM.isCardio && selM.pr && (
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:10, color:C.muted }}>🏆 {T.prLabel}</div>
                    <div style={{ fontSize:28, fontWeight:900, color:C.accent }}>{selM.pr} kg</div>
                  </div>
                )}
                {selM.isCardio && selM.bestKm && (
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:10, color:C.muted }}>🏅 {T.bestDistance}</div>
                    <div style={{ fontSize:22, fontWeight:800, color:C.teal }}>{selM.bestKm} km</div>
                  </div>
                )}
              </div>
              {!selM.isCardio && <WeightCharts m={selM}/>}
              {selM.isCardio && (
                <div>
                  {/* Cardio goal progress bars */}
                  {(selM.goalKm || selM.goalDurMin || selM.goalKcal) && (
                    <div style={{ background:C.bg2, borderRadius:10, padding:"10px 14px", marginBottom:14 }}>
                      <div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:10 }}>🎯 {T.cardioGoalsLabel}</div>
                      {[
                        { label:`${T.goalKmLabel.split("(")[0].trim()}`, best:selM.bestKm, goal:selM.goalKm, pct:selM.goalKmPct, unit:"km", color:C.blue },
                        { label:`${T.goalDurLabel.split("(")[0].trim()}`, best:selM.bestDur, goal:selM.goalDurMin, pct:selM.goalDurPct, unit:"min", color:C.teal },
                        { label:T.goalKcalLabel, best:selM.bestKcal, goal:selM.goalKcal, pct:selM.goalKcalPct, unit:"kcal", color:C.yellow },
                      ].filter(g => g.goal).map((g,i) => (
                        <div key={i} style={{ marginBottom:10 }}>
                          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                            <span style={{ fontSize:11, color:C.muted }}>{g.label}</span>
                            <span style={{ fontSize:11, fontWeight:700, color: g.pct>=100 ? C.success : g.color }}>
                              {g.best||"—"}{g.unit} / {g.goal}{g.unit} · {g.pct||0}%
                            </span>
                          </div>
                          <div style={{ height:8, borderRadius:4, background:C.border, overflow:"hidden" }}>
                            <div style={{ height:"100%", width:`${Math.min(100,g.pct||0)}%`,
                              background: g.pct>=100 ? C.success : g.color,
                              borderRadius:4, transition:"width .6s" }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {selM.durHist.filter(p=>p.v>0).length>=2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.durationOverTime}</div>
                    {selM.goalDurMin
                      ? <GoalLineChart points={selM.durHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.durHist.filter(p=>p.v>0).map(p=>p.date)} goal={selM.goalDurMin} color={C.teal} height={52}/>
                      : <LineChart points={selM.durHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.durHist.filter(p=>p.v>0).map(p=>p.date)} color={C.teal} height={52} unit=" min"/>}
                  </div>}
                  {selM.kmHist.filter(p=>p.v>0).length>=2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.distanceOverTime}</div>
                    {selM.goalKm
                      ? <GoalLineChart points={selM.kmHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kmHist.filter(p=>p.v>0).map(p=>p.date)} goal={selM.goalKm} color={C.blue} height={52}/>
                      : <LineChart points={selM.kmHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kmHist.filter(p=>p.v>0).map(p=>p.date)} color={C.blue} height={52} unit=" km"/>}
                  </div>}
                  {selM.kcalHist && selM.kcalHist.filter(p=>p.v>0).length>=2 && <div style={{ marginBottom:16 }}><div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:4 }}>{T.caloriesOverTime}</div>
                    {selM.goalKcal
                      ? <GoalLineChart points={selM.kcalHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kcalHist.filter(p=>p.v>0).map(p=>p.date)} goal={selM.goalKcal} color={C.yellow} height={44}/>
                      : <LineChart points={selM.kcalHist.filter(p=>p.v>0).map(p=>p.v)} labels={selM.kcalHist.filter(p=>p.v>0).map(p=>p.date)} color={C.yellow} height={44} unit=" kcal"/>}
                  </div>}
                  {selM.totalKm > 0 && <div style={{ background:C.bg2, borderRadius:8, padding:"8px 12px", marginTop:4, display:"flex", justifyContent:"space-between" }}><span style={{ fontSize:12, color:C.muted }}>{T.totalDistance}</span><span style={{ fontSize:14, fontWeight:800, color:C.teal }}>{selM.totalKm.toFixed(1)} km</span></div>}
                </div>
              )}
            </Card>
          )}
          <SecLabel>{T.allMachinesLabel}</SecLabel>
          {filteredMS.map(m => (
            <Card key={m.id} style={{ marginBottom:8, borderLeft:`3px solid ${m.color}`, padding:"12px 14px" }} onClick={() => setSelMachine(selMachine===m.id ? null : m.id)}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                    <span style={{ fontWeight:700, fontSize:14, color:C.text }}>{m.name}</span>
                    <TypeBadge type={m.machineType}/>
                    {getCats(m).map(c => <CatBadge key={c} cat={c}/>)}
                  </div>
                  <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>
                    {T.sessionsCount(m.sessions)} · {m.isCardio ? (m.bestKm ? `${T.bestDistance}: ${m.bestKm}km` : "") : `${m.totalSets} sets`}
                  </div>
                  {!m.isCardio && m.goal && m.goalPct !== null && (
                    <div style={{ marginTop:4 }}>
                      <div style={{ height:4, borderRadius:2, background:C.border, width:120, overflow:"hidden" }}>
                        <div style={{ height:"100%", width:`${m.goalPct}%`, background: m.goalPct>=100 ? C.success : C.accent, borderRadius:2 }}/>
                      </div>
                      <div style={{ fontSize:10, color:C.muted, marginTop:2 }}>🎯 {m.goalPct}% → {m.goal}kg</div>
                    </div>
                  )}
                </div>
                {!m.isCardio && m.pr && (
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:9, color:C.muted }}>{T.prLabel}</div>
                    <div style={{ fontSize:18, fontWeight:800, color:C.accent }}>{m.pr}kg</div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {statTab === "sessions" && (
        <div>
          <Card style={{ marginBottom:12 }}>
            <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:10 }}>{T.consistency}</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:8 }}>
              {(() => {
                const sessByMonth = (() => { const m = {}; sessions.forEach(s => { const k = s.date.slice(0,7); m[k] = (m[k]||0)+1; }); return Object.values(m); })();
                const avgSM = sessByMonth.length ? (sessByMonth.reduce((a,b)=>a+b,0)/sessByMonth.length).toFixed(1) : "—";
                const avgSW = sessByWeek.length ? (sessByWeek.reduce((a,w)=>a+w.value,0)/sessByWeek.length).toFixed(1) : "—";
                const twByWeek = (() => { const wks = {}; withDur.forEach(s => { const d = new Date(s.date); d.setDate(d.getDate()-d.getDay()); const k = d.toISOString().slice(0,10); wks[k] = (wks[k]||0)+s.gymDuration; }); return Object.values(wks); })();
                const avgTW = twByWeek.length ? Math.round(twByWeek.reduce((a,b)=>a+b,0)/twByWeek.length/60) : null;
                const twByMonth = (() => { const m = {}; withDur.forEach(s => { const k = s.date.slice(0,7); m[k] = (m[k]||0)+s.gymDuration; }); return Object.values(m); })();
                const avgTM = twByMonth.length ? Math.round(twByMonth.reduce((a,b)=>a+b,0)/twByMonth.length/60) : null;
                return [
                  { label: lang==="fr" ? "Moy. séances/sem." : "Avg sessions/week", value:`${avgSW} sess.`, color:C.blue },
                  { label: lang==="fr" ? "Moy. séances/mois" : "Avg sessions/month", value:`${avgSM} sess.`, color:C.purple },
                  { label: lang==="fr" ? "Moy. temps/sem." : "Avg gym time/week", value: avgTW ? `${avgTW} min` : "—", color:C.yellow },
                  { label: lang==="fr" ? "Moy. temps/mois" : "Avg gym time/month", value: avgTM ? `${avgTM} min` : "—", color:C.teal },
                  { label: T.bestWeek, value: `${Math.max(...sessByWeek.map(w=>w.value),0)} sess.`, color:C.success },
                  { label: T.daysActive, value: [...new Set(sessions.map(s=>s.date))].length, color:C.accent },
                  { label: T.currentStreak, value: `${streak} ${T.statStreakSub}`, color: streak>=3 ? C.success : C.muted },
                  { label: lang==="fr" ? "Total salle" : "Total gym time", value: totalTime ? fmtDur(totalTime) : "—", color:C.blue },
                ].map((s,i) => (
                  <div key={i} style={{ background:C.bg2, borderRadius:8, padding:"10px 12px" }}>
                    <div style={{ fontSize:16, fontWeight:800, color:s.color }}>{s.value}</div>
                    <div style={{ fontSize:11, color:C.muted }}>{s.label}</div>
                  </div>
                ));
              })()}
            </div>
          </Card>
          <SecLabel>{T.allSessionsTitle}</SecLabel>
          {[...sessions].sort((a,b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0).reverse().map(s => {
            const exs = s.exercises||[], circs = exs.filter(e=>e.type==="circuit"), solos = exs.filter(e=>e.type==="solo"||!e.type);
            const prs = getSessionPRs(s, sessions);
            return (
              <SessionCard key={s.id} session={s} circs={circs} solos={solos} hasPR={prs.size>0}
                onOpen={() => setDetailSession(s)}
                onDelete={() => setData(d => ({ ...d, sessions: d.sessions.filter(x => x.id !== s.id) }))}
                onUpdateDuration={dur => setData(d => ({ ...d, sessions: d.sessions.map(x => x.id===s.id ? { ...x, gymDuration:dur } : x) }))}
                onRepeat={() => onRepeat && onRepeat(s)}
                T={T} lang={lang}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE — Setup
// ══════════════════════════════════════════════════════════════════════════════
const inlineInput = { background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"8px 12px", fontSize:14, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" };
const inlineInputSm = { background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, padding:"6px 10px", fontSize:13, width:"100%", boxSizing:"border-box", fontFamily:"inherit", outline:"none" };

const CircuitTemplateEditor = ({ template, machines, categories, savedCircuits, onSave, onCancel, T, lang }) => {
  const [name, setName] = useState(template.name);
  const [rounds, setRounds] = useState(template.rounds || 3);
  const [mIds, setMIds] = useState([...template.machineIds]);
  const [md, setMd] = useState({ ...(template.machineData||{}) });
  const [showPicker, setShowPicker] = useState(false);
  const clamp = v => v === "" ? "" : String(Math.max(0, +v));
  return (
    <Card style={{ marginBottom:12, border:`1px solid ${C.teal}` }}>
      <div style={{ fontWeight:700, fontSize:15, color:C.text, marginBottom:12 }}>{T.editTplTitle}</div>
      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
        <div style={{ flex:3 }}><div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.circuitNameLabel}</div><input value={name} onChange={e => setName(e.target.value)} placeholder={T.circuitNamePH} style={inlineInput}/></div>
        <div style={{ flex:1 }}><div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.roundsLabel}</div><input value={rounds} type="number" min="1" onChange={e => setRounds(Math.max(1,+e.target.value))} style={inlineInput}/></div>
      </div>
      {mIds.map(mId => {
        const m = machines.find(x => x.id === mId);
        if (!m) return null;
        const isCardio = m.machineType === "cardio";
        return (
          <div key={mId} style={{ background:C.bg2, borderRadius:8, border:`1px solid ${C.border}`, borderLeft:`3px solid ${m.color}`, padding:"8px 10px", marginBottom:6 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontWeight:600, color:C.text, flex:1 }}>{m.name}</span>
              <TypeBadge type={m.machineType}/>
              <span onClick={() => setMIds(ids => ids.filter(id => id !== mId))} style={{ color:C.danger, cursor:"pointer", fontSize:13 }}>✕</span>
            </div>
            <div style={{ display:"flex", gap:8, marginTop:8 }}>
              {isCardio ? (
                <div style={{ display:"flex", gap:8, flex:1 }}>
                  <div style={{ flex:1 }}><div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.durationMin}</div><input value={md[mId]?.durMin||""} min="0" onChange={e => setMd(d => ({ ...d, [mId]:{ ...d[mId], durMin:clamp(e.target.value) } }))} type="number" placeholder="min" style={inlineInputSm}/></div>
                  <div style={{ flex:1 }}><div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.distanceKm}</div><input value={md[mId]?.km||""} min="0" onChange={e => setMd(d => ({ ...d, [mId]:{ ...d[mId], km:clamp(e.target.value) } }))} type="number" placeholder="km" style={inlineInputSm}/></div>
                </div>
              ) : (
                <div style={{ display:"flex", gap:8, flex:1 }}>
                  <div style={{ flex:1 }}><div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.weightKg}</div><input value={md[mId]?.weight||""} min="0" onChange={e => setMd(d => ({ ...d, [mId]:{ ...d[mId], weight:clamp(e.target.value) } }))} type="number" placeholder="kg" style={inlineInputSm}/></div>
                  <div style={{ flex:1 }}><div style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{T.repsLabel}</div><input value={md[mId]?.reps||""} min="0" onChange={e => setMd(d => ({ ...d, [mId]:{ ...d[mId], reps:Math.max(0,+e.target.value) } }))} type="number" style={inlineInputSm}/></div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {showPicker
        ? <MachinePicker machines={machines} exclude={mIds} categories={categories} savedCircuits={savedCircuits} T={T} onPick={mId => { setMIds(ids => [...ids, mId]); setShowPicker(false); }} onClose={() => setShowPicker(false)}/>
        : <Btn small variant="ghost" onClick={() => setShowPicker(true)} style={{ width:"100%", marginBottom:12 }}>{T.addMachineToTpl}</Btn>
      }
      <div style={{ display:"flex", gap:8, marginTop:8 }}>
        <Btn onClick={() => onSave({ ...template, name, rounds, machineIds:mIds, machineData:md })} style={{ flex:1 }}>{T.saveTplBtn}</Btn>
        <Btn onClick={onCancel} variant="ghost">{lang === "fr" ? "Annuler" : "Cancel"}</Btn>
      </div>
    </Card>
  );
};

const MachineForm = ({ machine, categories, onSave, onCancel, T, lang }) => {
  const [name, setName] = useState(machine?.name || "");
  const [selCats, setSelCats] = useState(getCats(machine) || []);
  const [notes, setNotes] = useState(machine?.notes || "");
  const [color, setColor] = useState(machine?.color || COLORS[0]);
  const [mType, setMType] = useState(machine?.machineType || "weight");
  const [goal, setGoal] = useState(machine?.goalWeight || "");
  const [goalKm, setGoalKm] = useState(machine?.goalKm || "");
  const [goalDurMin, setGoalDurMin] = useState(machine?.goalDurMin || "");
  const [goalKcal, setGoalKcal] = useState(machine?.goalKcal || "");
  const [photo, setPhoto] = useState(machine?.photo || null);
  const [photoDelConfirm, setPhotoDelConfirm] = useState(false);
  const toggleCat = cat => setSelCats(cs => cs.includes(cat) ? cs.filter(c=>c!==cat) : [...cs, cat]);
  const handlePhoto = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  };
  return (
    <Card style={{ marginBottom:12, border:`1px solid ${C.accent}` }}>
      <div style={{ fontWeight:700, fontSize:15, color:C.text, marginBottom:12 }}>{machine ? T.editMachineTitle : T.newMachineTitle}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        <div><div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.machineNameLabel}</div><input value={name} onChange={e => setName(e.target.value)} placeholder={T.machineNamePH} style={inlineInput}/></div>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6 }}>{T.typeLabel} <span style={{ fontWeight:400 }}>{T.typeDesc}</span></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {[{ v:"weight", icon:"⚖️", label:T.weightMachineLabel, sub:T.weightMachineSub }, { v:"cardio", icon:"🏃", label:T.cardioMachineLabel, sub:T.cardioMachineSub }].map(({ v, icon, label, sub }) => (
              <div key={v} onClick={() => setMType(v)}
                style={{ padding:"8px", borderRadius:8, cursor:"pointer", textAlign:"center",
                  border:`2px solid ${mType===v ? (v==="weight" ? C.accent : C.teal) : C.border}`,
                  background: mType===v ? (v==="weight" ? C.accent+"18" : C.teal+"18") : "transparent" }}>
                <div style={{ fontSize:16, marginBottom:2 }}>{icon}</div>
                <div style={{ fontSize:11, fontWeight:600, color: mType===v ? (v==="weight" ? C.accent : C.teal) : C.muted }}>{label}</div>
                <div style={{ fontSize:10, color:C.muted }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6 }}>{T.catsLabel} <span style={{ fontWeight:400 }}>{T.catsDesc}</span></div>
          {mType === "cardio" && <div style={{ fontSize:10, color:C.teal, marginBottom:6 }}>{T.cardioTip}</div>}
          <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
            {categories.map(cat => {
              const on = selCats.includes(cat);
              return (
                <div key={cat} onClick={() => toggleCat(cat)}
                  style={{ padding:"5px 12px", borderRadius:18, cursor:"pointer", fontSize:12, fontWeight:600,
                    border:`2px solid ${on ? C.accent : C.border}`, background: on ? C.accent+"22" : "transparent",
                    color: on ? C.accent : C.muted, transition:"all .15s" }}>
                  {cat}
                </div>
              );
            })}
          </div>
          {selCats.length === 0 && <div style={{ fontSize:11, color:C.danger, marginTop:4 }}>{T.pickCategoryWarn}</div>}
        </div>
        <div><div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.seatLabel}</div><input value={notes} onChange={e => setNotes(e.target.value)} placeholder={T.seatPH} style={inlineInput}/></div>
        {mType === "weight" && (
          <div>
            <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.goalWeightLabel}</div>
            <input value={goal} type="number" min="0" onChange={e => setGoal(e.target.value)} placeholder={T.goalWeightPH} style={inlineInput}/>
          </div>
        )}
        {mType === "cardio" && (
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:8 }}>🎯 {T.cardioGoalsLabel}</div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <div style={{ flex:1, minWidth:100 }}>
                <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.goalKmLabel}</div>
                <input value={goalKm} type="number" min="0" onChange={e => setGoalKm(e.target.value)} placeholder={T.goalKmPH} style={inlineInput}/>
              </div>
              <div style={{ flex:1, minWidth:100 }}>
                <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.goalDurLabel}</div>
                <input value={goalDurMin} type="number" min="0" onChange={e => setGoalDurMin(e.target.value)} placeholder={T.goalDurPH} style={inlineInput}/>
              </div>
              <div style={{ flex:1, minWidth:100 }}>
                <div style={{ fontSize:11, color:C.muted, marginBottom:4 }}>{T.goalKcalLabel}</div>
                <input value={goalKcal} type="number" min="0" onChange={e => setGoalKcal(e.target.value)} placeholder={T.goalKcalPH} style={inlineInput}/>
              </div>
            </div>
          </div>
        )}
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6 }}>{T.photoLabel}</div>
          {photo && <img src={photo} alt="" style={{ width:"100%", borderRadius:8, marginBottom:8, maxHeight:140, objectFit:"cover" }}/>}
          <label>
            <div style={{ background:"transparent", border:`1px solid ${C.border}`, borderRadius:8, color:C.muted, fontWeight:600, fontSize:12, padding:"6px 12px", textAlign:"center", cursor:"pointer", lineHeight:"1.2", display:"block" }}>
              {photo ? T.changePhoto : T.takePhoto}
            </div>
            <input type="file" accept="image/*" capture="environment" style={{ display:"none" }} onChange={handlePhoto}/>
          </label>
          {photo && (
            <div onClick={() => {
              if (!photoDelConfirm) { setPhotoDelConfirm(true); setTimeout(() => setPhotoDelConfirm(false), 3000); }
              else { setPhoto(null); setPhotoDelConfirm(false); }
            }} style={{ fontSize:11, color: photoDelConfirm ? C.danger : C.muted, cursor:"pointer", textAlign:"center", marginTop:4, fontWeight: photoDelConfirm ? 700 : 400 }}>
              {photoDelConfirm ? (lang==="fr" ? "Appuyer encore pour confirmer" : "Tap again to confirm") : `✕ ${lang==="fr" ? "Supprimer la photo" : "Remove photo"}`}
            </div>
          )}
        </div>
        <div>
          <div style={{ fontSize:11, color:C.muted, marginBottom:6 }}>{T.colorLabel}</div>
          <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
            <label style={{ position:"relative", cursor:"pointer", flexShrink:0 }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:color, border:"3px solid #fff", boxShadow:`0 0 0 2px ${color}`, cursor:"pointer", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:14, filter:"brightness(0) invert(1)", opacity:.7 }}>🎨</span>
              </div>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ position:"absolute", inset:0, opacity:0, cursor:"pointer", width:"100%", height:"100%" }}/>
            </label>
            <div style={{ width:1, height:28, background:C.border, flexShrink:0 }}/>
            {COLORS.map(c => (
              <div key={c} onClick={() => setColor(c)}
                style={{ width:24, height:24, borderRadius:"50%", background:c, cursor:"pointer",
                  border: color===c ? "3px solid #fff" : "2px solid transparent",
                  boxShadow: color===c ? `0 0 0 2px ${c}` : "none", transition:"all .15s", flexShrink:0 }}/>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          <Btn onClick={() => { if (!name.trim() || !selCats.length) return; onSave({ name:name.trim(), machineType:mType, categories:selCats, notes, color, goalWeight:goal||null, goalKm:goalKm||null, goalDurMin:goalDurMin||null, goalKcal:goalKcal||null, photo }); }} style={{ flex:1 }}>
            {machine ? T.updateBtn : T.addMachineFormBtn}
          </Btn>
          <Btn onClick={onCancel} variant="ghost">{lang === "fr" ? "Annuler" : "Cancel"}</Btn>
        </div>
      </div>
    </Card>
  );
};

const SettingsPage = ({ data, setData, T, lang }) => {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);
  const [editingTpl, setEditingTpl] = useState(null);
  const [newCat, setNewCat] = useState("");
  const [addingCat, setAddingCat] = useState(false);
  const [clearStep, setClearStep] = useState(0);
  const [catFilter, setCatFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const addMachine = form => { setData(d => ({ ...d, machines: [...d.machines, { id:uid(), ...form }] })); setAdding(false); };
  const updateMachine = (id, form) => { setData(d => ({ ...d, machines: d.machines.map(m => m.id===id ? { ...m, ...form } : m) })); setEditing(null); };
  const deleteMachine = id => setData(d => ({ ...d, machines: d.machines.filter(m => m.id !== id) }));
  const moveMachine = (id, dir) => setData(d => {
    const ms = [...d.machines], i = ms.findIndex(m => m.id === id);
    if (i+dir < 0 || i+dir >= ms.length) return d;
    [ms[i], ms[i+dir]] = [ms[i+dir], ms[i]]; return { ...d, machines: ms };
  });
  const addCategory = () => { const c = newCat.trim(); if (!c || data.categories.includes(c)) return; setData(d => ({ ...d, categories:[...d.categories, c] })); setNewCat(""); setAddingCat(false); };
  const delCategory = cat => setData(d => ({ ...d, categories: d.categories.filter(c => c !== cat) }));
  const clearSessions = () => {
    if (clearStep === 0) { setClearStep(1); setTimeout(() => setClearStep(0), 4000); return; }
    const n = { ...data, sessions:[] }; save(n); setData(() => n); setClearStep(0);
  };
  const updateTemplate = updated => { setData(d => ({ ...d, savedCircuits: d.savedCircuits.map(c => c.id===updated.id ? updated : c) })); setEditingTpl(null); };
  const updateSettings = patch => setData(d => ({ ...d, settings: { ...(d.settings||{}), ...patch } }));

  let filtered = data.machines;
  if (typeFilter) filtered = filtered.filter(m => m.machineType === typeFilter);
  if (catFilter) filtered = filtered.filter(m => getCats(m).includes(catFilter));
  const settings = data.settings || {};

  return (
    <div style={{ padding:"0 0 80px" }}>
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:22, fontWeight:800, color:C.text }}>{T.setupTitle}</div>
        <div style={{ fontSize:13, color:C.muted }}>{T.setupSub}</div>
      </div>

      <SecLabel>{lang === "fr" ? "PRÉFÉRENCES" : "PREFERENCES"}</SecLabel>
      <Card style={{ marginBottom:14 }}>
        <div style={{ marginBottom:14 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
            <div style={{ fontSize:13, fontWeight:600, color:C.text }}>⏱ {T.restTimerSetup}</div>
            <span style={{ fontSize:14, fontWeight:800, color: settings.restTimerSecs===0 ? C.muted : C.accent }}>
              {settings.restTimerSecs === 0 ? "Off" : `${settings.restTimerSecs}s`}
            </span>
          </div>
          <input type="range" min="0" max="300" step="15" value={settings.restTimerSecs ?? 90} onChange={e => updateSettings({ restTimerSecs: +e.target.value })} style={{ width:"100%", accentColor:C.accent }}/>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:C.muted, marginTop:2 }}>
            <span>Off</span><span>1min</span><span>2min</span><span>3min</span><span>4min</span><span>5min</span>
          </div>
          {settings.restTimerSecs === 0 && <div style={{ fontSize:11, color:C.muted, marginTop:4, fontStyle:"italic" }}>{lang==="fr" ? "Aucun timer ne s'affichera." : "No timer will appear after sets."}</div>}
        </div>
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
            <div style={{ fontSize:13, fontWeight:600, color:C.text }}>🔔 {T.reminderSetup}</div>
            <span style={{ fontSize:14, fontWeight:800, color:C.purple }}>
              {settings.reminderDays ? `${settings.reminderDays} ${lang==="fr" ? "j" : "d"}` : "Off"}
            </span>
          </div>
          <input type="range" min="0" max="14" step="1" value={settings.reminderDays||0} onChange={e => updateSettings({ reminderDays: +e.target.value })} style={{ width:"100%", accentColor:C.purple }}/>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:C.muted, marginTop:2 }}>
            <span>Off</span><span>3{lang==="fr"?"j":"d"}</span><span>7{lang==="fr"?"j":"d"}</span><span>10{lang==="fr"?"j":"d"}</span><span>14{lang==="fr"?"j":"d"}</span>
          </div>
        </div>
      </Card>

      <SecLabel>{T.categoriesLabel}</SecLabel>
      <Card style={{ marginBottom:14 }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:10 }}>
          {data.categories.map(cat => (
            <div key={cat} style={{ display:"flex", alignItems:"center", gap:4, background:C.bg2, borderRadius:20, padding:"4px 10px", border:`1px solid ${C.border}` }}>
              <span style={{ fontSize:13, color:C.text }}>{cat}</span>
              <span onClick={() => delCategory(cat)} style={{ fontSize:12, color:C.danger, cursor:"pointer", marginLeft:2 }}>✕</span>
            </div>
          ))}
        </div>
        {addingCat
          ? <div style={{ display:"flex", gap:8 }}>
              <input value={newCat} onChange={e => setNewCat(e.target.value)} placeholder={T.newCatPH} style={{ ...inlineInput, flex:1 }}/>
              <Btn small onClick={addCategory}>{T.addCatBtn}</Btn>
              <Btn small variant="ghost" onClick={() => setAddingCat(false)}>{lang==="fr" ? "Annuler" : "Cancel"}</Btn>
            </div>
          : <Btn small variant="outline" onClick={() => setAddingCat(true)}>{T.newCatBtn}</Btn>
        }
      </Card>

      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <SecLabel style={{ margin:"18px 0 8px" }}>{T.machinesSetupLabel}</SecLabel>
        {!adding && <Btn small variant="outline" onClick={() => setAdding(true)}>{T.addNewMachine}</Btn>}
      </div>
      <div style={{ marginBottom:6 }}><TypeFilter value={typeFilter} onChange={setTypeFilter} T={T} small/></div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:10 }}>
        <span onClick={() => setCatFilter(null)} style={{ padding:"3px 9px", borderRadius:12, cursor:"pointer", fontSize:11, fontWeight:600, border:`1.5px solid ${!catFilter ? C.blue : C.border}`, color: !catFilter ? C.blue : C.muted }}>{T.allCats}</span>
        {data.categories.map(c => (
          <span key={c} onClick={() => setCatFilter(catFilter===c ? null : c)}
            style={{ padding:"3px 9px", borderRadius:12, cursor:"pointer", fontSize:11, fontWeight:600, border:`1.5px solid ${catFilter===c ? C.blue : C.border}`, color: catFilter===c ? C.blue : C.muted }}>{c}</span>
        ))}
      </div>

      {adding && <MachineForm categories={data.categories} onSave={addMachine} onCancel={() => setAdding(false)} T={T} lang={lang}/>}
      {filtered.map(m => {
        const realIdx = data.machines.findIndex(x => x.id === m.id);
        return (
          <div key={m.id}>
            {editing === m.id
              ? <MachineForm machine={m} categories={data.categories} onSave={f => updateMachine(m.id, f)} onCancel={() => setEditing(null)} T={T} lang={lang}/>
              : <Card style={{ marginBottom:8, borderLeft:`3px solid ${m.color}`, padding:"12px 14px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    {m.photo && <img src={m.photo} alt="" style={{ width:40, height:40, borderRadius:8, objectFit:"cover", flexShrink:0 }}/>}
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                        <span style={{ fontWeight:700, color:C.text, fontSize:14 }}>{m.name}</span>
                        <TypeBadge type={m.machineType}/>
                        {getCats(m).map(c => <CatBadge key={c} cat={c}/>)}
                      </div>
                      {m.notes && <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{m.notes}</div>}
                      {m.goalWeight && <div style={{ fontSize:11, color:C.accent, marginTop:2 }}>🎯 {lang==="fr"?"Objectif":"Goal"}: {m.goalWeight}kg</div>}
                    </div>
                    <div style={{ display:"flex", gap:4 }}>
                      <Btn small variant="ghost" onClick={() => moveMachine(m.id,-1)} disabled={realIdx===0}>↑</Btn>
                      <Btn small variant="ghost" onClick={() => moveMachine(m.id,1)} disabled={realIdx===data.machines.length-1}>↓</Btn>
                      <Btn small variant="ghost" onClick={() => setEditing(m.id)}>✎</Btn>
                      <Btn small variant="danger" onClick={() => deleteMachine(m.id)}>✕</Btn>
                    </div>
                  </div>
                </Card>
            }
          </div>
        );
      })}

      {(data.savedCircuits||[]).length > 0 && (
        <div>
          <SecLabel>{T.circuitTemplatesLabel}</SecLabel>
          {data.savedCircuits.map(sc => (
            <div key={sc.id}>
              {editingTpl === sc.id
                ? <CircuitTemplateEditor template={sc} machines={data.machines} categories={data.categories} savedCircuits={data.savedCircuits} onSave={updateTemplate} onCancel={() => setEditingTpl(null)} T={T} lang={lang}/>
                : <Card style={{ marginBottom:8, borderLeft:`3px solid ${C.teal}`, padding:"12px 14px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <div>
                        <div style={{ fontWeight:700, color:C.text, fontSize:14 }}>{sc.name}</div>
                        <div style={{ fontSize:11, color:C.muted }}>{sc.machineIds?.map(id => data.machines.find(m=>m.id===id)?.name).filter(Boolean).join(" · ")}</div>
                        <div style={{ fontSize:11, color:C.muted }}>{sc.rounds} {T.roundsLabel.toLowerCase()}</div>
                      </div>
                      <div style={{ display:"flex", gap:4 }}>
                        <Btn small variant="ghost" onClick={() => setEditingTpl(sc.id)}>✎</Btn>
                        <Btn small variant="danger" onClick={() => setData(d => ({ ...d, savedCircuits: d.savedCircuits.filter(c => c.id !== sc.id) }))}>✕</Btn>
                      </div>
                    </div>
                  </Card>
              }
            </div>
          ))}
        </div>
      )}

      <SecLabel>{T.dataLabel}</SecLabel>

      {/* ── Data Audit Tool ── */}
      {(() => {
        const fr = lang === "fr";
        const MAX_PLAUSIBLE_KG = 400;
        // Find all suspicious entries (weight > 400kg)
        const suspicious = [];
        data.sessions.forEach(s => {
          (s.exercises||[]).forEach(ex => {
            if (ex.type === "circuit") {
              (ex.machineIds||[]).forEach(mId => {
                const w = parseFloat(ex.machineData?.[mId]?.weight);
                if (w > MAX_PLAUSIBLE_KG) {
                  const m = data.machines.find(x => x.id === mId);
                  suspicious.push({ sessionId:s.id, date:s.date, machineId:mId, machineName:m?.name||mId, weight:w, type:"circuit" });
                }
              });
            } else {
              const w = parseFloat(ex.weight);
              if (w > MAX_PLAUSIBLE_KG) {
                const m = data.machines.find(x => x.id === ex.machineId);
                suspicious.push({ sessionId:s.id, date:s.date, machineId:ex.machineId, machineName:m?.name||ex.machineId||"?", weight:w, type:"solo" });
              }
            }
          });
        });
        if (!suspicious.length) return null;
        return (
          <Card style={{ marginBottom:10, border:`1px solid ${C.danger}55` }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
              <span style={{ fontSize:18 }}>⚠️</span>
              <div style={{ fontWeight:700, color:C.danger, fontSize:13 }}>
                {fr ? `${suspicious.length} valeur${suspicious.length>1?"s":""} suspecte${suspicious.length>1?"s":""}` : `${suspicious.length} suspicious value${suspicious.length>1?"s":""}`}
              </div>
            </div>
            <div style={{ fontSize:11, color:C.muted, marginBottom:10 }}>
              {fr ? `Poids > ${MAX_PLAUSIBLE_KG}kg détectés — probablement des fautes de frappe.` : `Weight > ${MAX_PLAUSIBLE_KG}kg detected — likely typos.`}
            </div>
            {suspicious.map((e, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"6px 0", borderBottom:`1px solid ${C.border}` }}>
                <div style={{ flex:1 }}>
                  <span style={{ fontSize:12, fontWeight:600, color:C.text }}>{e.machineName}</span>
                  <span style={{ fontSize:11, color:C.muted }}> · {fmtDate(e.date)}</span>
                </div>
                <span style={{ fontSize:14, fontWeight:800, color:C.danger }}>{e.weight} kg</span>
                <Btn small variant="danger" onClick={() => {
                  setData(d => ({
                    ...d,
                    sessions: d.sessions.map(s => {
                      if (s.id !== e.sessionId) return s;
                      return {
                        ...s,
                        exercises: (s.exercises||[]).map(ex => {
                          if (e.type === "circuit" && ex.type === "circuit" && (ex.machineIds||[]).includes(e.machineId)) {
                            return { ...ex, machineData: { ...ex.machineData, [e.machineId]: { ...ex.machineData?.[e.machineId], weight:"" } } };
                          }
                          if (e.type === "solo" && ex.machineId === e.machineId) {
                            return { ...ex, weight:"" };
                          }
                          return ex;
                        }),
                      };
                    }),
                  }));
                }}>✕ {fr ? "Effacer" : "Clear"}</Btn>
              </div>
            ))}
            <div style={{ fontSize:10, color:C.muted, marginTop:8 }}>
              {fr ? "\"Effacer\" met le poids à vide (la séance reste)." : '"Clear" sets weight to blank (session kept).'}
            </div>
          </Card>
        );
      })()}

      <Card style={{ marginBottom:10 }}>
        <div style={{ fontSize:12, fontWeight:700, color:C.muted, marginBottom:10 }}>EXPORT / IMPORT</div>
        <div style={{ display:"flex", gap:8, marginBottom:8 }}>
          <Btn variant="outline" small style={{ flex:1 }} onClick={async () => {
            const json = JSON.stringify(data, null, 2);
            const filename = `gymtrack-backup-${todayStr()}.json`;
            const isFr = lang === "fr";
            try {
              const { Filesystem, Directory, Encoding } = await import("@capacitor/filesystem");
              try { const p = await Filesystem.requestPermissions(); if (p.publicStorage !== "granted") throw new Error("perm"); } catch {}
              let uri = null;
              try {
                await Filesystem.writeFile({ path:filename, data:json, directory:Directory.Documents, encoding:Encoding.UTF8, recursive:true });
                const r = await Filesystem.getUri({ path:filename, directory:Directory.Documents });
                uri = r.uri;
              } catch {
                await Filesystem.writeFile({ path:`Download/${filename}`, data:json, directory:Directory.ExternalStorage, encoding:Encoding.UTF8, recursive:true });
                const r = await Filesystem.getUri({ path:`Download/${filename}`, directory:Directory.ExternalStorage });
                uri = r.uri;
              }
              alert(isFr ? `✅ Fichier sauvegardé !\n📁 ${filename}` : `✅ File saved!\n📁 ${filename}`);
              return;
            } catch {}
            try {
              const a = document.createElement("a");
              a.href = "data:application/json;charset=utf-8," + encodeURIComponent(json);
              a.download = filename;
              document.body.appendChild(a); a.click(); document.body.removeChild(a);
              return;
            } catch {}
            try { await navigator.clipboard.writeText(json); alert(isFr ? "✅ Copié dans le presse-papier." : "✅ Copied to clipboard."); }
            catch { alert(isFr ? "Export impossible." : "Export failed."); }
          }}>⬇ {lang === "fr" ? "Exporter" : "Export"}</Btn>
          <label style={{ flex:1 }}>
            <div style={{ background:"transparent", border:`1px solid ${C.accent}`, borderRadius:8, color:C.accent, fontWeight:600, fontSize:12, padding:"6px 12px", textAlign:"center", cursor:"pointer", lineHeight:"1.2", display:"block", userSelect:"none" }}>
              ⬆ {lang === "fr" ? "Importer" : "Import"}
            </div>
            <input type="file" accept=".json" style={{ display:"none" }} onChange={e => {
              const file = e.target.files[0]; if (!file) return;
              const reader = new FileReader();
              reader.onload = ev => {
                try {
                  const imp = JSON.parse(ev.target.result);
                  if (!imp.machines || !imp.sessions) { alert(lang==="fr" ? "Fichier invalide." : "Invalid file."); return; }
                  if (window.confirm(lang==="fr" ? "Remplacer toutes les données ?" : "Replace all data?")) { save(imp); setData(() => imp); }
                } catch { alert(lang==="fr" ? "Erreur." : "Error."); }
              };
              reader.readAsText(file); e.target.value = "";
            }}/>
          </label>
        </div>
        <div style={{ fontSize:11, color:C.muted }}>{lang==="fr" ? "Sauvegarde toutes vos machines, circuits et séances." : "Saves all your machines, circuits and sessions."}</div>
      </Card>
      <Card>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:600, color:C.text }}>{T.sessionHistory}</div>
            <div style={{ fontSize:12, color:C.muted }}>{T.sessionsRecorded(data.sessions.length)}</div>
          </div>
          <Btn small variant="danger" onClick={clearSessions}>{clearStep===1 ? T.confirmDeleteBtn : T.clearAll}</Btn>
        </div>
        {clearStep === 1 && <div style={{ marginTop:8, fontSize:12, color:C.danger }}>{T.confirmDeleteMsg(data.sessions.length)}</div>}
      </Card>
    </div>
  );
};

// ─── Migration Dialog ──────────────────────────────────────────────────────────
const MigrationDialog = ({ sessionCount, machineCount, onAccept, onDecline, lang }) => {
  const [step, setStep] = useState("ask");
  const fr = lang === "fr";
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.95)", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:C.card, borderRadius:16, padding:28, maxWidth:360, width:"100%", border:`1px solid ${C.border}` }}>
        {step === "ask" ? (
          <div>
            <div style={{ fontSize:32, marginBottom:12, textAlign:"center" }}>📦</div>
            <div style={{ fontSize:17, fontWeight:800, color:C.text, marginBottom:10, textAlign:"center" }}>{fr ? "Données trouvées !" : "Previous data found!"}</div>
            <div style={{ fontSize:13, color:C.muted, marginBottom:20, textAlign:"center", lineHeight:1.7 }}>
              {fr
                ? `On a retrouvé des données d'une ancienne version : ${machineCount} machine${machineCount!==1?"s":""} et ${sessionCount} séance${sessionCount!==1?"s":""}.`
                : `Found data from a previous version: ${machineCount} machine${machineCount!==1?"s":""} and ${sessionCount} session${sessionCount!==1?"s":""}.`}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <Btn onClick={onAccept} variant="success" style={{ width:"100%" }}>✅ {fr ? "Oui, récupérer mes données" : "Yes, import my data"}</Btn>
              <Btn onClick={() => setStep("confirm_delete")} variant="ghost" style={{ width:"100%" }}>🗑 {fr ? "Non, repartir de zéro" : "No, start fresh"}</Btn>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize:32, marginBottom:12, textAlign:"center" }}>⚠️</div>
            <div style={{ fontSize:17, fontWeight:800, color:C.danger, marginBottom:10, textAlign:"center" }}>{fr ? "Confirmer la suppression" : "Confirm deletion"}</div>
            <div style={{ fontSize:13, color:C.muted, marginBottom:20, textAlign:"center", lineHeight:1.7 }}>
              {fr
                ? `Ces ${sessionCount} séance${sessionCount!==1?"s":""} et ${machineCount} machine${machineCount!==1?"s":""} seront définitivement supprimées.`
                : `These ${sessionCount} session${sessionCount!==1?"s":""} and ${machineCount} machine${machineCount!==1?"s":""} will be permanently deleted.`}
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <Btn onClick={() => setStep("ask")} variant="ghost" style={{ flex:1 }}>← {fr ? "Retour" : "Back"}</Btn>
              <Btn onClick={onDecline} variant="danger" style={{ flex:1 }}>{fr ? "Supprimer" : "Delete all"}</Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [lang, setLang] = useState("en");
  const [migration, setMigration] = useState(() => loadLegacy());
  const [data, setDataRaw] = useState(() => {
    const current = load();
    if (current) return normalizeData(current);
    if (loadLegacy()) return null;
    const fresh = defaultData();
    save(fresh);
    return fresh;
  });
  const [page, setPage] = useState(0);
  const T = TR[lang];

  const [sessionActive, setSessionActive] = useState(false);
  const elapsedRef = useRef(0);
  const startSession = useCallback(() => { elapsedRef.current = 0; setSessionActive(true); }, []);
  const endSession = useCallback(() => setSessionActive(false), []);
  const sessionCtx = { active: sessionActive, elapsedRef, startSession, endSession };

  const setData = useCallback(updater => {
    setDataRaw(d => { const n = typeof updater === "function" ? updater(d) : updater; save(n); return n; });
  }, []);

  const handleMigrationAccept = () => {
    const imported = normalizeData(migration.data);
    save(imported); deleteLegacy(); setDataRaw(imported); setMigration(null);
  };
  const handleMigrationDecline = () => {
    deleteLegacy(); const fresh = defaultData(); save(fresh); setDataRaw(fresh); setMigration(null);
  };

  const [pendingRepeat, setPendingRepeat] = useState(null);
  const triggerRepeat = useCallback(session => { setPendingRepeat(session); setPage(0); }, []);

  const handleLoadPlan = useCallback(plan => {
    const fakeSession = {
      exercises: [
        ...(plan.circuits||[]).map(c => ({ type:"circuit", circuitName:c.name, machineIds:c.machineIds||[], rounds:c.rounds||3, roundsDone:[], machineData:c.machineData||{} })),
        ...(plan.soloMachines||[]).map(s => ({ type:"solo", machineId:s.machineId, machineName:data?.machines?.find(m=>m.id===s.machineId)?.name, weight:s.weight, sets:s.sets, reps:s.reps })),
      ],
    };
    setPendingRepeat(fakeSession);
    setPage(0);
  }, [data]);

  const tabs = [
    { icon:"🏋️", label:T.navTrain },
    { icon:"📅", label:T.navPlan },
    { icon:"📊", label:T.navStats },
    { icon:"⚙️", label:T.navSetup },
  ];

  if (migration && !data) {
    return (
      <MigrationDialog
        sessionCount={migration.data?.sessions?.length||0}
        machineCount={migration.data?.machines?.length||0}
        onAccept={handleMigrationAccept}
        onDecline={handleMigrationDecline}
        lang={lang}/>
    );
  }

  if (!data) {
    return <div style={{ background:C.bg, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}><div style={{ color:C.muted, fontSize:14 }}>Loading…</div></div>;
  }

  return (
    <LangCtx.Provider value={lang}>
      <SessionCtx.Provider value={sessionCtx}>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
        <div style={{ background:C.bg, minHeight:"100vh", fontFamily:"'Segoe UI',system-ui,sans-serif", color:C.text }}>
          <div style={{ maxWidth:480, margin:"0 auto" }}>
            <div style={{ padding:"14px 14px 8px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:32, height:32, borderRadius:8, background:C.accent, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>💪</div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"baseline", gap:6 }}>
                  <div style={{ fontWeight:800, fontSize:16, color:C.text, letterSpacing:"-0.5px" }}>GymTrack</div>
                  <div style={{ fontSize:10, color:C.muted }}>{T.appVersion}</div>
                </div>
                <div style={{ fontSize:11, color:C.muted }}>
                  {new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { weekday:"long", day:"numeric", month:"long" })}
                </div>
              </div>
              <div onClick={() => setLang(l => l==="en" ? "fr" : "en")}
                style={{ cursor:"pointer", borderRadius:"50%", overflow:"hidden", width:34, height:34, flexShrink:0, border:`2px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                {lang === "en"
                  ? <svg width="34" height="34" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" fill="#012169"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/><path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/><path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/></svg>
                  : <svg width="34" height="34" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="40" fill="#002395"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ED2939"/></svg>
                }
              </div>
            </div>
            <SessionBanner T={T}/>
            <div style={{ padding:"0 14px" }}>
              <div style={{ display: page===0 ? "block" : "none" }}>
                <TrainingPage data={data} setData={setData} T={T} lang={lang} pendingRepeat={pendingRepeat} onRepeatConsumed={() => setPendingRepeat(null)}/>
              </div>
              <div style={{ display: page===1 ? "block" : "none" }}>
                <PlanPage data={data} setData={setData} T={T} lang={lang} onLoadPlan={handleLoadPlan}/>
              </div>
              {page === 2 && <StatsPage data={data} setData={setData} T={T} lang={lang} onRepeat={triggerRepeat}/>}
              {page === 3 && <SettingsPage data={data} setData={setData} T={T} lang={lang}/>}
            </div>
          </div>
          <div style={{ position:"fixed", bottom:0, left:0, right:0, background:C.bg2, borderTop:`1px solid ${C.border}`, display:"flex", justifyContent:"space-around", padding:"8px 0 10px" }}>
            {tabs.map((t,i) => (
              <div key={i} onClick={() => setPage(i)}
                style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, cursor:"pointer", padding:"4px 16px", borderRadius:8, color: page===i ? C.accent : C.muted, transition:"color .15s", position:"relative" }}>
                <div style={{ fontSize:20 }}>{t.icon}</div>
                <div style={{ fontSize:10, fontWeight: page===i ? 700 : 400 }}>{t.label}</div>
                {i === 0 && sessionActive && (
                  <div style={{ position:"absolute", top:2, right:10, width:8, height:8, borderRadius:"50%", background:C.success, border:`2px solid ${C.bg2}` }}/>
                )}
              </div>
            ))}
          </div>
        </div>
      </SessionCtx.Provider>
    </LangCtx.Provider>
  );
}
