import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'
import StateExample , {Sibling, StateExample2} from './components/Hooks/StateExample'
import DerivedState from './components/Hooks/DerivedState'
import StateUpLifting from './components/Hooks/StateUpLifting'
import DerivedStateExample from './components/Hooks/DerivedStateExample'
import ReactIconExample from './components/Hooks/ReactIconExample'
import Todo from './components/projects/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Todo />
    </>
  ) 
}

export default App
