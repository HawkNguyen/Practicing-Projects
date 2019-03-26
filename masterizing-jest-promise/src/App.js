import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FooComponent from "./FooComponent"
const googleTrends = require('google-trends-api');
googleTrends.interestOverTime({
        keyword: 'Women\'s march'
    })
    .then(function (results) {
        console.log('These results are awesome', results);
    })
    .catch(function (err) {
        console.error('Oh no there was an error', err);
    });
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FooComponent/>
      </div>
    );
  }
}

export default App;