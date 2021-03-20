import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
     return (
          <div className='comments'>
               <p>Comments:</p>
               {props.commentIndex.map((c, i) => (
                    <div className='comment' key={i}>
                         <Comment comment={c.body} />
                    </div>
               ))}
          </div>
     );
};

export default Comments;
