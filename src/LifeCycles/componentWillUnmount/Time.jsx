import React, { Component } from "react";

class Time extends Component {
     constructor(props) {
          super(props);
          this.state = {
               timer: new Date().toLocaleTimeString(),
          };
     }

     componentDidMount() {
          this.time = setInterval(() => {
               this.setState({ timer: new Date().toLocaleTimeString() });
            console.log(this.state.timer);
          }, 1000);
     }

     componentWillUnmount() {
          clearInterval(this.time);
     } 

     render() {
          return <p>{this.state.timer}</p>;
     }
}

export default Time;
