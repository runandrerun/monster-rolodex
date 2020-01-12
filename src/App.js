import React, { Component } from 'react';
import MonsterContainer from './components/monster-container/MonsterContainer.component.jsx';
import SearchBox from './components/search-box/SearchBox.component.jsx';
import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      return this.setState({
        monsters: users
      })
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchField: e.target.value
    }, () => console.log(this.state.searchField));
  };

  render() {

    const { state: { monsters, searchField }, handleChange } = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"Search for monsters"}
          handleChange={handleChange}
        />
        <MonsterContainer
          monsters={filteredMonsters}
        />
      </div>
    );
  };
};

export default App;
