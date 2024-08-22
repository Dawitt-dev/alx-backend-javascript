const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateStub;
  let consoleSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to return 10 always
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original methods after each test
    calculateStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    // Verify that calculateNumber was called once with correct arguments
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with 'The total is: 10'
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});

