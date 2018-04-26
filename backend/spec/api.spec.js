process.env.NODE_ENV = 'test';

const app = require('../server');
const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const seedData = require('../lib/seed').seedData;

describe('-----API endpoints-----', () => {
  let data;

  before(done => {
    data = seedData;
    done();
  });

  after(done => {
    mongoose.connection.close();
    done();
  })

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
    it('responds with the correct boolean on /apply ', (done) => {
      request(app)
        .post('/api/apply')
        .send({
          "amount": 2000,
          "duration": 36
        })
        .end((req, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body.isEligible).to.be.true;
          done();
        })
    })
    it('handles /signup correctly', (done) => {
      request(app)
        .post('/api/signup')
        .send({
          "first_name" : "Test",
          "last_name" : "Ivli",
          "address" : "The same",
          "postcode" : "m12399sn",
          "dob" : "01.01.1900",
          "risk_category" : "medium"
          })
        .end((req, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body.first_name).to.equal('Test');
          done();
        })
    })
  });

  describe('/api/admin - private endpoint', () => {
    it('returns all the customers on /admin/customers ', (done) => {
      request(app)
        .get('/api/admin/customers')
        .end((req, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.length).to.equal(2);
          done();
        })
    })
    it('handles correctly the /admin/modifyvalues route', (done) => {
      request(app)
        .put('/api/admin/modifyvalues')
        .send({
          "low_credit_score": 0.1,
          "high_credit_score": 600,
          "interest_rate": 0.1,
          "low_loan_amount": 500,
          "high_loan_amount": 2500,
          "loan_maximum_ceiling": 5000
          })
        .end((req, res) => {
          expect(res.status).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body.low_credit_score).to.equal(0.1);
          done();
        });
    });
  });

  describe('unhandled endpoints', () => {
    it('responds with json on unexistent handles', (done) => {
      request(app)
        .get('/api/test')
        .end((req, res) => {
          expect(res.type).to.equal('application/json');
          done();
        })
    });
    it('responds with an error obj on unexistent handles', (done) => {
      request(app)
        .get('/api/test')
        .end((req, res) => {
          expect(res.body.error).to.be.an('object');
          done();
        });
    });
    it('the error has a 404 status on unexistent handles', (done) => {
      request(app)
        .get('/api/test')
        .end((req, res) => {
          expect(res.body.error.status).to.equal(404);
          done();
        });
    });
  });
});