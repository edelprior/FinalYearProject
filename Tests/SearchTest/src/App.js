import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Styles/App.scss';

import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import { Headline6} from '@material/react-typography';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Importing Components that act as 'pages' within the Router-dom
import Start from './Pages/Start';
import Reference from './Pages/Reference';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

class App extends Component {
   state = {open: true,
   };
    render() {


      return (

        <BrowserRouter>
        <div className="drawer-container">
        {/* - - - - - - - - - - - - - - - - - - - - - - - */}
        <Drawer
          className = "drawer"
          dismissible
          open={this.state.open}
          onClose={() => this.setState({open: false})}
        >
         <DrawerContent>
           <DrawerHeader>
             <Headline6>
              Accessibilty Design Handbook</Headline6>

           </DrawerHeader>
              {/* - - - - - - - - - - */}
           <List>
              <ListItem>
                  <Link className = "link" to="/">
                      <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="home"/>} />
                      <ListItemText primaryText="Start" />
                  </Link>
              </ListItem>

              {/* * * * */}

              <ListItem>
                   <Link className = "link" to = "/reference">
                         <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="folder"/>} />
                         <ListItemText primaryText="Reference" />


                  </Link>
              </ListItem>

              {/* * * * */}

              <ListItem>
                   <Link className = "link" to="/codepen">
                         <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="code"/>} />

                       <ListItemText primaryText="CodePen" />
                   </Link>
              </ListItem>

              {/* * * * */}

                <ListItem>
                  <Link className = "link" to="/examples">
                  <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="search"/>} />
                  <ListItemText primaryText ="Examples" />
                  </Link>
                  </ListItem>


                  {/* * * * */}

                    <ListItem>
                      <Link className = "link" to="/learn">
                      <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="school"/>} />
                      <ListItemText primaryText ="Learn" />
                      </Link>
                      </ListItem>

                      {/* * * * */}

                        <ListItem>
                          <Link className = "link" to="www.github.com/edelprior">
                          <ListItemGraphic className = "icon" graphic={<MaterialIcon icon="device_hub"/>} />
                          <ListItemText primaryText ="GitHub" />
                          </Link>
                          </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        {/* - - - - - - - - - - - - - - - - - - - - - - - */}

        <DrawerAppContent className="drawer-app-content">
            <TopAppBar className = "TopAppBar"
              navigationIcon={
                <MaterialIcon icon="menu"onClick={() =>
                 this.setState({open: !this.state.open})}>
                 {this.state.open ? <MaterialIcon icon = "close"/>
                                  : <MaterialIcon icon = "menu" />
                                }
                                </MaterialIcon>
            }
            />
            {/* Trying to get the Material Icon button to be Menu when the drawer is closed, and when open close icon */ }

            <TopAppBarFixedAdjust>
                      <Route exact path  = "/" component={Start}/>
                      <Route path = "/reference" component={Reference}/>
                          </TopAppBarFixedAdjust>

            {/* Path so the Router knows which component to show */ }
          </DrawerAppContent>
         {/* - - - - - - - - - - - - - - - - - - - - - - - */}

         {/* Closing Divs for Container and BrowserRouter (BrowserRouter can only return one div)*/}
         </div>
        </BrowserRouter>

      );
    }
  }




export default App;
