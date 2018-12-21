import React from 'react';

class profileCard extends React.Component {
  state = {
    picture: '',
    name: '',
    link: '',
    commits: '',
  }

  render() {
    return (
      <div>
        <image src={this.picture}/>
        <h4>{this.name}</h4>
        <a href={this.link}>{this.link}</a>
        <p>{this.commits} commits in the last 5 days</p>
      </div>
    );
  }
}

export default profileCard;
