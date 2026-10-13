// ============================================================================
// TOIFA PRO — FINAL 50-MOCK EXAM ENGINE (UZBMB / DEMOTEST 2026)
// ============================================================================

function startFinalExam() {
  if (typeof MOCK_EXAM_50 === 'undefined') return;

  Store.final.qIndex = 0;
  Store.final.answers = {};
  Store.final.timeLeft = 6000; // 100 daqiqa

  if (DOM.finalLobby) DOM.finalLobby.style.display = 'none';
  if (DOM.finalArena) DOM.finalArena.style.display = 'block';
  if (DOM.finalReport) DOM.finalReport.style.display = 'none';

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
  if (!DOM.finalTimerDigits) return;
  const m = Math.floor(Store.final.timeLeft / 60);
  const s = Store.final.timeLeft % 60;
  DOM.finalTimerDigits.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderFinalQuestion() {
  if (typeof MOCK_EXAM_50 === 'undefined') return;
  const q = MOCK_EXAM_50.questions[Store.final.qIndex];
  if (!q) return;

  const currentNum = Store.final.qIndex + 1;
  const totalNum = MOCK_EXAM_50.questions.length;

  if (DOM.finalQNum) DOM.finalQNum.textContent = currentNum;
  if (DOM.finalSectionBadge) DOM.finalSectionBadge.textContent = q.section;
  if (DOM.finalProgressBar) DOM.finalProgressBar.style.width = `${(currentNum / totalNum) * 100}%`;
  if (DOM.finalQText) DOM.finalQText.textContent = `${currentNum}. ${q.question}`;

  if (!DOM.finalOptionsBox) return;
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
      if (typeof triggerHaptic === 'function') triggerHaptic('light');
      renderFinalQuestion();
    });

    DOM.finalOptionsBox.appendChild(optDiv);
  });

  if (DOM.finalPrevBtn) DOM.finalPrevBtn.disabled = (Store.final.qIndex === 0);
  if (Store.final.qIndex === totalNum - 1) {
    if (DOM.finalNextBtn) DOM.finalNextBtn.style.display = 'none';
    if (DOM.finalFinishBtn) DOM.finalFinishBtn.style.display = 'inline-flex';
  } else {
    if (DOM.finalNextBtn) DOM.finalNextBtn.style.display = 'inline-flex';
    if (DOM.finalFinishBtn) DOM.finalFinishBtn.style.display = 'none';
  }

  // 50-Question Palette
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
  if (typeof triggerHaptic === 'function') triggerHaptic('success');
  if (DOM.finalArena) DOM.finalArena.style.display = 'none';
  if (DOM.finalReport) DOM.finalReport.style.display = 'block';

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
  if (DOM.finalScoreDonut) {
    DOM.finalScoreDonut.textContent = `${percentage}%`;
    DOM.finalScoreDonut.style.borderColor = percentage >= 70 ? 'var(--success)' : 'var(--danger)';
  }

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

  if (DOM.finalVerdictTitle) DOM.finalVerdictTitle.textContent = `${correctCount} / 50 ta to'g'ri (${percentage}%)`;
  if (DOM.finalVerdictSubtitle) DOM.finalVerdictSubtitle.textContent = verdict;
  if (DOM.finalReviewList) DOM.finalReviewList.innerHTML = reviewHtml;
}
