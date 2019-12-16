class Clock {
  private hours: number
  private minutes: number

  constructor(hours: number = 0, minutes: number = 0) {
    this.hours = hours
    this.minutes = minutes
  }

  public toString() {
    const hours = ((this.hours % 24 + Math.floor(this.minutes / 60)) % 24 ).toString().padStart(2, '0')
    const minutes = (this.minutes % 60).toString().padStart(2, '0')
    return `${parseFloat(hours) < 0 ? (24 + parseFloat(hours)).toString().padStart(2, '0') : hours}:${parseFloat(minutes) < 0 ? (60 + parseFloat(minutes)).toString().padStart(2, '0') : minutes}`
  }

  public plus(min: number) {
    return new Clock(this.hours, this.minutes + min)
  }

  public minus(min: number) {
    return new Clock(this.hours, this.minutes - min)
  }

  public equals(clock: Clock) {
    return this.toString() === clock.toString()
  }

}


export default Clock;
