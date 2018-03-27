const comm        = require('s3d-fitting-commands');

const WebSocket = require('ws');

let socket = null;

let getWebSocket = () => (new Promise((resolve, reject) => {
  if(socket === null || socket.readyState !== 1) {
    socket = new WebSocket('ws://localhost:8091');
    socket.onopen = function() {
      resolve(socket);
    };
    socket.onerror = function(err) {
      reject(err);
    };
    socket.onclose = function(err) {
      console.log("WEBSOCKET ZUUUUUUU")
    };
  } else {
    resolve(socket);
  }
}));

const threeDTrafoSendToSocket = (coords, callback) => {
  const startPoints = coords.startSystemPoints;
  const targetPoints = coords.targetSystemPoints;
  const threeDTrafoRequest = comm.transformation3D6W(startPoints, targetPoints, 1);

  let socket = getWebSocket().then(function(socket) {
    socket.onerror = error => {
      callback(error, false)
    }
  
    socket.onmessage = e => {
      const response = e.data;
      callback(response, true)
    }

    socket.send(threeDTrafoRequest);
  }).catch(function(err) {
    callback(err, false)
  });
}

const paramInversionSendToSocket = (coords, callback) => {
  const inversionRequest = comm.invertTransformationParameters(coords, 1);

  let socket = getWebSocket().then(function(socket) {
    socket.onerror = error => {
      callback(error.error, false)
    }
  
    socket.onmessage = e => {
      const response = e.data;
      callback(response, true)
    }

    socket.send(inversionRequest);
  }).catch(function(err) {
    callback(err, false)
  });

}

const threeDTrafoDifferenceSendToSocket = (params, callback) => {
  const startPoints = params.startPoints;
  const targetPoints = params.targetPoints;
  const trafoParams = params.trafoParams;

  let calculatedTarget = [];
  let differences = [];

  let socket = getWebSocket().then(function(socket) {
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
          callback(differences, true);
        }
      }

      socket.onerror = error => {
        callback(error, false)
      }
    });
  }).catch(function(err) {
    callback(err, false)
  });
}

module.exports = {
  threeDTrafoSendToSocket,
  paramInversionSendToSocket,
  threeDTrafoDifferenceSendToSocket,
  getWebSocket,
};