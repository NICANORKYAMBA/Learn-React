import React, { useState } from "react";
import TodoList from "./components/TodoList";
import './styles/App.css';


const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'Learn React',
			completed: false
		},
		{
			id: 2,
			text: 'Build todo app',
			completed: false
		},
		{
			id: 3,
			text: 'Deploy to production',
			completed: false
		},
		{
			id: 4,
			text: 'Have fun',
			completed: false
		}
	]);

	console.log('App Component Rendered!');

	const handleToggle = (id) => {
		setTodos((prevTodos) => 
			prevTodos.map((todo) => 
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	return (
		<div>
		<h1>Todo List App</h1>
		<TodoList todos={todos} onToggle={handleToggle} />
		</div>
	);
};

export default App;
