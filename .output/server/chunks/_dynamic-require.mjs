const dynamicChunks = {
 ['pages/Index.js']: () => import('./app/pages/Index.mjs').then(function (n) { return n.I; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
