import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header/header.component';

//Pages
import Homepage from './pages/homepage/homepage.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
