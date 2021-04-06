import React from "react";
import "./loader.css";
import loaderImg from "./Spinner-1s-163px.gif";

const Loader = () => {
     return (
          <div className='loader'>
               <img src={loaderImg} alt='loader' />
          </div>
     );
};

export default Loader;
