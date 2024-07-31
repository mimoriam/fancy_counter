"use client";
import { useState } from "react";
import Count from "@/app/components/Count";
import ResetButton from "@/app/components/ResetButton";
import CountButton from "@/app/components/CountButton";
import { useKeyPressEvent } from "react-use";

export default function Card() {
  const [count, setCount] = useState<number>(0);
  const locked = count === 5;

  const incrementOnSpace = () => {
    const newCount = count + 1;
    if (newCount > 5) {
      setCount(5);
      return;
    }
    setCount(newCount);
  };

  useKeyPressEvent(" ", incrementOnSpace);

  return (
    <main>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          {locked ? <h2>Limit reached</h2> : "Fancy Counter"}
          <Count count={count} />
          <ResetButton setCount={setCount} />
          <div className="card-actions justify-end">
            <CountButton type="minus" setCount={setCount} locked={locked} />
            <CountButton type="plus" setCount={setCount} locked={locked} />
          </div>
        </div>
      </div>
    </main>
  );
}
