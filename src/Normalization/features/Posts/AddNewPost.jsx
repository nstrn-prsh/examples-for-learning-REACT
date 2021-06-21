import { useDispatch } from "react-redux";
import { addNewPost } from "./postSlice";
import Faker from "Faker";

const AddPost = () => {
     const dispatch = useDispatch();
     
     const handleNewPost = () => {
          dispatch(addNewPost(Faker.lorem.sentence(), Faker.lorem.paragraph()));
     };

     return <button onClick={handleNewPost}>New Post</button>;
};

export default AddPost;
