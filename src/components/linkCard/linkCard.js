import React from 'react';
import './linkCard.scss';
import linksData from '../../helpers/data/linksData';

class linkCard extends React.Component {
  state = {
    linkName: '',
    link: '',
    status: '',
    id: '',
  }

  componentWillMount() {
    const { linkData } = this.props;
    this.setState({
      linkName: linkData.linkName, link: linkData.link, status: linkData.status, id: linkData.id,
    });
  }

  deleteLink = () => {
    const cardId = this.state.id;
    linksData.deleteLink(cardId)
      .then(() => {
        this.props.removeLinkCard(cardId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='linkCard'>
        <p>{this.state.linkName}</p>
        <a href={this.state.link}>{this.state.link}</a>
        <button type='button' className='btn btn-sm btn-danger' onClick={this.deleteLink}>Remove</button>
        <div className='checkboxDiv'>
          <p>Done!</p>
          <input type='checkbox'></input>
        </div>
      </div>
    );
  }
}

export default linkCard;
