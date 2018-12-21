import React, { Component } from 'react';
import './App.scss';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Navbar from '../components/navbar/navbar';
import Auth from '../components/auth/auth';
import profileData from '../helpers/data/profileData';
import NewLinkAdder from '../components/newLinkAdder/newLinkAdder';
import ProfileCard from '../components/profileCard/profileCard';

class App extends Component {
  state = {
    authenticated: false,
    user: '',
  }

  componentDidMount() {
    connection();
    // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({
    //       authenticated: true,
    //     });
    //   } else {
    //     this.setState({
    //       authenticated: false,
    //     });
    //   }
    // });
  }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  isAuthenticated = (username) => {
    this.setState({ authenticated: true, user: username });
  }

  userInfo = user => new Promise((resolve, reject) => {
    profileData.getUserData(user)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })

  userCommits = user => new Promise((resolve, reject) => {
    profileData.getCommits(user)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })

  render() {
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({ authenticated: false, user: '' });
    };

    if (!this.state.authenticated) {
      return (
        <div className='App'>
          <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
          <div className='row'>
            <Auth
              isAuthenticated={this.isAuthenticated}
              userInfo={this.userInfo}
              userCommits={this.userCommits}/>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
        <div className='row'>
          <ProfileCard className='col-3'/>
          <NewLinkAdder className='col-9'/>
        </div>
      </div>
    );
  }
}

export default App;
