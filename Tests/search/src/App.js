import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tips: [
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
                 ],
                   searchTerm: ''
                 };


  this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state.searchTerm);

    let filteredTips = this.state.tips;

    if (this.state.searchTerm)
      filteredTips = this.state.tips.filter(u =>
        u.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
      );

    const tipNames = filteredTips.map(u => {
      return <Tip key={u.id} title={u.title} subtitle={u.subtitle} />;
    });
    return (
      <div>

          <label>
            Search for Tip:
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>


        {tipNames}

      </div>
    );
  }
}

class Tip extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

export default App;
