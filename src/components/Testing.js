import React from "react";
import moment from "moment";
import Card from "react-bootstrap/Card";
import VenuesList from "./VenuesList.js";
import Goggle from "./Goggle.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const showsURL = "http://localhost:3000/shows";
let array = [];
class Testing extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    fetch(showsURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shows: data.shows
        });
      });
  }

  render() {
    return (
      <>
        {this.state.shows.map(show => {
          for (let i = 0; i < this.props.bands.length; i++) {
            if (this.props.bands[i].id === show.band_id) {
              return (
                <Container>
                  <Row>
                    <Col>
                      <Card className="card-footer" border="dark" text="white">
                        <Card.Body>
                          <Card.Title>
                            {`${moment(show.time).format(
                              " hh:mm A, MMMM Do, YYYY "
                            )}`}
                          </Card.Title>
                          <Card.Text>
                            {this.props.bands[i].name}{" "}
                            {this.props.bands[i].genres}
                          </Card.Text>
                        </Card.Body>{" "}
                        <Card.Footer>
                          <VenuesList
                            show={show}
                            band={this.props.bands[i]}
                            handleLink={this.props.handleLink}
                          />
                        </Card.Footer>
                        <br />
                      </Card>
                    </Col>
                  </Row>
                </Container>
              );
            }
          }
        })}
      </>
    );
  }
}
export default Testing;
