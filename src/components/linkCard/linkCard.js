import React from 'react';
import './linkCard.scss';

class linkCard extends React.Component {
  state = {
    linkName: '',
    link: '',
    status: '',
  }

  componentWillMount() {
    const { linkData } = this.props;
    this.setState({ linkName: linkData.linkName, link: linkData.link, status: linkData.status });
  }

  render() {
    return (
      <div className='linkCard'>
        <p>{this.state.linkName}</p>
        <a href={this.state.link}>{this.state.link}</a>
        <button type='button' className='btn btn-sm btn-danger'>Remove</button>
        <div className='checkboxDiv'>
          <p>Done!</p>
          <input type='checkbox'></input>
        </div>
      </div>
    );
  }
}

export default linkCard;
