import React, { useState, useEffect, useRef } from "react";

const Counting = () => {
     const [getCount, setCount] = useState(0);

     const countRef = useRef(getCount);

     //  const lastCount={
     //      current: getCount
     //  }

     useEffect(() => {
          const diff = getCount - countRef.current;
          countRef.current = getCount;
          console.log(diff)
          /*setTimeout(() => {
               console.log(countRef.current);
               //    console.log(lastCount.current);
          }, 2000);*/
     });

     return (
          <>
               <h1>counter is {getCount}</h1>
               <button onClick={() => setCount(getCount + 1)}>add one!</button>
               <button onClick={() => setCount(getCount + 2)}>add one!</button>
               <button onClick={() => setCount(getCount + 3)}>add one!</button>
               {/* <button onClick={() => setCount(getCount + 1)}>add one - object!</button> */}
          </>
     );
};

export default Counting;
