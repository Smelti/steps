import { useState } from "react";

interface FormProps {
    onAdd: (newEntry: { date: string; distance: number }) => void
}

export default function Form({ onAdd }: FormProps) {
    const [date, setDates] = useState("");
    const [distance, setDistances] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!date || !distance) return

        onAdd({ date, distance: parseFloat(distance) })
        setDates("")
        setDistances("")
    }

    return (
        <form onSubmit={handleSubmit} className="training">
            <div className="date">
                <p>Дата (ДД.ММ.ГГ)</p>
                <input className="inp" type="date" value={date} onChange={(e) => setDates(e.target.value)} />
            </div>
            <div className="distance">
                <p>Пройдено км</p>
                <input className="inp" type="number" value={distance} onChange={(e) => setDistances(e.target.value)} />
            </div>
            <button type="submit" className="btn">ОК</button>
        </form>
    )
}