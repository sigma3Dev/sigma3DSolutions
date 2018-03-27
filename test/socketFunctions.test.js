const mockSocket  = require('mock-socket'),
      sf          = require('../socketFunctions/socketFunctions'),
      WebSocket   = require('ws'),
      comm        = require('s3d-fitting-commands'),
      assert      = require('assert');

describe('threeDTrafoSendToSocket', () => {
  it('returns a json object', (done) => {
    let hasBeenCalled = false;

    const coords = {
      startSystemPoints: [
        {
          x: 1,
          y: 2,
          z: 3
        }
      ],
      targetSystemPoints: [
        {
          x: 4,
          y: 5,
          z: 6
        }
      ]
    };

    const mockServer = new mockSocket.Server('ws://localhost:8091');
    mockServer.on('message', requestParam => {
      console.log('mock server msg')
      mockServer.send(requestParam);
    });

    sf.getWebSocket = function() {
      return new Promise((resolve, reject) => {
        const socket = new WebSocket('ws://localhost:8091');
        socket.onopen = function() {
          resolve(socket);
        };
        socket.onerror = function(err) {
          reject(err);
        };
      })
    };

    sf.threeDTrafoSendToSocket(coords, (response) => {
      hasBeenCalled = true;
      assert.deepEqual(JSON.parse(response), {
        "jsonrpc": "2.0",
        "id":1,
        "method": "transformation3D6W",
        "params": {
          "startPoints": [
            {
              "x": 1,
              "y": 2,
              "z": 3
            }
          ],
          "targetPoints": [
            {
              "x": 4,
              "y": 5,
              "z": 6
            }
          ]
        }
      });
    });

    setTimeout(() => {
      mockServer.stop(done);
      assert.equal(hasBeenCalled, true);
    }, 100);
  });
});

describe('paramInversionSendToSocket', () => {
  it('returns a json object', (done) => {
    let hasBeenCalled = false;

    const coords = {
      tx: 10,
      ty: 10,
      tz: 10,
      q0: 1,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 1
    };

    const mockServer = new mockSocket.Server('ws://localhost:8091');
    mockServer.on('message', requestParam => {
      mockServer.send(requestParam);
    });

    sf.getWebSocket = function() {
      return new Promise((resolve, reject) => {
        const socket = new WebSocket('ws://localhost:8091');
        socket.onopen = function() {
          resolve(socket);
        };
        socket.onerror = function(err) {
          reject(err);
        };
      })
    };

    sf.paramInversionSendToSocket(coords, (response) => {
      hasBeenCalled = true;
      assert.deepEqual(JSON.parse(response), {
        "jsonrpc": "2.0",
        "id":1,
        "method": "invertTransformationParameters",
        "params": {
            "transformation": {
              "tx":10,
              "ty":10,
              "tz":10,
              "q0":1,
              "q1":0,
              "q2":0,
              "q3":0,
              "m":1
            }
        }
      });
    });

    setTimeout(() => {
      mockServer.stop(done);
      assert.equal(hasBeenCalled, true);
    }, 100);
  });
});

describe('threeDTrafoDifferenceSendToSocket', () => {
  it('returns a json object', (done) => {
    let hasBeenCalled = false;

    const coords = {
      point: {
        x: 1,
        y: 2,
        z: 3
      },
      transformation: {
        tx:10,
        ty:10,
        tz:10,
        q0:1,
        q1:0,
        q2:0,
        q3:0,
        m:1
      }
    };

    const mockServer = new mockSocket.Server('ws://localhost:8091');
    mockServer.on('message', requestParam => {
      mockServer.send(requestParam);
    });

    sf.getWebSocket = function() {
      return new Promise((resolve, reject) => {
        const socket = new WebSocket('ws://localhost:8091');
        socket.onopen = function() {
          resolve(socket);
        };
        socket.onerror = function(err) {
          reject(err);
        };
      })
    };

    sf.threeDTrafoDifferenceSendToSocket(coords, (response) => {
      hasBeenCalled = true;
      assert.deepEqual(JSON.parse(response), {
        "jsonrpc": "2.0",
        "id":1,
        "method": "applyTransformation",
        "params": {
          "point": {
            "x": 1,
            "y": 2,
            "z": 3
          },
          "transformation": {
            "tx":10,
            "ty":10,
            "tz":10,
            "q0":1,
            "q1":0,
            "q2":0,
            "q3":0,
            "m":1
          }
        }
      });
    });

    setTimeout(() => {
      mockServer.stop(done);
      assert.equal(hasBeenCalled, true);
    }, 100);
  });
});