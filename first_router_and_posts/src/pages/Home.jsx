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
						<li key={post.id}>
							<h2>{post.title}</h2>
						</li>
					))}
				</ul>
			) : (
				<p>No posts</p>
			)}
		</div>
	);
};

export default Home;
