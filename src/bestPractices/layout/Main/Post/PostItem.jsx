import React from "react";

const PostItem = ({ imgSrc, imgAlt, title, children }) => {
     return (
          <div className='col col-md-4 col-sm-4 col-xs-6'>
               <div className='portfolio-item'>
                    <div className='portfolio-thumb'>
                         <img
                              src={imgSrc}
                              alt={`portfolio ${imgAlt} `}
                              className='img-responsive'
                         />
                         <div className='overlay-p'>
                              <a href='#'>
                                   <h2>{title}</h2>
                                   <p>{children}</p>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PostItem;
