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

     const handleState = (type, payload) => {
          switch (type) {
               case "GET_ANSWER_SUCCESS":
                    setTitle(payload.title);
                    setLoading(false);
                    setToastify({
                         type: "success",
                         msg: payload.msg,
                    });
                    break;
               case "SEND_REQUEST":
                    setPostId(payload);
                    setLoading(true);
                    break;

               default:
                    break;
          }
     };

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${getPostId}`)
               .then((res) => res.json())
               .then((post) => {
                    handleState("GET_ANSWER_SUCCESS", {
                         title: post.title,
                         msg: `post ${getPostId} loaded!`,
                    });
               });
     }, [getPostId]);

     const handleId = (e) => {
          handleState("SEND_REQUEST", e.target.value);
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
