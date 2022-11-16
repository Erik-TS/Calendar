import Day from "./day"
import * as calendar from './calendar'

export default function Week(props: { days: Array<calendar.Day>}) {

    return (
        <div className={'week'}>
            {props.days.map((value: calendar.Day, index: number) => {
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