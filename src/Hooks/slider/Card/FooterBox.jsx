import React from "react";

export default function FooterBox({ stat, statValue, statClass }) {
     return (
          <div className={`one-third ${statClass}`}>
               <div className='stat'>{stat}</div>
               <div className='stat-value'>{statValue}</div>
          </div>
     );
}
