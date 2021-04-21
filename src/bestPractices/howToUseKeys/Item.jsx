import React, { useState } from "react";

const Item = ({ name }) => {
     const [getText, setText] = useState("");
     return (
          <li>
               <div className='wrapper'>
                    <h3>{name}</h3>
                    <input
                    className="ticket"
                         type='text'
                         value={getText}
                         placeholder='add some text'
                         onChange={(e) => setText(e.target.value)}
                    />
               </div>
          </li>
     );
};

export default Item;
