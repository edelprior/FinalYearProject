import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Drawer from "@material/react-drawer";
import MaterialIcon from "@material/react-material-icon";
import { Headline4, Subtitle1 } from "@material/react-typography";

import "../styles/App.scss";

class NavDrawer extends Component {
  state = {open: true};
  render() {
    return (
      <Grid>
      <HashRouter>
        <div>
        <Row>
        <Cell columns = {3}>
          <Drawer className="permanent_drawer"

            modal
            open={this.state.open}
            onClose={() => this.setState({open: false})}>

            <div className = "DrawerTitle">
              <Link className = "link" to="/">  <Headline4 className="title"> <MaterialIcon className= "logo" icon="accessibility"> </MaterialIcon>
               Web Accessibility Handbook </Headline4> </Link>
              </div>
                <Link className = "link" to="/landing">
              <Subtitle1>  Start </Subtitle1>
                </Link>
                <Link className = "link" to="/reference">
              <Subtitle1>  Reference </Subtitle1>
                </Link>

          </Drawer>
          </Cell>
          </Row>
          <Row>
<Cell className= "gutter" columns = {1}>
</Cell>
</Row>
</div>
</HashRouter>
</Grid>
);
}

}
export default NavDrawer;
