import React, { useMemo } from "react";

const Memorization = () => {
     const wordCount = (word) => {
          let i = 0;
          do {
               i++;
          } while (i <= 10);
          return word.length;
     };
     
     const  counting = useMemo(()=> wordCount("reactJs"), [])


     return (
          <div style={{ margin: "50px" }}>
               <p>word count: {counting}</p>
          </div>
     );
};

export default Memorization;
