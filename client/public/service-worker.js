/* eslint-disable no-restricted-globals */
const PREFIX = 'StoryTeam-';
const VERSION = 'v_01';
const CACHE_NAME = PREFIX + VERSION;

const FILES_TO_CACHE = [
    './'
];

// The following 3 code blocks were copied and modified from a project developed by strudelAndCoffee, a developer of Story Team.
// The original code was provided by The University of Texas - Full Stack Web Development Code Bootcamp coursework.

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
    .then(function(keylist) {
      let cacheKeepList = keylist.filter(function(key) {
        return key.indexOf(PREFIX);
      });

      cacheKeepList.push(CACHE_NAME)

      return Promise.all(
        // eslint-disable-next-line array-callback-return
        keylist.map(function(key, i) {
          if (cacheKeepList.indexOf(key) === -1) {
            return caches.delete(keylist[i]);
          }
        })
      )
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(request) {
      return request || fetch(event.request)
    })
  )
});