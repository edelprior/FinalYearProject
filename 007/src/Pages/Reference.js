import React, { Component } from 'react';
import '../Styles/App.scss';
import Data from '../Components/Data';
// - - - - - - - - - - - - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import { Headline4, Headline6, Headline3 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import TextField, {Input} from '@material/react-text-field';

// - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -


    ''''''''     '' ''           '' '''       '' ''
       ''       ''   ''          ''   ''    ''   ''
       ''      ''     ''         ''   ''   ''     ''
       ''        '''''           ''''''      '''''


    - - - - -
    Funcitonality?
    - - - - -
    Searching through the library (API) List components organised
    alphabetically with a button directing to a card component that
    will explain more about the module and have a button going to
    the codepen
*/}


class Reference extends Component {
  constructor() {
    super();

    this.state = { show: false,
                  value: '',
}
    this.handleClick = this.handleClick.bind(this);

}
show = () => {
        this.setState({ show: true });
      }

hide = () => {
        this.setState({ show: false });
}

handleClick(event) {
  console.log("clicked");
}

render() {
    console.log(this.props.tips);
  return(
    <Grid>
    <Row>
    <Cell columns = {8}>
      <Headline4> Reference </Headline4>
      <TextField
        outlined
        className = "Search"
        trailingIcon={<MaterialIcon role="button" icon="search"/>}
  >
  <Input
     value={this.state.value}
     onChange={(e) => this.setState({value: e.currentTarget.value})} />
  </TextField>
  </Cell>
  </Row>
           {/* - - - - - - - - - - - - - - - - - - - - - - - */}
   <Row>
<Cell columns = {6}>
  <Button dense className = "Alpha" onClick = {this.handleClick}><Headline3> A </Headline3></Button>
</Cell>
</Row>
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}
<Row>
<Cell columns = {6}>
  <Button dense className = "Alpha"><Headline3> B </Headline3></Button>
</Cell>
</Row>
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}
<Row>

<Cell columns={6}>
  <Button dense className = "Alpha"><Headline3> C </Headline3></Button>
  </Cell>
  </Row>
  <Row>
  <Cell>
  <Button dense className = "Alpha"><Headline3> D </Headline3></Button>

   <List>
      <ListItem type='button' onClick={this.show}>
        <Headline6> <ListItemText primaryText='Color'>
        </ListItemText></Headline6>
        <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
        </ListItem>

         {/* - - - - - - - - - - - - - - - - - - - - - - - */}

        <ListItem type='button' onClick={this.show}>
          <Headline6> <ListItemText primaryText='Perception'>
          </ListItemText></Headline6>
          <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
          </ListItem>
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}

          <ListItem type='button' onClick={this.show}>
            <Headline6> <ListItemText primaryText='Focus Order'>
            </ListItemText></Headline6>
            <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
            </ListItem>

         {/* - - - - - - - - - - - - - - - - - - - - - - - */}
            <ListItem type='button' onClick={this.show && this.handleClick}>
              <Headline6> Clarity </Headline6>
              <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
              </ListItem>
              </List>
              </Cell>
              <Row>
              <Cell columns = {8}>



        <Modal show={this.state.show} handleClose={this.hide} >
        </Modal>

    </Cell>
    </Row>
    </Row>
      </Grid>

  );
}
}
// eslint-disable-next-line
{/*
    - Trying to get the Material Icon button to be Menu when the drawer
      is closed, and when open close icon
*/}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className = "CardModal">
        {children}
            <MaterialIcon icon="close" onClick={handleClose}/>
        <Data/>
      </section>
    </div>
  );
};


export default Reference;
