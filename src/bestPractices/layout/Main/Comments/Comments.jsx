import React, { useState, useEffect } from "react";
import "./comments.css";
import { loadComments } from "./comments.js";

const Comments = ({ postId }) => {
     const [getComments, setComments] = useState(null);

     useEffect(() => {
          loadComments(postId).then(({ data }) => setComments(data));
     }, [postId]);

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
                                   <ul>
                                        {!getComments ? (
                                             <p> loading</p>
                                        ) : (
                                             getComments.map((c) => (
                                                  <li key={c.id}>{c.Summary}</li>
                                             ))
                                        )}
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Comments;
