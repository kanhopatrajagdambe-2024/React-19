import React, { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";

export default function DerivedStateExample() {
    const[users, setUsers] = useState([
        {
            name:'soni',age:28,
            
        },
        {
            name:'Banti',age:26,
        },
        {
            name:'Rajesh',age:30,

        }
    ])

    const derivedState = users.length;

    console.log("derivedState", derivedState)
    const avgAge = users.reduce((accumulator, currentElemet)=>{
        return (accumulator+currentElemet.age)/derivedState
    }, 0)
    console.log("avgAge", avgAge)
  return (
    <>
    <ul>
        {
            users.map(user=>{
                return(
                    <li>{user.name} is {user.age} years old.</li>
                )
            })
        }
    </ul>
    </>
  )
}
