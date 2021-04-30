import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import BlogPost from "./BlogPost";
import { get } from "./../../services";

const Blog = () => {
     const [getPosts, setPosts] = useState([]);

     useEffect(() => {
          get("/posts").then(({ data }) => setPosts(data));
     }, []);

     const blogPost = getPosts.map((post) => {
          return (
               <BlogPost
                    data={{
                         target: `/post/${post.id}`,
                         title: post.title,
                         summary: post.summary,
                         imgSrc: post.img,
                         altPost: "Post 1",
                    }}
               />
          );
     });

     return (
          <Layout>
               <section id='blog'>
                    <div className='outer_container'>
                         <div className='container'>
                              <div className='row'>
                                   <div className='col col-md-5 col-md-push-7 col-sm-12'>
                                        <h1>Blog</h1>
                                   </div>
                                   <div className='col col-md-7 col-md-pull-5 col-sm-12'>
                                        <div className='blog_posts_container'>
                                             {blogPost}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </Layout>
     );
};

export default Blog;
