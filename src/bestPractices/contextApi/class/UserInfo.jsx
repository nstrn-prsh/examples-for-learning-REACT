import React, { Component } from "react";
import AuthContext from "./AuthContext";

class UserInfo extends Component {
     render() {
          let user = this.context;
          return <p>way one: context type - user id: {user.id} </p>;
     }
}
UserInfo.contextType = AuthContext;

export default UserInfo;
