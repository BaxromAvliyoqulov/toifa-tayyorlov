// ============================================================================
// TOIFA PRO — DYNAMIC ANALYTICS & DIAGNOSTICS ENGINE
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

  if (DOM.analyticsGaugeScore) DOM.analyticsGaugeScore.textContent = `${avgAccuracy}%`;
  if (DOM.kpiTotalTests) DOM.kpiTotalTests.textContent = totalTests;
  if (DOM.kpiCorrectTests) DOM.kpiCorrectTests.textContent = correctTests;
  if (DOM.kpiLastScore) DOM.kpiLastScore.textContent = `${lastScore}%`;

  if (DOM.analyticsHeroTitle) {
    if (avgAccuracy >= 70) {
      DOM.analyticsHeroTitle.textContent = "Siz 2-Toifa Imtihoniga 100% Tayyorsiz!";
      if (DOM.analyticsHeroDesc) DOM.analyticsHeroDesc.textContent = "Umumiy ko'rsatkichingiz 2-toifa davlat me'yori (70%) dan baland.";
    } else {
      DOM.analyticsHeroTitle.textContent = `Hozirgi Ko'rsatkich: ${avgAccuracy}% (2-Toifaga oz qoldi)`;
      if (DOM.analyticsHeroDesc) DOM.analyticsHeroDesc.textContent = "O'tish uchun yana bir nechta zaif mavzularni mustahkamlash kifoya.";
    }
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

  if (DOM.weakCountBadge) DOM.weakCountBadge.textContent = `${liveDiag.weakTopics.length} ta mavzu`;
  if (DOM.strongCountBadge) DOM.strongCountBadge.textContent = `${liveDiag.strongTopics.length} ta mavzu`;

  if (DOM.analyticsWeakList) {
    if (liveDiag.weakTopics.length > 0) {
      DOM.analyticsWeakList.innerHTML = liveDiag.weakTopics.map(w => `
        <li>
          <strong style="color: #b45309;">⚠️ ${w.topic}:</strong> ${w.explanation}
        </li>
      `).join('');
    } else {
      DOM.analyticsWeakList.innerHTML = `<li style="color: var(--success); font-weight:700;">🎉 Tabriklaymiz! Hozirda hech qanday zaif nuqta aniqlanmadi.</li>`;
    }
  }

  if (DOM.analyticsStrongList) {
    if (liveDiag.strongTopics.length > 0) {
      DOM.analyticsStrongList.innerHTML = liveDiag.strongTopics.map(s => `
        <li>
          <strong style="color: var(--success);">✅ ${s}</strong> — Benuqson o'zlashtirildi.
        </li>
      `).join('');
    } else {
      DOM.analyticsStrongList.innerHTML = `<li>Hali to'liq o'zlashtirilgan mavzular mavjud emas.</li>`;
    }
  }

  // 3. Render History Table
  if (DOM.historyTableBody) {
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
  }

  // 4. Render 30-Day Interactive Heatmap Grid
  const heatmapContainer = document.getElementById('analyticsHeatmapGrid');
  if (heatmapContainer && typeof CURRICULUM_INDEX !== 'undefined') {
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
        if (typeof setDay === 'function') setDay(item.day);
        if (typeof switchTab === 'function') switchTab('theory');
      });

      heatmapContainer.appendChild(card);
    });
  }
}
