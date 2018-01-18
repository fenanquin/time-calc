const Time = require('./time');

class Expression {
  constructor(firstOperand, secondOperand, operator) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.operator = operator;
  }
  static build(strExpr) {
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
  static reduce(times) {
    return times.length ?
      times.map((time) => time.reduce()).
        reduce((acc, v) => acc + v) :
      0;
  }
}

module.exports = Expression;
