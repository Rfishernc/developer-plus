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

  componentDidMount() {
    linksData.getLinks()
      .then((links) => {
        const filteredLinks = links.filter(link => link.type === 'Tutorials');
        this.setState({ selection: filteredLinks });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectType = (event) => {
    const type = event.target.id;
    linksData.getLinks()
      .then((links) => {
        const filteredLinks = links.filter(link => link.type === type);
        this.setState({ selection: filteredLinks });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  makeLinkCards() {
    const theLinks = [];
    this.state.selection.forEach((link) => {
      theLinks.push(<LinkCard linkData={link} key={link.id}/>);
    });
    return theLinks;
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
        {this.makeLinkCards()}
      </div>
    </div>
    );
  }
}

export default linksList;
