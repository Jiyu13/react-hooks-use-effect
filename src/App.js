import React, { useState, useEffect } from "react";

function App() {
  // 1. set states
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")


  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      {/* 2. ass onClick event listener to update count */}
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>;
    </div>
    
  )
}

export default App;
