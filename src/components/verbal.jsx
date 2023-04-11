import React from "react";

function Verbal() {
   return (
      <div className="bg-green-100 p-3 mt-4 rounded-xl flex justify-between">
         <div className="flex">
            <img className="" src="../public/images/icon-verbal.svg" alt="" />

            <p className="ml-3 text-green-500 font-bold">Verbal</p>
         </div>
         <p className="">
            <span className="font-bold">61</span>{" "}
            <span className="font-semibold text-neutral-400">/ 100</span>
         </p>
      </div>
   );
}

export default Verbal;
