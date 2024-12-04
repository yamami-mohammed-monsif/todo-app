import { useState } from "react";
import crossIcon from "../../assets/images/icon-cross.svg";

import "./todo-element.css";

function TodoElement({ todoItem, onDelete, onToggle }) {
  const [deletedTodo, setDeletedTodo] = useState(null);

  function handleDelete(id) {
    setDeletedTodo(id);

    // waiting for animation to finish and then delete
    setTimeout(() => {
      onDelete(id);
      setDeletedTodo(null);
    }, 400);
  }

  return (
    <li
      className={`todo-element ${
        deletedTodo === todoItem.id ? "fade-out" : ""
      } ${todoItem.completed ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        id={todoItem.id}
        onChange={() => onToggle(todoItem.id)}
      />
      <label htmlFor={todoItem.id}>{todoItem.text}</label>
      <button
        className="deleteItem-btn"
        onClick={() => handleDelete(todoItem.id)}
      >
        <img src={crossIcon} />
      </button>
    </li>
  );
}

export default TodoElement;
