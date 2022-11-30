import styles from '../css/day.module.css'

export default function Day(props: {monthDay: number, weekDay: number, isToday: boolean}){
    return(
        <div className={`${styles.day} ${props.isToday && styles.today}`}>
            <p className={`${props.monthDay === 0 && styles.day0}`}>{props.monthDay}</p>
        </div>
    )
}