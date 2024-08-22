// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when rounding -1 and 1', () => {
      expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when rounding 4 and 4', () => {
      expect(calculateNumber('SUBTRACT', 4, 4)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when rounding 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing 1 by 0.4 (rounds to 0)', () => {
      expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error');
    });
  });

  it('should throw an error when type is invalid', () => {
    expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
  });
});

