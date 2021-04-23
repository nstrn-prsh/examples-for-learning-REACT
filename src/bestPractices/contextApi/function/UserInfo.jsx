import React, { useContext } from "react";
import AuthContext from "./AuthContext";

// consumer
const UserInfo = () => {
     const user = useContext(AuthContext);
     console.log(user);
     return (
          <>
               <p>user ID: {user.id}</p>
          </>
     );
};

export default UserInfo;
