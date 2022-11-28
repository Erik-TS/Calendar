import * as calendar from './calendar'
import Week from "./week"

export default function () {

    let daysArr = calendar.generateDays(new Date())
    const firstDay = daysArr[0].weekDay

    const week1 = new calendar.Week([], 0)
    const week2 = new calendar.Week([], 0)
    const week3 = new calendar.Week([], 0)
    const week4 = new calendar.Week([], 0)
    const week5 = new calendar.Week([], 0)

    const weeksArr = [week2, week3, week4, week5]

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

    return (
        <div>
            <Week week={week1} />
            <Week week={week2} />
            <Week week={week3} />
            <Week week={week4} />
            <Week week={week5} />
        </div>
    )
}