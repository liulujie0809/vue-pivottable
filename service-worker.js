/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e77407105361980d382e24bc122e294c"
  },
  {
    "url": "assets/css/0.styles.e432a550.css",
    "revision": "3a0c66e7266ec6e46dff351bfb443939"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11bc125f.js",
    "revision": "a39db493f56d568abab2223cc6035172"
  },
  {
    "url": "assets/js/11.398b7b12.js",
    "revision": "9442d04ea8456c4eb893e995a5a9c829"
  },
  {
    "url": "assets/js/12.e5b8529f.js",
    "revision": "5a901b1a5ab70379dfc37f8553529dde"
  },
  {
    "url": "assets/js/13.0664b0c9.js",
    "revision": "ba2262a54a50d7d9e48e4b41e09a1486"
  },
  {
    "url": "assets/js/14.9c6b28d2.js",
    "revision": "1708cf67cc1a625d21dbc2c1dbf6070d"
  },
  {
    "url": "assets/js/15.3b086344.js",
    "revision": "9b881c3b8af2e5aef37532345881cfec"
  },
  {
    "url": "assets/js/16.e64fd66d.js",
    "revision": "4f3355df72765e2513a70e54506a13d5"
  },
  {
    "url": "assets/js/17.d722c3dd.js",
    "revision": "03412f5f8737ee125d590ca6eda878f6"
  },
  {
    "url": "assets/js/18.78e21869.js",
    "revision": "a3d03a99eed18574a1db96592654d3b1"
  },
  {
    "url": "assets/js/19.ac9a2349.js",
    "revision": "b4bd75c16c5b0e4dcb1335b77df55352"
  },
  {
    "url": "assets/js/2.3401e4ec.js",
    "revision": "a9ac7875b56dbd23e51bd224cffc242f"
  },
  {
    "url": "assets/js/20.2b000ee9.js",
    "revision": "4fdd37b0c8be9519ffc7bf39cd4044ab"
  },
  {
    "url": "assets/js/21.e6c4d733.js",
    "revision": "d3df8e9db52022924deb0dce1b3912a2"
  },
  {
    "url": "assets/js/22.267fdb2e.js",
    "revision": "50f24e83bdd25bb31dbd6c897657982c"
  },
  {
    "url": "assets/js/23.ef7d42a5.js",
    "revision": "d52ba350089bd6c80751311b5c975491"
  },
  {
    "url": "assets/js/3.7fbcfaa7.js",
    "revision": "193c411481a5479f5ea32057790fc5e0"
  },
  {
    "url": "assets/js/4.86fd373a.js",
    "revision": "37fb213d192464f678ee452fcc5b897e"
  },
  {
    "url": "assets/js/5.4f3ceb9e.js",
    "revision": "84d01a476c8a506c931c9d57addb2ef9"
  },
  {
    "url": "assets/js/6.65e194b9.js",
    "revision": "0bcf0874d0ecc3a8f0626875510e1cad"
  },
  {
    "url": "assets/js/7.95abe135.js",
    "revision": "6d9aaa0d2a3cc40fd60980b7e3bddd80"
  },
  {
    "url": "assets/js/8.dbf69829.js",
    "revision": "926babbbd44e29d3cd4543a5b3279fc3"
  },
  {
    "url": "assets/js/9.b1d23eff.js",
    "revision": "e1b46cb0da57df411d2734bddba76818"
  },
  {
    "url": "assets/js/app.1e113e84.js",
    "revision": "538285fbd563b808fc6eb82f0bde5020"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "25bf218a8aa154a9d1f0fdec3e180a70"
  },
  {
    "url": "guide/index.html",
    "revision": "00a62bd48eaf3468612c9019246ddad6"
  },
  {
    "url": "guide/locale.html",
    "revision": "d4ce0eeba3817b0082986d6e43ac8e35"
  },
  {
    "url": "guide/scoped-slot.html",
    "revision": "cb9e3ecd4868636f5fddaaaadd40dd1c"
  },
  {
    "url": "guide/slot.html",
    "revision": "9d0e4325dd3e2671335a93922d72583f"
  },
  {
    "url": "guide/utilities.html",
    "revision": "5b4d2af588296fea338546b81e70066f"
  },
  {
    "url": "images/vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  },
  {
    "url": "index.html",
    "revision": "6615543d89b189c480afd098cec09faa"
  },
  {
    "url": "ko/guide/data.html",
    "revision": "cb32f5421cc65ed890ed607e50674a61"
  },
  {
    "url": "ko/guide/getting-started.html",
    "revision": "4c0646defa7a3f313b454fb5043ef914"
  },
  {
    "url": "ko/guide/index.html",
    "revision": "bb910e7ae4a405947dfd604697384ca9"
  },
  {
    "url": "ko/guide/props.html",
    "revision": "746d4561146ec3dbb4fd6ac9ad0d24de"
  },
  {
    "url": "ko/guide/style.html",
    "revision": "89a5c820840f6d4b67379236fa49143b"
  },
  {
    "url": "ko/index.html",
    "revision": "cbb86590c618e54234924ab5d28ee6d6"
  },
  {
    "url": "props/index.html",
    "revision": "e6c7d9ac3ddf3286d778f17717904bdb"
  },
  {
    "url": "styling/index.html",
    "revision": "b447a0ed309fe383824f477b82b06ac3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
