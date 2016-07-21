var readFile = require('fs').readFileSync,
    exists = require('fs').access;

// preload asset-manifest.json if exists
try {
  exists('dist/asset-manifest.json');
  var assetMap = JSON.parse(readFile('dist/asset-manifest.json', 'utf-8'));
} catch (e) { }

module.exports = {
  asset: function(path) {
    return assetMap && path in assetMap ? assetMap[path] : path;
  }
};
