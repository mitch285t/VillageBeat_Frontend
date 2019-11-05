import React, { Component } from "react";
import Signup from "../components/signup.js";
import MainPage from "./MainPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../components/login.js";
import Explore from "./Explore.js";
import BandProfile from "./BandProfile.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <div>hey welcome</div>} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/MainPage" render={() => <MainPage />} />
          <Route exact path="/Explore" render={() => <Explore />} />
          <Route exact path="/BandProfile" render={() => <BandProfile />} />
        </Router>
      </div>
    );
  }
}
export default Home;
