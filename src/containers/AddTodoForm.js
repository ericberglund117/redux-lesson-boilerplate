import React, { Component } from 'react';
import { addToDo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' })
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch( addToDo(text) )
})

export default connect(null, mapDispatchToProps)(AddTodoForm);
