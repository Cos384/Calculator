self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('calculator-app').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          'icon.png',
          // Add more files to cache as needed
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
  