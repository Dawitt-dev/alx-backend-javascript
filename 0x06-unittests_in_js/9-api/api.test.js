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

