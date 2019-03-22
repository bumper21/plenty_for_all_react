import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import LoadingSpinner from './LoadingSpinner';

import { User, Session } from '../requests';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    }

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);

  }

  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        this.setState({ currentUser });
      }
    })
  };

  destroySession() {
    Session.destroy().then(() => this.setState({
      currentUser: null }));
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({loading: false})
    }.bind(this), 1000)
    this.getUser()
  };

  render() {
    const { currentUser } = this.state;

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
          <NavBar
            currentUser={currentUser} onSignOut={this.destroySession} />
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
            />
            {/* <Route
              path="/user/sign-in"
              exact
              component={}
            /> */}
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App