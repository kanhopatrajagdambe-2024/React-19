import React, { useEffect, useState } from "react";
import EcomProduct from "./EcomProduct";

export default function EcomProductListt() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-80 h-[500px]">
              <EcomProduct carddata={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
