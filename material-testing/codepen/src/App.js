import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Codepen from "react-codepen-embed";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Codepen hash="xMJYRB" user="edelprior" />
      </div>
    );
  }
}

export default App;
