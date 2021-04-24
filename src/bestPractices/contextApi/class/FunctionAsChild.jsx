import React from "react";
import AuthContext from "./AuthContext";

const FAC = () => {
     return (
          <AuthContext.Consumer>
               {(user) => <p>way three: render props - user id: {user.id} </p>}
          </AuthContext.Consumer>
     );
};
export default FAC;
