import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-item ">
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => editTodo(task.id)}
          className="icons"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="icons"
        />
      </div>
    </div>
  );
};
