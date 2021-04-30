import { get } from "./../../services";

export default function loadComments(postId) {
     return get(`comments?postId=${postId}`);
}
