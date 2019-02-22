import React, { Component } from 'react';
import './Styles/App.scss';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';

import Start from './Pages/Start';
import Reference from './Pages/Reference';
import Codepen from './Pages/Codepen';


class App extends Component {
  state = {open: false};

    render() {
      return (
        <BrowserRouter>
        <div className='drawer-container'>
        <Drawer
             dismissible
             open={this.state.open}
             onClose={() => this.setState({open: false})}
           >
            <DrawerContent>
            <DrawerHeader> <DrawerTitle>
            Accessibilty Design Handbook </DrawerTitle>
            </DrawerHeader>
              <List>
                <ListItem>
                <Link to="/">
                  <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
                  <ListItemText primaryText='Start' />
                  </Link>
                </ListItem>
                <ListItem>
                <Link to = "/reference">
                  <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                  <ListItemText primaryText='Reference' />
                  </Link>
                </ListItem>
                <ListItem>
                <Link to="/codepen">
                  <ListItemGraphic graphic={<MaterialIcon icon='code'/>} />
                  <ListItemText primaryText='Codepen' />
                  </Link>
                </ListItem>
              </List>
            </DrawerContent>
          </Drawer>

          <DrawerAppContent className='drawer-app-content'>
            <TopAppBar className = "TopAppBar"
              navigationIcon={<MaterialIcon icon='menu'onClick={() => this.setState({open: !this.state.open})} />}
            />

            <TopAppBarFixedAdjust>
            <div className = "dummy">
            <Route exact path  = '/' component={Start}/>
            <Route path = '/reference' component={Reference}/>
            <Route path = '/codepen' component = {Codepen}/>

              </div>
            </TopAppBarFixedAdjust>
          </DrawerAppContent>
        </div>
        </BrowserRouter>

      );
    }
  }





export default App;
