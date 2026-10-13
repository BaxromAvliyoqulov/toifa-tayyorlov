// ============================================================================
// TOIFA PRO — TELEGRAM MINI APP (TMA) & PWA SERVICE WORKER ADAPTER
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
            if (typeof applySidebarState === 'function') applySidebarState();
          } else if (Store.activeTab !== 'theory') {
            if (typeof switchTab === 'function') switchTab('theory');
          }
        });
      }
    } catch (e) {
      console.warn('Telegram WebApp notice:', e);
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
      navigator.serviceWorker.register('./js/sw.js').then((reg) => {
        console.log('Toifa Pro PWA Service Worker aktiv:', reg.scope);
      }).catch((err) => {
        console.warn('Service Worker bildirishnomasi:', err);
      });
    });
  }
}
