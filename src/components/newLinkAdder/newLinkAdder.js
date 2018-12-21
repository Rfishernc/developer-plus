import React from 'react';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import './newLinkAdder.scss';

class newLinkadder extends React.Component {
  render() {
    return (
      <div className='newLinkAdder'>
        <div className='newLinkContainer'>
          <div>
            <div className='inputDiv'>
              <p className='inputLabel'>Name: </p>
              <input type='text' className='inputInput'></input>
            </div>
            <div className='inputDiv'>
              <p className='inputLabel'>Link: </p>
              <input type='text' className='inputInput'></input>
            </div>
          </div>
          <ButtonToolbar>
            <ToggleButtonGroup bsSize='small' vertical type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1} className='toggleButtons'>Tutorial</ToggleButton>
              <ToggleButton value={2} className='toggleButtons'>Blog</ToggleButton>
              <ToggleButton value={3} className='toggleButtons'>Resource</ToggleButton>
              <ToggleButton value={4} className='toggleButtons'>Podcast</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
        <button type='button' className='btn btn-sm btn-success newLinkButton'>+</button>
      </div>
    );
  }
}

export default newLinkadder;
