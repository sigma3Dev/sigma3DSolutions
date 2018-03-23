const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      util        = require('util'),
      io          = require('socket.io')(),
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

  let obj = {
    "jsonrpc": "2.0",
    "method": "transformation3D6W",
    "params": {
      "startPoints": [],
      "targetPoints": []
    },
    "id": 1
  };
  
  startPoints.map(point => {
    obj.params.startPoints.push({
      "x": point.x,
      "y": point.y,
      "z": point.z
    })
  });

  targetPoints.map((point, i) => {
    obj.params.targetPoints.push({
      "x": point.x,
      "y": point.y,
      "z": point.z,
      "useX": point.useX,
      "useY": point.useY,
      "useZ": point.useZ,
    })
  });

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

app.post('/param-inversion', function(req, res) {
  const paramInversionPoints = req.body.coords;
  let obj = {
    "jsonrpc": "2.0",
    "method": "invertTransformationParameters",
    "params": {
      "transformation": paramInversionPoints,
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


app.post('/calculate-trafo-difference', function(req, res) {
  const startPoints = req.body.startPoints;
  const targetPoints = req.body.targetPoints;
  const trafoParams = req.body.trafoParams;

  let calculatedTarget = [];
  let differences = [];
  let objDifference = {  
    "jsonrpc": "2.0",
    "method": "applyTransformation",
    "params": {
      "point": {},
      "transformation": {
        tx: Number(trafoParams[0]),
        ty: Number(trafoParams[1]),
        tz: Number(trafoParams[2]),
        q0: Number(trafoParams[3]),
        q1: Number(trafoParams[4]),
        q2: Number(trafoParams[5]),
        q3: Number(trafoParams[6]),
        m: 1.0
      }
    },
    "id": 1
  };

  startPoints.map((point, i) => {
    objDifference.params.point = point;
    socket.send(JSON.stringify(objDifference));

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