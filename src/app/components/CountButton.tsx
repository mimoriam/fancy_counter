import React, { SetStateAction } from "react";

interface CountButtonProps {
  type: "plus" | "minus";
  setCount: React.Dispatch<SetStateAction<number>>;
  locked: boolean;
}

export default function CountButton({
  type,
  setCount,
  locked,
}: CountButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };
  return type === "minus" ? (
    <button disabled={locked} onClick={handleClick} className="btn btn-primary">
      -
    </button>
  ) : (
    <button disabled={locked} onClick={handleClick} className="btn btn-ghost">
      +
    </button>
  );
}
