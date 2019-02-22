import React, { Component } from "react";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from "@material/react-material-icon";
import TextField from '@material-ui/core/TextField';
 import { Headline2 } from "@material/react-typography";
import "../styles/App.scss";
import NavDrawer from './NavDrawer';
class Reference extends Component {
  state = {open: true,

        };

  render() {
    return (

      <Grid>
      <Row>

      <Cell columns = {3}>
      <NavDrawer />
      </Cell>

      <MaterialIcon
     icon="menu"
     onClick={() => this.setState({ open: !this.state.open })}
   />

      <Cell className="Content" columns = {8}>


      <div className = "Content">
      <Headline2>
      <TextField
             id="standard-name"
             label="Search Here"
             className= "search"
             value={this.state.name}
             margin="normal"
           /></Headline2>
      </div>
      </Cell>
      </Row>
      </Grid>
    );
  }
}

export default Reference;
