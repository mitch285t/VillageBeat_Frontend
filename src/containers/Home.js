import React, { Component } from "react";
import Signup from "../components/signup.js";
import MainPage from "./MainPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import Login from "../components/login.js";
import Explore from "./Explore.js";
import BandProfile from "./BandProfile.js";
import UserProfile from "./UserProfile.js";
import Goggle from "../components/Goggle.js";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      bandinfo: []
    };
  }
  getstate = info => {};
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={() => <div className="background"></div>}
          />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/MainPage" render={() => <MainPage />} />
          <Route exact path="/Explore" render={() => <Explore />} />
          <Route
            exact
            path="/BandProfile"
            render={() => <BandProfile getstate={this.getstate} />}
          />
          <Route exact path="/UserProfile" render={() => <UserProfile />} />
          <Route exact path="/GoogleMap" render={() => <Goggle />} />
        </Router>
      </div>
    );
  }
}
export default Home;
