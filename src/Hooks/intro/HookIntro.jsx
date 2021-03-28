import React, { useState,useEffect } from "react";

const HookIntro = () => {
     const [getCounter, setCounter] = useState(0);
     const [getValue, setValue] = useState(1);

     useEffect(() => {
          document.title = `you clicked ${getCounter} times.`;
     });

     return (
          <>
               <p>you clicked {getCounter} times.</p>
               <input
                    value={getValue}
                    type='number'
                    onChange={(event) => setValue(parseInt(event.target.value))}
               />
               <button onClick={() => setCounter(getCounter + getValue)}>
                    click here!
               </button>
          </>
     );
};

export default HookIntro;
