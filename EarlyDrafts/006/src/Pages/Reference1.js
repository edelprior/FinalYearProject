import React, { Component } from 'react';
import '../Styles/App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import List, {ListItem, ListItemText} from '@material/react-list';
import { Headline4 } from '@material/react-typography';
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
state = { selectedIndex: 0,
  };

render() {
  return(
    <Grid>
    <Row>
    <Cell columns = {8}>
      <Headline4> Reference </Headline4>
      </Cell>
      </Row>
   <Row>
<Cell columns = {6}>
   <List
      singleSelection
      selectedIndex={this.state.selectedIndex}
      handleSelect={(selectedIndex) => this.setState({selectedIndex})}
    >
      <ListItem>
        <ListItemText primaryText='Photos'
                      secondaryText='Jan 28, 2018'/>
      </ListItem>
      <ListItem>
        <ListItemText primaryText='Recipes'/>
      </ListItem>
      <ListItem>
        <ListItemText primaryText='Work'/>
      </ListItem>

    </List>
    </Cell>
    <Cell columns = {6}>
    <h2> Where card modal will go </h2>
    </Cell>
    </Row>

      </Grid>

  );
}
}

export default Reference;
