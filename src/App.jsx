import { useState } from 'react'
import './App.css'
import Ecom from './components/PropsExample/Ecom'
import StateExample , {Sibling, StateExample2} from './components/Hooks/StateExample'
import DerivedState from './components/Hooks/DerivedState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DerivedState />
      {/* <StateExample2 />
      <Sibling /> */}
    </>
  )
}

export default App
