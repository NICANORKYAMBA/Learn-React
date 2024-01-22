import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, onToggle }) => {
	console.log('TodoList Component Rendered!');

	return (
		<ul>
		{todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				onToggle={onToggle}
			/>
		))}
		</ul>
	);
};

export default TodoList;
