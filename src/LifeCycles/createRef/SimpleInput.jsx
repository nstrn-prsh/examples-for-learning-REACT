import React, { Component, createRef } from "react";

class SimpleInput extends Component {
     constructor(props) {
          super(props);
          this.textInput = createRef();

          this.focusInput = this.focusInput.bind(this);
     }

     focusInput() {
          this.textInput.current.focus();
     }

     render() {
          return (
               <div>
                    <input type='text ' ref={this.textInput} />
                    <button onClick={this.focusInput}>click to focus</button>
               </div>
          );
     }
}

export default SimpleInput;
