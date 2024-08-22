// api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('Correct status code?', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    const url = 'http://localhost:7865/cart/12';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number?', (done) => {
    const url = 'http://localhost:7865/cart/hello';
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('Correct response object?', (done) => {
    const url = 'http://localhost:7865/available_payments';
    request(url, { json: true }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login', () => {
  it('Correct response with userName?', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('Missing userName should return 400', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {},
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing userName');
      done();
    });
  });
});

