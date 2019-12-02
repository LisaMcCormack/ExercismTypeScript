class Clock {
  private hours: number
  private minutes: number

  constructor(hours: number = 0, minutes: number = 0) {
    this.hours = hours
    this.minutes = minutes
  }

  public toString() {
    // if (this.hours > 24 && this.minutes === 0) { return `0${this.hours % 24}:00` }
      const hrs = this.hours % 24 + Math.floor(this.minutes / 60)
      // if (hrs > 24) {
      //   if (hrs % 24 < 10) {
          return `${hrs % 24}:${this.minutes % 60}`
      //   } if (hrs % 24 > 10) {
      //     return `${hrs % 24}:${this.minutes % 60}`}
      // } else {
      //   return `${hrs % 24}:${this.minutes % 60}`
      // }

    // if (this.hours === 24) {return `00:0${this.minutes}`}
    // if (this.minutes === 60) { return `0${this.hours + 1}:00`}
    // const minsToHours = this.minutes / 60
    // if (minsToHours > 24 ) { return `0${Math.floor(minsToHours % 24)}:${this.minutes % 60}`}
    // if (this.minutes > 60) { return `0${Math.floor(this.minutes/60)}:${this.minutes % 60}`}
    // return this.hours > 9 ? `${this.hours}:0${this.minutes}` : `0${this.hours}:0${this.minutes}`
  }


}


export default Clock;
