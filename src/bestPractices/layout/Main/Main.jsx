import React from "react";
import Skills from "./Skills/Skills";

const Main = ({ children }) => {
     return (
          <div className='main' style={{ margin: "100px auto", width: "90%" }}>
               {children}
               <Skills />
          </div>
     );
};

export default Main;
