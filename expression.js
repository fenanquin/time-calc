const Time = require('./time');

class Expression {
  constructor() {
    this.operands = [];
    this.operator;
  }
  static build(strExpr) {
    let rootExpr = new Expression();
    let matched, expr = rootExpr;
    strExpr = strExpr.trim();
    while (strExpr) {
      if (matched = strExpr.match(/^(\d{1,2}:)?\d{1,2}:\d{2}/)) {
        if (expr.operands.length < 2) {
          expr.operands.push(new Time(matched[0]));
        }
      } else if (matched = strExpr.match(/^[\+\-]/)) {
        if (expr.operator) {
          expr = new Expression();
          expr.operands.push(rootExpr);
          rootExpr = expr;
        }

        expr.operator = matched[0];
      }

      strExpr = strExpr.slice(matched[0].length + matched.index).trim();
    }

    return rootExpr.operands.length > 1 ? rootExpr : rootExpr.operands[0];
  }
  reduce() {
    if (this.operator === '+') {
      return this.operands[0].reduce() + this.operands[1].reduce();
    } else if (this.operator === '-') {
      return this.operands[0].reduce() - this.operands[1].reduce();
    } else {
      throw new Error(this);
    }
  }
}

module.exports = Expression;
