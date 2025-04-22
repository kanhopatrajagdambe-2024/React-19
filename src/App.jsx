import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'
import StateExample , {Sibling, StateExample2} from './components/Hooks/StateExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateExample2 />
      <Sibling />
    </>
  )
}

export default App
