import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addNewComment } from "./commentSlice";

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
          // new: f44
          // baraye ezafe kardane comment ye action factory hast ke id ro ezafe mikone
          extraReducers: (builder) => {
               builder.addCase(addNewComment, (state, action) => {
                    // commentSlice/addNewComment/payload
                    const { postId, comment } = action.payload;
                    state.forEach((post) => {
                         if (postId === post.id) post.comments.push(comment.id);
                    });
               });
          },
     },
});

export const { addNewPost } = postSlice.actions;

export default postSlice.reducer;
