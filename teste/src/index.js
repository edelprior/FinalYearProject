import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


const data = [
  {title: 'Color', subtitle: 'read more', codepen: 'link'},
  {title: 'Focus', subtitle: 'read more', codepen: 'link'},
  {title: 'Typography', subtitle: 'read more', codepen: 'link'}
];


class App extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.subtitle}</h1>
        <h1>{this.props.codepen}</h1>
      </div>
    );
  }
}

const dataList = data.map(d => <App key = {d.title}
                                    title= {d.title}
                                    subtitle = {d.subtitle}
                                    codepen = {d.codepen} />

                                    );

ReactDOM.render(<div> {dataList} </div>, document.getElementById('root'));
