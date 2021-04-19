import React from "react";
import ImageMapper from "react-image-mapper";
import mapJson from "./../Map/map.json";
import mapImage from "./../Map/world-political-maps.jpg";

const Image = ({ selectedCountry }) => {
     return (
          <div className='left-column'>
               <div className='col col-md-9'>
                    <ImageMapper
                         onClick={(e) => selectedCountry(e.name)}
                         src={mapImage}
                         map={mapJson}
                         width={800}
                         imgWidth={1000}
                    />
               </div>
          </div>
     );
};

export default Image;
