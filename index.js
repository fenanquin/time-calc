class TimeCalculator {
  calculate(expr) {
    if (/min/.exec(expr)) {
      return parseFloat(/\d/.exec(expr))*60 + 's';
    }

    return expr;
  }
}

module.exports = TimeCalculator;
