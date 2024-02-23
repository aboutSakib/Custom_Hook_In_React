import { useState } from "react";
export const useCounter = () => {
  const [counter, setCounter] = useState(10);

  const increaseHandler = (payload) => {
    setCounter((currentValue) => currentValue + payload);
  };
  const decreaseHandler = (payload) => {
    setCounter((currentValue) => currentValue - payload);
  };
  return {
    counter,
    increaseHandler,
    decreaseHandler,
  };
};
