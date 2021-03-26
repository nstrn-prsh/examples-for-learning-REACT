import React, { Component } from "react";
import Box from "./Box";
import Nav from "./Nav";
import "./userInfo.css";

class UserInfo extends Component {
     constructor(props) {
          super(props);
          this.state = {
               users: [1, 2, 3, 4, 5],
               selected: 0,
          };

          this.selectUserHandler = this.selectUserHandler.bind(this);
     }

     selectUserHandler(index) {
          this.setState({
               selected: index,
          });
     }

     render() {
          const { selected, users } = this.state;
          return (
               <div>
                    <Nav
                         users={users}
                         selected={selected}
                         selectUserHandler={this.selectUserHandler}
                    />
                    <Box userId={users[selected]} />
               </div>
          );
     }
}

export default UserInfo;
