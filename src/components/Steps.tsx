/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";

interface ForSteps {
    date: string;
    distance: number;
}

export default function Steps() {
    const [steps, setSteps] = useState<ForSteps[]>([])
    const [dates, setDates] = useState("");
    const [distances, setDistances] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (/^[0-9.]*$/.test(value)) {
            name === "date" ? setDates(value) : setDistances(value);
        }
    };


    const handleAdd = () => {
        if (!dates || !distances) return;

        setSteps((prevSteps) => {
            const updatedSteps = prevSteps.map((step) =>
                step.date === dates
                    ? { ...step, distance: step.distance + parseFloat(distances) }
                    : step
            );

            return prevSteps.some((step) => step.date === dates)
                ? updatedSteps
                : [...updatedSteps, { date: dates, distance: parseFloat(distances) }].sort((a, b) => b.date.localeCompare(a.date));
        });
    }

    const handleRemove = (dateRemove: string) => {
        setSteps((prev) => prev.filter((step) => step.date !== dateRemove))
    }

    return (
        <div className="block">
            <div className="training">

                <div className="date">
                    <p>Дата (ДД.ММ.ГГ)</p>
                    <input type="text" className="inp" name="date" value={dates} onChange={handleChange} />
                </div>

                <div className="distance">
                    <p>Пройдено км</p>
                    <input type="text" className="inp" name="distance" value={distances} onChange={handleChange} />
                </div>
                <button className="btn" onClick={handleAdd}>ОК</button>

            </div>

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
                            <button className="delete-btn" onClick={() => handleRemove(step.date)}>✘</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 