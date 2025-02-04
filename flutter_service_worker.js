'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "6292242e4429e4ec0e50996dbfd129cc",
"flutter_bootstrap.js": "7bebaf4e6bbf29751f472acbd58b483b",
"manifest.json": "17d338288f5536386ff45c6f8d0d79fd",
"main.dart.js": "243f1d56567346deb26f64394861ac36",
"index.html": "24b575fa477bedf11c8b11fd97e08fed",
"/": "24b575fa477bedf11c8b11fd97e08fed",
"assets/AssetManifest.json": "7014d65ba5dfb5abbd6b91ad7c0a3a0d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "16532e5b52d91168906e3b5348a7347d",
"assets/AssetManifest.bin": "581d496995ce9ae9116a80e354d58263",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "44ea117b8c188b0e0a3f7ac95d5f5ae0",
"assets/NOTICES": "8be10e97175895df0d83773bb27cfbc9",
"assets/assets/config/app_config.json": "7242527f6eac35bb9699a1d268035f07",
"assets/assets/config/default_theme.json": "93dc06e6f78028158ed87ce68243aceb",
"assets/assets/images/statement/success-icon.svg": "1611051588c78da1fed0cacb02aeb59d",
"assets/assets/images/statement/success-icon.png": "c8001eb0700206fdb1389ba287f4dcee",
"assets/assets/images/statement/icon.png": "74ce9197e70e2d258bb05701f5a4cc7f",
"assets/assets/images/statement/icon-statement.svg": "33d2b2308dcbfbbe335bf64b31efec76",
"assets/assets/images/statement/pdf-icon.png": "893736c5aa55b3c9c3a8371251bc4310",
"assets/assets/images/statement/icon-irpf-statement.svg": "f3283976a1dda54b537c7313ff410147",
"assets/assets/images/statement/pdf-icon.svg": "f0325142020e4aad90952c5c752e1304",
"assets/assets/images/statement/icon.svg": "11c48e4cc268fe974cf368ea34bc4b1e",
"assets/assets/images/statement/icon-irpf-statement.png": "9b48dc346bdd2d9d6670f21bbfcc5143",
"assets/assets/images/statement/icon-statement.png": "8fb41373638c4bec9f5a0e9955fbfb29",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/icon.png": "30cda414e5adf91325dbe7fe592e3a47",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/icons/item-search.svg": "59fe1b0a1ccf3aa9783a5cff1a77b68a",
"assets/assets/images/icons/support.svg": "91b032753fd0e015d18b403e06366dbf",
"assets/assets/images/icons/buy-search.svg": "335f22ff51da561370e7223a0d6d268a",
"assets/assets/images/icons/admin.svg": "9166551bb49c1ba4519adf0dbd142627",
"assets/assets/images/icons/statement-active.svg": "06c9e719c01e8567a4b96e6c848f8f7a",
"assets/assets/images/icons/profile-active.svg": "8d732ed31d4e5211f6df57adf172d561",
"assets/assets/images/icons/clock-time.svg": "8854700116d98c143c592820c1ca5544",
"assets/assets/images/icons/filter.svg": "3c85ae6ad5683ad49ebe5a94021cf6a7",
"assets/assets/images/icons/horn.svg": "d7b8f86c2a2cef69a2f10a14fb84de00",
"assets/assets/images/icons/profile.svg": "c7acd2809faf28421fda14766ac6285d",
"assets/assets/images/icons/boleto.svg": "08bb178078da3ecc65312f64c3185664",
"assets/assets/images/icons/rent-search.svg": "6316e19b99ab6c7a660a2eaa8eda28a3",
"assets/assets/images/icons/chat.svg": "ec59bab25673235ffd22097ea23faf4c",
"assets/assets/images/icons/hotel.svg": "6c48e08114cd05ab16452987feedac80",
"assets/assets/images/icons/chat-active.svg": "4c2ebbcba5c6dec816f960bdaf3b4b97",
"assets/assets/images/icons/home-active.svg": "72cfd7c61bad1530f9873147446d88e8",
"assets/assets/images/icons/payments-icon.svg": "a75d1f56f32062a124d62c785e14c257",
"assets/assets/images/icons/graph.svg": "9ada2600cf7c697b1f4be220bf71d880",
"assets/assets/images/icons/financial.svg": "09a2490876c45ae90b41405b6a9c3169",
"assets/assets/images/icons/bell.svg": "1cc00efeaa8ed7d419ca6af1e03b1bbc",
"assets/assets/images/icons/payment.svg": "597b4f73a82d30420b7735b8242ec138",
"assets/assets/images/icons/statement.svg": "597b4f73a82d30420b7735b8242ec138",
"assets/assets/images/icons/payment-active.svg": "06c9e719c01e8567a4b96e6c848f8f7a",
"assets/assets/images/icons/home.svg": "6b78004f1ec8cff172cbb3dd7191c4f6",
"assets/assets/images/icons/maintenance.svg": "00abae6ecfde4ec1cf308b3cddb6e052",
"assets/assets/images/payments/payment-slip.svg": "1b943a603a7c1263df6ee06d5a1bbec4",
"assets/assets/images/payments/payment-receipt.svg": "0590bc5b143de449eebb642e7f092f50",
"assets/assets/images/payments/boleto.svg": "609613f9227926baf2fc9a5b84e47a8f",
"assets/assets/images/payments/comprovante-sucesso.svg": "c4d02c284ad94513556c038a4106f535",
"assets/assets/images/payments/pix.svg": "18358a8c5300dc7af00b912bc357f01d",
"assets/assets/images/logo.svg": "7c5d5f6a46b524bb1f9811a6f9379760",
"assets/assets/images/icon.svg": "46471692af24702a925c119868959220",
"assets/assets/images/icon@2x.png": "3e1d315ec4edc8b5a4d0069400473661",
"assets/assets/images/profile_icons/owner@2x.png": "f5fcf9dd91e40842c0bacf398c4cdb2a",
"assets/assets/images/profile_icons/owner.png": "7e89834178b5ec1a853b0225ccba9b11",
"assets/assets/images/profile_icons/tenant.png": "d36a7ab5c1c78d17d426c49044b47c9b",
"assets/assets/images/profile_icons/tenant@2x.png": "ead73cde6c1e60b624414a1c4705f1b3",
"assets/assets/images/profile_icons/password-change-success-icon.svg": "d64fc90ba6332913f2057976f80c621c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
