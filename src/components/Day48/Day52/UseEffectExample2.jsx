import React, { useEffect, useState } from 'react'

export default function UseEffectExample2() {
    const[count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Hello useEffect render")
    }, [count])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={(e)=>setCount(count+1)}>Increment</button>
    </>
  )
}
