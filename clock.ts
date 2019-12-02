class Clock {
  private hours: number
  private minutes: number

  constructor(hours: number = 0, minutes: number = 0) {
    this.hours = hours
    this.minutes = minutes
  }

  public toString() {
    const result = [':']
    if (this.hours < 0 ) {
      result.unshift(`${24 + this.hours}`)
      result.push(`${this.minutes}`)
        return result.join('')
    }
    const hrs = this.hours % 24 + Math.floor(this.minutes / 60)
    const timeHours = `${hrs % 24}`
    timeHours.length === 1 ? result.unshift(`0${hrs % 24}`) : result.unshift(`${hrs % 24}`)
    const timeMinutes = `${this.minutes % 60}`
    timeMinutes.length === 1 ? result.push(`0${this.minutes % 60}`) : result.push(`${this.minutes % 60}`)
    return result.join('')
  }
}


export default Clock;
