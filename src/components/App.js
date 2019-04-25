import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import SignInPage from './SignInPage/Index';
import LoadingSpinner from './LoadingSpinner';

import { User, Session } from "../requests";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    }

    // this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);

  }

  destroySession() {
    Session.destroy().then(() => this.setState({
      currentUser: null
    }));
  }

  async getUser() {
    try {
      const currentUser = await User.current();
      this.setState({ currentUser });
    } catch (err) {
      throw err;
    };
  };

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
            <Route
              path="/session/new"
              exact
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App