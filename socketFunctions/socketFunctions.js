const WebSocket   = require('ws'),
      comm        = require('s3d-fitting-commands');

const socket      = new WebSocket('ws://localhost:8091');

const threeDTrafoSendToSocket = (obj, res) => {
  socket.send(obj);

  socket.onerror = error => {
    console.log("WebSocket Error: " + JSON.stringify(error.error));
    res.status(500).send(error);
  }

  socket.onmessage = e => {
    const response = e.data;
    res.status(200).send(response);
  }
}

const paramInversionSendToSocket = (obj, res) => {
  socket.send(obj);

  socket.onerror = error => {
    console.log("WebSocket Error: " + JSON.stringify(error.error));
    res.status(500).send(error);
  }

  socket.onmessage = e => {
    const response = e.data;
    res.status(200).send(response);
  }
}

const threeDTrafoDifferenceSendToSocket = (res, startPoints, targetPoints, trafoParams) => {
  let calculatedTarget = [];
  let differences = [];

  startPoints.map((point, i) => {
    const objDifference = comm.applyTransformation(point, trafoParams, 1);
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
      console.log("WebSocket Error: " + JSON.stringify(error.error));
      res.send(error);
    }
  });
}

module.exports = {
  threeDTrafoSendToSocket,
  paramInversionSendToSocket,
  threeDTrafoDifferenceSendToSocket
};