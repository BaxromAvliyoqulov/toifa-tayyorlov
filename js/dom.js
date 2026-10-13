// ============================================================================
// TOIFA PRO — DOM REGISTRY & HEADER CONTEXT MANAGER
// ============================================================================

const DOM = {
  sidebar: document.getElementById('appSidebar'),
  sidebarCollapseBtn: document.getElementById('sidebarCollapseBtn'),
  sidebarFloatingOpenBtn: document.getElementById('sidebarFloatingOpenBtn'),
  navBtns: document.querySelectorAll('.nav-btn'),
  tabs: document.querySelectorAll('.content-tab'),

  // Mobile Navigation & Backdrop
  mobileBottomNav: document.getElementById('mobileBottomNav'),
  mbNavBtns: document.querySelectorAll('.mb-nav-btn[data-tab]'),
  mobileSyllabusTriggerBtn: document.getElementById('mobileSyllabusTriggerBtn'),
  sidebarBackdrop: document.getElementById('sidebarBackdrop'),

  // Header Elements
  headerScorePill: document.getElementById('headerScorePill'),
  pageHeading: document.getElementById('pageMainHeading'),
  pageSubHeading: document.getElementById('pageSubHeading'),

  // Syllabus Accordion
  syllabusPanel: document.getElementById('syllabusPanel'),
  syllabusAccordionToggle: document.getElementById('syllabusAccordionToggle'),
  syllabusChevron: document.getElementById('syllabusChevron'),
  syllabusProgressBadge: document.getElementById('syllabusProgressBadge'),
  syllabusList: document.getElementById('syllabusList'),

  // Theory Tab
  theoryWrapper: document.getElementById('theoryWrapper'),
  theoryGoTestBtn: document.getElementById('theoryGoTestBtn'),

  // Daily Exam Tab
  dailyLobby: document.getElementById('dailyLobby'),
  dailyArena: document.getElementById('dailyArena'),
  dailyReport: document.getElementById('dailyReport'),
  lobbyLessonTitle: document.getElementById('lobbyLessonTitle'),
  dailyStartBtn: document.getElementById('dailyStartBtn'),
  dailyQNum: document.getElementById('dailyQNum'),
  dailyProgressBar: document.getElementById('dailyProgressBar'),
  dailyTimerDigits: document.getElementById('dailyTimerDigits'),
  dailyQText: document.getElementById('dailyQText'),
  dailyOptionsBox: document.getElementById('dailyOptionsBox'),
  dailyPrevBtn: document.getElementById('dailyPrevBtn'),
  dailyNextBtn: document.getElementById('dailyNextBtn'),
  dailyFinishBtn: document.getElementById('dailyFinishBtn'),
  dailyScoreDonut: document.getElementById('dailyScoreDonut'),
  dailyReportTitle: document.getElementById('dailyReportTitle'),
  dailyReportSubtitle: document.getElementById('dailyReportSubtitle'),
  dailyReviewList: document.getElementById('dailyReviewList'),
  dailyCopyAiBtn: document.getElementById('dailyCopyAiBtn'),
  dailyRetryBtn: document.getElementById('dailyRetryBtn'),
  dailyGoAnalyticsBtn: document.getElementById('dailyGoAnalyticsBtn'),

  // Final Exam Tab
  finalLobby: document.getElementById('finalLobby'),
  finalArena: document.getElementById('finalArena'),
  finalReport: document.getElementById('finalReport'),
  finalStartBtn: document.getElementById('finalStartBtn'),
  finalQNum: document.getElementById('finalQNum'),
  finalSectionBadge: document.getElementById('finalSectionBadge'),
  finalProgressBar: document.getElementById('finalProgressBar'),
  finalTimerDigits: document.getElementById('finalTimerDigits'),
  finalQText: document.getElementById('finalQText'),
  finalOptionsBox: document.getElementById('finalOptionsBox'),
  finalPrevBtn: document.getElementById('finalPrevBtn'),
  finalNextBtn: document.getElementById('finalNextBtn'),
  finalFinishBtn: document.getElementById('finalFinishBtn'),
  finalScoreDonut: document.getElementById('finalScoreDonut'),
  finalVerdictTitle: document.getElementById('finalVerdictTitle'),
  finalVerdictSubtitle: document.getElementById('finalVerdictSubtitle'),
  finalReviewList: document.getElementById('finalReviewList'),
  finalCopyAiBtn: document.getElementById('finalCopyAiBtn'),
  finalRetryBtn: document.getElementById('finalRetryBtn'),

  // Analytics Tab
  analyticsHeroTitle: document.getElementById('analyticsHeroTitle'),
  analyticsHeroDesc: document.getElementById('analyticsHeroDesc'),
  analyticsGaugeScore: document.getElementById('analyticsGaugeScore'),
  kpiTotalTests: document.getElementById('kpiTotalTests'),
  kpiCorrectTests: document.getElementById('kpiCorrectTests'),
  kpiLastScore: document.getElementById('kpiLastScore'),
  weakCountBadge: document.getElementById('weakCountBadge'),
  strongCountBadge: document.getElementById('strongCountBadge'),
  analyticsWeakList: document.getElementById('analyticsWeakList'),
  analyticsStrongList: document.getElementById('analyticsStrongList'),
  historyTableBody: document.getElementById('historyTableBody')
};

function updateHeaderContext() {
  const lesson = (typeof CURRICULUM !== 'undefined') ? CURRICULUM[Store.currentDay] : null;
  const lastScore = Store.history.length > 0 ? Store.history[Store.history.length - 1].score : 0;
  if (DOM.headerScorePill) {
    DOM.headerScorePill.innerHTML = `Oxirgi test: <strong>${lastScore}%</strong>`;
  }

  if (Store.activeTab === 'theory') {
    if (DOM.pageHeading) DOM.pageHeading.textContent = lesson ? lesson.title : `${Store.currentDay}-Kun Darsi`;
    if (DOM.pageSubHeading) DOM.pageSubHeading.textContent = lesson ? lesson.subtitle : "Mavzu bo'yicha to'liq o'quv konspekti";
  } else if (Store.activeTab === 'exam') {
    if (DOM.pageHeading) DOM.pageHeading.textContent = `✍️ ${Store.currentDay}-Kun: Jonli Attestatsiya Testi`;
    if (DOM.pageSubHeading) DOM.pageSubHeading.textContent = "10 ta saralangan savol, 10 daqiqa vaqt me'yori";
  } else if (Store.activeTab === 'finalExam') {
    if (DOM.pageHeading) DOM.pageHeading.textContent = "🏆 UzBMB / DemoTest 2026: Rasmiy Mock Imtihon";
    if (DOM.pageSubHeading) DOM.pageSubHeading.textContent = "To'liq 50 ta savol, 100 daqiqa rasmiy vaqt, toifa verifikatsiyasi";
  } else if (Store.activeTab === 'analytics') {
    if (DOM.pageHeading) DOM.pageHeading.textContent = "📊 Shaxsiy Ta'lim Diagnostikasi & O'sish Tahlili";
    if (DOM.pageSubHeading) DOM.pageSubHeading.textContent = "Real vaqtda aniqlangan zaif bo'g'inlar, kuchli mavzular va toifa ehtimoli";
  }
}
