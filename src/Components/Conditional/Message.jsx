import React from "react";

const Message = (props) => {
     if (props.isLoggedIn) return <p>salam!</p>;
     return null;
};

export default Message;
