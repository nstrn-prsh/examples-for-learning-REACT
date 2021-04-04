import React from "react";
// import BuyClass from "./BuyClass";
import BuyFunction from "./BuyFunction";
import UseStateFunctionalUpdate from "./UseStateFunctionalUpdate";

export default function Buy({ name }) {
     return (
          <>
               <BuyFunction name={name} />
               {/* <BuyClass name={name}/> */}
               <UseStateFunctionalUpdate />
          </>
     );
}
