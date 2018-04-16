process.env.NODE_ENV = 'test';

const app = require('../server');
const request = require('supertest');
const expect = require('chai').expect;

describe('-----API endpoints-----', () => {
  describe('/ - GET', () => {
    it('responds with a 200 status', (done) => {
      request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});