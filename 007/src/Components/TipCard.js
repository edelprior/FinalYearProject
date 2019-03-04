import React, { Component } from 'react';
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import '../Pages/Codepen';
import '../Styles/App.scss';
import { Headline4, Headline6} from '@material/react-typography';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import List from '@material/react-list';
class TipCard extends Component {


  render() {
    console.log(this.props);
    return (

      <Grid>
      <Row>
      <Cell columns = {6}>
      <List className = "InfoCardList">

      <Card className = "InfoCard">
        <CardPrimaryContent className="contentCard">
          <Headline4> {this.props.modalData.title}</Headline4>
        </CardPrimaryContent>

        <CardActions>
          <CardActionButtons>
          <MaterialIcon icon="code"/>
          </CardActionButtons>

          <CardActionIcons>
         <Headline6>{this.props.modalData.subtitle} </Headline6>
          </CardActionIcons>
        </CardActions>
      </Card>

      </List>
      </Cell>
      <Cell columns = {1}>

      </Cell>
      </Row>
    </Grid>


    );
  }
}

export default TipCard;
