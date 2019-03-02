import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <div>
      <h3> {todo.title} </h3>
      <TodoItem key = {todo.title} todo = {todo}/>
      </div>
    ));
  }
}
// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
