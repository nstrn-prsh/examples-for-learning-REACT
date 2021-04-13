import React, { useState, useEffect, useLayoutEffect } from "react";

const CounterLayout = () => {
     const [getCounter, setCounter] = useState(0);

     useEffect(() => {
        //   setCounter((c) => c + 1);
          console.log("effect");
     }, []);

     useLayoutEffect(() => {
          setCounter((c) => c + 1);
          console.log("layout effect");
     }, []);

     console.log("render");

     return <div>counter is {getCounter}</div>;
};

export default CounterLayout;
