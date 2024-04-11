import "./App.css";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<>
			<main>
				<section>
					<h1>Todos List</h1>

					<AddTodoForm />
					<TodoList />
				</section>
			</main>
		</>
	);
};

export default App;
