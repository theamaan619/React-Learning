import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoitems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoitems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoitems = todoItems.filter((item) => item.name !== todoItemName); // Filter Method
    setTodoItems(newTodoitems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {/* App bolta hai ki addtodo mai jo item hoga woh mujhe pass kardena handleNewItem method call karke */}
      {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
