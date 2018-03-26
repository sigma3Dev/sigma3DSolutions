const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      util        = require('util'),
      io          = require('socket.io')(),
      comm        = require('s3d-fitting-commands'),
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
  const startPoints = req.body.coords.startSystemPoints;
  const targetPoints = req.body.coords.targetSystemPoints;

  let obj = comm.transformation3D6W(startPoints, targetPoints, 1);

  socket.onerror = error => {
    console.log("WebSocket Error: " + error);
    res.send(error);
  }

  socket.onmessage = e => {
    const response = e.data;
    res.status(200).send(response);
  }

  socket.send(obj);
});

app.post('/param-inversion', function(req, res) {
  const transformation = req.body.coords;
  let obj = comm.invertTransformationParameters(transformation, 1);

  socket.onerror = error => {
    console.log("WebSocket Error: " + error);
    res.send(error);
  }

  socket.onmessage = e => {
    const response = e.data;
    res.status(200).send(response);
  }

  socket.send(obj);
});


app.post('/calculate-trafo-difference', function(req, res) {
  const startPoints = req.body.startPoints;
  const targetPoints = req.body.targetPoints;
  const trafoParams = req.body.trafoParams;

  let calculatedTarget = [];
  let differences = [];

  startPoints.map((point, i) => {
    let objDifference = comm.applyTransformation(point, trafoParams, 1);
    socket.send(objDifference);

    socket.onmessage = e => {
      const response = JSON.parse(e.data).result;
      calculatedTarget.push(response);
      if (calculatedTarget.length === startPoints.length) {
        calculatedTarget.map((target, i) => {
          differences.push({});
          differences[i].vx = targetPoints[i].x - target.x;
          differences[i].vy = targetPoints[i].y - target.y;
          differences[i].vz = targetPoints[i].z - target.z;
          differences[i].v = Math.sqrt(Math.pow(differences[i].vx, 2) + Math.pow(differences[i].vy, 2) + Math.pow(differences[i].vz, 2));
        });
        res.status(200).send(differences);
      }
    }

    socket.onerror = error => {
      console.log("WebSocket Error: " + error);
      res.send(error);
    }
  });
});

app.listen(app.get("port"), () => {
  console.log("Server is running...");
});