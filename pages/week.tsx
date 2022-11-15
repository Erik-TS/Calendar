import Day from "./day"

export default function Week(props) {
    return (
        <div className={'week'}>
            {props.days.map((value: number, index: number) => {
                if (index < 7) {
                    return <Day choosen={props.choosen == value}
                        key={Math.random()}
                        number={value} />
                }
            })}
        </div>
    )
}