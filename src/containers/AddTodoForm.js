import React from 'react';
import { addToDo } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const AddTodoForm = () => {

  const allTodos = useSelector(state => state.todo);
  let dispatch = useDispatch()
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = values => {
    dispatch(addToDo(values.addToDo))
    reset()
    // this.props.addToDo(this.state.todo)
    // this.setState({ todo: '' })
  }

    return (
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Add A Todo"
            data-testid="add-to-do"
            name="addToDo"
            ref={register({
            required: "Required",
            })}
           />
          <button>Add Todo</button>
        </form>
      </section>
    )
}

// const mapDispatchToProps = dispatch => ({
//   addToDo: text => dispatch( addToDo(text) )
// })
//
// export default connect(null, mapDispatchToProps)(AddTodoForm);
export default AddTodoForm
