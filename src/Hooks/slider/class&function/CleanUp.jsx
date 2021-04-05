import React, { useState, useEffect } from "react";
import UseStateFunctionalUpdate from "./UseStateFunctionalUpdate";

const CleanUp = ({ id }) => {
     const [getMax, setMax] = useState(0);

     useEffect(() => {
          const fetchMax = setInterval(() => {
               fetch(`http://localhost:4000/restricts?id=${id}`)
                    .then((res) => res.json())
                    .then((hero) => setMax(hero[0].max));
          }, 2000);

          return () => clearInterval(fetchMax);
     }, [id]);

     return (
          <div style={{ display: "inline-block", margin: "20px" }}>
               <p>max:{getMax}</p>
               <UseStateFunctionalUpdate />
          </div>
     );
};

export default CleanUp;
