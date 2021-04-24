import React from "react";
import FAC from "./FunctionAsChild";
import UserInfo from "./UserInfo";
import StaticProps from "./StaticProps";

const Global = () => {
     return (
          <div style={{ margin: "100px" }}>
               <UserInfo />
               <StaticProps />
               <FAC />
          </div>
     );
};

export default Global;
