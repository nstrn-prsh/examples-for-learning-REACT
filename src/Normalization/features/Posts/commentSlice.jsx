import { createSlice, nanoid } from "@reduxjs/toolkit";
// f44

const commentSlice = createSlice({
     name: "comments",
     initialState:[],
     reducers: {
          // ezafe kardane comment
          addNewComment: {
               reducer(state, action) {
                    const { postId, comment } = action.payload;
                    // update
                    state.push(comment);
                    /*state.forEach((post) => {
                         if (postId === post.id) {
                              post.comments.push(comment);
                         }
                    });*/
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
                    state.some((comment) => {
                         //  post.comments.forEach((comment) => {
                         if (commentId === comment.id) {
                              comment.commentBody = newComment;
                              return true;
                         }
                         //  });
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

export const { addNewComment, updateComments } = commentSlice.actions;
export default commentSlice.reducer;
