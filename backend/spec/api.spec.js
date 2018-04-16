process.env.NODE_ENV = 'test';

const app = require('../server');
const request = require('supertest');
const expect = require('chai').expect;

describe('-----API endpoints-----', () => {
  
  describe('/', () => {
    it('responds with a 200 status', (done) => {
      request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe('/api - endpoint', () => {
    it('responds with 200 on /apply ', (done) => {
      request(app)
        .get('/api/apply')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
    it('responds with 200 on /signup ', (done) => {
      request(app)
        .get('/api/signup')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
    it('responds with 200 on /signin ', (done) => {
      request(app)
        .get('/api/signin')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
    it('responds with 200 on /reject ', (done) => {
      request(app)
        .get('/api/reject')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
    it('responds with 200 on /contact ', (done) => {
      request(app)
        .get('/api/contact')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
  });

  describe('/api/admin - private endpoint', () => {
    it('responds with 200 on /admin/customers ', (done) => {
      request(app)
        .get('/api/admin/customers')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
    it('responds with 200 on /admin/modifyvalues', (done) => {
      request(app)
        .get('/api/admin/modifyvalues')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    })
  });

  describe('unhandled endpoints', () => {
    it('responds with json on unexistent handles', (done) => {
      request(app)
        .get('/api/test')
        .end((req, res) => {
          expect(res.type).to.equal('application/json');
          done();
        })
    })
  });
});