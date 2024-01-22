import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, onToggle }) => {
	console.log('TodoItem Component Rendered!');

	return (
		<li style={{ 
			textDecoration: todo.completed ? 'line-through' : 'none' 
		}}>
		<input 
		type="checkbox" 
		checked={todo.completed} 
		onChange={() => onToggle(todo.id)} 
		/>
		{todo.text}
		</li>
	);
};

export default TodoItem;
