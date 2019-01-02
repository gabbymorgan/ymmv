import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

import { ContentHeading } from '../styles';

class MyProfile extends Component {
    render() {
        const { profile } = this.props;
        return (
            <Row>
                <Col>
                    <ContentHeading>
                        <h1>{profile.firstName} {profile.lastName}</h1>
                    </ContentHeading>
                    <Row>
                        <h4>{profile.email}</h4>
                    </Row>
                    <Row>
                        <p>{profile.description}</p>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.session.isLoggedIn,
    profile: state.session.profile,
});

export default connect(mapStateToProps)(MyProfile);