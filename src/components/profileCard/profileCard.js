import React from 'react';

class profileCard extends React.Component {
  state = {
    picture: '',
    name: '',
    link: '',
    commits: '',
  }

  componentDidMount() {
    const { userInfo, userCommits } = this.props;
    this.setState({
      picture: userInfo.avatar_url, name: userInfo.login, link: userInfo.url, commits: '',
    });
  }

  render() {
    return (
      <div className='col-3'>
        <img alt='profilePic' src={this.state.picture}/>
        <h4>{this.state.name}</h4>
        <a href={this.link}>{this.state.link}</a>
        <p>{this.state.commits} commits in the last 5 days</p>
      </div>
    );
  }
}

export default profileCard;
