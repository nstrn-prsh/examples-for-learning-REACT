import React, { Component } from "react";
import Presenter from "./Presenter";

class Container extends Component {
     constructor(props) {
          super(props);
          this.state = { count: 0 };
          this.increment = this.increment.bind(this);
     }

     increment() {
          this.setState((state) => {
               return {
                    count: state.count + 1,
               };
          });
     }

     render() {
          return (
               <Presenter increment={this.increment} count={this.state.count} />
          );
     }
}

export default Container;
