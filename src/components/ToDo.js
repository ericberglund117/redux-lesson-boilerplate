import React from 'react';

const ToDo = ({ id, text, completed }) => {
  console.log('todo')
  return (
    <li>{text}</li>
  )
}

export default ToDo;
