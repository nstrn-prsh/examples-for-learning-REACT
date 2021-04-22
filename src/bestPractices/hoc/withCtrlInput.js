import React, { Component } from "react";

export default function withCtrlInput(WrapperComponent, foo) {
     return class extends Component {
          state = {
               input: "",
          };

          handleChanges(newValue) {
               this.setState({
                    input: newValue,
               });
          }

          render() {
               // const {foo, ...otherProps} = this.props
               return (
                    <WrapperComponent
                         {...this.props}
                         // {...otherProps}
                         value={this.state.input}
                         handleChanges={this.handleChanges.bind(this)}
                    />
               );
          }
     };
}
