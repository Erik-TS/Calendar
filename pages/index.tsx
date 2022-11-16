import Week from "./week"
import * as calendar from './calendar'

export default function () {

    const daysArr = calendar.generateDays(new Date())
    const week1 = daysArr.filter((value, index) => index >= 0 && index < 7)
    const week2 = daysArr.filter((value, index) => index >= 7 && index < 14)
    const week3 = daysArr.filter((value, index) => index >= 14 && index < 21)
    const week4 = daysArr.filter((value, index) => index >= 21 && index < 28)
    const week5 = daysArr.filter((value, index) => index >= 28 && index < 31)

    return (
        <div>
            <Week days={week1} />
            <Week days={week2} />
            <Week days={week3} />
            <Week days={week4} />
            <Week days={week5} />
        </div>
    )
}