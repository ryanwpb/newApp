"use strict";var precacheConfig=[["/ryangraham/index.html","84cf80036fe45853e6a6c43468894910"],["/ryangraham/static/css/main.9e1e1907.css","566d09f9e6a954f24aae8ecb7c689341"],["/ryangraham/static/js/main.14e00fc5.js","4e4cc1134351fce6fc7293df8de6dca2"],["/ryangraham/static/media/JavaScript.cd75654d.png","cd75654d9da5c7bfd9f42a3d0951e0d9"],["/ryangraham/static/media/Ryan_Graham_Fl.40d728d4.pdf","40d728d4fb202bde86c51d156db1ddc8"],["/ryangraham/static/media/code-bench.7ffc875d.jpg","7ffc875de849c4cae0605989fe6de250"],["/ryangraham/static/media/code-coffee.729f50e7.jpg","729f50e707002c7ce08d2a38242acd46"],["/ryangraham/static/media/coding.41101c5b.jpeg","41101c5bb3ac818f024581e0c3341245"],["/ryangraham/static/media/css-image.714888aa.png","714888aaccbe0f333a5f9c1d3ec83c5c"],["/ryangraham/static/media/developers.c3a39b21.jpg","c3a39b213d1b3d56e501a527b84b834e"],["/ryangraham/static/media/html-img.9f648ea4.png","9f648ea45dfb99f2c93142bd7ac3a604"],["/ryangraham/static/media/jQuery-img.b4528ac0.png","b4528ac0b322eae36a3d4b6e23bddb7f"],["/ryangraham/static/media/marketran.4b30c6fe.png","4b30c6fe0f97fd956784108f5786948d"],["/ryangraham/static/media/reactJs-img.3880622d.png","3880622d4d65bc4c978171b3dba8dc3c"],["/ryangraham/static/media/scass.2b866ad2.png","2b866ad2ad3aec5a3ec65c23a6dbad53"],["/ryangraham/static/media/tiy-logo.7c56fc51.png","7c56fc513601821a78a839beda87be6c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/ryangraham/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});