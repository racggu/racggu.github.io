importScripts("/precache-manifest.b0758a9ca159bac7e360602b925468ee.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
workbox.core.setCacheNameDetails({prefix: "vue-pwa-push-notifications"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function(event) {
  let push_message = event.data.json()
  const options = {
    body: push_message.notification.body,
    icon: push_message.notification.icon,
    image: push_message.notification.image,
    tag: 'alert'
  };
  event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
});

self.addEventListener("notificationclick", event => {
  event.waitUntil(clients.openWindow("/"));
});
