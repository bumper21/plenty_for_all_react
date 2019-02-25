import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './HomePage';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }

  }

  componentDidMount() {
    
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
            />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App