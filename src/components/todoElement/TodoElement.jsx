import "./todo-element.css";

function TodoElement({ todos }) {
  return (
    <ul className="todos-container">
      {todos.map((todo, index) => {
        return (
          <li key={index} className="todo-element">
            <input type="checkbox" id={index} />
            <label htmlFor={index}>{todo}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoElement;
