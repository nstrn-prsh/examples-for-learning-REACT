import React from "react";

const Box = ({ info }) => {
     return (
          <div className='col-12 col-md-3'>
               <div className='card'>
                    {info && (
                         <ul className='list-group list-group-flush'>
                              <li className='list-group-item'>
                                   country: {info.commonName}
                              </li>
                              <li className='list-group-item'>
                                   capital: {info.capital}
                              </li>
                              <li className='list-group-item'>
                                   largest city: {info.largestCity}
                              </li>
                              <li className='list-group-item'>
                                   language:{info.languages}
                              </li>
                              <li className='list-group-item'>
                                   regime:{info.officialLanguages}
                              </li>
                              <li className='list-group-item'>
                                   population: {info.populationCensus}
                              </li>
                              <li className='list-group-item'>
                                   currency: {info.currency}
                              </li>
                         </ul>
                    )}
               </div>
          </div>
     );
};

export default Box;
