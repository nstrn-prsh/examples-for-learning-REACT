import React from "react";

const BoxWrapper = (props) => {
     return (
          <div className='box-wrapper'>
               {props.boxes.map((box) => {
                    if (props.activeBoxes.includes(box.id)) {
                         return (
                              <div className='box' key={box.id}>
                                   {box.title}
                              </div>
                         );
                    }
               })}
          </div>
     );
}
 
export default BoxWrapper;
