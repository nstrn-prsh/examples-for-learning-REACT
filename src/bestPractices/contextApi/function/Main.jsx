import React from "react";
import AuthContext from "./AuthContext";
import UserInfo from "./UserInfo";

const Main = () => {
     return (
          <>
               <AuthContext.Provider value={{ id: 25 }}>
                    <UserInfo />
               </AuthContext.Provider>
          </>
     );
};

export default Main;
