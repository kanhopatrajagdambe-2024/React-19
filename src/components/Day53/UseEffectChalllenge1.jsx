import React, { useEffect, useState } from 'react'

export default function UseEffectChalllenge1() {
    const[count, setCount] = useState(0);
    const[inputvalue, setInputValue] = useState('')
    useEffect(()=>{
      document.title = `Count-${count}`
    }, [count])

    useEffect(()=>{
      console.log(inputvalue)
    }, [inputvalue])
  return (
    <>
    <div className='m-5'>
    <h1>UseEffect Challenge</h1>
    </div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>count</button>
    <div>Name:{inputvalue}</div>
    <input type="text" className='form-control' onChange={(e)=>setInputValue(e.target.value)} />
    </>
  )
}
