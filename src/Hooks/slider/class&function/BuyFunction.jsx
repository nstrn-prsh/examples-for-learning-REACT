import React from "react";

export default function BuyFunction({ name }) {
     const showAlert = () => {
          alert(`you bought ${name}`);
     };

     const handleClick = () => {
          setTimeout(() => {
               showAlert();
          }, 1000);
     };

     return (
        <div style={{display: 'inline-block'}}>
               <button onClick={handleClick}>Buy</button>
               <p>function</p>
          </div>
     );
}
