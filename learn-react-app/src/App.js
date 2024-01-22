import React from 'react';
import Counter from './components/Counter';

const App = () => {
	console.log('App Component Rendered!');

	return (
		<div>
		<h1>React Rendering Example</h1>
		<Counter />
		</div>
	);
};

export default App;
