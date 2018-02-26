var express = require('express'),
    app     = express();

app.get('/', function(req, res) {
  res.sen('Success!');
});

app.listen(5000);