import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

const Home = () => {
	const [state, dispatch] = usePostContext();
	console.log(state);

	const handleDelete = (id) => {
		dispatch({ type: "DELETE_POST", payload: id });
	};

	return (
		<div>
			<h1>Home</h1>

			{state.posts.length > 0 ? (
				<ul>
					{state.posts.map((post) => (
						<div
							key={post.id}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<Link to={`/post/${post.id}`}>
								<li>{post.title}</li>
							</Link>
							<button onClick={() => handleDelete(post.id)}>
								Delete
							</button>
						</div>
					))}
				</ul>
			) : (
				<p>No posts</p>
			)}
		</div>
	);
};

export default Home;
