import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [
//      {
//           id: 1,
//           title: "port title 1",
//           body: "post body 1",
//           comments: [
//                {
//                     id: 1,
//                     comments: "comment body 1",
//                },
//                {
//                     id: 2,
//                     comments: "comment body 1",
//                },
//           ],
//      },
// ];

const postSlice = createSlice({
     name: "posts",
     initialState: [],
     reducers: {
          addNewPost: {
               reducer(state, action) {
                    state.push(action.payload);
               },
               prepare(title, body) {
                    return {
                         payload: {
                              id: nanoid(),
                              title,
                              body,
                              comments: [],
                         },
                    };
               },
          },
          // ezafe kardane comment
          addNewComment: {
               reducer(state, action) {
                    const { postId, comment } = action.payload;
                    // update
                    state.forEach((post) => {
                         if (postId === post.id) {
                              post.comments.push(comment);
                         }
                    });
               },
               prepare(postId, commentBody) {
                    return {
                         payload: {
                              postId,
                              comment: {
                                   id: nanoid(),
                                   commentBody,
                              },
                         },
                    };
               },
          },
          // update kardane comment
          updateComments: {
               reducer(state, action) {
                    const { commentId, newComment } = action.payload;
                    state.some((post) => {
                         post.comments.forEach((comment) => {
                              if (commentId === comment.id) {
                                   comment.commentBody = newComment;
                                   return true;
                              }
                         });
                         return false;
                    });
               },
               prepare(commentId, newComment) {
                    return {
                         payload: { commentId, newComment },
                    };
               },
          },
     },
});

export const { addNewPost, addNewComment, updateComments } = postSlice.actions;

export default postSlice.reducer;
