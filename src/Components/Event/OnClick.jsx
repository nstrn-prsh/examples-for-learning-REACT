import React, { Fragment, Component } from "react";

class OnClick extends Component {
     state = {
          counter: 0,
     };

     clickHandler = (event) => {
          this.setState((state) => {
               return { counter: state.counter + 1 };
          });
     };

     render() {
          return (
               <Fragment>
                    <p>counter:{this.state.counter}</p>
                    <button onClick={this.clickHandler}>click here!</button>
               </Fragment>
          );
     }
}

export default OnClick;
