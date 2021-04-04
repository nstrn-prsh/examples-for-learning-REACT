import React, { Component } from "react";

export default class BuyClass extends Component {
    /* note: moshkele in rahe hal ine ke age ma tabe ziad dashte bashim 
    momkene props ziad dashte bashim va dar natije kheili sakht mishe khondane code
    ye rahe hale dg ine ke function haro toye render benevisim
    ke mishe mese hamoon functional component va farghi nemikone
    */
     showAlert = (name) => {
          alert(`you bought ${name}`);
     };

     handleClick = () => {
          const { name } = this.props;
          setTimeout(() => this.showAlert(name), 1000);
     };

     render() {
          return (
               <div style={{ display: "inline-block", margin: "0px 10px" }}>
                    <button onClick={this.handleClick}>Buy</button>
                    <p>class</p>
               </div>
          );
     }
}
