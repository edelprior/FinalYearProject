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
             <Cell columns = {6} className = "sandboxCard">


                     <h1> Clarity </h1>
                     <Iframe
                             title = "Color"
                              url="https://codesandbox.io/embed/00k1y3l50?fontsize=10"
                              height = "400"
                              width = "500"
                     >  </Iframe>

                     </Cell>
                 </Row>
                 <br/>
                 <br/>
       {/* - - - - - - - - - - - - - - - - - - - - - - - */}
       <Row>
          <Cell columns = {6} className = "sandboxCard">


                  <h1> Color </h1>
                  <Iframe
                          title = "Color"
                           url="https://codesandbox.io/embed/00k1y3l50?fontsize=10"
                           height = "400"
                           width = "500"
                  >  </Iframe>

                  </Cell>
              </Row>
              <br/>
              <br/>
      {/* - - - - - - - - - - - - - - - - - - - - - - - */}
      <Row>
         <Cell columns = {6} className = "sandboxCard">


                 <h1> Contrast </h1>
                 <Iframe
                         title = "Contrast"
                         url="https://codesandbox.io/embed/vv0ppxj1l5?fontsize=10"
                         height = "400"
                         width = "500"
                 >  </Iframe>

                 </Cell>
             </Row>
                <br />
                <br />
                {/* - - - - - - - - - - - - - - - - - - - - - - - */}
                <Row>
                   <Cell columns = {6} className = "sandboxCard">


                           <h1> Focus Order </h1>
                           <Iframe
                                   title = "Color"
                                    url="https://codesandbox.io/embed/00k1y3l50?fontsize=10"
                                    height = "400"
                                    width = "500"
                           >  </Iframe>

                           </Cell>
                       </Row>
                       <br/>
                       <br/>
      </Grid>
  );
 }
}
export default CodePen;
