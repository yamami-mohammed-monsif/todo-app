import SortButtons from "../sortButtons/SortButtons";
import "./controll-bar.css";

function ControllBar({ onClearCompleted, todos }) {
  const activeTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  return (
    <div className="controll-bar">
      <button className="items-left">{`${activeTodos.length} items left`}</button>
      <SortButtons />
      <button
        className="clear-completed-btn"
        onClick={() => onClearCompleted()}
      >
        clear completed
      </button>
    </div>
  );
}

export default ControllBar;
