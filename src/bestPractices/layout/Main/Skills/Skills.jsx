import React from "react";
import './skills.css'

const Skills = () => {
     return (
          <section id='skills'>
               <div className='outer_container'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col col-md-5 col-md-push-7 col-sm-12'>
                                   <h1>Skills</h1>
                              </div>
                              <div className='col col-md-7 col-md-pull-5 col-sm-12'>
                                   <br />
                                   <div className='progress vertical'>
                                        <div
                                             className='progress-bar'
                                             role='progressbar'
                                             aria-valuenow='80'
                                             aria-valuemin='0'
                                             aria-valuemax='100'
                                             style={{height: '80%',width: '100%'}}
                                        >
                                             <div className='progress-label'>
                                                  <p>HTML</p>
                                                  <p>80%</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='progress vertical'>
                                        <div
                                             className='progress-bar'
                                             role='progressbar'
                                             aria-valuenow='75'
                                             aria-valuemin='0'
                                             aria-valuemax='100'
                                             style={{height: '75%',width: '100%'}}
                                        >
                                             <div className='progress-label'>
                                                  <p>WP</p>
                                                  <p>75%</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='progress vertical'>
                                        <div
                                             className='progress-bar'
                                             role='progressbar'
                                             aria-valuenow='65'
                                             aria-valuemin='0'
                                             aria-valuemax='100'
                                             style={{height: '65%',width: '100%'}}
                                        >
                                             <div className='progress-label'>
                                                  <p>jQuery</p>
                                                  <p>65%</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='progress vertical'>
                                        <div
                                             className='progress-bar'
                                             role='progressbar'
                                             aria-valuenow='90'
                                             aria-valuemin='0'
                                             aria-valuemax='100'
                                             style={{height: '90%',width: '100%'}}
                                        >
                                             <div className='progress-label'>
                                                  <p>PHP</p>
                                                  <p>90%</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='progress vertical'>
                                        <div
                                             className='progress-bar'
                                             role='progressbar'
                                             aria-valuenow='75'
                                             aria-valuemin='0'
                                             aria-valuemax='100'
                                             style={{height: '75%',width: '100%'}}
                                        >
                                             <div className='progress-label'>
                                                  <p>PS</p>
                                                  <p>75%</p>
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

export default Skills;
