import * as calendarLogic from './calendarLogic'
import Week from './week'
import WeekDay from './weekDay'
import style from '../css/calendar.module.css'

export default function Calendar(props: { weeks: Array<calendarLogic.Week>, monthName: string, year: number, today: number }) {
    return (
        <div className={style.calendar}>
            <div className={style.title}>
                <p>{`${props.monthName} ${props.today}, ${props.year}`}</p>
            </div>
            <div className={style.row}>
                <WeekDay label={'S'}/>
                <WeekDay label={'M'}/>
                <WeekDay label={'T'}/>
                <WeekDay label={'W'}/>
                <WeekDay label={'T'}/>
                <WeekDay label={'F'}/>
                <WeekDay label={'S'}/>
            </div>
            <ul>
                {props.weeks.map((v: calendarLogic.Week) => <Week week={v} />)}
            </ul>
        </div>
    )
}