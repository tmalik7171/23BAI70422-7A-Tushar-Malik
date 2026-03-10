import React, { useState } from "react";
import "./Counter.css";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">

        <h1>React Counter</h1>

        <h2 className="count">{count}</h2>

        <div className="buttons">
          <button className="btn inc" onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button className="btn dec" onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button className="btn reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;