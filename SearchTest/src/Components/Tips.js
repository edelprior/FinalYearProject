import React, { Component } from 'react';
import '../Styles/App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
import List, {ListItem, ListItemGraphic} from '@material/react-list';
import {Headline6} from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';
// - - - - - - - - - - - - - - - - - - - - - //


// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -
    Using this.props.tips this component holds the map function, taking
    props from Data.js through props, and putting it into (tip) to display
    the 'Reference' list
    - - - - -
    Funcitonality?
    - - - - -

*/}


class Tips extends Component {

  render() {

      return this.props.tips.map((tip) => (
      <Grid>
      <Row>
      <Cell className = "Referencelist" columns = {12}>
      <List>
      <ListItem   onClick = {()=> this.props.show(tip)}> <Headline6>
      {tip.title}</Headline6>
      <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />

      </ListItem>
      </List>
      </Cell>
      </Row>
      <Row>
      <Cell>
      <h2>{this.props.title}</h2>
      <h3>{this.props.subtitle}</h3>
      </Cell>
      </Row>
      </Grid>
    ));
  }

}



export default Tips;
