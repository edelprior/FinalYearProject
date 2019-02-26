import React, { Component } from 'react';
import '../Styles/App.scss';
import InfoCard from '../Components/InfoCard';
// - - - - - - - - - - - - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import { Headline1, Headline4, Headline6, Headline2 } from '@material/react-typography';
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
state = { show: false,
          value: ''
}
show = () => {
        this.setState({ show: true });
      }

      hide = () => {
        this.setState({ show: false });
      }



render() {
  return(
    <Grid>
    <Row>
    <Cell columns = {8}>
      <Headline4> Reference </Headline4>
      <TextField className = "Search"
    trailingIcon={<MaterialIcon role="button" icon="search"/>}
  ><Input
     value={this.state.value}
     onChange={(e) => this.setState({value: e.currentTarget.value})} />
  </TextField>
  </Cell>
  </Row>
   <Row>
<Cell columns = {6}>
  <Button dense className = "Alpha"><Headline2> A </Headline2></Button>
</Cell>
</Row>
<Row>
<Cell columns = {6}>
  <Button dense className = "Alpha"><Headline2> B </Headline2></Button>
</Cell>
</Row>
<Row>
<Cell columns={6}>
  <Button dense className = "Alpha"><Headline2> C </Headline2></Button>
  </Cell>
  </Row>
  <Row>
  <Cell>
  <Button dense className = "Alpha"><Headline2> D </Headline2></Button>

   <List>
      <ListItem type='button' onClick={this.show}>
        <Headline6> <ListItemText primaryText='Color'>
        </ListItemText></Headline6>
        <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
        </ListItem>



        <ListItem type='button' onClick={this.show}>
          <Headline6> <ListItemText primaryText='Perception'>
          </ListItemText></Headline6>
          <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
          </ListItem>


          <ListItem type='button' onClick={this.show}>
            <Headline6> <ListItemText primaryText='Focus Order'>
            </ListItemText></Headline6>
            <ListItemGraphic className = "iconOpen" graphic={<MaterialIcon icon="open_in_new"/>} />
            </ListItem>


            <ListItem type='button' onClick={this.show}>
              <Headline6> <ListItemText primaryText='Clarity'>
              </ListItemText></Headline6>
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

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className = "CardModal">
        {children}
            <MaterialIcon icon="close" onClick={handleClose}/>
        <InfoCard/>

      </section>
    </div>
  );
};


export default Reference;
