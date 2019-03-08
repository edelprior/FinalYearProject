import React, { Component } from 'react';
import Iframe from 'react-iframe';
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

                    <h1> Code Playground </h1>
             </Cell>
            </Row>
      {/* - - - - - - - - - - - - - - - - - - - - - - - */}

            <Row>
               <Cell columns = {10}>
               <Iframe  url = "https://codesandbox.io/embed/p7nwyz7jkj?fontsize=14"
                        height = "1000"
                        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
               </Iframe>

               </Cell>
            </Row>

      {/* - - - - - - - - - - - - - - - - - - - - - - - */}
      </Grid>
  );
 }
}
export default CodePen;
