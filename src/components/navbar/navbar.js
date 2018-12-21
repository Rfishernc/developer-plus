import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class navbar extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isAuthenticated, logoutClicked } = this.props;
    return (
      <div className='myNavBar'>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Developer Plus</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {isAuthenticated ? <NavLink onClick={logoutClicked}>Logout</NavLink> : ''}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
