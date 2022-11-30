import style from '../css/weekDay.module.scss'

export default function WeekDay(props: {label: string}){
    return(
        <div className={style.weekDay}>
            <p>{props.label}</p>
        </div>
    )
}