import React from "react";

const Presenter = ({ increment, count }) => {
     return <button onClick={increment}>{count}</button>;
};

export default Presenter;
