const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const socket = require('socket.io');

const app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

/* GET login page. */


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});


app.get('/teach', function(req, res, next) {
  let classname = req.query.classname;
  let handle = req.query.username;
  console.log(classname, handle)
  res.render('teacherClass', {classname: classname, handle: handle});
});

app.get('/learn', function(req, res, next) {
  let classname = req.query.classname;
  let handle = req.query.username;
  res.render('studentClass', {classname: classname, handle: handle});
});

// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = socket(server);

// set up our socket server
require('./sockets/base')(io);