import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

const Home = () => {
	const [state, dispatch] = usePostContext();
	console.log(state);

	return (
		<div>
			<h1>Home</h1>

			{state.posts.length > 0 ? (
				<ul>
					{state.posts.map((post) => (
						<Link key={post.id} to={`/post/${post.id}`}>
							<li>{post.title}</li>
						</Link>
					))}
				</ul>
			) : (
				<p>No posts</p>
			)}
		</div>
	);
};

export default Home;
