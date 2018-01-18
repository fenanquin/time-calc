const Time = require('./time');

class TimeCalculator {
  calculate(strExpr) {
    try {
      let expr = this.parseExpression(strExpr);
      let result = this.processExpression(expr);
      return Time.format(result);
    } catch (e) {
      console.log(e);
    }
  }

  parseExpression(strExpr) {
    let times = [];

    if (/\+/.exec(strExpr)) {
      let operands = strExpr.split('+');
      operands = operands.map((operand) => operand.trim());
      operands.forEach((operand) => {
        times.push(new Time(operand));
      });
    } else {
      times.push(new Time(strExpr));
    }

    return times;
  }

  processExpression(times) {
    return times.length ?
      times.map((time) => time.reduce()).
        reduce((acc, v) => acc + v) :
      0;
  }
}

module.exports = TimeCalculator;
