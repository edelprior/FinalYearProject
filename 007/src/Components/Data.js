import React, { Component } from 'react';
import Tips from './Tips';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tips: [
                  { id: 1,
                    title: "Clarity",
                    overview: "Content that is straight forward and direct.",
                    info: "Allow the widest number of users to perceive and understand the interface, enhancing their experience. Speak plainly when labelling button and pages, have components that not only make sense to the designers and developers of the project. Encourage 'Ease Of Use' by sticking to predictable navigation tools, obvious naming protocols and so on. Layouts should be intuitive for the user and not cause confusion.",
                    summary:"Overall consistency, percision and understanding the user will make for a more accessible interface"
                  },
                  { id: 2,
                    title: "Color",
                    overview: "It is important not to depend on color in instances where the user cannot view the original interface. Color should not be the only tool used to communicate with the user. Color can help to convey information, such as red for danger, but should not be the only element used to do so. Ensuring decent knowledge of Color Theory is understood by the team producing the interface, suitable Primary, Secondary and Accent Colors should be decided upon and used throughout.",
                    info: "Color is an integral part of the process within visualisation, but with functionality more should be achieved elsewhere to communicate with the user.",
                    summary:''
                  },
                  { id: 3,
                    title: 'Contrast',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 4,
                    title: 'Focus',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 5,
                    title: 'Keyboard Use',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 6,
                    title: 'Orientation',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 7,
                    title: 'Readability',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 8,
                    title: 'Structure',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 9,
                    title: 'Typography',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  },
                  { id: 10, title: 'Testing',
                    overview: 'learn more',
                    info: '',
                    summary:''
                  }
                ],
                searchTerm: ''
               }


  this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

    let filteredTips = this.state.tips;

    if (this.state.searchTerm)
      filteredTips = this.state.tips.filter(u =>
        u.title.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
      );

    const tipNames = filteredTips.map(u => {
      return <Tips title = {u.title} tip={u} key={u.id} show = {this.props.show}/>;
    });
    return (

      <Grid>
        <Row>
        <Cell  columns = {12}>

      <TextField
              className = "Search"
              trailingIcon={<MaterialIcon className = "Searchicon" icon="search"/>}
              outlined={true}
            >
         <Input
            className = "Search"
            type="text"
            name="searchTerm"
            placeholder = "e.g. Color"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />

    </TextField>

      </Cell>
      </Row>
      <Row>
      <Cell>
      {tipNames}
          </Cell>
          </Row>
      </Grid>
    );
  }
}

export default App;
