import React from "react";
import Box from "./Box";
import Image from "./Image";

const Card = ({ selectedCountry, info }) => {
     return (
          <div className='container mt-3'>
               <div className='row'>
                    <div className='column'>
                         <Image selectedCountry={selectedCountry} />
                    </div>
                    <div className='column'>
                         <Box info={info} />
                    </div>
               </div>
          </div>
     );
};

export default Card;
