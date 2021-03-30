import React from "react";

const Container = ({ classType, children }) => {
     return <div className={classType}>{children}</div>;
};

export default Container;
