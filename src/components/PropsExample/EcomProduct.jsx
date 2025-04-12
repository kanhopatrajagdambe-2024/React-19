import React from 'react'

export default function EcomProduct(props) {
  const {carddata} = props
  return (
  <>
 <div className="mx-4 w-80 h-[500px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
 <div className="w-full h-48 flex items-center justify-center bg-white">
  <img
    className="max-h-full object-contain"
    src={carddata.image}
    alt={carddata.title}
  />
</div>
  <div className="px-4 py-2">
    <div className="font-bold text-xl mb-2">{carddata.category}</div>
    <p className="text-gray-700 text-base ">
      {carddata.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2" >
    <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Buy Now</button>
    </span>
    <span className={carddata.rating.rate > 4 ? "bg-green-500": "bg-yellow-500"} >
      Rating: {carddata.rating.rate}
      </span>
  </div>
  </div>
  </>
  )
}
