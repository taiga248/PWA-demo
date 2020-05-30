const cacheName = "cache-v1";
const resoucesToPreccache = [
  "/",
  "index.html",
  "style.css",
  "images/exa-1.jpg",
  "images/exa-2.jpg",
  "images/exa-3.jpg"
];

self.addEventListener("install", event => {
  console.log("Service worker install event");
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        return cache.addAll(resoucesToPreccache);
      })
      .catch(error => {
        console.log("Failed", error);
      })
  );
});

self.addEventListener("activate", () => {
  console.log("Activate");
});

self.addEventListener("fetch", event => {
  console.log("Fetch intercepted for: " + event.request.url);
});
