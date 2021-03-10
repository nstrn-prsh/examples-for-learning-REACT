import React, { Component } from "react";
import Greeting from "./Greeting";

class Conditional extends Component {
     state = { isLoggedIn: true };
     render() {
          return <Greeting isLoggedIn={this.state.isLoggedIn} />;
     }
}

export default Conditional;
