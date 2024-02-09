import React, { useCallback, useState } from "react";
import List from "./List";
function App() {
  console.log("Parent");
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(() => {
    setTodos((todo) => [...todo, "new todo"]);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count++
      </button>
      <br />
      {count}
      <br />
      <br />
      <List todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
