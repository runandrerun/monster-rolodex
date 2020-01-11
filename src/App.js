import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MonsterContainer from './components/monster-container/MonsterContainer';

class App extends Component {

  state = {
    monsters: [],
  };

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      return this.setState({
        monsters: users
      })
    }, console.log(this.state.users));
  };

  createMonsters = () => {
    const { monsters } = this.state;
    return <MonsterContainer monsters={monsters} />;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>{this.state.string}</code> and save to reload.
          </p>
          {this.createMonsters()}
        </header>
      </div>
    );
  };
};

export default App;
