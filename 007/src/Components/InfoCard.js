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




const data = [
  {title: 'Color', subtitle: 'read more', codepen: 'link'},
  {title: 'Focus', subtitle: 'read more', codepen: 'link'},
  {title: 'Typography', subtitle: 'read more', codepen: 'link'}
];
class InfoCard extends Component {

  render(){

  return (
    <Grid>
    <Row>
    <Cell columns = {6}>
    <Card className = "InfoCard">

      <CardPrimaryContent className="contentCard">

            <Headline4>{this.props.title} </Headline4>
            <Body1>{this.props.subtitle}  </Body1>
            <Body2>{this.props.codepen} </Body2>

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
    <Row>
    <div>
    {dataList}
    </div>
    </Row>
    </Grid>
  );
}
}
const dataList = data.map(d =>
<InfoCard title = {d.title} subtitle = {d.subtitle} codepen = {d.codepen} />);

export default InfoCard;
