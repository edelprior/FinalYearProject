import React, { Component } from 'react';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
    {
      title: 'Color',
      completed: 'false'
    },
    {
      title: 'Clarity',
      completed: 'false'
    },
    {
      title: 'Focus',
      completed: 'false'
    }
  ]
}


  render() {
    console.log(
      this.state.todos.title
    );
    return (
      <div>
    <h1> Todo </h1>
    <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
