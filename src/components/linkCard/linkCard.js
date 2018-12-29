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

  changeCheck = () => new Promise((resolve, reject) => {
    if (this.state.status === true) {
      this.setState({ status: false });
      resolve();
    } else if (this.state.status === false) {
      this.setState({ status: true });
      resolve();
    }
  })

  checkChanged = () => {
    this.changeCheck()
      .then(() => {
        linksData.updateStatus(this.state.id, this.state.status);
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
          <input type='checkbox' checked={this.state.status} onChange={this.checkChanged}></input>
        </div>
      </div>
    );
  }
}

export default linkCard;
