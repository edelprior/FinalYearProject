import React, { Component } from 'react';
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import '../Pages/Codepen';
import '../Styles/App.scss';
import { Headline4, Body1, Body2} from '@material/react-typography';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';

class InfoCard extends Component {

  render(){

  return (
    <Grid>
    <Row>
    <Cell columns = {6}>
    <Card className = "InfoCard">
      <CardPrimaryContent className="contentCard">
        <Headline4>Color </Headline4>
        <Body1> A primary color is the color displayed most frequently across
your app’s screens and components.
</Body1>
<Body2>
If you don’t have a secondary color, your primary color can also
be used to accent elements.
<br/>
You can make a color theme for your app using your primary
color, as well as dark and light primary variants. </Body2>
      </CardPrimaryContent>

      <CardActions>
        <CardActionButtons>
        <MaterialIcon icon="code"/>
        </CardActionButtons>

        <CardActionIcons>
          <p>Click to view CodePen</p>
        </CardActionIcons>
      </CardActions>
    </Card>
    </Cell>
    <Cell columns = {1}>

    </Cell>
    </Row>
    </Grid>
  );
}
}

export default InfoCard;
