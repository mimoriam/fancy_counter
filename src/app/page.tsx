"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <main>
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          {count > 4 ? <h2>Limit reached</h2> : null}
          <h1 className="card-title">{count}</h1>
          <button className="btn btn-circle" onClick={() => setCount(0)}>
            reset
          </button>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
