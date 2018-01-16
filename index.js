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
    let seconds = [];
    let minutes = [];
    let hours = [];

    if (/\+/.exec(strExpr)) {
      let operands = strExpr.split('+');
      operands = operands.map((operand) => operand.trim());
      operands.forEach((operand) => {
        let time = this.parseTime(operand);
        seconds.push(time.second);
        minutes.push(time.minute);
        hours.push(time.hour);
      });
    } else {
      let time = this.parseTime(strExpr);
      seconds.push(time.second);
      minutes.push(time.minute);
      hours.push(time.hour);
    }

    return {seconds, minutes, hours};
  }

  processExpression(expr) {
    let result = {};
    let accSecond = expr.seconds.length ? expr.seconds.reduce((acc, v) => acc + v) : 0;
    if (accSecond >= 60) {
      expr.minutes.push(Math.floor(accSecond / 60));
      accSecond = accSecond % 60;
    }

    let accMinute = expr.minutes.length ? expr.minutes.reduce((acc, v) => acc + v) : 0;
    if (accMinute >= 60) {
      expr.hours.push(Math.floor(accMinute / 60));
      accMinute = accMinute % 60;
    }

    let accHour = expr.hours.length ? expr.hours.reduce((acc, v) => acc + v) : 0;

    return {
      hour: accHour,
      minute: accMinute,
      second: accSecond
    };
  }

  formatResult(result) {
    let strSecond = result.second > 9 ? result.second : `0${result.second}`;
    let strMinute = `${result.minute}`;
    let strHour = `${result.hour}`;
    let formattedResult = `${strMinute}:${strSecond}`;
    if (result.hour > 0) {
      formattedResult = result.minute > 9 ? `${strHour}:${formattedResult}` : `${strHour}:0${formattedResult}`;
    }

    return formattedResult;
  }

  parseTime(input) {
    let parts = input.split(':');
    let second = 0;
    let minute = 0;
    let hour = 0;

    if (parts.length === 3) {
      second = parseInt(parts[2]);
      minute = parseInt(parts[1]);
      hour = parseInt(parts[0]);
    } else {
      second = parseInt(parts[1]);
      minute = parseInt(parts[0]);
    }

    return {second, minute, hour};
  }
}

module.exports = TimeCalculator;
