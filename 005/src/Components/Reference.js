import React, { Component } from "react";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TextField from '@material-ui/core/TextField';
 import { Headline2 } from "@material/react-typography";
import "../styles/App.scss";

class Reference extends Component {


  render() {
    return (

      <Grid>
      <Row>

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
