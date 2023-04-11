import React from "react";
import Reaction from "./reaction";
import Memory from "./memory";
import Verbal from "./verbal";
import Visual from "./visual";
import Continue from "./continue";

function summary() {
   return (
      <div className="m-5 lg:  lg:w-64 lg:ml-7 lg:mr-7">
         <h1 className="text-xl font-semibold ">Summary</h1>
         <Reaction />
         <Memory />
         <Verbal />
         <Visual />
         <Continue />
      </div>
   );
}

export default summary;
