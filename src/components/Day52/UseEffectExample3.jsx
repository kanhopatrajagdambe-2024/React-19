import React, { useEffect, useState } from 'react'

export default function UseEffectExample3() {
    const[date, setDate]=useState()
    useEffect(()=>{
        setInterval(()=>{
            
           const updateddate = new Date();
           setDate(updateddate.toLocaleTimeString())
           
        }, 1000)
    })
  return (
    <>
    <h6>Date:{date}</h6>
    </>
  )
}
