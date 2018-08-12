import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import SearchBar from '../SearchBar';
import { showLoginModal, showRegisterModal } from '../../actions';

class Navigation extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ymmv</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
              <NavItem>
                {/*placeholder because I have no idea what else to put here*/}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => this.props.showRegisterModal()}>
                    Register
                  </DropdownItem>
                  <DropdownItem onClick={() => this.props.showLoginModal()}>
                    Sign In
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, { showLoginModal, showRegisterModal })(Navigation);