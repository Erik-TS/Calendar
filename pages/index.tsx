import * as calendarLogic from './calendarLogic'
import Week from "./week"
import Calendar from './calendar'

export default function () {

    let daysArr = calendarLogic.generateDays(new Date())
    const firstDay = daysArr[0].weekDay

    const week1 = new calendarLogic.Week([], 0)
    const week2 = new calendarLogic.Week([], 0)
    const week3 = new calendarLogic.Week([], 0)
    const week4 = new calendarLogic.Week([], 0)
    const week5 = new calendarLogic.Week([], 0)

    let weeksArr = [week2, week3, week4, week5]

    daysArr.forEach((value, index) => {
        if (index <= (6 - firstDay)) {
            week1.addDay(value)
        }
    })
    daysArr = daysArr.filter((v, i) => i > (6 - firstDay))

    weeksArr.forEach(week => {
        daysArr.forEach((value, i) => {
            if (i < 7) week.addDay(value)
        })
        daysArr = daysArr.filter((v, j) => j >= 7)
    })

    week5.lastWeek()
    weeksArr.unshift(week1)

    return (
        <div>
            <Calendar weeks={weeksArr} />
        </div>
    )
}