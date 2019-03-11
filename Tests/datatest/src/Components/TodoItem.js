import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  render() {
    console.log(this.props.todo.completed);
    return (
      <div>
      <p> TodoItem </p>
      <p> {this.props.todo.completed} </p>
      </div>

    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}
export default TodoItem;
