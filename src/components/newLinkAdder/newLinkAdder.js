import React from 'react';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import './newLinkAdder.scss';
import linksData from '../../helpers/data/linksData';

class newLinkadder extends React.Component {
  newLink = {
    linkName: '',
    link: '',
    type: '',
    status: false,
    uid: this.props.user,
  }

  submitLink = () => {
    this.newLink.linkName = document.getElementById('nameInput').value;
    this.newLink.link = document.getElementById('linkInput').value;
    linksData.addLink(this.newLink)
      .then(() => {
        document.getElementById('nameInput').value = '';
        document.getElementById('linkInput').value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getType = (event) => {
    this.newLink.type = event;
  }

  render() {
    return (
      <div className='newLinkAdder'>
        <div className='newLinkContainer'>
          <div>
            <div className='inputDiv'>
              <p className='inputLabel'>Name: </p>
              <input type='text' className='inputInput' id='nameInput'></input>
            </div>
            <div className='inputDiv'>
              <p className='inputLabel'>Link: </p>
              <input type='text' className='inputInput' id='linkInput'></input>
            </div>
          </div>
          <ButtonToolbar>
            <ToggleButtonGroup bsSize='small' vertical type="radio" name="options" defaultValue={'Tutorials'}
              onChange={this.getType}>
              <ToggleButton value={'Tutorials'} className='toggleButtons'>Tutorial</ToggleButton>
              <ToggleButton value={'Blogs'} className='toggleButtons'>Blog</ToggleButton>
              <ToggleButton value={'Resources'} className='toggleButtons'>Resource</ToggleButton>
              <ToggleButton value={'Podcasts'} className='toggleButtons'>Podcast</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
        <button type='button' className='btn btn-sm btn-success newLinkButton' onClick={this.submitLink}>+</button>
      </div>
    );
  }
}

export default newLinkadder;
