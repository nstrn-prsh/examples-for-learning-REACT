import React, { Component } from "react";
class Clock extends Component {
     render() {
          return <p>time is: {new Date().toLocaleTimeString()}</p>;
     }
}

export default Clock;
