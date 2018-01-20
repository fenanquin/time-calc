const Time = require('./time');

class Expression {
  constructor(firstOperand, secondOperand, operator) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.operator = operator;
  }
  static build(strExpr) {
    let times = [];

    let texpr = strExpr.trim();
    let matched, firstOperand, operator, secondOperand
    if (matched = texpr.match(/^(\d{1,2}:)?\d{1,2}:\d{2}/)) {
      firstOperand = matched[0];
      texpr = texpr.slice(firstOperand.length + matched.index);
    }

    texpr = texpr.trim();
    if (matched = texpr.match(/^[\+]/)) {
      operator = matched[0];
      texpr = texpr.slice(operator.length + matched.index);
    }

    texpr = texpr.trim();
    if (matched = texpr.match(/^(\d{1,2}:)?\d{1,2}:\d{2}/)) {
      secondOperand = matched[0];
      texpr = texpr.slice(secondOperand.length + matched.index);
    }

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
