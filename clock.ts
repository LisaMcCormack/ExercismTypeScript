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
      const negHours = this.hours % 24
      result.unshift(`${24 + negHours}`.length === 1 ? `0${24 + negHours}` : `${24 + negHours}`)
      result.push(`${this.minutes}`.length === 1 ? `0${this.minutes}` : `${this.minutes}` )
        return result.join('')
    }

    const hrs = this.hours % 24 + Math.floor(this.minutes / 60)
    if (this.minutes < -60) { const negMinHours = 24 + Math.floor(this.minutes / 60) + this.hours
      if (negMinHours > -24) {result.unshift(`${negMinHours}`.length === 1 ? `0${negMinHours}` : `${negMinHours}`)}
      else {const rollOver = 24 + (negMinHours % 24)
        result.unshift(`${rollOver}`.length === 1 ? `0${rollOver}` : `${rollOver}`)
      }
    }
    const timeMinutes = `${this.minutes % 60}`
    if (parseFloat(timeMinutes) < 0) { const negMins = 60 + parseFloat(timeMinutes)
      negMins.toString().length === 1 ? result.push(`0${negMins}`) : result.push(`${negMins}`)
    }

    const timeHours = `${hrs % 24}`
    if (timeHours.length === 1 && result[0] === ':') {result.unshift(`0${hrs % 24}`) }
    if (timeHours.length >1 && result[0] === ':') {result.unshift(`${hrs % 24}`)}
    if (timeMinutes.length === 1 && result[result.length - 1 ] === ':') { result.push(`0${this.minutes % 60}`)}
    if (timeMinutes.length > 1 && result[result.length - 1 ] === ':') {result.push(`${this.minutes % 60}`)}
    return result.join('')

  }

}


export default Clock;
