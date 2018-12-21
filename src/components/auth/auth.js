import React from 'react';
import authRequests from '../../helpers/data/authRequests';

class auth extends React.Component {
  authenticateUser = (event) => {
    event.preventDefault();
    authRequests.authenticate()
      .then((result) => {
        const user = result.additionalUserInfo.username;
        this.props.userInfo(user)
          .then(() => {
            this.props.userCommits(user)
              .then(() => {
                this.props.isAuthenticated(user);
              });
          });
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
