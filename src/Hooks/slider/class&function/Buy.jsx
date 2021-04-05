import React from "react";
// import BuyClass from "./BuyClass";
import BuyFunction from "./BuyFunction";
import CleanUp from "./CleanUp";
// import UseStateFunctionalUpdate from "./UseStateFunctionalUpdate";

export default function Buy({ name, id }) {
     return (
          <>
               <CleanUp id={id}/>
               <BuyFunction name={name} />
               {/* <BuyClass name={name}/> */}
               {/* <UseStateFunctionalUpdate /> */}
          </>
     );
}
