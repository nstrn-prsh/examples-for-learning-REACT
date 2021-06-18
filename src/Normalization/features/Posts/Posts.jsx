import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Faker from "Faker";
import { addNewComment, updateComments } from "./commentSlice";

const ShowComments = ({ id }) => {
     // oni ke idish barabare be soorate araye bargardoon
     const comment = useSelector((state) => {
          return state.comments.filter((comment) => id === comment.id)[0];
     });
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

const Post = ({ post }) => {
     const dispatch = useDispatch();

     const handleNewComment = () => {
          dispatch(addNewComment(post.id, Faker.lorem.sentence()));
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
     const posts = useSelector((state) => state.posts);
     const postCm = posts.map((post) => <Post post={post} key={post.id} />);

     return (
          <div>
               <div>{postCm}</div>
          </div>
     );
}
