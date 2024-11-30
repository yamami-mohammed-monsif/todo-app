import { useState } from "react";
import "./input.css";

function Input({ onAdd }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    input !== "" && onAdd(input);
    setInput("");
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="create a new todo..."
        value={input}
        onChange={handleChange}
      />
      <button className="add-btn" type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default Input;
