import { useSelector, useDispatch } from "react-redux";
import Faker from "Faker";
import { addNewComment, updateComments } from "./commentSlice";

const ShowComments = ({ id }) => {
     // oni ke idish barabare be soorate araye bargardoon
     const comment = useSelector(
          (state) => state.comments.byId[id]
          // return state.comments.filter((comment) => id === comment.id)[0];
     );
     const dispatch = useDispatch();

     const handleUpdateComment = () => {
          dispatch(updateComments(id, Faker.lorem.sentence()));
     };

     return (
          <div className='comment'>
               <button onClick={handleUpdateComment}>update comment</button>
               <p>{comment.commentBody}</p>
          </div>
     );
};

const Post = ({ id }) => {
     const post = useSelector((state) => state.posts.byId[id]);
     const dispatch = useDispatch();

     const handleNewComment = () => {
          dispatch(addNewComment(id, Faker.lorem.sentence()));
     };

     return (
          <div className='post'>
               <p>{post.title}</p>
               <button onClick={handleNewComment}>Add New Comment</button>
               {post.comments.map((commentId) => (
                    <ShowComments key={commentId} id={commentId} />
               ))}
          </div>
     );
};

export default function Posts() {
     const postIds = useSelector((state) => state.posts.allIds);
     const postCm = postIds.map((id) => <Post id={id} key={id} />);

     return (
          <div>
               <div>{postCm}</div>
          </div>
     );
}
