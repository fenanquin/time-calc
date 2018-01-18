const Time = require('./time');
const Expression = require('./expression');

class TimeCalculator {
  calculate(strExpr) {
    try {
      let expr = Expression.build(strExpr);
      let result = Expression.reduce(expr);
      return Time.format(result);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TimeCalculator;
