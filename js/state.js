// ============================================================================
// TOIFA PRO — GLOBAL APPLICATION STATE & UTILITIES
// ============================================================================

const Store = {
  currentDay: parseInt(localStorage.getItem('toifa_current_day')) || 2,
  activeTab: localStorage.getItem('toifa_active_tab') || 'theory',
  isSidebarCollapsed: localStorage.getItem('toifa_sidebar_collapsed') !== null 
    ? (localStorage.getItem('toifa_sidebar_collapsed') === 'true') 
    : (typeof window !== 'undefined' && window.innerWidth <= 860),
  isSyllabusCollapsed: localStorage.getItem('toifa_syllabus_collapsed') === 'true',
  completedDays: JSON.parse(localStorage.getItem('toifa_completed_days')) || [1],
  
  // Daily Test State
  daily: {
    qIndex: 0,
    answers: {},
    activeQuestions: [],
    timerInterval: null,
    timeLeft: 600
  },

  // Final 50-Mock State
  final: {
    qIndex: 0,
    answers: {},
    timerInterval: null,
    timeLeft: 6000
  },

  // History & Scores
  history: JSON.parse(localStorage.getItem('toifa_history_records')) || [
    { day: 1, title: "Inversion & PPP Modeli", total: 10, correct: 7, score: 70, date: "14-Okt" },
    { day: 2, title: "Conditionals & TBL Metodika", total: 10, correct: 5, score: 50, date: "14-Okt" }
  ]
};

// Helper: Fisher-Yates Array Shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
