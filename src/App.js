import React, { Component } from 'react';
import { Demo } from './Components/Demo';
import { List } from './Components/List';
import { ToDo } from './Components/ToDo/ToDo';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
    }
  }
  showClick = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return <div>
      {this.state.show && <Demo name="Mirjalol" />}
      <button onClick={this.showClick}>Demo Component Switch</button>
      <h1>App Component</h1>
      <List/>
      <ToDo />
    </div>
  }
}

export default App;