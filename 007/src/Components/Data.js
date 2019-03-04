import React, { Component } from 'react';
import Tips from './Tips';
import List from '@material/react-list';


class Data extends Component {
state = {   tips: [
                   {id: 1, title: 'Color', subtitle: 'learn more'},
                   {id: 2, title: 'Perception', subtitle: 'what is Perception'},
                   {id: 3, title: 'Focus Order', subtitle: 'learn more'},
                   {id: 4, title: 'Clarity', subtitle: 'learn more'},
                   {id: 5, title: 'Composition', subtitle: 'learn more'},
                   {id: 6, title: 'Robust', subtitle: 'learn more'},
                   {id: 7, title: 'Specific', subtitle: 'learn more'},
                   {id: 8, title: 'Hierarchy', subtitle: 'learn more'},
                   {id: 9, title: 'Grouping', subtitle: 'learn more'},
                   {id: 10, title: 'Transitions', subtitle: 'learn more'},
   ]};

  render(){

  return (
    <List className = "list">
    <Tips key = {this.state.id} tips = {this.state.tips} show = {this.props.show}/>
    </List>
  );
}
}

export default Data;
