import Day from "./day"
import * as calendar from './calendar'
import styles from '../css/week.module.css'

export default function Week(props: { week: calendar.Week }) {

    return (
        <div className={styles.week}>
            {props.week._days.map((value: calendar.Day, index: number) => {
                if (index < 7) {
                    return (
                        <Day key={Math.random()}
                            number={value.monthDay}
                        />
                    )
                }
            })}
        </div>
    )
}

Week.defaultProps = {
    days: [new calendar.Day(1, 0, true)]
}