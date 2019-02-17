import React, { Component } from "react";
import Drawer, { DrawerAppContent } from "@material/react-drawer";
import MaterialIcon from "@material/react-material-icon";
import "./App.scss";

class App extends Component {
  state = { open: false };

  render() {
    return (
      <div>
        <Drawer dismissible open={this.state.open}>
          <div>
            {" "}
            <MaterialIcon icon="accessibility"> </MaterialIcon>
            <h3> Web Accessibility Handbook </h3>
          </div>
        </Drawer>
        <DrawerAppContent>
          <MaterialIcon
            icon="menu"
            onClick={() => this.setState({ open: !this.state.open })}
          />

          <h1> What is Accessibility Design?</h1>

          <h2> What is Universal Design?</h2>

          <h3> What is Inclusive Design?</h3>
        </DrawerAppContent>
      </div>
    );
  }
}

export default App;
