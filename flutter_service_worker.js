'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c478bebb53a4e84092a31fb7e331df46",
"assets/assets/background.png": "cd760177ae72bdfca5cd8fa362b57d50",
"assets/assets/clima/city_background.jpg": "3f31f446bcfeb4a6d1112c1110b63ca1",
"assets/assets/clima/location_background.jpg": "17c27d970917469dc0e4181c24b605bf",
"assets/assets/coding.gif": "03a4a5f034bf0bafa661fd8a8aabedc8",
"assets/assets/flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
"assets/assets/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/google_play_badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/image.jpg": "39cb0526e43d6a9ab93cbc4369cc1442",
"assets/assets/image1.jpg": "e4cd780033adb020ebc7f829dc781ee4",
"assets/assets/kakraba/chatbot/bot.gif": "d844c4bb2764085ea174d49389251f96",
"assets/assets/kakraba/chatbot/default.jpg": "653f93c3cb58cb7f21b6a721ebdbec19",
"assets/assets/kakraba/chatbot/robot.jpg": "2d1f585c1c223a11c543e1f71cc97cff",
"assets/assets/kakraba/images/background_image.png": "af4f1cb2ac980992ff66a42fe764988d",
"assets/assets/kakraba/images/ballon.png": "ef05cf5f25dce2d7cfa8c4d734426689",
"assets/assets/kakraba/images/bitcoin.png": "a3b84ed9dd97a07efebdb3b50a43b7ea",
"assets/assets/kakraba/images/btc.jpg": "e092c317a690c252144b8523d4fe61a4",
"assets/assets/kakraba/images/car.png": "4a96286b0021c3d0c0aeacebd5ece704",
"assets/assets/kakraba/images/image1.png": "3b587d2bdfcfbf518b33c909c7f8158f",
"assets/assets/kakraba/images/image2.jpeg": "a88278ddc742598c64c5da13d3ab8c91",
"assets/assets/kakraba/images/minihouse.png": "3be01058467d31de1ea431aad480ce97",
"assets/assets/kakraba/images/piggy.png": "5cbd387dd773d68e7e076b0fd740a1dd",
"assets/assets/kakraba/images/profile_image.jpg": "4111f35af8449d30f3ad40f1d36f20c8",
"assets/assets/kakraba/service.json": "c546e20a77128311a23a5f8f40149740",
"assets/assets/projects/bitcoin_ticker.gif": "42afd4da921f8af79a2ad830ef8143c4",
"assets/assets/projects/bmi_calc.gif": "b71a75688edfe8a51ac1237903c5614a",
"assets/assets/projects/clima.gif": "076d78a2ff6a3fc2a9ad1a73b0a86296",
"assets/assets/projects/destini.gif": "ba8ddfa3d3f63f1d6f773cf385bbe0bc",
"assets/assets/projects/flash_chat.gif": "c46f7d06ab791e1981610bec1479f4c1",
"assets/assets/projects/flutter_create_cert.png": "3ad6c3ae85d709be823969a0490819c3",
"assets/assets/projects/kakraba.jpg": "198743f1d1a1b8a717987812fabb7a3c",
"assets/assets/projects/quizzler.gif": "a1c07aad706e65ef3ba2e51cb7539dc1",
"assets/assets/projects/tersh.gif": "a85b2b7b7cce936287d0bb3d151e912b",
"assets/assets/projects/todoey.gif": "22d9949d21c8a69e08deadb4919d6873",
"assets/assets/projects/xylophone.jpg": "5d2e3409165e5c6068fb0ca7a9f74b42",
"assets/assets/snow_mountain.jpg": "507e548609ffe55771464dba9a8b83a3",
"assets/assets/sounds/quizzler/correct.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/sounds/quizzler/wrong.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/sounds/xylophone/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/sounds/xylophone/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/assets/sounds/xylophone/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/assets/sounds/xylophone/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/assets/sounds/xylophone/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/assets/sounds/xylophone/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/assets/sounds/xylophone/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/svg/code.svg": "59cd9bd8639242101ab3de369a54e1ea",
"assets/assets/svg/feeling_proud.svg": "5032d5af74849a30dd2af4e056476428",
"assets/assets/svg/flutter_dev.svg": "22f00cab7630cafc4eacbb1f59f79079",
"assets/assets/svg/icons/analytics.svg": "efc7c844c13fa0c683436fa9331cc8d7",
"assets/assets/svg/icons/css3.svg": "d10f4bf68a27526ef83fd9dfdc75317d",
"assets/assets/svg/icons/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/svg/icons/database.svg": "7e1eadd6af36fcf8089d026394b77a23",
"assets/assets/svg/icons/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/svg/icons/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svg/icons/git.svg": "5eed2c8cb62e1adfae09b0129a25a1a7",
"assets/assets/svg/icons/github.svg": "0b84f5bbe07b94a5a755a702fbc41052",
"assets/assets/svg/icons/gmail.svg": "24c5d10f0036be6e3e2716d8dfe730e1",
"assets/assets/svg/icons/html5.svg": "a0657d1cac3b20f1e113738056db3c63",
"assets/assets/svg/icons/javascript.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/svg/icons/linkedin.svg": "7f7a2ee1ddc4d78dcad430e6b312ab82",
"assets/assets/svg/icons/mongodb.svg": "409452f1b3c56ada4efdcfbd39ff1142",
"assets/assets/svg/icons/python.svg": "4948e6764d2214fe0c09621c6defe06b",
"assets/assets/svg/icons/wordpress.svg": "61efb10a4ec5faeda7a2923d195b2036",
"assets/assets/svg/programming.svg": "ac6a41a570245dd8ba794f2d36144149",
"assets/FontManifest.json": "056b7f673b9434747bc754c3e7ace236",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "666c7eff8bedbf64eb08c972b2a70ad3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"favicon.ico": "c35b0ec9a2b8c7eeee3070d091def0e6",
"flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
"icons/android-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/android-icon-192x192.png": "904e6bb3d482b868af7e8f07da1c24d0",
"icons/android-icon-36x36.png": "6912590215c9aac84eb331a33e17242c",
"icons/android-icon-48x48.png": "d25f51b47b06415bae44644b16022b16",
"icons/android-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/android-icon-96x96.png": "71caea2021b1d3d46d2e1cefee06aa65",
"icons/apple-icon-114x114.png": "73be9d6d9e65dbd62ec653e994174a2a",
"icons/apple-icon-120x120.png": "b128b11ae53203bb005466df5f326fdd",
"icons/apple-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/apple-icon-152x152.png": "1aee6cb3340b2c84c7df10dcb0b08ae4",
"icons/apple-icon-180x180.png": "5cde69955f75d7045aa4f536c3ba4cd9",
"icons/apple-icon-57x57.png": "68cc7c563b89549f1dd44c83d8bb5ca1",
"icons/apple-icon-60x60.png": "718524fc7bd4c68fe92051117a7aeb34",
"icons/apple-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/apple-icon-76x76.png": "0a01b705fb841923963351259007f375",
"icons/apple-icon.png": "245ad7b503c92607c0ae3e9a8a220d0c",
"icons/favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"icons/favicon-32x32.png": "eb5ea16f90b551718a8c73316c0a4620",
"icons/favicon-96x96.png": "0fc6dfc36c93a5f03769c974a288c0ac",
"icons/ms-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/ms-icon-150x150.png": "19d711aaf4f58d26c83bbca60029b3a0",
"icons/ms-icon-310x310.png": "a9ace726bbe97eff65c9638320118014",
"icons/ms-icon-70x70.png": "6763c3f58852252d5850b5273e0f121e",
"index.html": "e225e1d8b5e2952374a0a79465e92778",
"/": "e225e1d8b5e2952374a0a79465e92778",
"main.dart.js": "571cb11bca2bb26d84253726134052e3",
"manifest.json": "23356247bdf8b7bf05be598021da67f4",
"version.json": "eda7d549112940d75c9b2a6691e8d319"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
