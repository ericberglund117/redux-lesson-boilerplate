import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';

const ToDoList = () => {
  const allTodos = useSelector(state => {
    return state.todos
  })
  console.log(allTodos)
  const displayTodos = allTodos.map(todo => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

// function mapStateToProps(state) {
//   return { todos: state.todos }
// };

// export default connect(mapStateToProps)(ToDoList);
export default ToDoList;
