import React, { Component } from "react";
import AuthContext from "./AuthContext";

class StaticProps extends Component {
     static contextType = AuthContext;

     render() {
          let user = this.context;
          return <p>way two: static props - user id: {user.id} </p>;
     }
}

export default StaticProps;
