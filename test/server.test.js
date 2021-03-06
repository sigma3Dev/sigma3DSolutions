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

describe('POST /fit-circle-chebyshev', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-circle-chebyshev')
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

describe('POST /fit-plane-gauss', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-plane-gauss')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-plane-ransac', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-plane-ransac')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /quat-to-cardan', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/quat-to-cardan')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /cardan-to-quat', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/cardan-to-quat')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-cylinder', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-cylinder')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-point', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-point')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-line-l-two', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-line-l-two')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-line-ransac', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-line-ransac')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-circle-l-two', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-circle-l-two')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /fit-sphere', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/fit-sphere')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /bundle-adjustment', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/bundle-adjustment')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});

describe('POST /translate-point-along-axis', () => {
  it('returns a string and status code 400 upon wrong input', (done) => {
    request(app)
      .post('/translate-point-along-axis')
      .send({
        wrongData: null,
      })
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400, done);
  });
});
