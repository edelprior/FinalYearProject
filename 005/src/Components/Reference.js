import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Headline2 } from "@material/react-typography";
import "../styles/App.scss";

class Reference extends Component {


  render() {
    return (



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

    );
  }
}

export default Reference;


{ /* import {Cell, Grid, Row} from '@material/react-layout-grid'; */}
