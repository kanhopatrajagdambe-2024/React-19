import React, { useState } from 'react'

export default function StateExample() {
    let value = 0;
    const handleIncrement = () => {
        value++;
        console.log(value)
      
    }
    
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleIncrement} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Increment</button>
    </div>
  )
}


export function StateExample2(){

    const[count, setCount] = useState(5);
    function Increment(){
        // setCount(count+5)
        setCount(()=>count+10)
    }

    console.log("Parent Comp Rendered")

    return(
        <>
        <h1>{count}</h1>
        <button  onClick={Increment}>Increment</button>
        <div>
            <ChildComponent count={count} />
        </div>
        </>
    )
}

export function ChildComponent({count}){
    console.log("Child Comp Rendered")
    return(
        <>
        <div>
            childComponent-{count}
        </div>
        </>
    )
}

export function Sibling(){

    console.log("I am sibling of StateExample2")
    return(
        <>
        <h1>I am sibling</h1>
        </>
    )
}
