import React, { Component } from 'react';
import TipItems from './TipItems';
import PropTypes from 'prop-types';

class Tips extends Component {
  render() {
    console.log(this.props.tips);
    return this.props.tips.map((tip) => (
      <div>
      <h3> {tip.title} </h3>
      <TipItems key = {tip.title} todo = {tip}/>
      </div>
    ));
  }
}
// PropTypes
Tips.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Tips;
