import React, { Fragment, Component } from "react";

class OnClick extends Component {
    constructor(props){
        super(props)
        this.state = {
             counter: 0,
        };
        this.clickHandler=this.clickHandler.bind(this)
    }

    //  clickHandler = (event) => {
    //       this.setState((state) => {
    //            return { counter: state.counter + 1 };
    //       });
    //  };

    clickHandler(event){
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
