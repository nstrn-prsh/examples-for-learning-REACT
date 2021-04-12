import React, { useState, useMemo } from "react";

const wordCount = (word) => {
     let i = 0;
     do {
          i++;
     } while (i <= 1000000000);
     return word.length;
};

const Memorization = () => {
     const [getCounter, setCounter] = useState(0);

     const counting = useMemo(() => wordCount("react.js and react native"), []);

     return (
          <div style={{ margin: "50px" }}>
               <p>word count: {counting}</p>
               <p>counter is: {getCounter}</p>
               <button onClick={() => setCounter((c) => c + 1)}>count</button>
          </div>
     );
};

export default Memorization;
