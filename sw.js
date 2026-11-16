const CACHE="abh-pro-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c
    .addAll(["index.html","home.html","marketplace.html","orders.html","wallet.html","connections.html","communities.html","events.html","stories.html","chat.html","notifications.html","dashboard.html","owner-dashboard.html","css/style.css"]))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));