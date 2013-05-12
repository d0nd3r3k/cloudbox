
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , cloudbox = require('./routes/cloudbox')
  , http = require('http')
  , path = require('path');

var app = express(), 
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/cloudbox/connect/:serial', cloudbox.connect);
app.post('/cloudbox/sync', cloudbox.sync);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
