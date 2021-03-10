import React, { Component, Fragment } from "react";
import "./box.css";
import BoxWrapper from "./BoxWrapper";
import RightBar from "./RightBar";

export default class Main extends Component {
     state = {
          boxes: [
               { id: 1, title: "Box 1" },
               { id: 2, title: "Box 2" },
               { id: 3, title: "Box 3" },
               { id: 4, title: "Box 4" },
          ],
          activeBoxes: [1, 2, 3, 4],
     };

     handelToggleBtn = (id) => {
          const activeBoxes = [...this.state.activeBoxes];
          if (activeBoxes.includes(id))
               activeBoxes.splice(activeBoxes.indexOf(id), 1);
          else activeBoxes.push(id);

          this.setState((state) => {
               return {
                    ...state,
                    activeBoxes,
               };
          });
     };

     render() {
          return (
               <Fragment>
                    <RightBar
                         boxes={this.state.boxes}
                         activeBoxes={this.state.activeBoxes}
                         handelToggleBtn={this.handelToggleBtn}
                    />

                    <BoxWrapper
                         boxes={this.state.boxes}
                         activeBoxes={this.state.activeBoxes}
                    />
               </Fragment>
          );
     }
}
