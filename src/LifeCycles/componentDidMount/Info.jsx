import React from "react";

const Info = (props) => {
     return (
          <div className='card-container'>
               <span className='info'>Info</span>
               {/* <img className='round' src='./br.svg' alt='' /> */}
               <h3>{props.country}</h3>
               <h6>{props.city}</h6>
               <p>timezone: {props.timezone}.</p>
               <div className='footer'>
                    <p>IP:{props.ip}</p>
                    <p>latitude:{props.lng}</p>
                    <p>longitude:{props.lat}</p>
               </div>
          </div>
     );
};

export default Info;
