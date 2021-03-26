import React, { Component } from "react";
import A from "./A/A";
import color from "./randomColor";
import "./root.css";

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
                    <A number={this.state.number} />
                    <A />
                    <button onClick={this.generateRandomNumber}>
                         Generate Random props
                    </button>
               </div>
          );
     }
}
