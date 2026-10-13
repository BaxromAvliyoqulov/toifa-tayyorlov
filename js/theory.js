// ============================================================================
// TOIFA PRO — THEORY LESSON RENDERING & ASIDE HIGHLIGHTS
// ============================================================================

function renderTheory() {
  const lesson = (typeof CURRICULUM !== 'undefined') ? CURRICULUM[Store.currentDay] : null;
  if (!DOM.theoryWrapper) return;

  if (lesson) {
    DOM.theoryWrapper.innerHTML = lesson.theoryHtml;
    if (DOM.theoryGoTestBtn) DOM.theoryGoTestBtn.style.display = 'inline-flex';
  } else {
    DOM.theoryWrapper.innerHTML = `
      <div class="theory-card" style="text-align: center; padding: 48px;">
        <div style="font-size: 54px; margin-bottom: 16px;">⏳</div>
        <h2>${Store.currentDay}-Kun Darsi Tayyorlanmoqda</h2>
        <p style="font-size: 1.05rem; color: #475569; max-width: 580px; margin: 0 auto 24px auto;">
          Ushbu kunlik mavzu reja bo'yicha navbatdagi bosqichda ochiladi. Hozirda to'liq tayyor bo'lgan mavzularni o'zlashtiring!
        </p>
      </div>
    `;
    if (DOM.theoryGoTestBtn) DOM.theoryGoTestBtn.style.display = 'none';
  }

  // Update sticky highlights card
  const asideDayTitle = document.getElementById('asideDayTitle');
  const asideDayBulletList = document.getElementById('asideDayBulletList');
  const asideTrapText = document.getElementById('asideTrapText');

  if (asideDayTitle) {
    asideDayTitle.textContent = `${Store.currentDay}-Kun: ${lesson ? lesson.title.replace(/^\d+–?kun:\s*/i, '') : 'Dars Rejasi'}`;
  }

  if (asideDayBulletList) {
    if (lesson && Array.isArray(lesson.keyPoints) && lesson.keyPoints.length > 0) {
      asideDayBulletList.innerHTML = lesson.keyPoints.map(pt => `<li>${pt}</li>`).join('');
    } else if (Store.currentDay === 1) {
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
    if (lesson && lesson.trap) {
      asideTrapText.textContent = lesson.trap;
    } else if (Store.currentDay === 1) {
      asideTrapText.textContent = "'Only when' kelsa, 1-gapda emas, ASOSIY gapda inversiya bo'ladi!";
    } else if (Store.currentDay === 2) {
      asideTrapText.textContent = "'Unless'dan keyin inkor fe'l (don't) qo'yilmaydi! Fe'l doim ijobiy bo'ladi.";
    } else {
      asideTrapText.textContent = "Chalg'ituvchi variantlar va vaqt me'yoriga diqqat qiling.";
    }
  }
}
