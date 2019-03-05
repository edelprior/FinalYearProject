import React, { Component } from 'react';
import '../Pages/Codepen';
import '../Styles/App.scss';
// - - - - - - - - - - - - - - - - - - - - - //
import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import { Headline4, Headline6} from '@material/react-typography';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import List from '@material/react-list';
// - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -
    Using this.props.modalData from the array and state that's been defined
    in Reference, we can access the title and each object in the array that's
    been passed in through props with the <Data> element.
    - - - - -
    Funcitonality?
    - - - - -

*/}
class TipCard extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell>
           {/* - - - - */}
            <List>
              <Card className="contentCard">
              <CardPrimaryContent>
                <Headline4>
                  {this.props.modalData.title}
                </Headline4>
              </CardPrimaryContent>
              {/* - - - - */}
              <CardActions>
                <CardActionButtons>
                  <MaterialIcon icon="code"/>
                </CardActionButtons>
               {/* - - - - */}
                  <CardActionIcons>
                    <Headline6>{this.props.modalData.subtitle} </Headline6>
                  </CardActionIcons>
              </CardActions>
              </Card>
            </List>
            {/* - - - - */}
          </Cell>
        </Row>
      </Grid>
    );
  }
}
export default TipCard;
