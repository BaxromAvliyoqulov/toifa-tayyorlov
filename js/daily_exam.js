// ============================================================================
// TOIFA PRO — DAILY 10-QUESTION EXAM ENGINE
// ============================================================================

function resetDailyLobby() {
  const lesson = (typeof CURRICULUM !== 'undefined') ? CURRICULUM[Store.currentDay] : null;
  if (!DOM.dailyLobby || !DOM.dailyArena || !DOM.dailyReport) return;

  DOM.dailyLobby.style.display = 'flex';
  DOM.dailyArena.style.display = 'none';
  DOM.dailyReport.style.display = 'none';

  if (lesson && lesson.questions && lesson.questions.length > 0) {
    if (DOM.lobbyLessonTitle) DOM.lobbyLessonTitle.textContent = `${lesson.title} — Sinovi`;
    if (DOM.dailyStartBtn) DOM.dailyStartBtn.disabled = false;
  } else {
    if (DOM.lobbyLessonTitle) DOM.lobbyLessonTitle.textContent = `${Store.currentDay}-Kun Testi Hali Ochilmagan`;
    if (DOM.dailyStartBtn) DOM.dailyStartBtn.disabled = true;
  }
}

function startDailyExam() {
  const lesson = (typeof CURRICULUM !== 'undefined') ? CURRICULUM[Store.currentDay] : null;
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
  if (!DOM.dailyTimerDigits) return;
  const m = Math.floor(Store.daily.timeLeft / 60);
  const s = Store.daily.timeLeft % 60;
  DOM.dailyTimerDigits.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderDailyQuestion() {
  const q = Store.daily.activeQuestions[Store.daily.qIndex];
  if (!q) return;

  const currentNum = Store.daily.qIndex + 1;
  const totalNum = Store.daily.activeQuestions.length;

  if (DOM.dailyQNum) DOM.dailyQNum.textContent = currentNum;
  if (DOM.dailyProgressBar) DOM.dailyProgressBar.style.width = `${(currentNum / totalNum) * 100}%`;
  if (DOM.dailyQText) DOM.dailyQText.textContent = `${currentNum}. ${q.question.replace(/^\d+\.\s*/, '')}`;

  if (!DOM.dailyOptionsBox) return;
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
      if (typeof triggerHaptic === 'function') triggerHaptic('light');
      renderDailyQuestion();
    });

    DOM.dailyOptionsBox.appendChild(optDiv);
  });

  if (DOM.dailyPrevBtn) DOM.dailyPrevBtn.disabled = (Store.daily.qIndex === 0);
  if (Store.daily.qIndex === totalNum - 1) {
    if (DOM.dailyNextBtn) DOM.dailyNextBtn.style.display = 'none';
    if (DOM.dailyFinishBtn) DOM.dailyFinishBtn.style.display = 'inline-flex';
  } else {
    if (DOM.dailyNextBtn) DOM.dailyNextBtn.style.display = 'inline-flex';
    if (DOM.dailyFinishBtn) DOM.dailyFinishBtn.style.display = 'none';
  }

  // Question Palette
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
  if (typeof triggerHaptic === 'function') triggerHaptic('success');
  if (DOM.dailyArena) DOM.dailyArena.style.display = 'none';
  if (DOM.dailyReport) DOM.dailyReport.style.display = 'block';

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
  if (DOM.dailyScoreDonut) {
    DOM.dailyScoreDonut.textContent = `${percentage}%`;
    DOM.dailyScoreDonut.style.borderColor = percentage >= 70 ? 'var(--success)' : (percentage >= 50 ? 'var(--warning)' : 'var(--danger)');
  }

  if (DOM.dailyReportTitle) {
    DOM.dailyReportTitle.textContent = percentage >= 70 ? "🎉 A'lo Natija! 2-Toifa Normativi Bajarildi!" : "⚠️ Yaxshi Urinish! Xatolar Ustida Ishlang";
  }
  if (DOM.dailyReportSubtitle) {
    DOM.dailyReportSubtitle.textContent = `10 ta savoldan ${correctCount} tasiga to'g'ri javob berildi (${percentage}%).`;
  }
  if (DOM.dailyReviewList) DOM.dailyReviewList.innerHTML = reviewHtml;

  // Save history
  const lesson = (typeof CURRICULUM !== 'undefined') ? CURRICULUM[Store.currentDay] : null;
  const historyEntry = {
    day: Store.currentDay,
    title: lesson ? lesson.title.replace(/^\d+–?KUN:\s*/i, '') : `${Store.currentDay}-Kun`,
    total: Store.daily.activeQuestions.length,
    correct: correctCount,
    score: percentage,
    date: "Bugun"
  };

  const existIdx = Store.history.findIndex(h => h.day === Store.currentDay);
  if (existIdx >= 0) {
    Store.history[existIdx] = historyEntry;
  } else {
    Store.history.push(historyEntry);
  }
  localStorage.setItem('toifa_history_records', JSON.stringify(Store.history));

  // Save live diagnostics
  const diagData = {
    weakTopics: weakTopics,
    strongTopics: strongTopics,
    lastPercentage: percentage
  };
  localStorage.setItem('toifa_live_diagnostics', JSON.stringify(diagData));

  // Auto-mark completed if >= 50%
  if (percentage >= 50 && !Store.completedDays.includes(Store.currentDay)) {
    Store.completedDays.push(Store.currentDay);
    Store.completedDays.sort((a, b) => a - b);
    localStorage.setItem('toifa_completed_days', JSON.stringify(Store.completedDays));
    if (typeof renderSyllabusList === 'function') renderSyllabusList();
  }

  updateHeaderContext();
}
