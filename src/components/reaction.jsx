import React from "react";

function Reaction() {
   return (
      <div className="bg-red-100 p-3 mt-4 rounded-xl flex justify-between ">
         <div className="flex ">
            <img className="" src="./images/icon-reaction.svg" alt="" />

            <p className="ml-3 text-red-500 font-semibold">Reaction</p>
         </div>
         <p className="">
            <span className="font-bold">80</span>{" "}
            <span className="font-semibold text-neutral-400">/ 100</span>
         </p>
      </div>
   );
}

export default Reaction;
