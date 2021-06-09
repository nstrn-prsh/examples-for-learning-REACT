import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewComment, updateComments } from "./postReducer";
import Faker from "Faker";

const ShowComments = ({ comment }) => {
     const dispatch = useDispatch();
     const handleUpdateComment = () => {
          dispatch(updateComments(comment.id, Faker.lorem.sentence()));
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

     const comments = post.comments.map((comment) => (
          <ShowComments key={comment.id} comment={comment} />
     ));

     return (
          <div className='post'>
               <p>{post.title}</p>
               <button onClick={handleNewComment}>Add New Comment</button>
               {comments}
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
