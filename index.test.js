const assert = require('chai').assert;
const TimeCalculator = require('./index');

describe('TimeCalculator', () => {
  it('should convert 0:01 to 0:01', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:01', calc.calculate('0:01'));
  });

  it('should convert 1:00:00 to 1:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:00:00', calc.calculate('1:00:00'));
  });

  it('should 0:01 + 0:02 be equal to 0:03', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:03', calc.calculate('0:01 + 0:02'));
  });

  it('should 0:09 + 0:01 be equal to 0:10', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:10', calc.calculate('0:09 + 0:01'));
  });

  it('should 0:59 + 0:01 be equal to 1:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:00', calc.calculate('0:59 + 0:01'));
  });

  it('should 0:59 + 0:02 be equal to 1:01', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:01', calc.calculate('0:59 + 0:02'));
  });

  it('should 0:00 + 0:00 be equal to 0:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:00', calc.calculate('0:00 + 0:00'));
  });

  it('should 1:00 + 2:00 be equal to 3:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('3:00', calc.calculate('1:00 + 2:00'));
  });

  it('should 9:00 + 1:00 be equal to 10:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('10:00', calc.calculate('9:00 + 1:00'));
  });

  it('should 1:00 + 2:00 + 3:00 be equal to 6:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('6:00', calc.calculate('1:00 + 2:00 + 3:00'));
  });

  it('should 59:00 + 1:00 be equal to 1:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:00:00', calc.calculate('59:00 + 1:00'));
  });

  it('should 1:00:00 + 2:00:00 be equal to 3:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('3:00:00', calc.calculate('1:00:00 + 2:00:00'));
  });

  it('should 1:10:00 + 2:20:00 be equal to 3:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('3:30:00', calc.calculate('1:10:00 + 2:20:00'));
  });

  it('should 0:02 - 0:01 be equal to 0:01', () => {
    let calc = new TimeCalculator(':');
    assert.equal('0:01', calc.calculate('0:02 - 0:01'));
  });

  it('should 0:01 - 0:02 be equal to -0:01', () => {
    let calc = new TimeCalculator(':');
    assert.equal('-0:01', calc.calculate('0:01 - 0:02'));
  });

  it('should 0:01 - 0:11 be equal to -0:10', () => {
    let calc = new TimeCalculator(':');
    assert.equal('-0:10', calc.calculate('0:01 - 0:11'));
  });

  it('should 2:00 - 1:00 be equal to 1:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:00', calc.calculate('2:00 - 1:00'));
  });

  it('should 1:00 - 2:00 be equal to -1:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('-1:00', calc.calculate('1:00 - 2:00'));
  });

  it('should 1:00 - 2:00 + 3:00 be equal to 2:00', () => {
    debugger;
    let calc = new TimeCalculator(':');
    assert.equal('2:00', calc.calculate('1:00 - 2:00 + 3:00'));
  });

  it('should 2:00:00 - 1:00:00 be equal to 1:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('1:00:00', calc.calculate('2:00:00 - 1:00:00'));
  });

  it('should 1:00:00 - 2:00:00 be equal to -1:00:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('-1:00:00', calc.calculate('1:00:00 - 2:00:00'));
  });

  it('should 1:10:00 - 2:00:00 be equal to -50:00', () => {
    let calc = new TimeCalculator(':');
    assert.equal('-50:00', calc.calculate('1:10:00 - 2:00:00'));
  });
});
