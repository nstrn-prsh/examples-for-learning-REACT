import React, { useState, useMemo } from "react";
import Child from "./Child";

// function handle() {}

const MemoAndCallback = () => {
     const [getCounter1, setCounter1] = useState(0);
     const [getCounter2, setCounter2] = useState(0);

    //  function handle() {}
      const handle = useMemo(() => function handle() {}, []);

     return (
          <div style={{ margin: "50px" }}>
               <p>click count1: {getCounter1}</p>
               <p>click count1: {getCounter2}</p>
               <div>
                    <button onClick={() => setCounter1((c) => c + 1)}>
                         increment1
                    </button>
                    <button onClick={() => setCounter1((c) => c - 1)}>
                         decrement1
                    </button>
               </div>
               <div>
                    <button onClick={() => setCounter2((c) => c + 1)}>
                         increment1
                    </button>
                    <button onClick={() => setCounter2((c) => c - 1)}>
                         decrement2
                    </button>
               </div>

               <Child handle={handle} />
          </div>
     );
};

export default MemoAndCallback;
