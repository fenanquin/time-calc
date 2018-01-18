class Time {
  constructor(input) {
    let parts = input.split(':').reverse().map((part) => parseInt(part));
    let [second, minute, hour = 0] = parts;
    this.second = second;
    this.minute = minute;
    this.hour = hour;
  }

  reduce() {
    return this.hour*60*60 + this.minute*60 + this.second;
  }

  static format(input) {
    let hour = Math.floor(input / (60*60));
    let minute = Math.floor((input - hour*60*60) / 60);
    let second = input - hour*60*60 - minute*60;

    let strSecond = second > 9 ? second : `0${second}`;
    let strMinute = `${minute}`;
    let strHour = `${hour}`;

    let formattedResult = `${strMinute}:${strSecond}`;
    if (hour > 0) {
      formattedResult = input.minute > 9 ? `${strHour}:${formattedResult}` : `${strHour}:0${formattedResult}`;
    }

    return formattedResult;
  }
}

module.exports = Time;
