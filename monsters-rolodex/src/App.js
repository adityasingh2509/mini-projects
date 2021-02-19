import './App.css';
import { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // Life Cycle Method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Converting response to JSON.
      .then(users => this.setState({ monsters: users }))
  }


  render() {
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
}

export default App;

