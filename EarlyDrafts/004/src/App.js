import React, { Component } from "react";
import { Route,  HashRouter } from "react-router-dom";

import "./styles/App.scss";
import Reference from './Components/Reference';
import Landing from './Components/Landing';

class App extends Component {

  render() {

    return (
        <div className = "home">
      <HashRouter>
    <div>

              <Route path = '/' component = {Landing} />
              <Route path='/reference' component={Reference}/>

                </div>
      </HashRouter>
</div>

    );
  }
}

export default App;
