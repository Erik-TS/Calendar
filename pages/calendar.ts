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
        if(isLeapYear(date.getFullYear())) return 29
        return 28
    }
    else if (month === 0 || month === 2 || month === 4 || month === 6 ||
        month === 7 || month === 9 || month === 11) return 31
    else return 30
}

function getDaysArr(range: number){
    let arr = []

    for(let i = 0; i < range; i++){
        arr.push(i + 1)
    }

    return arr
}

let currentDate = new Date()

const calendarData = {
    currentDate: currentDate,
    currentDay: currentDate.getDate(),
    month: getMonthName(currentDate.getMonth()),
    daysRange: getDaysRange(new Date()),
    year: currentDate.getFullYear()
}

export default calendarData