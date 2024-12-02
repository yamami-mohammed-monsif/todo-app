import "./todo-element.css";

import crossIcon from "../../assets/images/icon-cross.svg";
import { useState } from "react";

function TodoElement({ todos, onDelete, onToggle }) {
  const [deletedTodo, setDeletedTodo] = useState(null);

  function handleClick(index, id) {
    setDeletedTodo(id);

    // waiting for animation to finish and then delete
    setTimeout(() => {
      onDelete(index);
      setDeletedTodo(null);
    }, 300);
  }

  return (
    <ul className="todos-container">
      {todos.map((todo, index) => {
        return (
          <li
            key={todo.id}
            className={`todo-element ${
              deletedTodo === todo.id ? "fade-out" : ""
            }`}
          >
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => onToggle(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.text}</label>
            <button
              className="deleteItem-btn"
              onClick={() => handleClick(index, todo.id)}
            >
              <img src={crossIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoElement;
