const express     = require('express'),
      bodyParser  = require('body-parser'),
      WebSocket   = require('ws'),
      path        = require('path'),
      util        = require('util'),
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
  const startPoints = req.body.coords.trafoDataInput.startSystemPoints;
  const targetPoints = req.body.coords.trafoDataInput.targetSystemPoints;

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
      "useX": point['x' + i],
      "useY": point['y' + i],
      "useZ": point['z' + i],
    })
  });

  socket.onerror = error => {
    console.log("WebSocket Error: " + error);
  }

  socket.onmessage = e => {
    const response = e.data;
    console.log(response);
  }

  console.log(util.inspect(obj, false, null));
  socket.send(JSON.stringify(obj));
});

app.listen(app.get("port"), () => {
  console.log("Server is running...");
});