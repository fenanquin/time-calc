const hourInSeconds = 60 * 60;
const minuteInSeconds = 60;

class Time {
  constructor(input) {
    let parts = input.split(':').reverse().map((part) => parseInt(part));
    let [second, minute, hour = 0] = parts;
    this.second = second;
    this.minute = minute;
    this.hour = hour;
  }

  reduce() {
    return this.hour * hourInSeconds + this.minute * minuteInSeconds + this.second;
  }

  static format(input) {
    let hour = input > 0 ? Math.floor(input / hourInSeconds) : -Math.floor((-input) / hourInSeconds);
    let minute = input > 0 ? Math.floor((input - hour * hourInSeconds) / minuteInSeconds) : - Math.floor((-input + hour * hourInSeconds) / minuteInSeconds);
    let second = input - hour * hourInSeconds - minute * minuteInSeconds;

    let sign = '';
    if (second < 0) {
      sign = '-';
      second = -second;
    }

    if (minute < 0) {
      sign = '-';
      minute = -minute;
    }

    if (hour < 0) {
      sign = '-';
      hour = - hour;
    }
    let strSecond = second > 9 ? second : `0${second}`;
    let strMinute = `${minute}`;
    let strHour = `${hour}`;

    let formattedResult = `${strMinute}:${strSecond}`;
    if (hour > 0) {
      formattedResult = minute > 9 ? `${strHour}:${formattedResult}` : `${strHour}:0${formattedResult}`;
    }

    return sign + formattedResult;
  }
}

module.exports = Time;
