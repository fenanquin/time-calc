const assert = require('chai').assert;
const TimeCalculator = require('./index');

describe('TimeCalculator', () => {
  it('should convert 0:01 to 0:01', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:01', calc.calculate('0:01'));
  });

  it('should 0:01 + 0:02 be equal to 0:03', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:03', calc.calculate('0:01 + 0:02'));
  });

  it('should 0:09 + 0:01 be equal to 0:10', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:10', calc.calculate('0:09 + 0:01'));
  });
});
