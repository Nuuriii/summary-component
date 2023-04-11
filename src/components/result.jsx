import React from "react";

function Result() {
   return (
      <div className="bg-gradient-to-t from-indigo-800 to-indigo-600  flex flex-col rounded-bl-3xl rounded-br-3xl lg:rounded-3xl  justify-center lg:h-full lg:pl-5 lg:pr-5">
         <div className="flex-wrap  text-center  mt-5 mb-5">
            <h1 className="font-bold text-slate-300 text-2xl">Your Result</h1>
         </div>
         <div className="  text-center justify-center">
            <div className="bg-gradient-to-t from-indigo-700 to-indigo-800 ml-auto mr-auto w-44 h-44  rounded-full">
               <h1 className="pt-6 text-white font-bold text-8xl ">76</h1>
               <p className="pt-2 text-xl text-slate-400">of 100</p>
            </div>
         </div>
         <div className="text-center">
            <div className="ml-auto mr-auto lg:pb-5">
               <h1 className="mt-5 text-3xl font-bold text-white">Great</h1>
               <div className="ml-auto mt-3 mr-auto w-72 mb-8">
                  <p className="text-white">
                     You scored higher than 65% of the people who have taken
                     these tests.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Result;
