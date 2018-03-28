const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      comm        = require('s3d-fitting-commands'),
      sf          = require('./socketFunctions/socketFunctions'),
      app         = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('Success!');
});

/** calculate 3DTrafo6W */
app.post('/calculate-trafo', (req, res) => {
  if (
    !req.body.hasOwnProperty('coords') ||
    !req.body.coords.hasOwnProperty("startSystemPoints") ||
    !req.body.coords.hasOwnProperty("targetSystemPoints") ||
    !Array.isArray(req.body.coords.startSystemPoints) ||
    !Array.isArray(req.body.coords.targetSystemPoints) ||
    req.body.coords.startSystemPoints.length !== req.body.coords.targetSystemPoints.length
  ) {
    res.status(400).send('Invalid input coordinates');
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

/** use applyTransformation to calculate difference */
app.post('/calculate-trafo-difference', (req, res) => {
  if (
    !req.body.hasOwnProperty('startPoints') ||
    !req.body.hasOwnProperty('targetPoints') ||
    !req.body.hasOwnProperty('trafoParams')
  ) {
    res.status(400).send('Invalid input coordinates');
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

/** calculate parameter inversion */
app.post('/param-inversion', (req, res) => {
  if (!req.body.hasOwnProperty('coords')) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.paramInversionSendToSocket(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    } 
  });
});

/** calculate chebyshev circle fit */
app.post('/calculate-chebyshev-circle-fit', (req, res) => {
  if (
    !req.body.hasOwnProperty('coords') ||
    !req.body.coords.hasOwnProperty('chebyshevCircleFitDataInput') ||
    !req.body.coords.chebyshevCircleFitDataInput.hasOwnProperty('circlePoints') ||
    !Array.isArray(req.body.coords.chebyshevCircleFitDataInput.circlePoints) ||
    req.body.coords.chebyshevCircleFitDataInput.circlePoints.length === 0
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.ChebyCircleFitSendToSocket(req.body.coords.chebyshevCircleFitDataInput.circlePoints, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    } 
  });
});

app.post('/apply-trafo', (req, res) => {
  //TODO: remove console.log
  console.log(req.body.values);
  if (
    !req.body.hasOwnProperty('values') ||
    !req.body.values.hasOwnProperty('point') ||
    !req.body.values.hasOwnProperty('transformation')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  };
})

app.listen(app.get('port'), () => {
  console.log('Server is running...');
});

module.exports = app;