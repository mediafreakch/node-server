var throng = require('throng');

var WORKERS = process.env.WEB_CONCURRENCY || 1;
var PORT = process.env.SERVER_PORT || 3000;

// app clustering
throng({
  workers: WORKERS,
  lifetime: Infinity,
  start: startServer
});

function startServer() {
  var path = require('path'),
      express = require('express'),
      debug = require('debug')('webapp'),
      jade = require('jade'),
      app = express();

  // precompile main template before any route hits
  var mainTemplate = jade.compileFile(path.join(__dirname, 'dist', 'index.jade'));

  app
    .use('/dist', express.static('./dist'))
    .get('/', homeRoute)
    .listen(PORT, onListen);

  function homeRoute(req, res) {
    debug('Hit home route');
    // this is the fastest way to render (using pre-compiled template)
    res.send(mainTemplate());
  }

  function onListen() {
    debug('server started on port ' + PORT);
    debug('Environment: ' + app.get('env') );
  }

  // the following is way slower and happens synchronous on the first hit for a particular view
  // app.set('view engine', 'jade');
  // app.set('views', './src');
  // app.get('/', function (req, res) {
  //   res.render('index', { cdnBasePath: 'http://localhost:3000/dist/', file: 'build.min.js' });
  // });
}
