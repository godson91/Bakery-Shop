import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
