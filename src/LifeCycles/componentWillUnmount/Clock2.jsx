import React, { Component } from "react";
import Time from "./Time";

class Clock extends Component {
     constructor(props) {
          super(props);
          this.state = {
               show: true,
          };

          this.handleShow = this.handleShow.bind(this);
     }

     handleShow() {
          this.setState({
               show: !this.state.show,
          });
     }

     render() {
          const showTime = this.state.show
          return (
               <div style={{margin: '0px auto'}}>
                    {showTime && <Time />}
                    <button onClick={this.handleShow}>
                         {showTime ? <p>hide</p> : <p>show</p>}
                    </button>
               </div>
          );
     }
}

export default Clock;
