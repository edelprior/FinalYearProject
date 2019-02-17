import React, {Component} from 'react';
import './App.scss';
import Button from '@material/react-button';
import { Cell, Grid, Row} from "@material/react-layout-grid";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import {ChipSet, Chip} from '@material/react-chips';

class App extends Component {
  state = {
   selectedChipIds: ['chip2'],
 };
  render() {
    return (
      <div className = 'container'>
      <Grid className = 'grid'>
        <Row className = 'row'>
          <Cell columns= {3}>
            <Button
              raised
              className='button-alternate'
              onClick={() => console.log('clicked!')}>
              Raised Button
            </Button>
          </Cell>
    {/* - - - - - - - - - */}
          <Cell columns= {3} >
            <Button
              unelevated
              className="button-alternate"
              onClick={() => console.log('clicked!')}>
              Unelevated Button
            </Button>
          </Cell>
    {/* - - - - - - - - - */}
          <Cell columns= {3}>
            <Button
              outlined
              className='button'
              onClick={() => console.log('clicked!')}>
              Outlined Button
            </Button>
          </Cell>
    {/* - - - - - - - - - */}
          <Cell columns= {3}>
            <Button
              dense
              className='button-alternate'
              onClick={() => console.log('clicked!')}>
              Dense Button
            </Button>
          </Cell>
        </Row>
    {/* - - - - - - - - - */}
        <Row className = 'rowTwo'>
          <Cell className = 'cell' columns ={6}>
            <h2>   Block one <br/><br/></h2>
          </Cell>
          <Cell className = 'cell' columns = {6}>
            <h2>  Block two <br/><br/></h2>
            <i className="material-icons">
arrow_drop_down_circle
</i>
          </Cell>
        </Row>
        <br />
        <Row className = 'rowThree'>
        <Cell className = 'cardCell' columns = {6}>
    <Card className = 'card'>
      <CardPrimaryContent>
        <h2>Card Primary Content</h2>
        <CardMedia imageUrl='https://www.facebook.com/photo.php?fbid=1991659607542008&l=3971659dc3' />
      </CardPrimaryContent>

      <CardActions>
        <CardActionButtons>
        <Button
          unelevated
          className='button-alternate'
          onClick={() => console.log('clicked!')}>
          Like
        </Button>
        </CardActionButtons>

        <CardActionIcons>
          <i>Visit Page</i><i className="material-icons md-68">accessibility</i>
        </CardActionIcons>
      </CardActions>
    </Card>
    </Cell>
    </Row>
    <Row>
    <Cell className = 'chip' columns = {6} >
    <ChipSet
            choice
            selectedChipIds={this.state.selectedChipIds}
            handleSelect={(selectedChipIds) => this.setState({selectedChipIds})}
          >
          <Chip id={'chip1'} label='Favourite'leadingIcon = <i className="material-icons">
star
</i>  />
            <Chip id={'chip2'} label='Medium' />
            <Chip id={'chip3'} label='Large' />
          </ChipSet>
     </Cell>
     </Row>
    </Grid>
    </div>


    );
  }
}

export default App;
