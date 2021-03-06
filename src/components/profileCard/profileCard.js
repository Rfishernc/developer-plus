import React from 'react';
import './profileCard.scss';

class profileCard extends React.Component {
  state = {
    picture: '',
    name: '',
    link: '',
    commits: '',
  }

  componentDidMount() {
    const { userInfo, userCommits } = this.props;
    const filteredEvents = userCommits.filter(event => event.type === 'PushEvent');
    let commitCount = 0;
    filteredEvents.forEach((event) => {
      commitCount += event.payload.commits.length;
    });
    this.setState({
      picture: userInfo.avatar_url, name: userInfo.login, link: userInfo.url, commits: commitCount,
    });
  }

  render() {
    return (
      <div className='col-2 profileCard'>
        <div className='profileContainer'>
          <img alt='profilePic' src={this.state.picture} className='profileImg'/>
          <div className='profileInfoDiv'>
            <h4>{this.state.name}</h4>
            <a href={this.link} className='profileAnc'>{this.state.link}</a>
            <p className='profileCommits'>{this.state.commits} commits in the last 5 days</p>
          </div>
        </div>
      </div>
    );
  }
}

export default profileCard;
