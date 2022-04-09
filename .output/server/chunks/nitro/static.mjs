import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/0af4263.js": {
    "type": "application/javascript",
    "etag": "\"2adb-ysNitMrZWhGNdR6oTLB3o0aCqzI\"",
    "mtime": "2022-04-09T04:54:23.981Z",
    "path": "../public/_nuxt/0af4263.js"
  },
  "/_nuxt/923c2cb.js": {
    "type": "application/javascript",
    "etag": "\"59bf4-RVCswe+/CPp+30fMPWboAjxrMNg\"",
    "mtime": "2022-04-09T04:54:23.981Z",
    "path": "../public/_nuxt/923c2cb.js"
  },
  "/_nuxt/a839d36.js": {
    "type": "application/javascript",
    "etag": "\"129a1-x78ZR2MKPskFX68+d0yKibMBJLs\"",
    "mtime": "2022-04-09T04:54:23.973Z",
    "path": "../public/_nuxt/a839d36.js"
  },
  "/_nuxt/d737a3a.js": {
    "type": "application/javascript",
    "etag": "\"3acf5-MZ6Oj7caEsSp1EJzajTQgiD57Mw\"",
    "mtime": "2022-04-09T04:54:23.973Z",
    "path": "../public/_nuxt/d737a3a.js"
  },
  "/_nuxt/e8ee18e.js": {
    "type": "application/javascript",
    "etag": "\"92c-aE7k/BrPhyaCf3CPAYc+b9DCAIA\"",
    "mtime": "2022-04-09T04:54:23.971Z",
    "path": "../public/_nuxt/e8ee18e.js"
  },
  "/_nuxt/fonts/Old_Standard_TT-400-cyrillic-ext1.3e4bab2.woff2": {
    "type": "font/woff2",
    "etag": "\"47e0-8ypxAXqWWrQ+Co6WGE0gWhvY9XU\"",
    "mtime": "2022-04-09T04:54:23.971Z",
    "path": "../public/_nuxt/fonts/Old_Standard_TT-400-cyrillic-ext1.3e4bab2.woff2"
  },
  "/_nuxt/fonts/Old_Standard_TT-400-cyrillic2.942616e.woff2": {
    "type": "font/woff2",
    "etag": "\"3768-tGB7ouPKxcYhRVNs0q0BpeLcBA0\"",
    "mtime": "2022-04-09T04:54:23.970Z",
    "path": "../public/_nuxt/fonts/Old_Standard_TT-400-cyrillic2.942616e.woff2"
  },
  "/_nuxt/fonts/Old_Standard_TT-400-latin-ext4.308be94.woff2": {
    "type": "font/woff2",
    "etag": "\"6544-l7Xlncw6GTQkEjV0yunfqT8n1U8\"",
    "mtime": "2022-04-09T04:54:23.969Z",
    "path": "../public/_nuxt/fonts/Old_Standard_TT-400-latin-ext4.308be94.woff2"
  },
  "/_nuxt/fonts/Old_Standard_TT-400-latin5.38a9521.woff2": {
    "type": "font/woff2",
    "etag": "\"5938-nWmykG+ca82jGX48C6VUKxpXqrk\"",
    "mtime": "2022-04-09T04:54:23.968Z",
    "path": "../public/_nuxt/fonts/Old_Standard_TT-400-latin5.38a9521.woff2"
  },
  "/_nuxt/fonts/Old_Standard_TT-400-vietnamese3.58f1c11.woff2": {
    "type": "font/woff2",
    "etag": "\"1c88-jBgB43AYIFdDeepLVkoMXPXUteA\"",
    "mtime": "2022-04-09T04:54:23.967Z",
    "path": "../public/_nuxt/fonts/Old_Standard_TT-400-vietnamese3.58f1c11.woff2"
  },
  "/_nuxt/img/los-angeles-star-logo.1a6d20b.svg": {
    "type": "image/svg+xml",
    "etag": "\"2549-xbLR4nZHVMXwQpJZYau8SYt0kJs\"",
    "mtime": "2022-04-09T04:54:23.965Z",
    "path": "../public/_nuxt/img/los-angeles-star-logo.1a6d20b.svg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };
