import React, { Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Headline3, Headline2 } from '@material/react-typography';

// - - - - - - - - - - - - - - - - - - - - - //
import '../Styles/App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
//import { Headline4 } from '@material/react-typography';
// eslint-disable-next-line
{/* Link to Stylesheet and React Library..

    Whats Going in this Component?

    Funcitonality?

    Overview:
*/}


class Start extends Component {


    render() {
      return (
        <Grid>
        <Row>
        <Cell className = "welcomeText" columns ={12}>
        <Headline2> What is Accessible Design? </Headline2>
        </Cell>
        </Row>
        <Row>
        <Cell className = "welcomeText" columns = {8}>
          <Headline3> And Universal Design? </Headline3>
          </Cell>
          </Row>
          <Row>
          <Cell className= "welcomeText" columns = {6}>
            <Headline4> And Inclusive Design? </Headline4>
        </Cell>


        </Row>
        </Grid>
      )
    }
  }

export default Start;
