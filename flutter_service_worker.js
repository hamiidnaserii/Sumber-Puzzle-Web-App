'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dd8f100298ff923592ab35dc15788abc",
".git/config": "4d710be27e9e8306704980d06dea55a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "69a555f056f29aae35942bc237a905d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c01ff7563cd575346394e26fb1d9dd9",
".git/logs/refs/heads/master": "3c01ff7563cd575346394e26fb1d9dd9",
".git/logs/refs/remotes/origin/master": "8afe676422ae1e8c3f22b690978d0fcd",
".git/objects/16/7231bf507f4776c37e08b778d8822042087c73": "03228820e070a8262bdc13c29715fc29",
".git/objects/16/dcf1c8a55904260fb3f31fcbca3087292001e4": "47f9f98db6c707b91ad0ebf5e4ce5175",
".git/objects/29/fb72c80d5f8b5e434652184dd44c250b090ad3": "b900a28c3faa37e39e8df2048fe1c40f",
".git/objects/40/78d1f28572e978f76c04d8be419943e658be05": "ac2f9256243e65f221d62d457ad35ecc",
".git/objects/50/930a6c29e4dcbd0b970fc712d2a1c137a586d3": "77b15908c05576155a9352496a6a8188",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/56/79d5656dd69a39dadaba929d4c1ba2d784a2e2": "150ca4332ca9da69e46b37cf47ea8293",
".git/objects/5c/1c3b10c73368b74b20293f9ce66557b4dcd30d": "849ec3d97b42884c88336c716baf63ad",
".git/objects/60/48fc9f7f673db484eb07423949d85c7570425d": "c0d21e3be5401a1313a4c1e62630a1aa",
".git/objects/60/9fd4487a77faeefae5696c88e5a25798707853": "7920598efc6f9366e30abcc3142d2495",
".git/objects/64/f5d90dc1d11e1c5ff8f57caedd4f57856e49d2": "8939e3c18161dcdcabeb549e7d2bdfc5",
".git/objects/77/449843c7db3c37b0cf1e3f079d2a9e66595473": "038a211b7f397f6e7f443e9b956f863b",
".git/objects/79/5f7071e67460d2d47110a50105528569921226": "6b498e4eb404ca3855ed0843225476eb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/04b869f3e77479ea7232d0fb6c838bfb47e270": "4841b93744cd1976d55ec53f0727969d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bf0e7d95ee2c7e5ee599868fd3a272b30e892d": "83019ce173135b70c92d67de749e5074",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9a85221171a3c2e6d22b954070a6efc5c8e234": "ee32861f29ffeeaec9b7b9db9a488c07",
".git/objects/8d/a5c73d310f8463ecc529709edd8d41ca70bde2": "a710971c4f54091a41fd2f137663ae8d",
".git/objects/91/1edd6ddfd1f95b486c918f1da2625db6650126": "b30c888d85841e833a656ceb49c7ee02",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/98/075b6c879497874fd51bb48b29dbb5eb0d24aa": "07af2d86f248921be047258d7c9e5af8",
".git/objects/9c/4f0d0001600740e26cbd0d11c0f992b17b8e71": "ec878627c71b7c9f05cdf1ff5ce5c527",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6914edea2d29883b0a4366907d97f754527c46": "f6a24e34f1ebdba0bb3828f962000994",
".git/objects/a5/6a723bae0050dd50267ba26943024a454222ff": "aeff46c428acca31ae35ae356154bd1c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/cd/9a0575bbe69caedd5e0e8dded04cc5ca5ea294": "8bffcf4f2a1f923f9e8a5c1ff483d3b3",
".git/objects/d3/bd319218910fd1570e1743492fccd5248b73f6": "9d44e4a7ebb79ba3477a64e79c86efd8",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/d9/14f1615ede87f0f6afca051bf21c5ee9e8796a": "6ac7956ee07a070d11e9915c6da1b61d",
".git/objects/e0/4b9b8e0375b2644fa96fb3086a530163281978": "84f2408958a01473174430a4ef9b40e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/25b6f550e54c9146422ba46ec678253784c7df": "ee816750d59838bcd2b500bfcca695bb",
".git/objects/ed/f4abf1cdd828dfd13ce29b572c51234b842c2c": "481f47dbb054b310b4cdcfac10f1f8be",
".git/objects/fb/748172913853f6113c1f7837d882a592f33c7c": "a15312fd37cfc9b82e95b9a2b3f1771f",
".git/refs/heads/master": "d38a5e439813d8124f13c52e9915ce96",
".git/refs/remotes/origin/master": "d38a5e439813d8124f13c52e9915ce96",
".idea/codeStyles/codeStyleConfig.xml": "b441904e847baa93d275d51d42293128",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "52309cb9c39acd18405af3f5b894551e",
".idea/workspace.xml": "fc5690cd0ab4a70903454e61af87b774",
"assets/AssetManifest.json": "6c6df2bf9c3f1f37f5c2f20aae6d48a6",
"assets/assets/images/button_glass.png": "0038a66c5d84846f10504f022dbf8ddf",
"assets/assets/images/help.png": "01b185374c1133b28c5439125d9712c5",
"assets/assets/images/logo.png": "972bee0b4c0b7f225bca9f4ba6442080",
"assets/assets/images/logo_ech_white.png": "ebf0d150b56532ca4058f6dfa19c9206",
"assets/FontManifest.json": "004fe93d167f9551588c63c821b93491",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/nova_regular.ttf": "059b3e9dc53b61af6949cb426447f030",
"assets/NOTICES": "bb87a596c53afb6c44a44a8f9accb8e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.png": "972bee0b4c0b7f225bca9f4ba6442080",
"index.html": "25bd38a8d8b7d38ca2d351ae8fa78c0c",
"/": "25bd38a8d8b7d38ca2d351ae8fa78c0c",
"main.dart.js": "844c9355959c38f1acdf7f077f8d2a5f",
"manifest.json": "33cec28076518d086721a82e3f7f1187",
"version.json": "be27b9a02bb98c419ed8fe1771368d1c",
"version.zip": "6c4c43a861a5bfa3bd39290b896a417b"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
