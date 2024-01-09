import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cvapp from './components/Cvapp'
import Assignment1 from './Assignment/Assignment1'
import ToDo from './Assignment/ToDo'
import ToDotest from './Assignment/ToDotest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDotest />
    </>
  )
}

export default App
