var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);

//below is for html5 routing, to render index.html so manufactured urls w/i angular will render when route is in url
//otherwise will fall through to routes above
app.get('*', function (req, res) { res.sendFile(rootPath + '/app/index.html'); });
app.post('/data/event/:id', events.save);

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');