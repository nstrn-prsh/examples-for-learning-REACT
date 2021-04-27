import React from "react";

const SectionServices = () => {
     return (
          <section id='services'>
               <div className='outer_container'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col col-md-5 col-sm-12 col-xs-12'>
                                   <h1>Services</h1>
                              </div>
                              <div className='col-md-2 col-sm-2 col-xs-2'>
                                   <div className='services_buttons'>
                                        <ul id='services_tabs'>
                                             <li
                                                  className='icon-button active'
                                                  data-target='#pencil'
                                             >
                                                  <i
                                                       className='fa fa-pencil'
                                                       style={{verticalAlign: 'middle'}}
                                                  ></i>
                                             </li>
                                             <li
                                                  className='icon-button'
                                                  data-target='#cog'
                                             >
                                                  <i className='fa fa-cog'></i>
                                             </li>
                                             <li
                                                  className='icon-button'
                                                  data-target='#signal'
                                             >
                                                  <i className='fa fa-signal'></i>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div
                                   className='col col-md-5 col-sm-10 col-xs-10 center-row'
                                   id='services_content'
                              >
                                   <div className='arrow-left'></div>
                                   <div className='arrow-box center-row'>
                                        <div className='tab-content center'>
                                             <div
                                                  className='tab-pane fade in active'
                                                  id='pencil'
                                             >
                                                  <h3>Web Design</h3>
                                                  <p>
                                                       Donec vehicula lectus ac
                                                       ultrices aliquam.
                                                       Pellentesque aliquam erat
                                                       justo, nec auctor sem
                                                       vulputate vitae. Praesent
                                                       varius neque in dolor
                                                       cursus dictum. Donec
                                                       dignissim nibh nec
                                                       adipiscing vehicula.
                                                  </p>
                                                  <p>
                                                       Quisque euismod enim et
                                                       dignissim dictum. Vivamus
                                                       eu tortor pharetra,
                                                       mollis orci eget,
                                                       pulvinar nisl. Sed
                                                       consequat odio eget nunc
                                                       tristique venenatis.
                                                  </p>
                                             </div>
                                             <div
                                                  className='tab-pane fade'
                                                  id='cog'
                                             >
                                                  <h3>Online Marketing</h3>
                                                  <p>
                                                       Vivamus tempor elit nec
                                                       metus pellentesque
                                                       posuere. Donec velit
                                                       arcu, vehicula nec tellus
                                                       eu. Lorem ipsum dolor sit
                                                       amet, consectetur
                                                       adipiscing elit.
                                                  </p>
                                                  <p>
                                                       Vestibulum ac
                                                       enim.Vestibulum at mollis
                                                       justo, eu elementum nisi.
                                                       Nullam non eros molestie,
                                                       tristique libero ut,
                                                       lacinia diam.
                                                  </p>
                                             </div>
                                             <div
                                                  className='tab-pane fade'
                                                  id='signal'
                                             >
                                                  <h3>Social Media</h3>
                                                  <p>
                                                       Quisque gravida ac nisl
                                                       nec ultrices. Mauris
                                                       tincidunt magna vitae
                                                       feugiat tincidunt.
                                                       Maecenas semper quis arcu
                                                       in porta.
                                                  </p>
                                                  <p>
                                                       Download free templates
                                                       for your websites. Cum
                                                       sociis natoque penatibus
                                                       et magnis dis parturient
                                                       montes, nascetur
                                                       ridiculus mus. Aenean
                                                       adipiscing quam sed neque
                                                       dapibus, id convallis
                                                       mauris eleifend. Quisque
                                                       sit amet nisl a ante
                                                       pulvinar sodales.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SectionServices;
