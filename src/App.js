import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [
        {
          name: "Frankenstein",
          id: "frank1"
        },{
          name: "Dracula",
          id: "dracul1"
        },{
          name: "Zombie",
          id: "zom1"
        },{
          name: "Kruger",
          id: "freddi1"
        },
      ]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(users => this.setState({monsters: users}));
  }
  render (){
    return (
      <div className='app'>
       
        <CardList monsters={this.state.monsters}/>
      </div>
      
    )

  };
}

export default App;
