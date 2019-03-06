import React, { Component } from 'react';
import '../Styles/App.scss';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class SearchBar extends Component {
render() {

   console.log(this.props.tips);
    return(
    <Grid>
    <Row>
    <Cell>
    <TextField
            trailingIcon={<MaterialIcon icon="search"/>}
            outlined={true}
          >
          <Input
            name={this.props.tips.title}
            onChange={this.props.handleChange}
          />
  </TextField>
    </Cell>
    </Row>
    </Grid>
  );
}

}





export default SearchBar;
