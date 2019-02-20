import React, { Component } from "react";
import { Route,  HashRouter } from "react-router-dom";

import "./App.scss";
import Reference from './Reference';
import Landing from './Landing';

class App extends Component {

  render() {

    return (
        <div className = "home">
      <HashRouter>
    <div>

              <Route path = '/landing' component = {Landing} />
              <Route path='/reference' component={Reference}/>

                </div>
      </HashRouter>
</div>

    );
  }
}

export default App;
