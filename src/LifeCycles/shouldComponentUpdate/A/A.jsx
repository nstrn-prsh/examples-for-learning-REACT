import React, { Component } from "react";
import color from "./../randomColor";

export default class A extends Component {
     shouldComponentUpdate(prevProps) {
          if (this.props.number !== prevProps.number) return true;
          return false;
     }

     render() {
          return (
               <div style={{ backgroundColor: color() }}>
                    A{this.props.children}
               </div>
          );
     }
}
