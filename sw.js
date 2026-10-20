const C='ballast-v29';const A=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Network-first for the page itself (so a new build is picked up on the next open when online); cache-first for the rest.
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
  const isPage=r.mode==='navigate'||/\/(index\.html)?(\?.*)?$/.test(new URL(r.url).pathname)||r.url.endsWith('sw.js');
  if(isPage){e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put('./index.html',cp));return res}).catch(()=>caches.match('./index.html')));return}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(c=>c||fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(x=>x.put(r,cp));return res})))});
