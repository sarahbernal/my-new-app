"use client";
import { useState } from "react";

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
      <button onClick={() => setCount(initial)}>Reset</button>
    </div>
  );
}


