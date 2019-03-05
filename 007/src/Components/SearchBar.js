import React, { Component } from 'react';
import '../Styles/App.scss';
import TextField, {Input} from '@material/react-text-field';
import List, {ListItem, ListItemGraphic} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';



class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: "",

    };
}
    render(){


   console.log(this.props.tips);
    return(
    <Grid>
    <Row>
    <Cell>

    </Cell>
    </Row>
    </Grid>
  );
}

}





export default SearchBar;
