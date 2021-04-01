import React, { Component } from "react";

export default class BuyClass extends Component {
     showAlert = () => {
          alert(`you bought ${this.props.name}`);
     };

     handleClick = () => {
          setTimeout(() => {
               this.showAlert();
          }, 1000);
     };

     render() {
          return (
               <div style={{display: 'inline-block',margin:'0px 10px'}}>
                    <button onClick={this.handleClick}>Buy</button>
                    <p>class</p>
               </div>
          );
     }
}
