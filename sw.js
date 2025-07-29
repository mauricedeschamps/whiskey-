// sw.js
const CACHE_NAME = 'japanese-whisky-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  // Add image paths here
  'images/yamazaki.jpg',
  'images/hakushu.jpg'
  'images/yamazaki.jpg'
'images/hakushu.jpg'
'images/hibiki.jpg'
'images/yoichi.jpg'
'images/fuji.jpg'
'images/ichiro.jpg'
'images/chita.jpg'
'images/taketsuru.jpg'
'images/akkeshi.jpg'
'images/miyagikyo.jpg'
'images/amahagan.jpg'
'images/kanosuke.jpg'
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
