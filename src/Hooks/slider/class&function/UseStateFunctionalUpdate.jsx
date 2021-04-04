import React, { useState, useEffect } from "react";

const UseStateFunctionalUpdate = () => {
     const [getCount, setCount] = useState(0);

     const increase = () => {
          setTimeout(() => {
               setCount((prevCount) => prevCount + 1);
               console.log(getCount);
          }, 2000);
     };
     const decrease = () => {
          setTimeout(() => {
               if (getCount > 0) {
                    setCount((prevCount) => prevCount - 1);
                    console.log(getCount);
               } else alert("not possible");
          }, 2000);
     };

     useEffect(() => {
          console.log("object");
     });

     return (
          <>
               <button onClick={increase}>+</button>
               <span>{getCount > 0 ? getCount : 0}</span>
               <button onClick={decrease}>-</button>
          </>
     );
};

export default UseStateFunctionalUpdate;
