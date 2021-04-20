import React from "react";
import Box from "./Box";
import Image from "./Image";

const Card = ({ selectedCountry, info, flag }) => {
     return (
          <div className='container mt-3'>
               <div className='row'>
                    <div className='column'>
                         <Image selectedCountry={selectedCountry} />
                    </div>
                    <div className='column'>
                         <Box info={info} flag={flag} />
                    </div>
               </div>
          </div>
     );
};

export default Card;
