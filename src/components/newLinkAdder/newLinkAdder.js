import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

class newLinkadder extends React.Component {
  render() {
    return (
      <div>
        <input type='text'></input>
        <input type='text'></input>
        <ListGroup>
          <ListGroupItem href="#" active>Tutorial</ListGroupItem>
          <ListGroupItem href="#">Blog</ListGroupItem>
          <ListGroupItem href="#" disabled>Resource</ListGroupItem>
          <ListGroupItem href="#">Podcast</ListGroupItem>
        </ListGroup>;
        <button type='button' className='btn btn-sm btn-success'>+</button>
      </div>
    );
  }
}

export default newLinkadder;
