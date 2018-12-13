import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import authRequests from '../../helpers/data/authRequests';

class auth extends React.Component {
  authenticateUser = (event) => {
    event.preventDefault();
    authRequests.authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <button className='btn btn-info' onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default auth;
