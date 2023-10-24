import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      count is {count}
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  );
}

export default App;
