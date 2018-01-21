const Time = require('./time');
const Expression = require('./expression');

class TimeCalculator {
  calculate(strExpr) {
    try {
      let expr = Expression.build(strExpr);
      let result = expr.reduce();
      return Time.format(result);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TimeCalculator;
