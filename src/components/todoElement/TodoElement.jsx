import "./todo-element.css";

function TodoElement({ todos }) {
  return (
    <ul className="todos-container">
      {todos.map((todo, index) => {
        return (
          <li key={todo.id} className="todo-element">
            <input type="checkbox" id={todo.id} />
            <label htmlFor={todo.id}>{todo.text}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoElement;
