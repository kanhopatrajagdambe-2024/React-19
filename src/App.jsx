import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'
import StateExample , {Sibling, StateExample2} from './components/Hooks/StateExample'
import DerivedState from './components/Hooks/DerivedState'
import StateUpLifting from './components/Hooks/StateUpLifting'
import DerivedStateExample from './components/Hooks/DerivedStateExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <DerivedStateExample />
    </>
  ) 
}

export default App
