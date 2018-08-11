var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Router
require('../app/routing/apiRoutes.js')(app);
require('../app/routing/htmlRoutes.js')(app);

//Starting the server to listen
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});
