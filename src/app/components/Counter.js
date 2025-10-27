"use client";
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  return (
    <div style={{ margin: "20px" }}>
      <p aria-live="polite">Count: {count}</p>

      {/* Step input */}
      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{ width: "60px", marginLeft: "8px", textAlign: "center" }}
          />
        </label>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={() => setCount(count - step)} disabled={count - step < 0}>
          Decrement
        </button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  );
}


