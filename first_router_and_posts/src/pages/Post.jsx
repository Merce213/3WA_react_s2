import { useParams } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

const Post = () => {
	const { id } = useParams();

	const [state] = usePostContext();

	const post = state.posts.find((post) => post.id === Number(id));

	if (!post) {
		return <h1>Post not found</h1>;
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default Post;
