class TimeCalculator {
  calculate(expr) {
    let seconds = [];
    if (/\+/.exec(expr)) {
      let operands = expr.split('+');
      operands = operands.map((operand) => operand.trim());
      operands.forEach((operand) => {
        let parts = operand.split(':');
        let second = parseInt(parts[1]);
        if (second) {
          seconds.push(second);
        }
      });

      let accSecond = seconds.reduce((acc, v) => acc + v);
      let strSecond = accSecond > 9 ? accSecond : `0${accSecond}`;
      return `0:${strSecond}`;
    }
    return expr;
  }
}

module.exports = TimeCalculator;
