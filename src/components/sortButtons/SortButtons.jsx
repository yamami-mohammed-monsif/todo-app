import { useContext } from "react";
import { filterContext } from "../../App";

import "./sort-buttons.css";

function SortButtons() {
  const { setFilter, filter } = useContext(filterContext);

  return (
    <div className="sort-buttons-container">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => {
          setFilter("all");
        }}
      >
        all
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => {
          setFilter("active");
        }}
      >
        active
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => {
          setFilter("completed");
        }}
      >
        completed
      </button>
    </div>
  );
}

export default SortButtons;
