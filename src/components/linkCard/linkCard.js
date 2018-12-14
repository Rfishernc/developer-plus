import React from 'react';

class linkCard extends React.Component {
  render() {
    return (
      <div>
        <p>{linkName}</p>
        <a href={link}>{link}</a>
        <button type='button' className='btn btn-sm btn-danger'>Remove</button>
        <input type='checkbox'>Done!</input>
      </div>
    );
  }
}

export default linkCard;
