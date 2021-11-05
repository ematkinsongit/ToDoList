import React from "react";
import Todo from "./Todo";

function ToDoApp({ todoList, toggleTodo }) {
  return todoList.map((todo) => {
    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
  });
}

export default ToDoApp;
