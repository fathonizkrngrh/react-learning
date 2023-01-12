import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // 0 is start value or default

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <button onClick={handleReset}>Reset</button>
      <h3>Button clicked = {count}</h3>
    </div>
  );
}

export default App;
