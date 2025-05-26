'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dbf86d4b3e1fa4ad5c31da1d9d15391d",
"assets/AssetManifest.bin.json": "cee1a7b5e87095bc18d5ee521446f8c9",
"assets/AssetManifest.json": "a80392a9cdc1fa8ec079e9553cf03c11",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Abdomen_F.jpg": "91855f57bc22de1b0b25d7e8c3ec8e13",
"assets/assets/images/Abdomen_M.jpg": "ed99f957a35d54aa816a75309a9f0b70",
"assets/assets/images/app_launcher_icon.jpg": "e67fbcbd4843f8cf8a6a08b03d5a3301",
"assets/assets/images/Biceps_F.jpg": "9a7df899e431621419406816c200b9db",
"assets/assets/images/Biceps_M-1.jpg": "147960d243f7acab729fd0577778de88",
"assets/assets/images/card1.png": "0c8969e1aaf7073dc7c721f7ef033653",
"assets/assets/images/card2.png": "f091e2c30f0b0b5f14fef6bf25dca813",
"assets/assets/images/card3.png": "2e9d63f299eff2e073f195800b825860",
"assets/assets/images/Controle_de_Treinos_PREMIUM.jpg": "75c103198ec81f3905a4e689b75870d6",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/mapa.png": "c332437c01afc32e935e9fa76e0d3331",
"assets/assets/images/MapaF.png": "d10c26e73e4589a388f952ae27087403",
"assets/assets/images/MODAL-2.jpg": "a439b54fa4bc44acf5c5f42c8b92b49e",
"assets/assets/images/MODAL-3.jpg": "1a4623f89627eb6ec379167f38f55311",
"assets/assets/images/MODAL.jpg": "4fbf8c8dc41b1cad1711affba307db97",
"assets/assets/images/Peitoral_F.jpg": "823829b572d6d02a4859ca061f41657c",
"assets/assets/images/Peitoral_M.jpg": "38bd12d8d4b0fe1c6e65135e1888b6a6",
"assets/assets/images/Tela_mapa_F2_GRATUITO.jpg": "83e815658922819dac8f6cb0616ae128",
"assets/assets/images/Tela_mapa_F_GRATUITO.jpg": "263d6c23d72cf5fd662fe6b694ac528f",
"assets/assets/images/Tela_mapa_M2_PREMIUM.jpg": "ae47c53313f594c0117de245c0243ccb",
"assets/assets/images/Tela_mapa_M_GRATUITO.jpg": "08379410326f36fc844587bbf2ae2de4",
"assets/assets/images/Trapzio_F.jpg": "b029804987565af3d02aadc5d73f132d",
"assets/assets/images/Trapzio_M.jpg": "5af99c2c912a60e5d8fc43090e0a4473",
"assets/assets/images/treinoFpagos.jpg": "d6b9ac7ff2aadb07beb2c6b7fd441172",
"assets/assets/images/treinoMpagos.jpg": "fff0561bb26d7eee7ccffcee6fbca6a3",
"assets/assets/images/TreinosFM.jpg": "4c125b23b8b456c5a8d01e70cce712a1",
"assets/assets/images/vide1.jpg": "ba3382512e43affca2ecb12357cff8dd",
"assets/assets/images/vide2.jpg": "f6225fd6456b9daf75ff817a1fe7e9ac",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1bc0db124b43e7525fca8c8eb6fe0f98",
"assets/NOTICES": "a43140fb4cb8ad83e4a4326b2f1742c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9d2adb237713dc54c6c89a3e36ee253f",
"icons/app_launcher_icon.jpg": "e67fbcbd4843f8cf8a6a08b03d5a3301",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "501f0ca97f1e84fce398d9a7e84d55db",
"/": "501f0ca97f1e84fce398d9a7e84d55db",
"main.dart.js": "6a197a70927941e0f0fab3ec3321704f",
"version.json": "8e19e8359087fc15ad2622653b8f53a5"};
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
