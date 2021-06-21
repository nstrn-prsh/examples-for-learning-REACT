import { useSelector, useDispatch } from "react-redux";
import Faker from "Faker";
import { addNewComment, updateComment } from "./commentSlice";

// show comments
function Comment({ id }) {
     // oni ke idish barabare be soorate araye bargardoon
     // return state.comments.filter((comment) => id === comment.id)[0];
     const comment = useSelector((state) => state.comments.byId[id]);
     const dispatch = useDispatch();

     const handleUpdateComment = () => {
          dispatch(updateComment(id, Faker.lorem.sentence()));
     };

     return (
          <div className='comment'>
               <button onClick={handleUpdateComment}>Update comment</button>
               <p>{comment.body}</p>
          </div>
     );
}

function Post({ id }) {
     const post = useSelector((state) => state.posts.byId[id]);
     const dispatch = useDispatch();

     const handleNewComment = () => {
          dispatch(addNewComment(id, Faker.lorem.sentence()));
     };

     return (
          <div className='post'>
               <p>{post.title}</p>
               <button onClick={handleNewComment}>Add new comment</button>
               {post.comments.map((commentId) => (
                    <Comment id={commentId} key={commentId} />
               ))}
          </div>
     );
}

function Posts() {
     const postIds = useSelector((state) => state.posts.allIds);
     const postCm = postIds.map((id) => <Post id={id} key={id} />);

     return <div>{postCm}</div>;
}

export default Posts;
