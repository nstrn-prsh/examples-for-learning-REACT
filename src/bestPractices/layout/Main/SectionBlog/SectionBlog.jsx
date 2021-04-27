import React from "react";

const SectionBlog = () => {
     return (
          <section id='blog'>
               <div className='outer_container'>
                    <div className='container'>
                         <div className='row'>
                              <div className='col col-md-5 col-md-push-7 col-sm-12'>
                                   <h1>Blog</h1>
                              </div>
                              <div className='col col-md-7 col-md-pull-5 col-sm-12'>
                                   <div className='blog_posts_container'>
                                        <div className='blog_post'>
                                             <h2>
                                                  22
                                                  <br />
                                                  October
                                             </h2>
                                             <img
                                                  src="./../../images/sunFlower.jpg"
                                                  alt='Blog Post 1'
                                                  className='img-responsive'
                                             />
                                        </div>
                                        <div className='blog_post'>
                                             <h2>
                                                  23
                                                  <br />
                                                  October
                                             </h2>
                                             <img
                                                  src="./../../images/sunFlower.jpg"
                                                  alt='Blog Post 2'
                                                  className='img-responsive'
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SectionBlog;
