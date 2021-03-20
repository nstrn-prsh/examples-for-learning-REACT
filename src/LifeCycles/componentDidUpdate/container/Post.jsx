import React from "react";

const Post = (props) => {
     return (
          <div className='post'>
               <img src={`/assets/${props.postIndex.image}`} alt={props.postIndex.title} />
               <h1>{props.postIndex.title}</h1>
               <div>{props.postIndex.body}</div>
          </div>
     );
};

export default Post;
