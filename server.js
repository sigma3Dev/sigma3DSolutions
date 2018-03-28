const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      comm        = require('s3d-fitting-commands'),
      sf          = require('./socketFunctions/socketFunctions'),
      app         = express();
      
//const socket = new WebSocket('ws://localhost:8091');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('Success!');
});

app.post('/calculate-trafo', (req, res) => {
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

  sf.threeDTrafoSendToSocket(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    } 
  });
});

app.post('/param-inversion', (req, res) => {
  if (!req.body.hasOwnProperty("coords")) {
    res.status(400).send("Invalid input coordinates");
    return;
  }

  sf.paramInversionSendToSocket(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      console.log(response);
    } 
  });
});

app.post('/calculate-chebyshev-circle-fit', function(req, res) {
  const chebyshevCircleFitPoints = req.body.coords.chebyshevCircleFitDataInput.circlePoints;
  let obj = {
    "jsonrpc": "2.0",
    "method": "fitCircle3DTscheby",
    "params": {
      "observations": chebyshevCircleFitPoints,
    },
    "id": 1
  };

  socket.onerror = error => {
    console.log("WebSocket Error: " + error);
    res.send(error);
  }

  socket.onmessage = e => {
    const response = e.data;
    res.status(200).send(response);
  }

  socket.send(JSON.stringify(obj));
});


app.post('/calculate-trafo-difference', (req, res) => {
  if (
    !req.body.hasOwnProperty("startPoints") ||
    !req.body.hasOwnProperty("targetPoints") ||
    !req.body.hasOwnProperty("trafoParams")
  ) {
    res.status(400).send("Invalid input coordinates");
    return;
  }

  sf.threeDTrafoDifferenceSendToSocket(req.body, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    } 
  });
});

app.listen(app.get("port"), () => {
  console.log("Server is running...");
});

module.exports = app;