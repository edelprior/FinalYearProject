import React, { Component } from "react";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Headline2, Headline3 } from "@material/react-typography";
import MaterialIcon from "@material/react-material-icon";
import "../styles/App.scss";
import NavDrawer from "./NavDrawer";


class Landing extends Component {
state = {open: true};
render () {
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
    <Headline2> What is Accessibility Design?</Headline2>

    <Headline3> What is Universal Design?</Headline3>

    <Headline4> What is Inclusive Design?</Headline4>
    </div>
    </Cell>
    </Row>
    </Grid>
  )
}

}
export default Landing;
