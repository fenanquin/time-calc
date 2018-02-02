const assert = require('chai').assert;
const TimeCalculator = require('./index');

describe('TimeCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new TimeCalculator(':');
  });

  it('should convert 0:01 to 0:01', () => {
    assert.equal('0:01', calc.calculate('0:01'));
  });

  it('should convert 1:00:00 to 1:00:00', () => {
    assert.equal('1:00:00', calc.calculate('1:00:00'));
  });

  it('should 0:01 + 0:02 be equal to 0:03', () => {
    assert.equal('0:03', calc.calculate('0:01 + 0:02'));
  });

  it('should 0:09 + 0:01 be equal to 0:10', () => {
    assert.equal('0:10', calc.calculate('0:09 + 0:01'));
  });

  it('should 0:59 + 0:01 be equal to 1:00', () => {
    assert.equal('1:00', calc.calculate('0:59 + 0:01'));
  });

  it('should 0:59 + 0:02 be equal to 1:01', () => {
    assert.equal('1:01', calc.calculate('0:59 + 0:02'));
  });

  it('should 0:00 + 0:00 be equal to 0:00', () => {
    assert.equal('0:00', calc.calculate('0:00 + 0:00'));
  });

  it('should 1:00 + 2:00 be equal to 3:00', () => {
    assert.equal('3:00', calc.calculate('1:00 + 2:00'));
  });

  it('should 1:00 + 2:00 + 3:00 + 4:00 + 5:00 be equal to 15:00', () => {
    assert.equal('15:00', calc.calculate('1:00 + 2:00 + 3:00 + 4:00 + 5:00'));
  });

  it('should 9:00 + 1:00 be equal to 10:00', () => {
    assert.equal('10:00', calc.calculate('9:00 + 1:00'));
  });

  it('should 1:00 + 2:00 + 3:00 be equal to 6:00', () => {
    assert.equal('6:00', calc.calculate('1:00 + 2:00 + 3:00'));
  });

  it('should 59:00 + 1:00 be equal to 1:00:00', () => {
    assert.equal('1:00:00', calc.calculate('59:00 + 1:00'));
  });

  it('should 1:00:00 + 2:00:00 be equal to 3:00:00', () => {
    assert.equal('3:00:00', calc.calculate('1:00:00 + 2:00:00'));
  });

  it('should 1:10:00 + 2:20:00 be equal to 3:00:00', () => {
    assert.equal('3:30:00', calc.calculate('1:10:00 + 2:20:00'));
  });

  it('should 0:02 - 0:01 be equal to 0:01', () => {
    assert.equal('0:01', calc.calculate('0:02 - 0:01'));
  });

  it('should 0:01 - 0:02 be equal to -0:01', () => {
    assert.equal('-0:01', calc.calculate('0:01 - 0:02'));
  });

  it('should 0:01 - 0:11 be equal to -0:10', () => {
    assert.equal('-0:10', calc.calculate('0:01 - 0:11'));
  });

  it('should 2:00 - 1:00 be equal to 1:00', () => {
    assert.equal('1:00', calc.calculate('2:00 - 1:00'));
  });

  it('should 1:00 - 2:00 be equal to -1:00', () => {
    assert.equal('-1:00', calc.calculate('1:00 - 2:00'));
  });

  it('should 1:00 - 2:00 + 3:00 be equal to 2:00', () => {
    assert.equal('2:00', calc.calculate('1:00 - 2:00 + 3:00'));
  });

  it('should 2:00:00 - 1:00:00 be equal to 1:00:00', () => {
    assert.equal('1:00:00', calc.calculate('2:00:00 - 1:00:00'));
  });

  it('should 1:00:00 - 2:00:00 be equal to -1:00:00', () => {
    assert.equal('-1:00:00', calc.calculate('1:00:00 - 2:00:00'));
  });

  it('should 1:10:00 - 2:00:00 be equal to -50:00', () => {
    assert.equal('-50:00', calc.calculate('1:10:00 - 2:00:00'));
  });

  it('should 1 be equal to 0:01', () => {
    assert.equal('0:01', calc.calculate('1'));
  });

  it('should 2 * 3:00 be equal to 6:00', () => {
    assert.equal('6:00', calc.calculate('2 * 3:00'));
  });

  it('should 1 * 2:00 be equal to 2:00', () => {
    assert.equal('2:00', calc.calculate('1 * 2:00'));
  });

  it('should 2 * 1:30:00 be equal to 3:00:00', () => {
    assert.equal('3:00:00', calc.calculate('2 * 1:30:00'));
  });

  it('should 2.5 * 1:00:00 be equal to 2:30:00', () => {
    assert.equal('2:30:00', calc.calculate('2.5 * 1:00:00'));
  });

  it('should 1.5 * 1:00 be equal to 1:30', () => {
    assert.equal('1:30', calc.calculate('1.5 * 1:00'));
  });

  it('should 2 * 0:30 be equal to 1:00', () => {
    assert.equal('1:00', calc.calculate('2 * 0:30'));
  });

  it('should 0:01 * 10 be equal to 0:10', () => {
    assert.equal('0:10', calc.calculate('10 * 0:01'));
  });

  it('should 1:00 / 2 be equal to 0:30', () => {
    assert.equal('0:30', calc.calculate('1:00 / 2'));
  });

  it('should 1:00:00 / 2 be equal to 30:00', () => {
    assert.equal('30:00', calc.calculate('1:00:00 / 2'));
  });

  it('should 1:00:00 / 0.5 be equal to 2:00:00', () => {
    assert.equal('2:00:00', calc.calculate('1:00:00 / 0.5'));
  });

  it('should 1:00 / 0.5 be equal to 2:00', () => {
    assert.equal('2:00', calc.calculate('1:00 / 0.5'));
  });

  it('should 3:00 / 0.75 be equal to 4:00', () => {
    assert.equal('4:00', calc.calculate('3:00 / 0.75'));
  });

  it('should 1:00 / 0.125 be equal to 8:00', () => {
    assert.equal('8:00', calc.calculate('1:00 / 0.125'));
  });
});
