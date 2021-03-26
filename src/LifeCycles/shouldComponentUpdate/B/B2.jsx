import React, { Component } from "react";
import color from "./../randomColor";

export default class B2 extends Component {
     shouldComponentUpdate(prevProps) {
          if (this.props.number !== prevProps.number) return true;
          return false;
     }
     
     render() {
          return (
               <div style={{ backgroundColor: color() }}>
                    B2
                    {this.props.children}
               </div>
          );
     }
}
