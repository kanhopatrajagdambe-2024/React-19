import React, { useState } from 'react'

export default function ControlledComp() {
    const [inputvalue, setInputValue] = useState('')

    const handleNameChange = (e) =>{
        setInputValue(e.target.value)
    }
  return (
    <div>
        
    <label className='form-label'>Your name is : </label><span>{inputvalue}</span>
    <input type="text" onChange={handleNameChange} className='form-control' />
    </div>
  )
}
