import React, { Component } from 'react';
import Tips from './Tips';


class Data extends Component {
state = {   tips: [
                   {id: 1, title: 'Color', subtitle: 'learn more'},
                   {id: 2, title: 'Perception', subtitle: 'what is Perception'},
                   {id: 3, title: 'Focus Order', subtitle: 'learn more'},
                   {id: 4, title: 'Clarity', subtitle: 'learn more'},
   ]};

  render(){

  return (
    <Tips key = {this.state.id} tips = {this.state.tips} show = {this.props.show}/>
  );
}
}

export default Data;
