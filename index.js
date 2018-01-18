class TimeCalculator {
  calculate(strExpr) {
    try {
      let expr = this.parseExpression(strExpr);
      let result = this.processExpression(expr);
      return this.formatResult(result);
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
        times.push(this.parseTime(operand));
      });
    } else {
      times.push(this.parseTime(strExpr));
    }

    return times;
  }

  processExpression(times) {
    return times.length ?
      times.map((time) => time.hour*60*60 + time.minute*60 + time.second).
        reduce((acc, v) => acc + v) :
      0;
  }

  formatResult(result) {
    let hour = Math.floor(result / (60*60));
    let minute = Math.floor((result - hour*60*60) / 60);
    let second = result - hour*60*60 - minute*60;

    let strSecond = second > 9 ? second : `0${second}`;
    let strMinute = `${minute}`;
    let strHour = `${hour}`;

    let formattedResult = `${strMinute}:${strSecond}`;
    if (hour > 0) {
      formattedResult = result.minute > 9 ? `${strHour}:${formattedResult}` : `${strHour}:0${formattedResult}`;
    }

    return formattedResult;
  }

  parseTime(input) {
    let parts = input.split(':').reverse().map((part) => parseInt(part));
    let [second, minute, hour = 0] = parts;

    return { second, minute, hour};
  }
}

module.exports = TimeCalculator;
