import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TipItem extends Component {
  render() {
    console.log(this.props.todo.subtitle);
    return (
      <div>
      <p> {this.props.todo.subtitle} </p>
      </div>

    );
  }
}

// PropTypes
TipItem.propTypes = {
  todos: PropTypes.object.isRequired
}
export default TipItem;
