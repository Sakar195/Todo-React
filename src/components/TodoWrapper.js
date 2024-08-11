import React, { useState, useEffect } from "react";
import { ToDoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditToDoForm } from "./EditTodoForm";

import { v4 as uuidv4 } from "uuid";

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Track if todos have been loaded

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(savedTodos);
    console.log("logging savedTodos");
    if (savedTodos) {
      setTodos(savedTodos);
    }

    setIsLoaded(true); // Mark as loaded after the initial load
  }, []);

  // Save todos to localStorage whenever the todos state changes, but only after the initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (todo) => {
    if (todo.trim() === "") return;

    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todos);
  };

  //removing todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
