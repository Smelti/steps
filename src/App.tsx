import { useState } from 'react'
import Form from './components/Form'
import Data from './components/Data'
import './App.css'

interface ForSteps {
  date: string;
  distance: number;
}

function App() {
  const [steps, setSteps] = useState<ForSteps[]>([])

  const handleAdd = (newEntry: ForSteps) => {

    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) =>
        step.date === newEntry.date
          ? { ...step, distance: step.distance + newEntry.distance }
          : step
      );

      return prevSteps.some((step) => step.date === newEntry.date)
        ? updatedSteps
        : [...updatedSteps, newEntry].sort((a, b) => b.date.localeCompare(a.date));
    });
  }

  const handleRemove = (dateRemove: string) => {
    setSteps((prev) => prev.filter((step) => step.date !== dateRemove))
  }
  return (
    <div className='block'>
      <Form onAdd={handleAdd} />
      <Data steps={steps} onRemove={handleRemove} />
    </div>
  )
}

export default App
