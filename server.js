const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      comm        = require('s3d-fitting-commands'),
      sf          = require('./socketFunctions/socketFunctions'),
      app         = express();

const socket = new WebSocket('ws://localhost:8091');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.send('Success!');
});

app.post('/calculate-trafo', function(req, res) {
  if (
    !req.body.hasOwnProperty("coords") ||
    !req.body.coords.hasOwnProperty("startSystemPoints") ||
    !req.body.coords.hasOwnProperty("targetSystemPoints") ||
    !Array.isArray(req.body.coords.startSystemPoints) ||
    !Array.isArray(req.body.coords.targetSystemPoints) ||
    req.body.coords.startSystemPoints.length !== req.body.coords.targetSystemPoints.length
  ) {
    res.status(400).send("Invalid input coordinates");
    return;
  }

  const startPoints = req.body.coords.startSystemPoints;
  const targetPoints = req.body.coords.targetSystemPoints;

  const obj = comm.transformation3D6W(startPoints, targetPoints, 1);

  sf.threeDTrafoSendToSocket(obj, res);
});

app.post('/param-inversion', function(req, res) {
  if (!req.body.hasOwnProperty("coords")) {
    res.status(400).send("Invalid input coordinates");
    return;
  }
  const transformation = req.body.coords;
  const obj = comm.invertTransformationParameters(transformation, 1);

  sf.paramInversionsSendToSocket(obj, res);
});


app.post('/calculate-trafo-difference', function(req, res) {
  if (
    !req.body.hasOwnProperty("startPoints") ||
    !req.body.hasOwnProperty("targetPoints") ||
    !req.body.hasOwnProperty("trafoParams")
  ) {
    res.status(400).send("Invalid input coordinates");
    return;
  }

  const startPoints = req.body.startPoints;
  const targetPoints = req.body.targetPoints;
  const trafoParams = req.body.trafoParams;

  sf.threeDTrafoDifferenceSendToSocket(res, startPoints, targetPoints, trafoParams);
});

app.listen(app.get("port"), () => {
  console.log("Server is running...");
});

module.exports = app;