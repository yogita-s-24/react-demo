import { counterReducer, initialState } from "./counterReducer";
import {useReducer, useState} from 'react'

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: inputValue });
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: inputValue });
  };

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Subtract</button>
    </div>
  );
};

export default Counter;
