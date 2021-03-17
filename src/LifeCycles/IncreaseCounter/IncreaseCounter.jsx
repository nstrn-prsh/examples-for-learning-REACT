import React, { Component } from "react";

class IncreaseCounter extends Component {
     constructor(props) {
          super(props);
          console.log("constructor");

          this.state = { count: 0 };

          this.handlerIncrease = this.handlerIncrease.bind(this);
     }

     static getDerivedStateFromProps() {
          console.log("getDerivedStateFromProps");
          return null;
     }

     componentDidMount() {
          console.log("componentDidMount");
     }

     shouldComponentUpdate() {
          console.log("shouldComponentUpdate");
          return true;
     }

     getSnapshotBeforeUpdate() {
          console.log("getSnapshotBeforeUpdate");
          return null;
     }

     componentDidUpdate() {
          console.log("componentDidUpdate");
     }

     componentWillUnmount() {
          console.log("componentWillUnmount");
     }

     handlerIncrease() {
          this.setState((state) => {
               return {
                    count: state.count + 1,
               };
          });
     }

     render() {
          console.log("render");
          return (
               <div>
                    <div>{this.state.count}</div>
                    <button onClick={this.handlerIncrease}>
                         Increase counter
                    </button>
               </div>
          );
     }
}

export default IncreaseCounter;
