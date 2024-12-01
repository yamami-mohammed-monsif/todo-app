import { useState } from "react";

import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoElement from "./components/todoElement/TodoElement";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodoText) {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }

  function deleteItem(idx) {
    setTodos((previous) => {
      return previous.filter((item, index) => {
        return index !== idx;
      });
    });
  }

  return (
    <>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Input onAdd={addTodo} />
        <TodoElement todos={todos} onDelete={deleteItem} />
      </div>
    </>
  );
}

export default App;
