const comm = require('s3d-fitting-commands');
const WebSocket = require('ws');

let socket = null;

let globalIdCounter = 0;

const getWebSocket = () =>
  new Promise((resolve, reject) => {
    if (socket === null || socket.readyState !== 1) {
      socket = new WebSocket('ws://localhost:8091');
      socket.onopen = () => {
        resolve(socket);
      };
      socket.onerror = (err) => {
        reject(err);
      };
    } else {
      resolve(socket);
    }
  });

const threeDTrafoSendToSocket = (coords, callback) => {
  globalIdCounter += 1;
  const startPoints = coords.startSystemPoints;
  const targetPoints = coords.targetSystemPoints;
  const threeDTrafoRequest = comm.transformation3D6W(startPoints, targetPoints, globalIdCounter);

  const socket = getWebSocket()
    .then((socket) => {
      socket.onerror = (error) => {
        callback(error, false);
      };

      socket.onmessage = (e) => {
        const response = e.data;
        callback(response, true);
      };

      socket.send(threeDTrafoRequest);
    })
    .catch((err) => {
      callback(err, false);
    });
};

const threeDTrafoDifferenceSendToSocket = (params, callback) => {
  const { startPoints } = params;
  const { targetPoints } = params;
  const { trafoParams } = params;

  const calculatedTarget = [];
  const differences = [];

  const socket = getWebSocket()
    .then((socket) => {
      startPoints.forEach((point) => {
        globalIdCounter += 1;
        const objDifference = comm.applyTransformation(point, trafoParams, globalIdCounter);
        socket.send(objDifference);

        socket.onmessage = (e) => {
          const response = JSON.parse(e.data).result;
          calculatedTarget.push(response);
          if (calculatedTarget.length === startPoints.length) {
            calculatedTarget.forEach((target, j) => {
              differences.push({});
              differences[j].vx = targetPoints[j].x - target.x;
              differences[j].vy = targetPoints[j].y - target.y;
              differences[j].vz = targetPoints[j].z - target.z;

              const { vx } = differences[j];
              const { vy } = differences[j];
              const { vz } = differences[j];

              differences[j].v = Math.sqrt(vx ** 2 + vy ** 2 + vz ** 2);
            });
            callback(differences, true);
          }
        };

        socket.onerror = (error) => {
          callback(error, false);
        };
      });
    })
    .catch((err) => {
      callback(err, false);
    });
};

const paramInversionSendToSocket = (coords, callback) => {
  globalIdCounter += 1;
  const inversionRequest = comm.invertTransformationParameters(coords, globalIdCounter);

  const socket = getWebSocket()
    .then((socket) => {
      socket.onerror = (error) => {
        callback(error, false);
      };

      socket.onmessage = (e) => {
        const response = e.data;
        callback(response, true);
      };

      socket.send(inversionRequest);
    })
    .catch((err) => {
      callback(err, false);
    });
};

const ChebyCircleFitSendToSocket = (coords, callback) => {
  globalIdCounter += 1;
  const ChebyCircleFitRequest = comm.fitCircle3DTscheby(coords, globalIdCounter);

  const socket = getWebSocket()
    .then((socket) => {
      socket.onerror = (error) => {
        callback(error, false);
      };

      socket.onmessage = (e) => {
        const response = e.data;
        callback(response, true);
      };

      socket.send(ChebyCircleFitRequest);
    })
    .catch((err) => {
      callback(err, false);
    });
};

const applyTransformation = (values, callback) => {
  const { points } = values;
  const { transformation } = values;

  const results = [];

  const socket = getWebSocket()
    .then((socket) => {
      points.forEach((point, i) => {
        globalIdCounter += 1;
        const objTransformation = comm.applyTransformation(point, transformation, globalIdCounter);
        socket.send(objTransformation);

        socket.onmessage = (e) => {
          const response = JSON.parse(e.data).result;
          results.push(response);
          if (results.length === i + 1) {
            callback(results, true);
          }
        };

        socket.onerror = (error) => {
          callback(error, false);
        };
      });
    })
    .catch((err) => {
      callback(err, false);
    });
};

const fitPlaneGauss = (coords, callback) => {
  globalIdCounter += 1;
  const points = coords.planePoints;
  const requestObj = comm.fitPlaneL2(points, globalIdCounter);

  const socket = getWebSocket()
    .then((socket) => {
      socket.onerror = (error) => {
        callback(error, false);
      };

      socket.onmessage = (e) => {
        const response = e.data;
        callback(response, true);
      };

      socket.send(requestObj);
    })
    .catch((err) => {
      callback(err, false);
    });
};

module.exports = {
  threeDTrafoSendToSocket,
  paramInversionSendToSocket,
  threeDTrafoDifferenceSendToSocket,
  ChebyCircleFitSendToSocket,
  applyTransformation,
  fitPlaneGauss,
};
