import React, { Component } from 'react';
import Tips from './Tips';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tips: [
                   {id: 1, title: 'Clarity',
                           overview: "Clarity is also reffered to as Perceivability within an application. This is expecially important when it comes to Non - Text Content. This refers to images not containing text alternatives such as the following",
                           link: "/codepen" },
                   {id: 2, title: 'Color', overview: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.Color can help communicate mood, tone, and critical information. Use color so that all users can understand the content is fundamental to accessible design. Choose primary, secondary, and accent colors for your app that support usability. Ensure sufficient color contrast between elements so that users with low vision can see and use your app.'},
                   {id: 3, title: 'Contrast', overview: 'learn more'},
                   {id: 4, title: 'Focus', overview: 'learn more'},
                   {id: 5, title: 'Keyboard Use', overview: 'learn more'},
                   {id: 6, title: 'Orientation', overview: 'learn more'},
                   {id: 7, title: 'Readability', overview: 'learn more'},
                   {id: 8, title: 'Structure', overview: 'learn more'},
                   {id: 9, title: 'Typography', overview: 'learn more'},
                   {id: 10, title: 'Testing', overview: 'learn more'},
                 ],
                   searchTerm: ''
                 };


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
        <Cell columns = {12}>
        <TextField
              trailingIcon={<MaterialIcon icon="search"/>}
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
    {/*   { if (this.state.searchTerm) == '' {
        return(
           <Tips tips = {this.state.tips} key={this.state.id} show = {this.props.show}/>
        );
        else {tipNames} />
      }} */}
          </Cell>
          </Row>
      </Grid>
    );
  }
}

export default App;
