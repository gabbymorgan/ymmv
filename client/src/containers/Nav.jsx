import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserNav, GuestNav } from '../components';

class NavContainer extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <UserNav />;
    }
    return <GuestNav />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
  }
}

export default connect(mapStateToProps)(NavContainer);