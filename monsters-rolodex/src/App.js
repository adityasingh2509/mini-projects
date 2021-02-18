import './App.css';
import { Component } from 'react';

class App extends Component{
    constructor() {
        super();

        this.state = {
            monsters: []
        };
    }

    // Life Cycle Method
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Converting response to JSON.
        .then(users => this.setState({monsters: users}))
    }


    render(){
        return(
            <div className="App">
                {
                    this.state.monsters.map(monster => (
                        <h1 key = {monster.id}> {monster.name} </h1>
                    ))
                }
            </div>
        )
    }
}

export default App;

  