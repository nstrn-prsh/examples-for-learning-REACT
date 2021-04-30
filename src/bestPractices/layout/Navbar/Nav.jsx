import React from "react";
import { A } from "hookrouter";
import "./nav.css";

const Nav = () => {
     return (
          <nav
               className='navbar navbar-default navbar-fixed-top'
               role='navigation'
          >
               <div className='container'>
                    <div className='row'>
                         <div className='col-md-2 col-sm-2 col-xs-12'>
                              <div className='navbar-header'>
                                   <button
                                        type='button'
                                        className='navbar-toggle'
                                        data-toggle='collapse'
                                        data-target='.navbar-collapse'
                                   >
                                        <span className='sr-only'>
                                             Toggle navigation
                                        </span>
                                        <span className='icon-bar'></span>
                                        <span className='icon-bar'></span>
                                        <span className='icon-bar'></span>
                                   </button>
                                   <A href='#' className='navbar-brand'>
                                        <img
                                             src='./../images/logo_PNG_source.png'
                                             alt='karma'
                                        />
                                   </A>
                              </div>
                         </div>

                         <div className='col-md-10 col-sm-10 col-xs-12'>
                              <div className='navbar-collapse collapse menu'>
                                   <ul className='nav navbar-nav navbar-right'>
                                        <li>
                                             <A href='/'>
                                                  <i className='fa fa-home'></i>
                                                  Home
                                             </A>
                                        </li>
                                        <li>
                                             <A href='/blog'>
                                                  <i className='fa fa-user'></i>
                                                  Blog
                                             </A>
                                        </li>
                                        <li>
                                             <a href='#services'>
                                                  <i className='fa fa-cogs'></i>
                                                  Services
                                             </a>
                                        </li>
                                        <li>
                                             <a href='#portfolio'>
                                                  <i className='fa fa-briefcase'></i>
                                                  Portfolio
                                             </a>
                                        </li>
                                        <li>
                                             <a href='#blog'>
                                                  <i className='fa fa-pencil'></i>
                                                  Blog
                                             </a>
                                        </li>
                                        <li>
                                             <a href='#contact'>
                                                  <i className='fa fa-envelope'></i>
                                                  Contact
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Nav;
