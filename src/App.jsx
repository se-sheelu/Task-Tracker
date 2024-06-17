import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItems] = useState([]);

  const handleNewItem = (todoName, todoDate) => {
    setTodoItems((currValue) => {
      if (todoName.trim() === "" || todoDate.trim() === "") {
        alert("Please enter a task and a date.");
        return;
      }
      if (todoName !== "" && todoDate !== "") {
        const newTodoItem = [
          ...currValue,
          { Todo: todoName, TodoDate: todoDate },
        ];
        return newTodoItem;
      }
    });
  };

  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.Todo !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItem.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <div className="items-container">
        <TodoItems items={todoItem} onDeleteClick={handleDelete}></TodoItems>
      </div>
    </center>
  );
}

export default App;
