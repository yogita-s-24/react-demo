import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Todo List </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add new todo"
          onChange={(e) => setInputValue(e.target.value)}             
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todos, index) => {
        return <li key={index}>{todos}</li>;
      })}
    </div>
  );
};

export default ToDoList;
