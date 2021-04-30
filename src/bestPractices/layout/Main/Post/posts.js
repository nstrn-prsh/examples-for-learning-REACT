import { get } from "./../../services";

export default function loadPost(id) {
     return get(`/posts/${id}`);
}
