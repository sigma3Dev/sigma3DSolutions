const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sf = require('./socketFunctions/socketFunctions');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 80);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

/** calculate 3DTrafo6W */
app.post('/calculate-trafo', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'startSystemPoints') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'targetSystemPoints') ||
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
    !Object.prototype.hasOwnProperty.call(req.body, 'startPoints') ||
    !Object.prototype.hasOwnProperty.call(req.body, 'targetPoints') ||
    !Object.prototype.hasOwnProperty.call(req.body, 'trafoParams')
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
  if (!Object.prototype.hasOwnProperty.call(req.body, 'coords')) {
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
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Array.isArray(req.body.coords) ||
    req.body.coords.length === 0
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  const circlePoints = req.body.coords;

  sf.ChebyCircleFitSendToSocket(circlePoints, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/apply-trafo', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'values') ||
    !Object.prototype.hasOwnProperty.call(req.body.values, 'points') ||
    !Object.prototype.hasOwnProperty.call(req.body.values, 'transformation')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.applyTransformation(req.body.values, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/fit-plane-gauss', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'planePoints')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitPlaneGauss(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/quat-to-cardan', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'q0') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'q1') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'q2') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'q3')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.quatToCardan(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/cardan-to-quat', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'Rx') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'Ry') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'Rz')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.cardanToQuat(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/fit-plane-ransac', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'planePoints') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'planeTolerance')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitPlaneRansac(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/fit-cylinder', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'cylinderPoints') ||
    !Array.isArray(req.body.coords.cylinderPoints)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitCylinder(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.post('/fit-point', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'points') ||
    !Array.isArray(req.body.coords.points)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitCylinder(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

app.listen(app.get('port'), () => {
  console.log('Server is running...');
});

module.exports = app;
