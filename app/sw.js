let CACHE_NAME = 'jessica_traynor';

self.addEventListener('install', (event) => {
    
    const urlsToCache = [
    '/',
    './temp/styles/styles.css',
    './js/main.js',
    './index.html',
    './books.html',
    './mentorship.html',
    './about.html',
    './poetry.html',
    './videos.html',
    './assets/images/icon-48px.png',
    './assets/images/icon-96px.png',
    './assets/images/icon-192px.png',
    './assets/images/icon-512px.png',
    './assets/images/book_cover.png',
    './assets/images/jess.jpg',
    './assets/images/jessHeadShot3.jpg',
    './assets/images/crow2.png',
    './favicon-16x16.png',
    './ms-icon-144x144.png',
    './favicon-96x96.png',
    './favicon-32x32.png',
    './android-icon-192x192.png',
    './apple-icon-180x180.png',
    './apple-icon-152x152.png',
    './apple-icon-144x144.png',
    './apple-icon-120x120.png',
    './apple-icon-114x114.png',
    './apple-icon-76x76.png',
    './apple-icon-72x72.png',
    './apple-icon-60x60.png',
    './apple-icon-57x57.png'
  ];

  self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });
});



self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        let fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            let responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});


self.addEventListener('activate', (event) => {

  let cacheWhitelist = ['jessica_traynor'];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
