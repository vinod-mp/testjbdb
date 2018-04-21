import React, { Component } from 'react';
import logo from './logo.svg';
import './JobsSchedulerApp.css';

class App extends Component {
  render() {
    return (
      <div className="JobsSchedulerApp">
        <header>
          Header text goes here.
        </header>
        <div id="jobentry-container">
          Welcome to JobsSchedulerApp!
        </div>
        <footer>
          Footer text goes here!
        </footer>
      </div>
    );
  }
}

export default App;
