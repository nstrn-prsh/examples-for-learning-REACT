import React from "react";

const SectionContact = () => {
     return (
          <section id='contact'>
               <div className='outer_container'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col col-md-5 col-sm-12'>
                                   <h1>Contact</h1>
                              </div>
                              <div
                                   className='col col-md-7 col-sm-12 col-xs-12 center-row'
                                   id='contact_content'
                              >
                                   <form
                                        role='form'
                                        action='#'
                                        method='post'
                                        className='center'
                                   >
                                        <div className='row'>
                                             <div className='col-md-6'>
                                                  <div className='form-group'>
                                                       <input
                                                            name='fullname'
                                                            type='text'
                                                            className='form-control'
                                                            id='input_name'
                                                            placeholder='Name...'
                                                       />
                                                  </div>
                                             </div>
                                             <div className='col-md-6'>
                                                  <div className='form-group'>
                                                       <input
                                                            name='email'
                                                            type='email'
                                                            className='form-control'
                                                            id='input_email'
                                                            placeholder='Email...'
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='row'>
                                             <div className='col-md-12'>
                                                  <div className='form-group'>
                                                       <textarea
                                                            name='message'
                                                            rows='3'
                                                            className='form-control'
                                                            id='input_message'
                                                            placeholder='Message...'
                                                       ></textarea>
                                                       <br />
                                                       <button
                                                            type='submit'
                                                            className='btn btn-primary pull-right'
                                                       >
                                                            SEND
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SectionContact;
