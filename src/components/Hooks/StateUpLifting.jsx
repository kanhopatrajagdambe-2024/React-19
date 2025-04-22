import React, { useState } from "react";

export default function StateUpLifting() {
const [name, setName] = useState("");
  return (
    <div>
      <FirstChild name={name} setName={setName} />
      <SecondChild name={name} setName={setName} />
    </div>
  );
}

export function FirstChild({name, setName}) {

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h4>My Name is :) {name}</h4>
      <div class="w-full max-w-sm min-w-[200px]">
        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
          onChange={handleInputName}
        />
      </div>
    </>
  );
}

export function SecondChild({name, setName}) {
  return (
    <>
    Hello ! {name}
  </>
  )
}
