interface DataProps {
    steps: { date: string; distance: number }[]
    onRemove: (date: string) => void
}

export default function Data({ steps, onRemove }: DataProps) {
    return (
        <div className="action-training">
            <div className="header-acrion-training">
                <p>Дата (ДД.ММ.ГГ)</p>
                <p>Пройдено км</p>
                <p>Действия</p>
            </div>
            <ul className="action-steps">
                {steps.map((step, index) => (
                    <li className="steps" key={index}>
                        <span className="step-value">{step.date}</span>
                        <span className="step-value">{step.distance}</span>
                        <button className="delete-btn" onClick={() => onRemove(step.date)}>✘</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}