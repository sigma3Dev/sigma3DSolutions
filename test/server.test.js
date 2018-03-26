const request = require('supertest');
const app = require('../server');

const mockSocket = require('mock-socket');
const sf = require('../socketFunctions/socketFunctions');

describe('GET /', () => {
  it('returns a string and status code 200', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', "text/html; charset=UTF-8")
      .expect(200, done);
  })
});

describe('POST /calculate-trafo', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/calculate-trafo')
      .send({
        wrongData: null
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
  it('mock-socket test', (done) => {
    const mockServer = new mockSocket.Server('ws://localhost:8091');
    mockServer.on('message', server => {
      mockServer.send("Hello");
    });

    request(app)
      .post('/calculate-trafo')
      .set({socket: mockServer})
      .send({
        coords: {
          startSystemPoints: [
            {
              x: 1.0,
              y: 2.0,
              z: 3.0
            }
          ],
          targetSystemPoints: [
            {
              x: 4.0,
              y: 5.0,
              z: 6.0
            }
          ]
        }
      })
      .expect("Hello")
      .end(function(err,res) {
        if (err) return done(err);
        return done(res);
      });
  })
});

describe('POST /param-inversion', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/param-inversion')
      .send({
        wrongData: null
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /calculate-trafo-difference', () => {
  it('returns an object and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/calculate-trafo-difference')
      .send({
        wrongData: null
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});