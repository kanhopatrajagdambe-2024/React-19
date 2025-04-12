import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ecom />
    </>
  )
}

export default App
