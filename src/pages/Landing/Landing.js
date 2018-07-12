import React, { Component } from "react";
import Search from "../../components/Search/Search";
import FeedContainer from "../../containers/FeedContainer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Search />
        <FeedContainer />
      </div>
    );
  }
}

export default Landing;
