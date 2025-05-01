import React, { useEffect, useRef } from "react";

export default function UncontrolledComponentExample() {
    const inputRef = useRef(null);
   const handleSubmit=(e)=>{
    e.preventDefault();
    const inputvalue = document.querySelector("#name")
    console.log(inputvalue.value)
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label className="form-label">Your name is : </label>
        <input type="text" id="name" ref={inputRef}   className="form-control" />
        <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
        </form>
    </div>
  );
}
