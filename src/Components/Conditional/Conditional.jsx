import React, { Component } from "react";
import Greeting from "./Greeting";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Message from "./Message";

class Conditional extends Component {
     state = { isLoggedIn: true };

     handleLogIn = () => {
          this.setState({ isLoggedIn: true });
     };

     handleLogOut = () => {
          this.setState({ isLoggedIn: false });
     };

     render() {
          /*
          let btn = null;
          if (this.state.isLoggedIn)
               btn = <LogOut handleLogOut={this.handleLogOut} />;
          else btn = <LogIn handleLogIn={this.handleLogIn} />;
          */

          return (
               <div>
                    <Greeting isLoggedIn={this.state.isLoggedIn} />
                    <br />
                    {/* {btn} */}
                    <br />
                    {this.state.isLoggedIn && <p>this is the 3rd way!</p>}
                    <br />
                    {this.state.isLoggedIn ? (
                         <LogOut handleLogOut={this.handleLogOut} />
                    ) : (
                         <LogIn handleLogIn={this.handleLogIn} />
                    )}
                    <br />
                    <Message isLoggedIn={this.state.isLoggedIn} />
               </div>
          );
     }
}

export default Conditional;
