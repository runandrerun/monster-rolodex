import React, { Component } from 'react';
import './App.css';
import MonsterContainer from './components/monster-container/MonsterContainer';

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

  // createMonsters = () => {
  //   const { monsters } = this.state;
  //   return <MonsterContainer monsters={monsters} />;
  // };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchField: e.target.value
    }, () => console.log(this.state.searchField));
  };

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search for a monster"
          onChange={(e) => this.handleChange(e)}
        />
        {/*this.createMonsters()*/}
        <MonsterContainer
          monsters={filteredMonsters}
        />
      </div>
    );
  };
};

export default App;
