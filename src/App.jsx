import { useState } from "react";

import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoElement from "./components/todoElement/TodoElement";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // create new todo item
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

  // delete a todo item
  function deleteItem(idx) {
    setTodos((previous) => {
      return previous.filter((_, index) => {
        return index !== idx;
      });
    });
  }

  function toggleTodo(id) {
    setTodos((previous) => {
      return previous.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  return (
    <>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Input onAdd={addTodo} />
        <TodoElement
          todos={todos}
          onDelete={deleteItem}
          onToggle={toggleTodo}
        />
      </div>
    </>
  );
}

export default App;
