// ============================================================================
// TOIFA PRO — 30-DAY SYLLABUS & ACCORDION MANAGER
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

  if (typeof CURRICULUM_INDEX === 'undefined') return;

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
    if (checkBtn) {
      checkBtn.addEventListener('click', (e) => {
        toggleDayCompletion(item.day, e);
      });
    }

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

function applySidebarState() {
  if (Store.isSidebarCollapsed) {
    if (DOM.sidebar) DOM.sidebar.classList.add('collapsed');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.remove('active');
    if (DOM.sidebarFloatingOpenBtn) DOM.sidebarFloatingOpenBtn.style.display = 'flex';
  } else {
    if (DOM.sidebar) DOM.sidebar.classList.remove('collapsed');
    if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.add('active');
    if (DOM.sidebarFloatingOpenBtn) DOM.sidebarFloatingOpenBtn.style.display = 'none';
  }
  if (typeof updateTelegramBackButton === 'function') {
    updateTelegramBackButton();
  }
}
