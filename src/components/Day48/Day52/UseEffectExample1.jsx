import React, { useEffect } from 'react'

export default function UseEffectExample1() {
    useEffect(()=>{
        console.log("UseEffect Rendered")
    })
  return (
    <>
     Welcome to useEffect Example
    </>
  )
}
