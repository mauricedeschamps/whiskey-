// sw.js
const CACHE_NAME = 'japanese-whisky-v3';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  // Add image paths here
  'yamazaki.jpg'
'hakushu.jpg'
'hibiki.jpg'
'yoichi.jpg'
'fuji.jpg'
'ichiro.jpg'
'chita.jpg'
'taketsuru.jpg'
'akkeshi.jpg'
'miyagikyo.jpg'
'amahagan.jpg'
'kanosuke.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
