import React from "react";
import Result from "./components/result";
import Summary from "./components/summary";

export default function App() {
   return (
      <div className="lg:flex justify-center  ">
         <div className="lg:flex lg:bg-transparent lg:rounded-3xl lg:shadow-2xl lg:mt-28 lg:pr-">
            <Result />
            <Summary />
         </div>
      </div>
   );
}
