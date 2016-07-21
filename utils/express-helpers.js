var readFile = require('fs').readFileSync,
    exists = require('fs').accessSync,
    path = require('path'),
    manifest = path.join(path.resolve('.'), 'dist/asset-manifest.json');

// preload asset-manifest.json if exists
if (process.env.NODE_ENV === 'production') {
    try {
    exists(manifest);
    var assetMap = JSON.parse(readFile(manifest, 'utf-8'));
  } catch (e) { }
}

module.exports = {
  asset: function(path) {
    return assetMap && path in assetMap ? assetMap[path] : path;
  }
};
