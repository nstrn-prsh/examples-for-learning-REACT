import React from "react";
import Guest from "./Guest";
import User from "./User";

const Greeting = (props) => {
     if (props.isLoggedIn) {
          return <User />;
     }
     return <Guest />;
};

export default Greeting;
