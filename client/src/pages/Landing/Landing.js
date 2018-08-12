import React, { Component } from "react";
import Search from "../../components/SearchBar";
import Login from "../../components/Login";
import Register from "../../components/Register";
import FeedContainer from "../../containers/FeedContainer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Search />
        <FeedContainer />
        <Login />
        <Register />
      </div>
    );
  }
}

export default Landing;
