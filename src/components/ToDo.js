import React from 'react';

const ToDo = (prop) => {
  let todo = prop.todo
  return (
    <li>{todo.todo}</li>
  )
}

export default ToDo;
