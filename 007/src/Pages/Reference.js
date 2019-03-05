import React, { Component } from 'react';
import '../Styles/App.scss';
import Data from '../Components/Data';
import TipCard from '../Components/TipCard';
// - - - - - - - - - - - - - - - - - - - - - //
import {Cell, Grid, Row} from '@material/react-layout-grid';
// import List, {ListItem, ListItemText, ListItemGraphic} from '@material/react-list';
import { Headline4 } from '@material/react-typography';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import MaterialIcon from '@material/react-material-icon';
// import Button from '@material/react-button';
import TextField, {Input} from '@material/react-text-field';
// import Tips from '../Components/Tips';
// - - - - - - - - - - - - - - - - - - - - - //

// eslint-disable-next-line
{/* Link to Stylesheet, React Library, and Layout Grid..
    - - - - -
    Whats Going in this Component?
    - - - - -

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
                   searchText: '',
                   modalData: []
                 }
               }
    show = (data) => {
    this.setState({ show: true,
                    modalData: data});
    }
    hide = () => {
    this.setState({ show: false });
    }

  render() {
    return(
      <Grid>
        <Row>
          <Cell columns = {10}>
              <TopAppBarFixedAdjust>
                  <Headline4> Reference </Headline4>
              </TopAppBarFixedAdjust>
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
   {/* <Row>
<Cell columns = {6}>
  <Button dense className = "Alpha" onClick = {this.handleClick}><Headline3> A </Headline3></Button>
</Cell>
</Row> */}
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}

<Row>
<Cell>
<Data  show = {this.show} modalData = {this.modalData}/>

              </Cell>
              <Row>
              <Cell columns = {8}>



        <Modal show={this.state.show} modalData = {this.state.modalData} handleClose={this.hide} >
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

const Modal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (

    <div className={showHideClassName}>
      <section className = "CardModal">

            <MaterialIcon icon="close" onClick={props.handleClose}/>
      <TipCard modalData = {props.modalData} />
      </section>
    </div>
  );
};


export default Reference;
