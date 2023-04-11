import React from "react";

function Visual() {
   return (
      <div className="bg-indigo-100 p-3 mt-4 rounded-xl flex justify-between">
         <div className="flex">
            <img className="" src="./images/icon-visual.svg" alt="" />

            <p className="ml-3 text-indigo-500 font-bold">Visual</p>
         </div>
         <p className="">
            <span className="font-bold">72 </span>
            <span className="font-semibold text-neutral-400">/ 100</span>
         </p>
      </div>
   );
}

export default Visual;
