enum Month {
    jan = "January",
    feb = "February",
    mar = "March",
    apr = "April",
    may = "May",
    jun = "June",
    jul = "July",
    aug = "August",
    sep = "September",
    oct = "October",
    nov = "November",
    dec = "December"
}

function getMonthName(month: number) {
    switch (month) {
        case 0: return Month.jan
        case 1: return Month.feb
        case 2: return Month.mar
        case 3: return Month.apr
        case 4: return Month.may
        case 5: return Month.jun
        case 6: return Month.jul
        case 7: return Month.aug
        case 8: return Month.sep
        case 9: return Month.oct
        case 10: return Month.nov
        case 11: return Month.dec
        default: return "Not Found"
    }
}

function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true
    else if (year % 100 !== 0 && year % 4 === 0) return true
    return false
}

function getDaysRange(date: Date) {
    let month = date.getMonth()

    if (month === 1) {
        if (isLeapYear(date.getFullYear())) return 29
        return 28
    }
    else if (month === 0 || month === 2 || month === 4 || month === 6 ||
        month === 7 || month === 9 || month === 11) return 31
    else return 30
}

let currentDate = new Date()

export class Day {
    monthDay: number;
    weekDay: number;
    isToday: boolean;

    constructor(monthDay: number, weekDay: number, isToday: boolean) {
        this.monthDay = monthDay,
        this.weekDay = weekDay,
        this.isToday = isToday
    }
}

export class Week {
    _days: Array<Day>;
    _order: number;

    constructor(days: Array<Day>, order: number) {
        this._days = days
        this._order = order;
    }

    public addDay(day: Day) {
        if (this._days.length === 0) {
            this._days[6] = day
            this._days.fill(new Day(0, 0, false), 0, 6)
        }
        else if (this._days[0].monthDay === 0) {
            this._days.shift()
            this._days.push(day)
        }
    }

    public lastWeek() {
        this._days = this._days.sort((a, b) => {
            if (b.monthDay > 0) return 1
            return -1
        })
    }
}

export const calendarData = {
    currentDate: currentDate,
    currentDay: currentDate.getDate(),
    daysRange: getDaysRange(new Date()),
    // Properties not used yet
    /* month: getMonthName(currentDate.getMonth()),
    year: currentDate.getFullYear() */
}

export function generateDays(currentDate: Date) {
    let days = new Array<Day>
    let limit = getDaysRange(currentDate)
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()

    for (let i = 0; i < limit; i++) {
        const today = new Date().getDate() === i + 1
        days.push(new Day((i + 1), new Date(year, month, (i + 1)).getDay(), today))
    }

    return days
}