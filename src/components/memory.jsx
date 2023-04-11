import React from "react";

function Memory() {
   return (
      <div className="bg-yellow-100 p-3 mt-4 rounded-xl flex justify-between">
         <div className="flex">
            <img className="" src="./images/icon-memory.svg" alt="" />

            <p className="ml-3 text-yellow-500 font-bold">Memory</p>
         </div>
         <p className="">
            <span className="font-bold">92 </span>{" "}
            <span className="font-semibold text-neutral-400">/ 100</span>
         </p>
      </div>
   );
}

export default Memory;
