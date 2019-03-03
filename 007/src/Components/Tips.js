import React, { Component } from 'react';
import TipCard from './TipCard';


class Tips extends Component {
  render() {
    console.log(this.props.tips);
    return this.props.tips.map((tip) => (
      <div>
      <TipCard key = {tip.id} tip = {tip}/>
      </div>
    ));
  }
}


export default Tips;
