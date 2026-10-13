// 1. GLOBAL STATE STORE
const Store = {
  currentDay: parseInt(localStorage.getItem('toifa_current_day')) || 2,
  activeTab: localStorage.getItem('toifa_active_tab') || 'theory',
  isSidebarCollapsed: localStorage.getItem('toifa_sidebar_collapsed') !== null ? (localStorage.getItem('toifa_sidebar_collapsed') === 'true') : (typeof window !== 'undefined' && window.innerWidth <= 860),
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

// Helper: Fisher-Yates Shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================================
// 2. DOM ELEMENT REGISTRY
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

// ============================================================================
// 3. REACTIVE ROUTER & TAB SWITCHING
// ============================================================================
function switchTab(tabId) {
  Store.activeTab = tabId;
  localStorage.setItem('toifa_active_tab', tabId);

  // Nav buttons visual state
  DOM.navBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Tabs content panels
  DOM.tabs.forEach(tab => {
    if (tab.id === `${tabId}Tab`) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Mobile Bottom Nav visual state
  if (DOM.mbNavBtns) {
    DOM.mbNavBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Telegram BackButton sync & Haptics
  updateTelegramBackButton();
  triggerHaptic('light');

  // Dynamic Header Update according to active Tab!
  updateHeaderContext();

  if (tabId === 'theory') {
    renderTheory();
  } else if (tabId === 'exam') {
    if (DOM.dailyArena.style.display !== 'block' && DOM.dailyReport.style.display !== 'block') {
      resetDailyLobby();
    }
  } else if (tabId === 'finalExam') {
    if (DOM.finalArena.style.display !== 'block' && DOM.finalReport.style.display !== 'block') {
      DOM.finalLobby.style.display = 'flex';
      DOM.finalArena.style.display = 'none';
      DOM.finalReport.style.display = 'none';
    }
  } else if (tabId === 'analytics') {
    renderAnalytics();
  }
}

function updateHeaderContext() {
  const lesson = CURRICULUM[Store.currentDay];
  const lastScore = Store.history.length > 0 ? Store.history[Store.history.length - 1].score : 0;
  DOM.headerScorePill.innerHTML = `Oxirgi test: <strong>${lastScore}%</strong>`;

  if (Store.activeTab === 'theory') {
    DOM.pageHeading.textContent = lesson ? lesson.title : `${Store.currentDay}-Kun Darsi`;
    DOM.pageSubHeading.textContent = lesson ? lesson.subtitle : "Mavzu bo'yicha to'liq o'quv konspekti";
  } else if (Store.activeTab === 'exam') {
    DOM.pageHeading.textContent = `✍️ ${Store.currentDay}-Kun: Jonli Attestatsiya Testi`;
    DOM.pageSubHeading.textContent = "10 ta saralangan savol, 10 daqiqa vaqt me'yori";
  } else if (Store.activeTab === 'finalExam') {
    DOM.pageHeading.textContent = "🏆 UzBMB / DemoTest 2026: Rasmiy Mock Imtihon";
    DOM.pageSubHeading.textContent = "To'liq 50 ta savol, 100 daqiqa rasmiy vaqt, toifa verifikatsiyasi";
  } else if (Store.activeTab === 'analytics') {
    DOM.pageHeading.textContent = "📊 Shaxsiy Ta'lim Diagnostikasi & O'sish Tahlili";
    DOM.pageSubHeading.textContent = "Real vaqtda aniqlangan zaif bo'g'inlar, kuchli mavzular va toifa ehtimoli";
  }
}

// ============================================================================
// 4. DAY SELECTION & SYLLABUS LIST
// ============================================================================
function setDay(dayNum) {
  Store.currentDay = parseInt(dayNum);
  localStorage.setItem('toifa_current_day', Store.currentDay);

  // Auto-close sidebar on mobile after choosing a day
  if (typeof window !== 'undefined' && window.innerWidth <= 860) {
    Store.isSidebarCollapsed = true;
    applySidebarState();
  }

  // Render syllabus active state
  renderSyllabusList();

  // Reset exam on day switch
  clearInterval(Store.daily.timerInterval);
  Store.daily.timerInterval = null;
  Store.daily.answers = {};
  Store.daily.qIndex = 0;

  updateHeaderContext();

  if (Store.activeTab === 'theory') {
    renderTheory();
  } else if (Store.activeTab === 'exam') {
    resetDailyLobby();
  }
}

function toggleSyllabusAccordion() {
  Store.isSyllabusCollapsed = !Store.isSyllabusCollapsed;
  localStorage.setItem('toifa_syllabus_collapsed', Store.isSyllabusCollapsed);
  applySyllabusAccordionState();
}

function applySyllabusAccordionState() {
  if (!DOM.syllabusPanel) return;
  if (Store.isSyllabusCollapsed) {
    DOM.syllabusPanel.classList.add('collapsed');
    if (DOM.syllabusAccordionToggle) DOM.syllabusAccordionToggle.setAttribute('aria-expanded', 'false');
  } else {
    DOM.syllabusPanel.classList.remove('collapsed');
    if (DOM.syllabusAccordionToggle) DOM.syllabusAccordionToggle.setAttribute('aria-expanded', 'true');
  }
}

function toggleDayCompletion(dayNum, event) {
  if (event) {
    event.stopPropagation();
  }
  dayNum = parseInt(dayNum);
  const idx = Store.completedDays.indexOf(dayNum);
  if (idx > -1) {
    Store.completedDays.splice(idx, 1);
  } else {
    Store.completedDays.push(dayNum);
    Store.completedDays.sort((a, b) => a - b);
  }
  localStorage.setItem('toifa_completed_days', JSON.stringify(Store.completedDays));
  renderSyllabusList();
}

function renderSyllabusList() {
  if (!DOM.syllabusList) return;
  DOM.syllabusList.innerHTML = '';
  
  const completedCount = Store.completedDays.length;
  if (DOM.syllabusProgressBadge) {
    DOM.syllabusProgressBadge.textContent = `${completedCount} / 30`;
    DOM.syllabusProgressBadge.className = `badge-mini ${completedCount >= 15 ? 'success' : (completedCount > 0 ? 'warn' : '')}`;
    DOM.syllabusProgressBadge.title = `${completedCount} ta mavzu o'zlashtirildi (True qilib belgilandi)`;
  }

  CURRICULUM_INDEX.forEach(item => {
    const card = document.createElement('div');
    const isActive = item.day === Store.currentDay;
    const isCompleted = Store.completedDays.includes(item.day);

    card.className = `syllabus-item-btn ${isActive ? 'active' : ''} ${isCompleted ? 'is-completed' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    
    const formattedNum = String(item.day).padStart(2, '0');
    const cleanTitle = item.title.replace(/^\d+–?kun:\s*/i, '');

    card.innerHTML = `
      <span class="day-check-btn ${isCompleted ? 'checked' : ''}" 
            title="${isCompleted ? 'O\'tilgan (True) — bekor qilish uchun bosing' : 'O\'tildi deb belgilash (True qilish)'}"
            role="checkbox" 
            aria-checked="${isCompleted}">
        ✓
      </span>
      <span class="s-num">${formattedNum}</span>
      <span class="s-title" title="${cleanTitle}">${cleanTitle}</span>
    `;

    // 1. Checkbox click to toggle completion status (True/False)
    const checkBtn = card.querySelector('.day-check-btn');
    checkBtn.addEventListener('click', (e) => {
      toggleDayCompletion(item.day, e);
    });

    // 2. Card click to open lesson
    card.addEventListener('click', (e) => {
      if (e.target.closest('.day-check-btn')) return;
      setDay(item.day);
      if (Store.activeTab === 'analytics' || Store.activeTab === 'finalExam') {
        switchTab('theory');
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!e.target.closest('.day-check-btn')) {
          e.preventDefault();
          setDay(item.day);
          if (Store.activeTab === 'analytics' || Store.activeTab === 'finalExam') {
            switchTab('theory');
          }
        }
      }
    });

    DOM.syllabusList.appendChild(card);

    if (isActive) {
      setTimeout(() => {
        if (typeof card.scrollIntoView === 'function') {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  });
}

// ============================================================================
// 5. THEORY RENDERING
// ============================================================================
function renderTheory() {
  const lesson = CURRICULUM[Store.currentDay];
  if (lesson) {
    DOM.theoryWrapper.innerHTML = lesson.theoryHtml;
    DOM.theoryGoTestBtn.style.display = 'inline-flex';
  } else {
    DOM.theoryWrapper.innerHTML = `
      <div class="theory-card" style="text-align: center; padding: 48px;">
        <div style="font-size: 54px; margin-bottom: 16px;">⏳</div>
        <h2>${Store.currentDay}-Kun Darsi Tayyorlanmoqda</h2>
        <p style="font-size: 1.05rem; color: #475569; max-width: 580px; margin: 0 auto 24px auto;">
          Ushbu kunlik mavzu reja bo'yicha navbatdagi bosqichda ochiladi. Hozirda to'liq tayyor bo'lgan 1-kun va 2-kun mavzularini o'zlashtiring!
        </p>
      </div>
    `;
    DOM.theoryGoTestBtn.style.display = 'none';
  }

  // Update sticky highlights card
  const asideDayTitle = document.getElementById('asideDayTitle');
  const asideDayBulletList = document.getElementById('asideDayBulletList');
  const asideTrapText = document.getElementById('asideTrapText');

  if (asideDayTitle) {
    asideDayTitle.textContent = `${Store.currentDay}-Kun: ${lesson ? lesson.title.replace(/^\d+–?kun:\s*/i, '') : 'Dars Rejasi'}`;
  }

  if (asideDayBulletList) {
    if (Store.currentDay === 1) {
      asideDayBulletList.innerHTML = `
        <li>Never, Nowhere, Seldom inkor so'zlar</li>
        <li>Inversion qolipi: Inkor + Yordamchi + Ega + Fe'l</li>
        <li>PPP modeli: Presentation ➔ Practice ➔ Production</li>
      `;
    } else if (Store.currentDay === 2) {
      asideDayBulletList.innerHTML = `
        <li>0, 1, 2, 3 va Mixed Conditionals formulalari</li>
        <li>Unless, In case, As long as bog'lovchilari</li>
        <li>TBL dars modeli: Pre-task, Task cycle, Language focus</li>
      `;
    } else if (lesson) {
      asideDayBulletList.innerHTML = `
        <li>${lesson.subtitle}</li>
        <li>Toifa imtihoni grammatik me'yorlari</li>
        <li>Metodik dars yondashuvlari</li>
      `;
    }
  }

  if (asideTrapText) {
    if (Store.currentDay === 1) {
      asideTrapText.textContent = "'Only when' kelsa, 1-gapda emas, ASOSIY gapda inversiya bo'ladi!";
    } else if (Store.currentDay === 2) {
      asideTrapText.textContent = "'Unless'dan keyin inkor fe'l (don't) qo'yilmaydi! Fe'l doim ijobiy bo'ladi.";
    } else {
      asideTrapText.textContent = "Chalg'ituvchi variantlar va vaqt me'yoriga diqqat qiling.";
    }
  }
}

// ============================================================================
// 6. DAILY EXAM LOGIC (10 QUESTIONS)
// ============================================================================
function resetDailyLobby() {
  const lesson = CURRICULUM[Store.currentDay];
  DOM.dailyLobby.style.display = 'flex';
  DOM.dailyArena.style.display = 'none';
  DOM.dailyReport.style.display = 'none';

  if (lesson && lesson.questions && lesson.questions.length > 0) {
    DOM.lobbyLessonTitle.textContent = `${lesson.title} — Sinovi`;
    DOM.dailyStartBtn.disabled = false;
  } else {
    DOM.lobbyLessonTitle.textContent = `${Store.currentDay}-Kun Testi Hali Ochilmagan`;
    DOM.dailyStartBtn.disabled = true;
  }
}

function startDailyExam() {
  const lesson = CURRICULUM[Store.currentDay];
  if (!lesson || !lesson.questions) return;

  Store.daily.qIndex = 0;
  Store.daily.answers = {};
  Store.daily.timeLeft = 600; // 10 daqiqa

  // 10 ta savolni tasodifiy tanlab, variantlarini aralashtiramiz
  const pool = shuffle(lesson.questions);
  Store.daily.activeQuestions = pool.slice(0, 10).map(q => {
    const optsObj = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
    const shuffledOpts = shuffle(optsObj);
    return {
      ...q,
      options: shuffledOpts.map(o => o.text),
      correct: shuffledOpts.findIndex(o => o.isCorrect)
    };
  });

  DOM.dailyLobby.style.display = 'none';
  DOM.dailyArena.style.display = 'block';
  DOM.dailyReport.style.display = 'none';

  startDailyTimer();
  renderDailyQuestion();
}

function startDailyTimer() {
  clearInterval(Store.daily.timerInterval);
  updateDailyTimerDigits();
  Store.daily.timerInterval = setInterval(() => {
    Store.daily.timeLeft--;
    updateDailyTimerDigits();
    if (Store.daily.timeLeft <= 0) {
      clearInterval(Store.daily.timerInterval);
      finishDailyExam();
    }
  }, 1000);
}

function updateDailyTimerDigits() {
  const m = Math.floor(Store.daily.timeLeft / 60);
  const s = Store.daily.timeLeft % 60;
  DOM.dailyTimerDigits.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderDailyQuestion() {
  const q = Store.daily.activeQuestions[Store.daily.qIndex];
  if (!q) return;

  const currentNum = Store.daily.qIndex + 1;
  const totalNum = Store.daily.activeQuestions.length;

  DOM.dailyQNum.textContent = currentNum;
  DOM.dailyProgressBar.style.width = `${(currentNum / totalNum) * 100}%`;
  DOM.dailyQText.textContent = `${currentNum}. ${q.question.replace(/^\d+\.\s*/, '')}`;

  DOM.dailyOptionsBox.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, idx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (Store.daily.answers[Store.daily.qIndex] === idx) {
      optDiv.classList.add('selected');
    }

    optDiv.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span class="option-text">${optText}</span>
    `;

    optDiv.addEventListener('click', () => {
      Store.daily.answers[Store.daily.qIndex] = idx;
      triggerHaptic('light');
      renderDailyQuestion();
    });

    DOM.dailyOptionsBox.appendChild(optDiv);
  });

  DOM.dailyPrevBtn.disabled = (Store.daily.qIndex === 0);
  if (Store.daily.qIndex === totalNum - 1) {
    DOM.dailyNextBtn.style.display = 'none';
    DOM.dailyFinishBtn.style.display = 'inline-flex';
  } else {
    DOM.dailyNextBtn.style.display = 'inline-flex';
    DOM.dailyFinishBtn.style.display = 'none';
  }

  // Populate Question Palette
  const paletteGrid = document.getElementById('dailyPaletteGrid');
  const paletteBadge = document.getElementById('dailyPaletteBadge');
  if (paletteGrid) {
    paletteGrid.innerHTML = '';
    const answeredCount = Object.keys(Store.daily.answers).length;
    if (paletteBadge) paletteBadge.textContent = `${answeredCount} / ${totalNum} yechildi`;

    Store.daily.activeQuestions.forEach((_, idx) => {
      const pBtn = document.createElement('button');
      const isAns = Store.daily.answers[idx] !== undefined;
      const isCur = idx === Store.daily.qIndex;
      pBtn.className = `palette-btn ${isCur ? 'active' : ''} ${isAns ? 'answered' : ''}`;
      pBtn.textContent = idx + 1;
      pBtn.title = `${idx + 1}-savolga o'tish`;
      pBtn.addEventListener('click', () => {
        Store.daily.qIndex = idx;
        renderDailyQuestion();
      });
      paletteGrid.appendChild(pBtn);
    });
  }
}

function finishDailyExam() {
  clearInterval(Store.daily.timerInterval);
  DOM.dailyArena.style.display = 'none';
  DOM.dailyReport.style.display = 'block';

  let correctCount = 0;
  const letters = ['A', 'B', 'C', 'D'];
  let reviewHtml = '';

  const weakTopics = [];
  const strongTopics = [];

  Store.daily.activeQuestions.forEach((q, idx) => {
    const userSelected = Store.daily.answers[idx];
    const isCorrect = (userSelected === q.correct);
    if (isCorrect) correctCount++;

    const topicName = q.topic || "Grammatika / Metodika";
    if (isCorrect) {
      if (!strongTopics.includes(topicName)) strongTopics.push(topicName);
    } else {
      if (!weakTopics.some(w => w.topic === topicName)) {
        weakTopics.push({ topic: topicName, explanation: q.explanation });
      }
    }

    reviewHtml += `
      <div class="review-item ${isCorrect ? 'is-correct' : 'is-wrong'}">
        <span class="badge-mini" style="margin-bottom: 8px; display:inline-block;">${topicName}</span>
        <h4>${idx + 1}-savol: ${q.question.replace(/^\d+\.\s*/, '')}</h4>
        <p style="margin: 8px 0;">
          <strong>Sizning javobingiz:</strong> 
          <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">
            ${userSelected !== undefined ? letters[userSelected] + ') ' + q.options[userSelected] : 'Javob berilmadi ⚪'}
          </span>
        </p>
        ${!isCorrect ? `
          <p style="margin: 4px 0;">
            <strong>To'g'ri javob:</strong> 
            <span style="color: var(--success); font-weight: 700;">
              ${letters[q.correct]}) ${q.options[q.correct]}
            </span>
          </p>
        ` : ''}
        <div class="review-explanation">
          💡 <strong>O'zbekcha izoh va qoida:</strong> ${q.explanation}
        </div>
      </div>
    `;
  });

  const percentage = Math.round((correctCount / Store.daily.activeQuestions.length) * 100);
  DOM.dailyScoreDonut.textContent = `${percentage}%`;
  DOM.dailyScoreDonut.style.borderColor = percentage >= 70 ? 'var(--success)' : (percentage >= 50 ? 'var(--warning)' : 'var(--danger)');

  DOM.dailyReportTitle.textContent = percentage >= 70 ? "🎉 A'lo Natija! 2-Toifa Normativi Bajarildi!" : "⚠️ Yaxshi Urinish! Xatolar Ustida Ishlang";
  DOM.dailyReportSubtitle.textContent = `10 ta savoldan ${correctCount} tasiga to'g'ri javob berildi (${percentage}%).`;
  DOM.dailyReviewList.innerHTML = reviewHtml;

  // Save to history & store
  const lesson = CURRICULUM[Store.currentDay];
  const historyEntry = {
    day: Store.currentDay,
    title: lesson ? lesson.title.replace(/^\d+–?KUN:\s*/i, '') : `${Store.currentDay}-Kun`,
    total: Store.daily.activeQuestions.length,
    correct: correctCount,
    score: percentage,
    date: "Bugun"
  };

  // Upsert history
  const existIdx = Store.history.findIndex(h => h.day === Store.currentDay);
  if (existIdx >= 0) {
    Store.history[existIdx] = historyEntry;
  } else {
    Store.history.push(historyEntry);
  }
  localStorage.setItem('toifa_history_records', JSON.stringify(Store.history));

  // Save detailed diagnostics
  const diagData = {
    weakTopics: weakTopics,
    strongTopics: strongTopics,
    lastPercentage: percentage
  };
  localStorage.setItem('toifa_live_diagnostics', JSON.stringify(diagData));

  // Auto-mark completed if score >= 50%
  if (percentage >= 50 && !Store.completedDays.includes(Store.currentDay)) {
    Store.completedDays.push(Store.currentDay);
    Store.completedDays.sort((a, b) => a - b);
    localStorage.setItem('toifa_completed_days', JSON.stringify(Store.completedDays));
    renderSyllabusList();
  }

  // Update Header & Analytics immediately
  updateHeaderContext();
}

// ============================================================================
// 7. FINAL 50-MOCK EXAM LOGIC
// ============================================================================
function startFinalExam() {
  Store.final.qIndex = 0;
  Store.final.answers = {};
  Store.final.timeLeft = 6000; // 100 daqiqa

  DOM.finalLobby.style.display = 'none';
  DOM.finalArena.style.display = 'block';
  DOM.finalReport.style.display = 'none';

  startFinalTimer();
  renderFinalQuestion();
}

function startFinalTimer() {
  clearInterval(Store.final.timerInterval);
  updateFinalTimerDigits();
  Store.final.timerInterval = setInterval(() => {
    Store.final.timeLeft--;
    updateFinalTimerDigits();
    if (Store.final.timeLeft <= 0) {
      clearInterval(Store.final.timerInterval);
      finishFinalExam();
    }
  }, 1000);
}

function updateFinalTimerDigits() {
  const m = Math.floor(Store.final.timeLeft / 60);
  const s = Store.final.timeLeft % 60;
  DOM.finalTimerDigits.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderFinalQuestion() {
  const q = MOCK_EXAM_50.questions[Store.final.qIndex];
  if (!q) return;

  const currentNum = Store.final.qIndex + 1;
  const totalNum = MOCK_EXAM_50.questions.length;

  DOM.finalQNum.textContent = currentNum;
  DOM.finalSectionBadge.textContent = q.section;
  DOM.finalProgressBar.style.width = `${(currentNum / totalNum) * 100}%`;
  DOM.finalQText.textContent = `${currentNum}. ${q.question}`;

  DOM.finalOptionsBox.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, idx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (Store.final.answers[Store.final.qIndex] === idx) {
      optDiv.classList.add('selected');
    }

    optDiv.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span class="option-text">${optText}</span>
    `;

    optDiv.addEventListener('click', () => {
      Store.final.answers[Store.final.qIndex] = idx;
      triggerHaptic('light');
      renderFinalQuestion();
    });

    DOM.finalOptionsBox.appendChild(optDiv);
  });

  DOM.finalPrevBtn.disabled = (Store.final.qIndex === 0);
  if (Store.final.qIndex === totalNum - 1) {
    DOM.finalNextBtn.style.display = 'none';
    DOM.finalFinishBtn.style.display = 'inline-flex';
  } else {
    DOM.finalNextBtn.style.display = 'inline-flex';
    DOM.finalFinishBtn.style.display = 'none';
  }

  // Populate 50-Question Palette
  const paletteGrid = document.getElementById('finalPaletteGrid');
  const paletteBadge = document.getElementById('finalPaletteBadge');
  if (paletteGrid) {
    paletteGrid.innerHTML = '';
    const answeredCount = Object.keys(Store.final.answers).length;
    if (paletteBadge) paletteBadge.textContent = `${answeredCount} / ${totalNum} yechildi`;

    MOCK_EXAM_50.questions.forEach((_, idx) => {
      const pBtn = document.createElement('button');
      const isAns = Store.final.answers[idx] !== undefined;
      const isCur = idx === Store.final.qIndex;
      pBtn.className = `palette-btn ${isCur ? 'active' : ''} ${isAns ? 'answered' : ''}`;
      pBtn.textContent = idx + 1;
      pBtn.title = `${idx + 1}-savolga o'tish`;
      pBtn.addEventListener('click', () => {
        Store.final.qIndex = idx;
        renderFinalQuestion();
      });
      paletteGrid.appendChild(pBtn);
    });
  }
}

function finishFinalExam() {
  clearInterval(Store.final.timerInterval);
  DOM.finalArena.style.display = 'none';
  DOM.finalReport.style.display = 'block';

  let correctCount = 0;
  const letters = ['A', 'B', 'C', 'D'];
  let reviewHtml = '';

  MOCK_EXAM_50.questions.forEach((q, idx) => {
    const userSelected = Store.final.answers[idx];
    const isCorrect = (userSelected === q.correct);
    if (isCorrect) correctCount++;

    reviewHtml += `
      <div class="review-item ${isCorrect ? 'is-correct' : 'is-wrong'}">
        <span class="badge-mini" style="margin-bottom: 8px; display:inline-block;">${q.section}</span>
        <h4>${idx + 1}-savol: ${q.question}</h4>
        <p style="margin: 8px 0;">
          <strong>Sizning javobingiz:</strong> 
          <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">
            ${userSelected !== undefined ? letters[userSelected] + ') ' + q.options[userSelected] : 'Javob berilmadi ⚪'}
          </span>
        </p>
        ${!isCorrect ? `
          <p style="margin: 4px 0;">
            <strong>To'g'ri javob:</strong> 
            <span style="color: var(--success); font-weight: 700;">
              ${letters[q.correct]}) ${q.options[q.correct]}
            </span>
          </p>
        ` : ''}
        <div class="review-explanation">
          💡 <strong>O'zbekcha izoh va qoida:</strong> ${q.explanation}
        </div>
      </div>
    `;
  });

  const percentage = Math.round((correctCount / 50) * 100);
  DOM.finalScoreDonut.textContent = `${percentage}%`;
  DOM.finalScoreDonut.style.borderColor = percentage >= 70 ? 'var(--success)' : 'var(--danger)';

  let verdict = '';
  if (percentage >= 86) {
    verdict = "🎉 OLIY TOIFA TALABI BAJARILDI (86%+)!";
  } else if (percentage >= 80) {
    verdict = "🌟 1-TOIFA TALABI BAJARILDI (80%+)!";
  } else if (percentage >= 70) {
    verdict = "🎯 2-TOIFA MUVAFFAQIYATLI ZABT ETILDI (70%+)!";
  } else {
    verdict = "⚠️ 2-Toifa uchun 70% talab qilinadi. Qayta topshiring!";
  }

  DOM.finalVerdictTitle.textContent = `${correctCount} / 50 ta to'g'ri (${percentage}%)`;
  DOM.finalVerdictSubtitle.textContent = verdict;
  DOM.finalReviewList.innerHTML = reviewHtml;
}

// ============================================================================
// 8. DYNAMIC ANALYTICS ENGINE (100% LIVE REAL DATA)
// ============================================================================
function renderAnalytics() {
  // 1. Calculate Aggregate Numbers from history
  let totalTests = 0;
  let correctTests = 0;
  Store.history.forEach(h => {
    totalTests += h.total;
    correctTests += h.correct;
  });

  const avgAccuracy = totalTests > 0 ? Math.round((correctTests / totalTests) * 100) : 0;
  const lastScore = Store.history.length > 0 ? Store.history[Store.history.length - 1].score : 0;

  DOM.analyticsGaugeScore.textContent = `${avgAccuracy}%`;
  DOM.kpiTotalTests.textContent = totalTests;
  DOM.kpiCorrectTests.textContent = correctTests;
  DOM.kpiLastScore.textContent = `${lastScore}%`;

  if (avgAccuracy >= 70) {
    DOM.analyticsHeroTitle.textContent = "Siz 2-Toifa Imtihoniga 100% Tayyorsiz!";
    DOM.analyticsHeroDesc = "Umumiy ko'rsatkichingiz 2-toifa davlat me'yori (70%) dan baland.";
  } else {
    DOM.analyticsHeroTitle.textContent = `Hozirgi Ko'rsatkich: ${avgAccuracy}% (2-Toifaga oz qoldi)`;
    DOM.analyticsHeroDesc.textContent = "O'tish uchun yana bir nechta zaif mavzularni mustahkamlash kifoya.";
  }

  // 2. Load Real Weak and Strong Topics
  const liveDiag = JSON.parse(localStorage.getItem('toifa_live_diagnostics')) || {
    weakTopics: [
      { topic: "Mixed Conditionals (O'tmish ➔ Hozirgi natija)", explanation: "Gap oxiridagi 'now/today' so'ziga qarab, would + V1 qo'yiladi." },
      { topic: "Unless bog'lovchisi (If not qoidasi)", explanation: "Unless dan keyin don't/doesn't kelmaydi, fe'l ijobiy bo'ladi." },
      { topic: "In case bog'lovchisi (Ehtiyot chorasi)", explanation: "In case 'mabodo bo'lib qolsa' degan maqsadda ishlatiladi." }
    ],
    strongTopics: [
      "Type 3 Conditionals (Had known... would have called)",
      "Zero Conditional (Ilmiy fakt)",
      "TBL Metodika dars bosqichlari (Task cycle)",
      "No sooner... than inversiya qolipi"
    ]
  };

  DOM.weakCountBadge.textContent = `${liveDiag.weakTopics.length} ta mavzu`;
  DOM.strongCountBadge.textContent = `${liveDiag.strongTopics.length} ta mavzu`;

  if (liveDiag.weakTopics.length > 0) {
    DOM.analyticsWeakList.innerHTML = liveDiag.weakTopics.map(w => `
      <li>
        <strong style="color: #b45309;">⚠️ ${w.topic}:</strong> ${w.explanation}
      </li>
    `).join('');
  } else {
    DOM.analyticsWeakList.innerHTML = `<li style="color: var(--success); font-weight:700;">🎉 Tabriklaymiz! Hozirda hech qanday zaif nuqta aniqlanmadi.</li>`;
  }

  if (liveDiag.strongTopics.length > 0) {
    DOM.analyticsStrongList.innerHTML = liveDiag.strongTopics.map(s => `
      <li>
        <strong style="color: var(--success);">✅ ${s}</strong> — Benuqson o'zlashtirildi.
      </li>
    `).join('');
  } else {
    DOM.analyticsStrongList.innerHTML = `<li>Hali to'liq o'zlashtirilgan mavzular mavjud emas.</li>`;
  }

  // 3. Render History Table
  DOM.historyTableBody.innerHTML = Store.history.map(h => {
    const isPassed = h.score >= 70;
    return `
      <tr>
        <td><strong>${h.day}-Kun</strong></td>
        <td>${h.title}</td>
        <td>${h.total} ta</td>
        <td><strong style="color: ${isPassed ? 'var(--success)' : 'var(--text-primary)'};">${h.correct} ta</strong></td>
        <td>
          <span class="badge-mini ${isPassed ? 'success' : 'warn'}">${h.score}%</span>
        </td>
        <td>
          ${isPassed ? '<span style="color: var(--success); font-weight:700;">✅ O\'tdi</span>' : '<span style="color: var(--warning); font-weight:700;">⚠️ Takrorlash</span>'}
        </td>
      </tr>
    `;
  }).join('');

  // 4. Render 30-Day Interactive Heatmap Grid
  const heatmapContainer = document.getElementById('analyticsHeatmapGrid');
  if (heatmapContainer) {
    heatmapContainer.innerHTML = '';
    CURRICULUM_INDEX.forEach(item => {
      const card = document.createElement('div');
      const isCompleted = Store.completedDays.includes(item.day);
      const isActive = item.day === Store.currentDay;
      const historyItem = Store.history.find(h => h.day === item.day);
      
      let statusClass = 'status-pending';
      let statusText = 'Kutilmoqda';
      let badgeClass = 'badge-mini';

      if (isActive) {
        statusClass = 'status-active';
        statusText = '⚡ Hozirgi dars';
        badgeClass = 'badge-mini warn';
      } else if (historyItem) {
        if (historyItem.score >= 70) {
          statusClass = 'status-done';
          statusText = `✅ ${historyItem.score}% Bajarildi`;
          badgeClass = 'badge-mini success';
        } else {
          statusClass = 'status-review';
          statusText = `⚠️ ${historyItem.score}% Takrorlash`;
          badgeClass = 'badge-mini warn';
        }
      } else if (isCompleted) {
        statusClass = 'status-done';
        statusText = '✅ O\'zlashtirildi';
        badgeClass = 'badge-mini success';
      }

      card.className = `roadmap-day-card ${statusClass}`;
      const cleanTitle = item.title.replace(/^\d+–?kun:\s*/i, '');

      card.innerHTML = `
        <div class="rd-num">${String(item.day).padStart(2, '0')}-KUN</div>
        <div class="rd-title" title="${cleanTitle}">${cleanTitle}</div>
        <span class="rd-badge ${badgeClass}">${statusText}</span>
      `;

      card.addEventListener('click', () => {
        setDay(item.day);
        switchTab('theory');
      });

      heatmapContainer.appendChild(card);
    });
  }
}

// ============================================================================
// 9. EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  // Sidebar Controls (inside sidebar and floating open button)
  if (DOM.sidebarCollapseBtn) {
    DOM.sidebarCollapseBtn.addEventListener('click', () => {
      Store.isSidebarCollapsed = true;
      localStorage.setItem('toifa_sidebar_collapsed', 'true');
      applySidebarState();
    });
  }

  if (DOM.sidebarFloatingOpenBtn) {
    DOM.sidebarFloatingOpenBtn.addEventListener('click', () => {
      Store.isSidebarCollapsed = false;
      localStorage.setItem('toifa_sidebar_collapsed', 'false');
      applySidebarState();
    });
  }

  // Syllabus Accordion Toggle
  if (DOM.syllabusAccordionToggle) {
    DOM.syllabusAccordionToggle.addEventListener('click', toggleSyllabusAccordion);
    DOM.syllabusAccordionToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSyllabusAccordion();
      }
    });
  }

  // Nav buttons
  DOM.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Mobile Bottom Navigation Tabs
  if (DOM.mbNavBtns) {
    DOM.mbNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        triggerHaptic('light');
        switchTab(btn.getAttribute('data-tab'));
      });
    });
  }

  // Mobile 30-Day Syllabus Trigger
  if (DOM.mobileSyllabusTriggerBtn) {
    DOM.mobileSyllabusTriggerBtn.addEventListener('click', () => {
      triggerHaptic('medium');
      Store.isSidebarCollapsed = !Store.isSidebarCollapsed;
      applySidebarState();
    });
  }

  // Sidebar Backdrop Click (Auto-close drawer on mobile)
  if (DOM.sidebarBackdrop) {
    DOM.sidebarBackdrop.addEventListener('click', () => {
      triggerHaptic('light');
      Store.isSidebarCollapsed = true;
      applySidebarState();
    });
  }

  // Theory to Test button
  DOM.theoryGoTestBtn.addEventListener('click', () => {
    switchTab('exam');
    startDailyExam();
  });

  // Daily Exam events
  DOM.dailyStartBtn.addEventListener('click', startDailyExam);
  DOM.dailyPrevBtn.addEventListener('click', () => {
    if (Store.daily.qIndex > 0) {
      Store.daily.qIndex--;
      renderDailyQuestion();
    }
  });
  DOM.dailyNextBtn.addEventListener('click', () => {
    if (Store.daily.qIndex < Store.daily.activeQuestions.length - 1) {
      Store.daily.qIndex++;
      renderDailyQuestion();
    }
  });
  DOM.dailyFinishBtn.addEventListener('click', finishDailyExam);

  DOM.dailyRetryBtn.addEventListener('click', () => {
    resetDailyLobby();
  });

  DOM.dailyGoAnalyticsBtn.addEventListener('click', () => {
    switchTab('analytics');
  });

  // Daily Copy for AI
  DOM.dailyCopyAiBtn.addEventListener('click', () => {
    let correctCount = 0;
    const letters = ['A', 'B', 'C', 'D'];
    let text = `🎯 TOIFA PRO NATIJAM: ${Store.currentDay}-KUN\n═══════════════════════════════════════\n`;

    Store.daily.activeQuestions.forEach((q, idx) => {
      const userSelected = Store.daily.answers[idx];
      const isCorrect = (userSelected === q.correct);
      if (isCorrect) correctCount++;
      const userAns = userSelected !== undefined ? `${letters[userSelected]}) ${q.options[userSelected]}` : "Javob berilmadi";
      const correctAns = `${letters[q.correct]}) ${q.options[q.correct]}`;

      text += `\n${idx + 1}-SAVOL: ${isCorrect ? '✅ TO\'G\'RI' : '❌ XATO'}\n`;
      text += `❓ Savol: ${q.question.replace(/^\d+\.\s*/, '')}\n`;
      text += `👉 Sizning javobingiz: ${userAns}\n`;
      if (!isCorrect) {
        text += `✅ To'g'ri javob: ${correctAns}\n`;
        text += `💡 Qoida: ${q.explanation}\n`;
      }
    });

    const pct = Math.round((correctCount / Store.daily.activeQuestions.length) * 100);
    text += `\n═══════════════════════════════════════\n📊 NATIJA: ${pct}% (${correctCount}/10)\n`;

    navigator.clipboard.writeText(text).then(() => {
      DOM.dailyCopyAiBtn.textContent = '✅ Hisobot nusxalandi! Chatga tashlang (Ctrl+V)';
      setTimeout(() => {
        DOM.dailyCopyAiBtn.textContent = '📋 Hisobotni AI ga Nusxalash';
      }, 3000);
    });
  });

  // Final 50-Mock events
  DOM.finalStartBtn.addEventListener('click', startFinalExam);
  DOM.finalPrevBtn.addEventListener('click', () => {
    if (Store.final.qIndex > 0) {
      Store.final.qIndex--;
      renderFinalQuestion();
    }
  });
  DOM.finalNextBtn.addEventListener('click', () => {
    if (Store.final.qIndex < MOCK_EXAM_50.questions.length - 1) {
      Store.final.qIndex++;
      renderFinalQuestion();
    }
  });
  DOM.finalFinishBtn.addEventListener('click', finishFinalExam);
  DOM.finalRetryBtn.addEventListener('click', () => {
    DOM.finalLobby.style.display = 'flex';
    DOM.finalArena.style.display = 'none';
    DOM.finalReport.style.display = 'none';
  });

  // Final Copy AI
  DOM.finalCopyAiBtn.addEventListener('click', () => {
    let correct = 0;
    MOCK_EXAM_50.questions.forEach((q, idx) => {
      if (Store.final.answers[idx] === q.correct) correct++;
    });
    const pct = Math.round((correct / 50) * 100);
    const text = `🏆 TOIFA PRO — YAKUNIY 50 TALIK ATTESTATSIYA MOCK NATIJAM:\nTo'g'ri javoblar: ${correct} / 50 (${pct}%)\nStatus: ${pct >= 70 ? '2-TOIFA MUVAFFAQIYATLI O\'TDI (G\'ALABA!)' : 'Qayta takrorlash kerak'}`;
    navigator.clipboard.writeText(text).then(() => {
      DOM.finalCopyAiBtn.textContent = '✅ Nusxalandi! Chatga tashlang (Ctrl+V)';
      setTimeout(() => {
        DOM.finalCopyAiBtn.textContent = '📋 To\'liq Natijani AI ga Nusxalash';
      }, 3000);
    });
  });
}

function applySidebarState() {
  if (Store.isSidebarCollapsed) {
    DOM.sidebar.classList.add('collapsed');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.remove('active');
    if (DOM.sidebarFloatingOpenBtn) DOM.sidebarFloatingOpenBtn.style.display = 'flex';
  } else {
    DOM.sidebar.classList.remove('collapsed');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.add('active');
    if (DOM.sidebarFloatingOpenBtn) DOM.sidebarFloatingOpenBtn.style.display = 'none';
  }
  updateTelegramBackButton();
}

// ============================================================================
// 10. TELEGRAM MINI APP (TMA) & PWA INTEGRATION
// ============================================================================
function initTelegramMiniApp() {
  if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    try {
      tg.ready();
      tg.expand();
      if (typeof tg.enableClosingConfirmation === 'function') {
        tg.enableClosingConfirmation();
      }
      if (typeof tg.setHeaderColor === 'function') {
        tg.setHeaderColor('#ffffff');
      }
      if (typeof tg.setBackgroundColor === 'function') {
        tg.setBackgroundColor('#f8fafc');
      }

      if (tg.BackButton) {
        tg.BackButton.onClick(() => {
          if (!Store.isSidebarCollapsed && window.innerWidth <= 860) {
            Store.isSidebarCollapsed = true;
            applySidebarState();
          } else if (Store.activeTab !== 'theory') {
            switchTab('theory');
          }
        });
      }
    } catch (e) {
      console.warn('Telegram WebApp setup notice:', e);
    }
  }
}

function updateTelegramBackButton() {
  if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.BackButton) {
    const tg = window.Telegram.WebApp;
    if (Store.activeTab !== 'theory' || (!Store.isSidebarCollapsed && window.innerWidth <= 860)) {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  }
}

function triggerHaptic(type = 'light') {
  if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.HapticFeedback) {
    try {
      if (type === 'success' || type === 'error' || type === 'warning') {
        window.Telegram.WebApp.HapticFeedback.notificationOccurred(type);
      } else {
        window.Telegram.WebApp.HapticFeedback.impactOccurred(type);
      }
    } catch (e) {}
  }
}

function initPwaServiceWorker() {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('Toifa Pro Service Worker registered:', reg.scope);
      }).catch((err) => {
        console.warn('Service Worker registration skipped:', err);
      });
    });
  }
}

// ============================================================================
// 11. BOOTSTRAP APP
// ============================================================================
function init() {
  initTelegramMiniApp();
  initPwaServiceWorker();
  applySidebarState();
  applySyllabusAccordionState();
  renderSyllabusList();
  setDay(Store.currentDay);
  switchTab(Store.activeTab);
  setupEventListeners();
}

// Start
init();
