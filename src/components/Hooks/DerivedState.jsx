import React from 'react'

export default function DerivedState() {
    const users =[
        {name:'soni', age:28},
        {name:'Rajesh', age:30},
        {name:'Banti', age:26}
    ]
    const userlength = users.length;
    console.log(userlength)

    const avgAge = users.reduce((accumulator, currElment)=> (accumulator+currElment.age)/userlength, 0)
  return (
    <>
    <div>
        <h1>Userlist</h1>
        <div>{avgAge}</div>
       <ul>
       {
            users.map(user=>{
               return (
               <li>{user.name}</li>
               )
            })
        }
       </ul>
    </div>
    </>
  )
}
