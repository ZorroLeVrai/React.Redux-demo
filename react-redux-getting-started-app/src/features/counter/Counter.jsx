import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div>
      <button aria-label="Increment value" onClick={handleIncrement}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
