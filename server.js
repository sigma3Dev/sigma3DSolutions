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
app.post('/fit-circle-chebyshev', (req, res) => {
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

/** calculate apply transformation */
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

/** calculate gauss plane */
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

/** calculate quaternion to cardan */
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

/** calculate cardan to quaternion */
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

/** calculate RANSAC plane */
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

/** calculate cylinder fit */
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

/** calculate point fit */
app.post('/fit-point', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'points') ||
    !Array.isArray(req.body.coords.points)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitPoint(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate L2 line fit */
app.post('/fit-line-l-two', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'lineL2Points') ||
    !Array.isArray(req.body.coords.lineL2Points)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitLineL2(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate RANSAC line fit */
app.post('/fit-line-ransac', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'linePoints') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'lineTolerance') ||
    !Array.isArray(req.body.coords.linePoints)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitLineRansac(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate L2 circle fit */
app.post('/fit-circle-l-two', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'circleL2Points') ||
    !Array.isArray(req.body.coords.circleL2Points)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitCircleL2(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate sphere fit (currently dysfunctional) */
app.post('/fit-sphere', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'spherePoints') ||
    !Array.isArray(req.body.coords.spherePoints)
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.fitCircleL2(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate bundle adjustment */
app.post('/bundle-adjustment', (req, res) => {
  if (
    !Object.prototype.hasOwnProperty.call(req.body, 'coords') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords, 'bundlePoints') ||
    req.body.coords.bundlePoints.length === 0 ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'stationId') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'geometryId') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'x') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'y') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'z') ||
    !Object.prototype.hasOwnProperty.call(req.body.coords.bundlePoints[0], 'stdev')
  ) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.bundleAdjustment(req.body.coords, (response, isOk) => {
    if (isOk) {
      res.status(200).send(response);
    } else {
      res.status(500).send(response);
    }
  });
});

/** calculate translate point along axis */
app.post('/translate-point-along-axis', (req, res) => {
  if (!Object.prototype.hasOwnProperty.call(req.body, 'coords')) {
    res.status(400).send('Invalid input coordinates');
    return;
  }

  sf.translatePointAlongAxis(req.body.coords, (response, isOk) => {
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
