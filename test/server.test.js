const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('returns a string and status code 200', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});

describe('POST /calculate-trafo', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/calculate-trafo')
      .send({
        wrongData: null,
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
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /param-inversion', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/param-inversion')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /calculate-chebyshev-circle-fit', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/calculate-chebyshev-circle-fit')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /apply-trafo', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/apply-trafo')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});
