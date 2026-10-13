// ============================================================================
// TOIFA PRO — MAIN APPLICATION COORDINATOR & EVENT ORCHESTRATOR
// ============================================================================

function switchTab(tabId) {
  Store.activeTab = tabId;
  localStorage.setItem('toifa_active_tab', tabId);

  // Nav buttons visual state
  if (DOM.navBtns) {
    DOM.navBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Tabs content panels
  if (DOM.tabs) {
    DOM.tabs.forEach(tab => {
      if (tab.id === `${tabId}Tab`) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

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
  if (typeof updateTelegramBackButton === 'function') updateTelegramBackButton();
  if (typeof triggerHaptic === 'function') triggerHaptic('light');

  // Dynamic Header Update according to active Tab
  updateHeaderContext();

  if (tabId === 'theory') {
    renderTheory();
  } else if (tabId === 'exam') {
    if (DOM.dailyArena && DOM.dailyReport && DOM.dailyArena.style.display !== 'block' && DOM.dailyReport.style.display !== 'block') {
      resetDailyLobby();
    }
  } else if (tabId === 'finalExam') {
    if (DOM.finalArena && DOM.finalReport && DOM.finalArena.style.display !== 'block' && DOM.finalReport.style.display !== 'block') {
      if (DOM.finalLobby) DOM.finalLobby.style.display = 'flex';
      DOM.finalArena.style.display = 'none';
      DOM.finalReport.style.display = 'none';
    }
  } else if (tabId === 'analytics') {
    renderAnalytics();
  }
}

// ============================================================================
// EVENT LISTENERS SETUP
// ============================================================================
function setupEventListeners() {
  // Sidebar Controls
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

  // Desktop Navigation
  if (DOM.navBtns) {
    DOM.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.getAttribute('data-tab'));
      });
    });
  }

  // Mobile Bottom Navigation Tabs
  if (DOM.mbNavBtns) {
    DOM.mbNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (typeof triggerHaptic === 'function') triggerHaptic('light');
        switchTab(btn.getAttribute('data-tab'));
      });
    });
  }

  // Mobile 30-Day Syllabus Trigger
  if (DOM.mobileSyllabusTriggerBtn) {
    DOM.mobileSyllabusTriggerBtn.addEventListener('click', () => {
      if (typeof triggerHaptic === 'function') triggerHaptic('medium');
      Store.isSidebarCollapsed = !Store.isSidebarCollapsed;
      applySidebarState();
    });
  }

  // Sidebar Backdrop Click (Auto-close drawer on mobile)
  if (DOM.sidebarBackdrop) {
    DOM.sidebarBackdrop.addEventListener('click', () => {
      if (typeof triggerHaptic === 'function') triggerHaptic('light');
      Store.isSidebarCollapsed = true;
      applySidebarState();
    });
  }

  // Theory to Test button
  if (DOM.theoryGoTestBtn) {
    DOM.theoryGoTestBtn.addEventListener('click', () => {
      switchTab('exam');
      startDailyExam();
    });
  }

  // Daily Exam events
  if (DOM.dailyStartBtn) DOM.dailyStartBtn.addEventListener('click', startDailyExam);
  if (DOM.dailyPrevBtn) {
    DOM.dailyPrevBtn.addEventListener('click', () => {
      if (Store.daily.qIndex > 0) {
        Store.daily.qIndex--;
        renderDailyQuestion();
      }
    });
  }
  if (DOM.dailyNextBtn) {
    DOM.dailyNextBtn.addEventListener('click', () => {
      if (Store.daily.qIndex < Store.daily.activeQuestions.length - 1) {
        Store.daily.qIndex++;
        renderDailyQuestion();
      }
    });
  }
  if (DOM.dailyFinishBtn) DOM.dailyFinishBtn.addEventListener('click', finishDailyExam);
  if (DOM.dailyRetryBtn) DOM.dailyRetryBtn.addEventListener('click', resetDailyLobby);
  if (DOM.dailyGoAnalyticsBtn) DOM.dailyGoAnalyticsBtn.addEventListener('click', () => switchTab('analytics'));

  // Daily Copy for AI
  if (DOM.dailyCopyAiBtn) {
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
  }

  // Final 50-Mock events
  if (DOM.finalStartBtn) DOM.finalStartBtn.addEventListener('click', startFinalExam);
  if (DOM.finalPrevBtn) {
    DOM.finalPrevBtn.addEventListener('click', () => {
      if (Store.final.qIndex > 0) {
        Store.final.qIndex--;
        renderFinalQuestion();
      }
    });
  }
  if (DOM.finalNextBtn) {
    DOM.finalNextBtn.addEventListener('click', () => {
      if (typeof MOCK_EXAM_50 !== 'undefined' && Store.final.qIndex < MOCK_EXAM_50.questions.length - 1) {
        Store.final.qIndex++;
        renderFinalQuestion();
      }
    });
  }
  if (DOM.finalFinishBtn) DOM.finalFinishBtn.addEventListener('click', finishFinalExam);
  if (DOM.finalRetryBtn) {
    DOM.finalRetryBtn.addEventListener('click', () => {
      if (DOM.finalLobby) DOM.finalLobby.style.display = 'flex';
      if (DOM.finalArena) DOM.finalArena.style.display = 'none';
      if (DOM.finalReport) DOM.finalReport.style.display = 'none';
    });
  }

  // Final Copy AI
  if (DOM.finalCopyAiBtn) {
    DOM.finalCopyAiBtn.addEventListener('click', () => {
      if (typeof MOCK_EXAM_50 === 'undefined') return;
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
}

// ============================================================================
// BOOTSTRAP INITIALIZATION
// ============================================================================
function init() {
  if (typeof initTelegramMiniApp === 'function') initTelegramMiniApp();
  if (typeof initPwaServiceWorker === 'function') initPwaServiceWorker();
  if (typeof applySidebarState === 'function') applySidebarState();
  if (typeof applySyllabusAccordionState === 'function') applySyllabusAccordionState();
  if (typeof renderSyllabusList === 'function') renderSyllabusList();
  if (typeof setDay === 'function') setDay(Store.currentDay);
  switchTab(Store.activeTab);
  setupEventListeners();
}

// Auto-start on load
init();
