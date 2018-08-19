import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { showSessionModal } from '../../actions';

class GuestNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showModal() {
    this.props.showSessionModal();
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <NavbarBrand>your mileage may vary</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/about'>
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'>
                    <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/'>
                    <NavLink onClick={() => this.showModal() }>Sign In</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, { showSessionModal })(GuestNav);