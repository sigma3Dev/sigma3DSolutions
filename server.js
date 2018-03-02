var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.send('Success!');
});

app.post('/calculate-trafo', function(req, res) {
  console.log(req.body.coords.trafoDataInput);
});

app.listen(app.get("port"), () => {
  console.log("Server running...")
});