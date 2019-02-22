import React, { Component } from 'react';
import '../Styles/App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
// - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -


    ''''''''     '' ''           '' '''       '' ''
       ''       ''   ''          ''   ''    ''   ''
       ''      ''     ''         ''   ''   ''     ''
       ''        '''''           ''''''      '''''


    - - - - -
    Funcitonality?
    - - - - -
    Searching through the library (API) List components organised
    alphabetically with a button directing to a card component that
    will explain more about the module and have a button going to
    the codepen
*/}

class Reference extends Component {
render() {
  return(
    <Grid>
    <Row>
    <Cell columns = {8}>
      <h1> Reference </h1>
      </Cell>
      </Row>
      </Grid>

  );
}
}

export default Reference;
