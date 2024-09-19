self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/juego/',
        '/juego/index.html',
        '/juego/manifest.json',
        'https://img.freepik.com/vector-premium/plantilla-icono-vector-logo-diablo-rojo_487414-84.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
