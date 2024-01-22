import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log('Counter Component Rendered!');

  return (
    <div className='counter-container'>
      <p>Count: {count}</p>
      <div className='button-container'>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
