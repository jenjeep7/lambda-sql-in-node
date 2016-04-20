var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var initializeDB = require('./db/connection').initializeDB;
var people = require('./routes/people');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/', index);
app.use('/people', people);
initializeDB();

app.listen(port, function(){
  console.log('listening for requests on ', port);
});
