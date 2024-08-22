const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateStub;
  let consoleSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to return 10
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original methods
    calculateStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    // Verify that calculateNumber was called once with correct arguments
    sinon.assert.calledOnce(calculateStub);
    sinon.assert.calledWithExactly(calculateStub, 'SUM', 100, 20);
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with 'The total is: 10'
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');
  });
});

