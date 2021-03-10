import React from "react";
import Label from "./Label";

const RightBar = (props) => {
     return (
          <aside>
               {props.boxes.map((box) => {
                    return (
                         <div className='toggle' key={box.id}>
                              <span>{box.title}</span>
                              <Label
                                   box={box}
                                   activeBoxes={props.activeBoxes}
                                   handelToggleBtn={props.handelToggleBtn}
                              />
                         </div>
                    );
               })}
          </aside>
     );
};

export default RightBar;
