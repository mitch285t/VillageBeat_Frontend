import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigbar extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("wallet");
    window.location.assign("http://localhost:3001");
  };
  render() {
    if (window.localStorage.getItem("token")) {
      return (
        <div>
          <Navbar className="navbar_color" variant="dark" expand="lg">
            <Navbar.Brand href="/MainPage">Village Beat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Explore">Explore</Nav.Link>
                <Nav.Link href="/UserProfile">Profile </Nav.Link>

                <Nav.Link
                  href="/logout"
                  onClick={event => this.handleLogout(event)}
                >
                  logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar className="navbar_color" variant="dark" expand="lg">
            <Navbar.Brand href="/">Village Beat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/Signup">Sign up</Nav.Link>
                <Nav.Link href="/Login">Log in</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}
export default Navigbar;
