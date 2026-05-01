const CACHE_NAME = 'caja-movil-v1';
const assets = [
  'index.html',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap'
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder desde la caché si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});