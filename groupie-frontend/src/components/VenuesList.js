import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const VenuesURL = "http://localhost:3000/venues";
let array = [];
class VenuesList extends React.Component {
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }
  componentDidMount() {
    fetch(VenuesURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          venues: data
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.venues.map(venue => {
          if (venue.id === this.props.show.venue_id) {
            return (
              <Card.Footer>
                {" "}
                {`${venue.name} / ${venue.location}`}
                <Button
                  variant="outline-light"
                  id={venue.id}
                  onClick={event =>
                    this.props.handleLink(
                      event,
                      venue.lat,
                      venue.lng,
                      venue.location
                    )
                  }
                >
                  Find it
                </Button>
              </Card.Footer>
            );
          }
        })}
      </div>
    );
  }
}

export default VenuesList;
