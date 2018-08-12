import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { getReports } from "../../actions";
import ReportCard from "../../components/ReportCard";

class FeedContainer extends Component {
  componentDidMount() {
    this.props.getReports();
  }

  render() {
    return (
      <Col>
        {/* { 
                    this.props.reports.map(report => {
                        return <ReportCard />
                    })
                }      */}
      </Col>
    );
  }
}

const mapStateToProps = state => {
  const { reports } = state;
  return {
    reports
  };
};

export default connect(
  mapStateToProps,
  { getReports }
)(FeedContainer);
