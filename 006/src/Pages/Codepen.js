import React, { Component } from 'react';
import Codepen from 'react-codepen-embed';
import {Cell, Grid, Row} from '@material/react-layout-grid';
// - - - - - - - - - - - - - - - - - - - - - //

import '../Styles/App.scss';

// eslint-disable-next-line
{/* Link to Stylesheet, React Library. Codepen NPM package and Grid..

    Whats Going in this Component?

    Funcitonality?

    Overview:
*/}

class CodePen extends Component {

render() {

  return(
       <Grid>
       {/* - - - - - - - - - - - - - - - - - - - - - - - */}
            <Row>
              <Cell columns = {6}>

                    <h1> CodePen </h1>
             </Cell>
            </Row>
      {/* - - - - - - - - - - - - - - - - - - - - - - - */}
            <Row>
              <Cell columns ={6}>

                <h3> Test out the Code Below </h3>
              </Cell>
            </Row>
      {/* - - - - - - - - - - - - - - - - - - - - - - - */}
            <Row>
               <Cell columns = {8}>

                     <Codepen hash="xMJYRB" user="edelprior"/>
                     <Codepen hash="xMJYRB" user="edelprior"
                      loader={() =>
                      <div>Loading...</div> } />
               </Cell>
            </Row>

      {/* - - - - - - - - - - - - - - - - - - - - - - - */}
      </Grid>
  );
 }
}
export default CodePen;
