import React, { SetStateAction } from "react";

interface ResetButtonProps {
  setCount: React.Dispatch<SetStateAction<number>>;
}

export default function ResetButton({ setCount }: ResetButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    // Do something with event object in this way:
    event.currentTarget.blur();
  };
  return (
    <button className="btn btn-circle" onClick={handleClick}>
      reset
    </button>
  );
}
