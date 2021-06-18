import commentSlice from "../features/Posts/commentSlice";
import postSlice from "./../features/Posts/postSlice";

const reducer = {
     posts: postSlice,
     comments: commentSlice,
};

export default reducer;
