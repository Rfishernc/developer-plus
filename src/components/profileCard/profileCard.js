import React from 'react';

class profileCard extends React.Component {
  render() {
    return (
      <div>
        <image src={github}/>
        <h4>{name}</h4>
        <a href={link}>{link}</a>
        <p>{commits} commits in the last 5 days</p>
      </div>
    );
  }
}

export default profileCard;
