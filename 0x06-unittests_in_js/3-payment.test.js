// 3-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);	 
    spy.calculateNumber.restore(); // Always restore the spy after the test
  });
});

