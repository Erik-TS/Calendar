import styles from '../css/day.module.css'

export default function Day(props: {number: number}){
    return(
        <div className={styles.day}>
            <p>{props.number}</p>
        </div>
    )
}