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
                    overview: "Create and interface where functionality doesn't wholly depend on Color.",
                    info: "It is important not to depend on color in instances where the user cannot view the original interface. Color should not be the only tool used to communicate with the user. Color can help to convey information, such as red for danger, but should not be the only element used to do so. Ensuring decent knowledge of Color Theory is understood by the team producing the interface, suitable Primary, Secondary and Accent Colors should be decided upon and used throughout.",
                    summary: "Color is an integral part of the process within visualisation, but with functionality more should be achieved elsewhere to communicate with the user.",
                  },
                  { id: 3,
                    title: 'Contrast',
                    overview: 'Text and Images on a screen should have a contrast of at least 4:5:1.',
                    info: 'Text that is larger has wider character strokes, and is easier to read at a lower contrast. Hues are seen differently by users with Color vision difficencies, which is quite a large percentage of the population. Having an understanding of Primary and Secondary colors as well as Color theory, means that low contrasting content will be rare within the design of the interface.',
                    summary:'Contrast is an important element of Accessible Design, as it affects such a large perceentage of people. This has to be thought about not only with text elements, but labels, graphs, buttons and interactive UI.'
                  },
                  { id: 4,
                    title: 'Focus Order',
                    overview: 'Allow a hierarchical flow within the interface.',
                    info: 'Many users that benefit from Accessibility Design Principles being implemented use keyboards and other hardware as their means of navigation throughout an application. Placing focus on the most important element on the Screen at any given point allows these users to experience ease and efficency within the program. It is important to note that this logic is not always identical to programming principles and structure, so testing is fundamental.',
                    summary:'Focus order seems natural within semantic programming but structuring elements according to the users needs is crucial.'
                  },
                  { id: 5,
                    title: 'Language',
                    overview: 'Identifying the Language of the Application is fundamental to producing an accessible product.',
                    info: 'There are many users such as those who avail of screen readers, those who are dyslexic, those who rely on captioning and many more that depend on the language being identified within the code of the application. It is also important to design image alternatives that can be displayed and read in different languages. It enables braille translation software to be implemented along with many other tools for viewing the web. Many websites globally are produced in specific languages, this neeeds to be defined within the application.',
                    summary:'Without Language definition in the code of the product, many users would be hindered.'
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
