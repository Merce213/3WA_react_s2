import { usePostContext } from "../context/PostContext";

const NewPost = () => {
	const [state, dispatch] = usePostContext();
	console.log(state);

	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: "SET_VALUE", payload: { name, value } });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!state.title.trim() || !state.content.trim()) {
			dispatch({
				type: "SET_ERROR",
				payload: "Please fill in all fields",
			});

			return;
		}

		dispatch({ type: "ADD_POST" });
	};

	return (
		<div>
			<h1>New post</h1>

			{state.error && <p style={{ color: "red" }}>{state.error}</p>}
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					justifyContent: "center",
				}}
				onSubmit={handleSubmit}
			>
				<label htmlFor="title">
					Title
					<input
						type="text"
						id="title"
						name="title"
						value={state.title}
						onChange={handleChange}
					/>
				</label>

				<label htmlFor="content">
					Content
					<textarea
						id="content"
						name="content"
						value={state.content}
						onChange={handleChange}
					/>
				</label>

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default NewPost;
