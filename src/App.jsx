import { useEffect, useState } from 'react'
import './App.css'
import FecthApiUsingAsyncAwait from './components/Day57/FecthApiUsingAsyncAwait'

function App() {
  const [count, setCount] = useState(null)

 
  return (
    <>
    <FecthApiUsingAsyncAwait />
    </>
  ) 
}

export default App
