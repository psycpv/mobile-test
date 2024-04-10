self.addEventListener('install', (event) => {
  console.log('Service worker installing...')
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['/manifest.json', '/favicon.ico'])
    })
  )
})

self.addEventListener('fetch', (event) => {
  console.log('Service worker fetching:', event.request.url)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
