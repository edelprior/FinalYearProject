import React, { Component } from "react";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Headline2, Headline3 } from "@material/react-typography";
import "../styles/App.scss";

class Landing extends Component {
render () {
  return (

    <Grid>
    <Row>

    <Cell columns = {3}>
    </Cell>

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
