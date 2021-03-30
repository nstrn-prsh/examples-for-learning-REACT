import React from "react";

export default function Arrow({ pos, handleCursor }) {
     return (
          <div className='arrow-wrapper' onClick={handleCursor} style={{cursor: 'pointer'}}>
               <div className='round'>
                    <div id='cta'>
                         <span className='arrow'>{pos ? `<` : `>`}</span>
                    </div>
               </div>
          </div>
     );
}
