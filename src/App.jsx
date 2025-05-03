import { useEffect, useState } from 'react'
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
<<<<<<< Updated upstream
import UseEffectExample1 from './components/Day48/Day52/UseEffectExample1'
import UseEffectExample2 from './components/Day48/Day52/UseEffectExample2'
import UseEffectExample3 from './components/Day48/Day52/UseEffectExample3'
=======
import UseEffectExample1 from './components/Day52/UseEffectExample1'
import UseEffectExample2 from './components/Day52/UseEffectExample2'
import UseEffectExample3 from './components/Day52/UseEffectExample3'
import UseEffectChalllenge from './components/Day53/UseEffectChalllenge1'
import UseEffectChalllenge1 from './components/Day53/UseEffectChalllenge1'
import UseEffectCleanup from './components/Day54/useEffectCleanup'
import HowToFetchApi from './components/Day55/HowToFetchApi'
import HowToTechApiUsingUseEffect from './components/Day56/HowToTechApiUsingUseEffect'
import FecthApiUsingAsyncAwait from './components/Day57/FecthApiUsingAsyncAwait'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(null)

 
  return (
    <>
    <FecthApiUsingAsyncAwait />
    </>
  ) 
}

export default App
