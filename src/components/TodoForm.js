import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add a new task"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};
