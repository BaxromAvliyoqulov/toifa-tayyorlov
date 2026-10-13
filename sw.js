// Toifa Pro - PWA Service Worker (Offline-First Engine)
const CACHE_NAME = 'toifa-pro-v1';

// Static Shell Assets
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './css/style.css',
  './js/curriculum.js',
  './js/mock_exam.js',
  './js/state.js',
  './js/dom.js',
  './js/pwa_telegram.js',
  './js/syllabus.js',
  './js/theory.js',
  './js/daily_exam.js',
  './js/final_exam.js',
  './js/analytics.js',
  './js/app.js',
  './data/tests/tests_index.json'
];

// Generate 30 daily test JSON paths
for (let i = 1; i <= 30; i++) {
  const dayStr = i < 10 ? `0${i}` : `${i}`;
  STATIC_ASSETS.push(`./data/tests/day_${dayStr}.json`);
}

// 1. Install Event: Cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Cache AddAll partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed (offline) - if cachedResponse exists, it will be returned
        return cachedResponse;
      });

      // Return cached version immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
