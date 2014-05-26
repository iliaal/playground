
var http = require('http'),
    express = require('express'),
    expressLess = require('express-less'),
    livereload = require('express-livereload'),
    errorHandler = require('errorhandler'),
    app = express(),
    server = http.createServer(app);

livereload(app, {
    exts: [ 'jade', 'less', 'js' ],
    watchDir: __dirname + '/app'
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');

app.locals.pretty = true;

app.use('/css', expressLess(__dirname + '/app/styles'));

app.use('/lib', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/app/js'));

app.get('/', function (req, res) {
    res.render('index');
});

server.listen(9001);
