import React, { Component } from 'react';
import Codepen from 'react-codepen-embed';
import '../Styles/App.scss';


class CodePen extends Component {
render() {
  return(
    <div className = "dummy">
      <h1> Codepen </h1>
      <Codepen
      hash="xMJYRB"
      user="edelprior"
    />

    <Codepen
    hash="xMJYRB"
    user="edelprior"
  loader={() => <div>Loading...</div>}
/>
      </div>

  );
}
}

export default CodePen;
