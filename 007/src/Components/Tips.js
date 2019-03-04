import React, { Component } from 'react';
import List, {ListItem, ListItemGraphic} from '@material/react-list';
import {Headline6} from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';


class Tips extends Component {

  render() {
      return this.props.tips.map((tip) => (
      <Grid>
      <Row>
      <Cell columns = {12}>
      <List>
      <ListItem type='button' name='Edel is cool' onClick = {()=> this.props.show(tip)}> <Headline6>
      {tip.title}</Headline6>
      <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
      </ListItem>
      </List>
      </Cell>
      </Row>
      </Grid>
    ));
  }
}


export default Tips;
