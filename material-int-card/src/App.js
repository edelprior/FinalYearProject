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


class App extends Component {
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
              className='button-alternate'
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
            <h2>  <br/><br/> Block one <br/><br/></h2>
          </Cell>
          <Cell className = 'cell' columns = {6}>
            <h2>  <br/><br/>Block two <br/><br/></h2>
          </Cell>
        </Row>
        </Grid>

    <Card>
      <CardPrimaryContent>
        <h1>Header</h1>
        <CardMedia imageUrl='./my/fancy/image.png' />
      </CardPrimaryContent>

      <CardActions>
        <CardActionButtons>
          <button>Click Me</button>
        </CardActionButtons>

        <CardActionIcons>
          <i>Click Me Too!</i>
        </CardActionIcons>
      </CardActions>
    </Card>
    </div>

    );
  }
}

export default App;
