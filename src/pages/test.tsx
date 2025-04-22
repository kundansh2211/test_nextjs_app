import React, { useState } from 'react';

function RedundantStateComponent() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setDoubleCount((count + 1) * 2);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={increment}>Increment</button>

      
    </div>
  );
}

export default RedundantStateComponent;