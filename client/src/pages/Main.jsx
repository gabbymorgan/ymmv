import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { Search } from '../containers';

class Main extends Component {
  render() {
    return (
      <Row>
        <Search/>
      </Row>

    );
  }
}

export default Main;