var express = require('express');
var app = express();

app.get(`/hello`, function (req, res) {
  res.send('Hello Photina! Bobo! Kail!');
});

app.listen(3000);


