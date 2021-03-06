import React, { Component } from 'react';
import './App.scss';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Navbar from '../components/navbar/navbar';
import Auth from '../components/auth/auth';
import profileData from '../helpers/data/profileData';
import NewLinkAdder from '../components/newLinkAdder/newLinkAdder';
import ProfileCard from '../components/profileCard/profileCard';
import Linkslist from '../components/linksList/linksList';
import linksData from '../helpers/data/linksData';

class App extends Component {
  state = {
    authenticated: false,
    user: '',
    userInfo: '',
    commits: '',
    selection: [],
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

  isAuthenticated = (user, userInfo, commits) => {
    this.setState({
      authenticated: true, user, userInfo, commits,
    });
    this.newLink();
  }

  userInfo = user => new Promise((resolve, reject) => {
    profileData.getUserData(user)
      .then((userInfo) => {
        resolve(userInfo);
      })
      .catch((err) => {
        reject(err);
      });
  })

  userCommits = user => new Promise((resolve, reject) => {
    profileData.getCommits(user)
      .then((commits) => {
        resolve(commits);
      })
      .catch((err) => {
        reject(err);
      });
  })

  newLink = () => new Promise((resolve, reject) => {
    linksData.getLinks(this.state.user)
      .then((data) => {
        this.setState({ selection: data });
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })

  render() {
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({
        authenticated: false, user: '', userInfo: '', commits: '',
      });
    };

    if (!this.state.authenticated) {
      return (
        <div className='App'>
          <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
          <div className='row'>
            <Auth
              isAuthenticated={this.isAuthenticated}
              userInfo={this.userInfo}
              userCommits={this.userCommits}
              newLink={this.newLink}/>
          </div>
        </div>
      );
    }
    return (
      <div className="App container-fluid">
        <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}/>
        <div className='row main'>
          <ProfileCard userInfo={this.state.userInfo} userCommits={this.state.commits}/>
          <div className='linksContainer col'>
            <NewLinkAdder user={this.state.user} newLink={this.newLink}/>
            <Linkslist user={this.state.user} selection={this.state.selection}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
