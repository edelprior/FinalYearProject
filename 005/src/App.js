import React, { Component } from "react";
import { HashRouter, Route, Link } from 'react-router-dom';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from '@material/react-drawer';
import MaterialIcon from "@material/react-material-icon";
import { Headline4 } from "@material/react-typography";
import List, { ListItem, ListItemText } from '@material/react-list';


import "./styles/App.scss";


import Reference from './components/Reference';
import Start from './components/Start';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
}
  render() {

    return (

        <HashRouter>
          <div>
            <Drawer className="permanent_drawer"

              modal
              open={this.state.open}
              onClose={() => this.setState({open: false})}>

              <DrawerHeader>
              <DrawerTitle>  <Link className = "link" to="/">  <Headline4 className="title"> <MaterialIcon className= "logo" icon="accessibility"> </MaterialIcon>
                 Web Accessibility Handbook </Headline4> </Link>
                 </DrawerTitle>
                </DrawerHeader>
                <DrawerContent>
                <List className='list-alternate' singleSelection selectedIndex={this.state.selectedIndex}>
                   <ListItem>
                           <Link to="/" className='link'>
                             <ListItemText primaryText='Home' />
                           </Link>
                         </ListItem>

                         <ListItem>
                           <Link to="/start/" className='link'>
                             <ListItemText primaryText='Start' />
                           </Link>
                         </ListItem>

                         <ListItem>
                           <Link to="/reference/" className="link">
                             <ListItemText primaryText='Reference' />
                           </Link>
                         </ListItem>
              </List>










                  </DrawerContent>
            </Drawer>


            <DrawerAppContent tag='main' className='drawer-app-content '>
          <TopAppBar
            className='top-app-bar-alternate'
            navigationIcon={<MaterialIcon
                icon='menu'
                onClick={() => this.setState({open: !this.state.open})}
            />}
/>

<TopAppBarFixedAdjust>
        <Route exact path = '/components' component = {Start} />
        <Route path = '/components' component = {Reference} />

            </TopAppBarFixedAdjust>
</DrawerAppContent>
            </div>
        </HashRouter>


    );
  }
}

export default App;



{ /*
                <List className ="list-alternate">

                <ListItem>
                  <Link className = "link" to="/start">
                <Subtitle1>  Start </Subtitle1>
                  </Link>
                  </ListItem>
                  <ListItem>
                  <Link className = "link" to="/reference">
                <Subtitle1>  Reference </Subtitle1>
                  </Link>
                  </ListItem>
                  </List> */ }
