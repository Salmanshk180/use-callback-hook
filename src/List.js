import React, { memo } from "react";

function List({ todos, addTodo }) {
  console.log("Child");
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

export default memo(List);
