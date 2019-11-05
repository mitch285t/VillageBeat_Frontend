import React, { Component } from "react";
import Signup from "../components/signup.js";
import MainPage from "./MainPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../components/login.js";
import Explore from "./Explore.js";
import BandProfile from "./BandProfile.js";
import UserProfile from "./UserProfile.js";
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
        {console.log(this.state.bandinfo)}
        <Router>
          <Route exact path="/" render={() => <div>hey welcome</div>} />
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
        </Router>
      </div>
    );
  }
}
export default Home;
