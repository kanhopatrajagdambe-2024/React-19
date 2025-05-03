import React, { useEffect, useState } from 'react'

export default function HowToFetchApi() {
    const[data, setData] = useState([])
   
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data =>{
        setData(data)
    })
    .catch((error)=>{
        console.log(error)
    })
  
  return (
    <>
    <ul>
       {
        data && data.length > 1 && data.map(product =>{
            return(
                <li key={product.id}>{product.category}</li>
            )
        })
       }
    </ul>
    </>
  )
}
