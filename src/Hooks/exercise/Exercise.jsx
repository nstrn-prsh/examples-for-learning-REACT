import React, { useReducer, useEffect } from "react";
import Loader from "./loader/Loader";
import Toast from "./toast/Toast";

const init = (initialState) => {
     return initialState;
};

const initialState = {
     getToastify: {
          type: "success",
          msg: "",
     },
     getTitle: "",
     getPostId: 1,
     getLoading: true,
};

const reducer = (state, action) => {
     switch (action.type) {
          case "GET_ANSWER_SUCCESS":
               return {
                    ...state,
                    getToastify: {
                         type: "success",
                         msg: action.payload.msg,
                    },
                    getTitle: action.payload.title,
                    getLoading: false,
               };

          case "SEND_REQUEST":
               return {
                    ...state,
                    getPostId: action.payload,
                    getLoading: true,
               };

          default:
               return state;
     }
};

const Exercise = () => {
     const [
          { getToastify, getTitle, getPostId, getLoading },
          dispatch,
     ] = useReducer(reducer, initialState, init);

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${getPostId}`)
               .then((res) => res.json())
               .then((post) => {
                    dispatch({
                         type: "GET_ANSWER_SUCCESS",
                         payload: {
                              title: post.title,
                              msg: `post ${getPostId} loaded!`,
                         },
                    });
               });
     }, [getPostId]);

     const handleId = (e) => {
          dispatch({
               type: "SEND_REQUEST",
               payload: e.target.value,
          });
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
