import { useState, createContext } from "react";

import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoElement from "./components/todoElement/TodoElement";
import ControllBar from "./components/controllBar/ControllBar";

import "./App.css";
import "./components/todoElement/todo-element.css";

export const filterContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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
  function deleteItem(id) {
    setTodos((previous) => {
      return previous.filter((item) => {
        return item.id !== id;
      });
    });
  }

  // toggle todo item completed status
  function toggleTodo(id) {
    setTodos((previous) => {
      return previous.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  // clear completed items
  function clearCompleted() {
    setTodos((previous) => {
      return previous.filter((todo) => {
        return todo.completed !== true;
      });
    });
  }

  // filter the todos by active or completed
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Input onAdd={addTodo} />
        <ul className="todos-container">
          {filteredTodos.map((todo) => {
            return (
              <TodoElement
                key={todo.id}
                todoItem={todo}
                onDelete={deleteItem}
                onToggle={toggleTodo}
              />
            );
          })}
        </ul>
        {todos.length > 0 && (
          <filterContext.Provider value={{ setFilter, filter }}>
            <ControllBar onClearCompleted={clearCompleted} todos={todos} />
          </filterContext.Provider>
        )}
      </div>
    </>
  );
}

export default App;
