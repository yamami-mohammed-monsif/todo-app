import { useState } from "react";

import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoElement from "./components/todoElement/TodoElement";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }

  return (
    <>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Input onAdd={addTodo} />
        <TodoElement todos={todos} />
      </div>
    </>
  );
}

export default App;
