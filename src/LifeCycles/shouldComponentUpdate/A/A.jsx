import React, { PureComponent } from "react";
import color from "./../randomColor";
import B1 from "./../B/B1";
import C1 from "./../C/C1";
import D1 from "./../D/D1";
import C2 from "./../C/C2";
import D2 from "./../D/D2";
import B2 from "./../B/B2";
import C4 from "./../C/C4";
import C3 from "./../C/C3";

export default class A extends PureComponent {
     render() {
          return (
               <div style={{ backgroundColor: color() }}>
                    A
                    <B1>
                         <C1>
                              <D1></D1>
                         </C1>
                         <C2>
                              <D2></D2>
                         </C2>
                    </B1>
                    <B2>
                         <C3></C3>
                         <C4></C4>
                    </B2>
               </div>
          );
     }
}
