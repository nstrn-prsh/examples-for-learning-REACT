import React, { Component } from "react";

class SimpleInput2 extends Component {
     constructor(props) {
          super(props);
          this.setTextInputRef = (element) => {
               this.textInput = element;
          };

          this.focusInput = () => {
               if (this.textInput) this.textInput.focus();
          };
     }

     render() {
          return (
               <div>
                    <input type='text ' ref={this.setTextInputRef} />
                    <button onClick={this.focusInput}>click to focus</button>
               </div>
          );
     }
}

export default SimpleInput2;
