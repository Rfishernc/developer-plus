import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './linksList.scss';
import linksData from '../../helpers/data/linksData';
import LinkCard from '../linkCard/linkCard';

class linksList extends React.Component {
  state = {
    type: 'Tutorials',
    selection: [],
  }

  componentWillMount() {
    linksData.getLinks()
      .then((links) => {
        this.setState({ selection: links });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    this.makeCardsByType();
  }

  makeCardsByType = () => {
    const filteredLinks = this.state.selection.filter(link => link.type === this.state.type);
    return this.makeLinkCards(filteredLinks);
  }

  removeLinkCard = (cardId) => {
    const filteredSelection = this.state.selection.filter(link => link.id !== cardId);
    this.setState({ selection: filteredSelection });
  }

  makeLinkCards = (filteredLinks) => {
    const theLinks = [];
    filteredLinks.forEach((link) => {
      theLinks.push(<LinkCard linkData={link} key={link.id} removeLinkCard={this.removeLinkCard}/>);
    });
    return theLinks;
  }

  selectType = (event) => {
    const type = event.target.id;
    this.setState({ type });
  }

  render() {
    return (
    <div className='linksList'>
      <ButtonGroup>
        <Button onClick={this.selectType} id='Tutorials'>Tutorials</Button>
        <Button onClick={this.selectType} id='Blogs'>Blogs</Button>
        <Button onClick={this.selectType} id='Resources'>Resources</Button>
        <Button onClick={this.selectType} id='Podcasts'>Podcasts</Button>
      </ButtonGroup>
      <div className='listContainer'>
        {this.makeCardsByType()}
      </div>
    </div>
    );
  }
}

export default linksList;
