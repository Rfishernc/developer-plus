import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './auth.scss';

class auth extends React.Component {
  authenticateUser = (event) => {
    event.preventDefault();
    authRequests.authenticate()
      .then((result) => {
        const user = result.additionalUserInfo.username;
        this.props.userInfo(user)
          .then((res) => {
            const userInfo = res;
            this.props.userCommits(user)
              .then((commitsRes) => {
                const commits = commitsRes.data;
                this.props.isAuthenticated(user, userInfo, commits);
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='col auth'>
        <button className='btn btn-info' onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default auth;
