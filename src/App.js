import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      monsters:[], 
      searchField: ''
    };

    // this method is used to bind every method to the class comppnent 
    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users }));
  }

  // this method is used to bind every method to the class comppnent
  // handleChange(e)
  // {
  //   this.setState({ searchField: e.target.value })
  // }

  // ES6 method
  handleChange = (e) => 
  {
    this.setState({ searchField: e.target.value })
  };


  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    // easier way to write
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    return (
      <div className="App">
        <h1> Monsters Rolod ex </h1>
        <SearchBox
        placeholder= 'search monsters'
        handleChange = {this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
       
      </div>
    );
  }
}

export default App;
