import "./todo-element.css";

import crossIcon from "../../assets/images/icon-cross.svg";

function TodoElement({ todos, onDelete, onToggle }) {
  return (
    <ul className="todos-container">
      {todos.map((todo, index) => {
        return (
          <li key={todo.id} className="todo-element">
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => onToggle(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.text}</label>
            <button className="deleteItem-btn" onClick={() => onDelete(index)}>
              <img src={crossIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoElement;
