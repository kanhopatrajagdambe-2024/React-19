import React, { useEffect, useState } from 'react'

export default function UseEffectCleanup() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
       const timer = setInterval(()=>{
          setCount((prev)=>prev+1)
         }, 1000)

         return ()=>clearInterval(timer)
    }, [])

  return (
   <>
   <h1>My Subscriber On Youtube Channels</h1>
   <h6 style={{background:'red', padding:'10px', borderRadius:'20px'}}>{count}</h6>
   </>
  )
}
