import Day from "./day"
import * as calendarLogic from './calendarLogic'
import styles from '../css/week.module.scss'

export default function Week(props: { week: calendarLogic.Week }) {

    return (
        <div className={styles.week}>
            {props.week._days.map((value: calendarLogic.Day, index: number) => {
                if (index < 7) {
                    return (
                        <Day key={Math.random()}
                            monthDay={value.monthDay}
                            weekDay={value.weekDay}
                            isToday={value.isToday}
                        />
                    )
                }
            })}
        </div>
    )
}

Week.defaultProps = {
    days: [new calendarLogic.Day(1, 0, true)]
}