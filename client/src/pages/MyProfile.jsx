import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

import { ContentHeading } from '../styles';

class MyProfile extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <ContentHeading>
                        {this.props.profile.email}
                    </ContentHeading>
                    <Row>
                        {this.props.profile.description}
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn,
    profile: state.user.profile,
});

export default connect(mapStateToProps)(MyProfile);