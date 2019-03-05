  _irc


<TextField
  outlined
  className = "Search"
  trailingIcon={<MaterialIcon role="button" icon="search"/>}
>

<Input
value={this.state.searchText}
onChange={(e) => this.setState({value: e.currentTarget.searchText})} />
</TextField>
