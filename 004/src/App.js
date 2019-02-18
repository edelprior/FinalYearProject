import React, { Component } from "react";
import Drawer, { DrawerAppContent } from "@material/react-drawer";
import MaterialIcon from "@material/react-material-icon";
import {Headline1, Headline2, Headline6 } from '@material/react-typography';
import "./App.scss";

class App extends Component {
  state = { open: true };

  render() {
    return (
      <div>
        <Drawer className= "perm_drawer" dismissible open={this.state.open}>
          <div>
            {" "}
            <MaterialIcon icon="accessibility"> </MaterialIcon>
            <Headline6> Web Accessibility Handbook </Headline6>
          </div>
        </Drawer>
        <DrawerAppContent>
          <MaterialIcon
            icon="menu"
            onClick={() => this.setState({ open: !this.state.open })}
          />

          <Headline1> What is Accessibility Design?</Headline1>

          <Headline2> What is Universal Design?</Headline2>

          <h3> What is Inclusive Design?</h3>


        </DrawerAppContent>
      </div>
    );
  }
}

export default App;
