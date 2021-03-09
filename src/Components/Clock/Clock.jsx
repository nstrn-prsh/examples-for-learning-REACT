import React, { Component } from "react";
class Clock extends Component {
     constructor(props) {
          super(props);
          this.state = {
               date: new Date(),
          };
          setInterval(this.tik.bind(this), 1000);
     }

     // note: aslan in ravesh standard nist va azash estefade nemikonim
     tik() {
          this.setState({
               date: new Date(),
          });
     }

     render() {
          return <p>time is: {this.state.date.toLocaleTimeString()}</p>;
     }
}

export default Clock;
