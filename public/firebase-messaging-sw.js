// Kept intentionally minimal: this portfolio does not use Firebase messaging.
// The file prevents an old browser registration from requesting a missing route.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
