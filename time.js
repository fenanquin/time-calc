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
    let hour = Math.floor(input / hourInSeconds);
    let minute = Math.floor((input - hour * hourInSeconds) / minuteInSeconds);
    let second = input - hour * hourInSeconds - minute * minuteInSeconds;

    let strSecond = second > 9 ? second : `0${second}`;
    let strMinute = `${minute}`;
    let strHour = `${hour}`;

    let formattedResult = `${strMinute}:${strSecond}`;
    if (hour > 0) {
      formattedResult = minute > 9 ? `${strHour}:${formattedResult}` : `${strHour}:0${formattedResult}`;
    }

    return formattedResult;
  }
}

module.exports = Time;
