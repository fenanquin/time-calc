const assert = require('chai').assert;
const TimeCalculator = require('./index');

describe('TimeCalculator', () => {
  it('should convert 1s to 1s', () => {
    let calc = new TimeCalculator('s');
    assert.equal('1s', calc.calculate('1s'));
    assert.equal('2s', calc.calculate('2s'));
  });
});
