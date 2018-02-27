var express = require('express'),
    app     = express();

app.get('/', function(req, res) {
  res.send('Success!');
});

app.get('/parse-coordinates', function(req, res) {
  res.send('Success!');
});

app.listen(5000);