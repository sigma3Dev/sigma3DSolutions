var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    multer      = require('multer'),
    readBlob    = require('read-blob'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: './uploads'
});

var upload = multer({ storage });

// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.send('Success!');
});

app.listen(5000);

