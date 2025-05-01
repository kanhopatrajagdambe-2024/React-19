import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'
import StateExample , {Sibling, StateExample2} from './components/Hooks/StateExample'
import DerivedState from './components/Hooks/DerivedState'
import StateUpLifting from './components/Hooks/StateUpLifting'
import DerivedStateExample from './components/Hooks/DerivedStateExample'
import ReactIconExample from './components/Hooks/ReactIconExample'
import Todo from './components/projects/Todo'
import ControlledComp from './components/ControlledAndUncontrolledComponent/ControlledComp'
import UncontrolledComponentExample from './components/ControlledAndUncontrolledComponent/UncontrolledComponentExample'
import RegistrationForm from './components/Day48/RegistrationForm'
import UseEffectExample1 from './components/Day52/UseEffectExample1'
import UseEffectExample2 from './components/Day52/UseEffectExample2'
import UseEffectExample3 from './components/Day52/UseEffectExample3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UseEffectExample3 />
    </>
  ) 
}

export default App
