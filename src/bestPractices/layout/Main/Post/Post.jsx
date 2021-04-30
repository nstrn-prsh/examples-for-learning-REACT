import React, { useState, useEffect } from "react";
import "./post.css";
import PostItem from "./PostItem";
import Layout from "./../../Layout";
import loadPost from "./posts";
import Comments from "../Comments/Comments";
import { post } from "../../services";

const Post = ({ id }) => {
     const [getPost, setPost] = useState(null);

     useEffect(() => {
          loadPost(id).then((res) => setPost(res.date));
     }, [id]);

     return (
          <Layout>
               <section id='portfolio'>
                    <div className='outer_container'>
                         <div className='container'>
                              {!getPost ? (
                                   <p>loading...</p>
                              ) : (
                                   <div className='row'>
                                        <div className='col col-md-5 col-sm-12'>
                                             <h1>{getPost.title}</h1>
                                        </div>
                                        <div
                                             className='col col-md-7 col-sm-12'
                                             id='portfolio_content'
                                        >
                                             <div className='row'>
                                                  <PostItem
                                                       imgSrc='./../../images/sunFlower.jpg'
                                                       imgAlt='image 1'
                                                       title='title 1'
                                                  >
                                                       {getPost.body}
                                                  </PostItem>
                                                  <Comments postId={post.id} />
                                             </div>
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </section>
          </Layout>
     );
};

export default Post;
