import React from "react";

const Label = (props) => {
     return (
          <label className='toggle-control'>
               <input
                    type='checkbox'
                    checked={props.activeBoxes.includes(props.box.id)}
               />

               <span
                    className='control'
                    onClick={() => props.handelToggleBtn(props.box.id)}
               ></span>
          </label>
     );
};

export default Label;
