class TimeCalculator {
  calculate(expr) {
    let seconds = [];
    let minutes = [];
    if (/\+/.exec(expr)) {
      let operands = expr.split('+');
      operands = operands.map((operand) => operand.trim());
      operands.forEach((operand) => {
        let parts = operand.split(':');
        let second = parseInt(parts[1]);
        if (second) {
          seconds.push(second);
        }

        let minute = parseInt(parts[0]);
        if (minute) {
          minutes.push(minute);
        }
      });

      let accSecond = seconds.length ? seconds.reduce((acc, v) => acc + v) : 0;
      if (accSecond >= 60) {
        minutes.push(Math.floor(accSecond / 60));
        accSecond = accSecond % 60;
      }

      let accMinute = minutes.length ? minutes.reduce((acc, v) => acc + v) : 0;

      let strSecond = accSecond > 9 ? accSecond : `0${accSecond}`;
      let strMinute = `${accMinute}`;
      return `${strMinute}:${strSecond}`;
    }
    return expr;
  }
}

module.exports = TimeCalculator;
