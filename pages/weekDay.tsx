import style from '../css/weekDay.module.css'

export default function WeekDay(props: {label: string}){
    return(
        <div className={style.weekDay}>
            <p>{props.label}</p>
        </div>
    )
}