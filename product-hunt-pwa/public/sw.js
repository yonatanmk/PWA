const CACHE_NAME = 'product-hunt'

self.addEventListener('install', event => {
  console.log('install')
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      '/static/js/bundle.js',
      '/index.html',
      '/',
    ]))
  )
});

// '/materialize.min.css',
// '/materialize.min.js',
// 'react-mdl/extra/material.css',
// 'react-mdl/extra/material.js',

// fetch
self.addEventListener('fetch', function(event) {
  console.log('fetch: ', event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });