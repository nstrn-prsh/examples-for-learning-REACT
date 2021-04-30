import React from "react";
import {A} from 'hookrouter'

const BlogPost = ({ data }) => {
     return (
          <div className='blog_post'>
               <A href={data.target}>
                    <h2>
                         {data.title}
                         <br />
                         {data.summary}
                    </h2>
                    <img
                         src={data.imgSrc}
                         alt={`Blog ${data.altPost}`}
                         className='img-responsive'
                    />
               </A>
          </div>
     );
};

export default BlogPost;
