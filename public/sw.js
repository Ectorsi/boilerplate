if (!self.define) {
  const e = (e) => {
    'require' !== e && (e += '.js');
    let s = Promise.resolve();
    return (
      r[e] ||
      (s = new Promise(async (s) => {
        if ('document' in self) {
          const r = document.createElement('script');
          (r.src = e), document.head.appendChild(r), (r.onload = s);
        } else importScripts(e), s();
      })),
      s.then(() => {
        if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
        return r[e];
      })
    );
  },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, n, t) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const o = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case 'exports':
                return r;
              case 'module':
                return o;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = t(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/C4o5wxh1rOjU9e1cwhoPo/_buildManifest.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/C4o5wxh1rOjU9e1cwhoPo/_ssgManifest.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/framework-92300432a1172ef1338b.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/main-707e3475b4679de86540.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/pages/_app-12a7925aa97abe21028e.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/pages/index-c06ce619829dc5f0d459.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        {
          url: '/_next/static/chunks/webpack-715970c8028b8d8e1f64.js',
          revision: 'C4o5wxh1rOjU9e1cwhoPo'
        },
        { url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa' },
        { url: '/img/cover.png', revision: '8f5771ad3f27909414b4f6fc24cd1fbc' },
        {
          url: '/img/hero-illustration.svg',
          revision: '70b29078f21f2d829ca450d4ae01ba3d'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '37ec18e21a0e84e78077565dd634314d' },
        { url: '/manifest.json', revision: '2b19621eb00c338ee252b1c8dda19b2a' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: r,
              state: n
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                  status: 200,
                  statusText: 'OK',
                  headers: s.headers
                })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    );
});
