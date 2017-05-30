var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

app.use('/', router);

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

app.use('*', function (req, res) {
    res.send('Error 404: Not Found!');
});

app.listen(3000, function () {
    console.log("Webservice running at Port 3000");
});