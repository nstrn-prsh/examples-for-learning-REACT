import React, { Component } from "react";
import A from "./A/A";
import color from "./randomColor";
import "./root.css";
import B1 from "./B/B1";
import B2 from "./B/B2";
import C1 from "./C/C1";
import C2 from "./C/C2";
import C3 from "./C/C3";
import C4 from "./C/C4";
import D1 from "./D/D1";
import D2 from "./D/D2";

export default class Root extends Component {
     constructor(props) {
          super(props);

          this.state = {
               number: 1,
          };

          this.generateRandomNumber = this.generateRandomNumber.bind(this);
     }

     generateRandomNumber() {
          this.setState({ number: Math.random() });
     }
     render() {
          return (
               <div
                    style={{
                         flexDirection: "column",
                         backgroundColor: color(),
                    }}
               >
                    <A number={this.state.number}>
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
                    </A>

                    <A>
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
                    </A>
                    <button onClick={this.generateRandomNumber}>
                         Generate Random props
                    </button>
               </div>
          );
     }
}
