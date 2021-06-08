import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [
//      {
//           id: 1,
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
          addNewPost(state, action) {
               state.push(action.payload);
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
               prepare(postId, commentText) {
                    return {
                         payload: {
                              postId,
                              comment: {
                                   id: nanoid(),
                                   commentText,
                              },
                         },
                    };
               },
          },
          // update kardane comment
          updateComments: {
               reducer(state, action) {
                    const { postId, commentId, newComment } = action.payload;
                    state.forEach((post) => {
                         if (postId === post.id) {
                              post.comments.forEach((comment) => {
                                   if (commentId === comment.id)
                                        comment.comment = newComment;
                              });
                         }
                    });
               },
               prepare(postId, commentId, newComment) {
                    return {
                         payload: { postId, commentId, newComment },
                    };
               },
          },
     },
});

export default postSlice.reducer;
