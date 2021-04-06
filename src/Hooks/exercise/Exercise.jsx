import React, { useState, useEffect } from "react";
import Loader from "./loader/Loader";
import Toast from "./toast/Toast";

const Exercise = () => {
     const [getToastify, setToastify] = useState({
          type: "success",
          msg: "",
     });
     const [getTitle, setTitle] = useState("");
     const [getPostId, setPostId] = useState(1);
     const [getLoading, setLoading] = useState(true);

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${getPostId}`)
               .then((res) => res.json())
               .then((post) => {
                    setTitle(post.title);
                    setLoading(false);
                    setToastify({
                         type: "success",
                         msg: `post ${getPostId} loaded!`,
                    });
               });
     }, [getPostId]);

     const handleId = (e) => {
          setPostId(e.target.value);
          setLoading(true);
     };

     return (
          <div>
               <div>
                    <label>post title:</label>
                    <input
                         type='number'
                         value={getPostId}
                         onChange={handleId}
                    />
               </div>
               <div>{getLoading ? <Loader /> : <h1>{getTitle}</h1>}</div>
               <Toast type={getToastify.type} msg={getToastify.msg} />
          </div>
     );
};

export default Exercise;
