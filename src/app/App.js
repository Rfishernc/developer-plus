import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Navbar from '../components/navbar/navbar';
import Auth from '../components/auth/auth';

class App extends Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
        });
      } else {
        this.setState({
          authenticated: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authenticated: true });
  }

  render() {
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({ authenticated: false });
    };

    if (!this.state.authenticated) {
      return (
        <div className='App'>
          <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
      </div>
    );
  }
}

export default App;
