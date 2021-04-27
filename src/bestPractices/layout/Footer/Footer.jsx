import React from "react";
import "./footer.css";

const Footer = () => {
     return (
          <footer>
               <div className='container'>
                    <div className='row'>
                         <div className='col col-md-6 col-sm-6 col-xs-6 col-xxs'>
                              <img
                                   src='./../images/logo_PNG_source.png'
                                   alt='karma'
                              />
                              <div id='templatemo_copyright'>
                                   Copyright © 2084 <a href='#'>Company Name</a>
                              </div>
                         </div>
                         <div className='col col-md-6 col-sm-6 col-xs-6 col-xxs'>
                              <div className='pull-right'>
                                   <div className='social_buttons'>
                                        <a
                                             href='#'
                                             rel='nofollow'
                                             className='icon-button facebook'
                                        >
                                             <i className='fa fa-facebook'></i>
                                        </a>
                                        <a
                                             href='#'
                                             rel='nofollow'
                                             className='icon-button twitter'
                                        >
                                             <i className='fa fa-twitter'></i>
                                        </a>
                                        <a
                                             href='#'
                                             rel='nofollow'
                                             className='icon-button youtube'
                                        >
                                             <i className='fa fa-youtube'></i>
                                        </a>
                                   </div>
                                   <a href='#' id='go-top'>
                                        <div className='back_to_top'>
                                             Back To Top
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
