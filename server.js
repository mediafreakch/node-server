var path = require('path'),
    express = require('express'),
    debug = require('debug')('webapp'),
    app = express();

/*------------------ Define Middlewares ------------------------*/
app.use(express.static('dist'));

/*------------------ Define Routes ------------------------*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/*------------------Init Server ------------------------*/
var port = process.env.PORT || 3000;

app.listen(port, function() {
  debug('server started on port ' + port);
});
