import styles from '../css/day.module.css'

export default function Day(props: {number: number}){
    return(
        <div className={styles.day}>
            <p className={`${props.number === 0 && styles.day0}`}>{props.number}</p>
        </div>
    )
}