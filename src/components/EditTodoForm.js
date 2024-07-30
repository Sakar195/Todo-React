import React, { useState } from "react";

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Update Task"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="add-button">
        Update Task
      </button>
    </form>
  );
};
