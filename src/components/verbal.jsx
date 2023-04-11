import React from "react";

function Verbal() {
   return (
      <div className="bg-green-100 p-3 mt-4 rounded-xl flex justify-between">
         <div className="flex">
            <img className="" src="./images/icon-verbal.svg" alt="" />

            <p className="ml-3 text-green-500 font-bold">Verbal</p>
         </div>
         <div>
            <span className="font-bold">61 </span>
            <span className="font-semibold text-neutral-400">/ 100</span>
         </div>
      </div>
   );
}

export default Verbal;
