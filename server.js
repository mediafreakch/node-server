var throng = require('throng');

var WORKERS = process.env.WEB_CONCURRENCY || 1;
var PORT = process.env.PORT || 3000;
var ENV = process.env.NODE_ENV;
var STATIC = (ENV === 'production' ? '/cdn' : '/dist');

// allow app clustering
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
      expressHelpers = require('./utils/express-helpers'),
      app = express();

  // register express helpers
  // those will be exposed to the templating engine
  app.locals.helpers = expressHelpers;

  // warm up cache by precompiling jade templates
  jade.compileFile(path.join(__dirname, '/views', '/index.jade'), { cache: true });

  // configure the view engine
  app
    .set('view engine', 'jade')
    .set('views', path.join(__dirname, '/views'));

  // configure static asset directory
  app
    .use('/dist', express.static(__dirname + STATIC))

  // configure routes
  app
    .get('/', homeRoute)

  // start the server
  app
    .listen(PORT, onListen);

  // Routes
  function homeRoute(req, res) {
    debug('Hit home route');
    res.render('index');
  }

  function onListen() {
    debug('server started on port ' + PORT);
    debug('Environment: ' + app.get('env') );
  }
}
