import React, { useState } from "react";
import AuthContext from "./AuthContext";
import Main from "./Main";

const Provider = () => {
     const [getUser, setUser] = useState({ id: 0 });

     return (
          <AuthContext.Provider value={getUser}>
               <Main />
          </AuthContext.Provider>
     );
};

export default Provider;
