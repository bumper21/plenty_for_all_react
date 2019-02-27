import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import LoadingSpinner from './LoadingSpinner';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({loading: false})
    }.bind(this), 1000)
   
  }

  render() {

    if (this.state.loading) {
      return (
        <div className="App">
          <LoadingSpinner />
        </div>
      )
    }

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