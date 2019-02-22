import React, { Component } from 'react';
import './App.scss';




import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';


class App extends Component {
  state = {open: false};

    render() {
      return (
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
                  <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
                  <ListItemText primaryText='Start' />
                </ListItem>
                <ListItem>
                  <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                  <ListItemText primaryText='Reference' />
                </ListItem>
                <ListItem>
                  <ListItemGraphic graphic={<MaterialIcon icon='code'/>} />
                  <ListItemText primaryText='GitHub' />
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
              <h1> Content </h1>
              </div>
            </TopAppBarFixedAdjust>
          </DrawerAppContent>
        </div>
      );
    }
  }





export default App;
