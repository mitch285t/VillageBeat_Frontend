import React from "react";
import BandInfo from "./bandInfo.js";
import Pagination from "react-bootstrap/Pagination";
import CardGroup from "react-bootstrap/CardGroup";

class BandCard extends React.Component {
  render() {
    return (
      <div>
        <CardGroup>
          {this.props.bands.map(band => (
            <BandInfo band={band} handleClick={this.props.handleClick} />
          ))}
        </CardGroup>
      </div>
    );
  }
}
export default BandCard;

// 0: {id: 1, name: "Classical", created_at: "2019-11-12T16:24:43.685Z", updated_at: "2019-11-12T16:24:43.685Z"}
// 1: {id: 2, name: "World", created_at: "2019-11-12T16:24:43.690Z", updated_at: "2019-11-12T16:24:43.690Z"}
// 2: {id: 3, name: "Hip Hop", created_at: "2019-11-12T16:24:43.694Z", updated_at: "2019-11-12T16:24:43.694Z"}
// 3: {id: 4, name: "Reggae", created_at: "2019-11-12T16:24:43.698Z", updated_at: "2019-11-12T16:24:43.698Z"}
// 4: {id: 5, name: "Rock", created_at: "2019-11-12T16:24:43.702Z", updated_at: "2019-11-12T16:24:43.702Z"}
// 5: {id: 6, name: "Hip Hop", created_at: "2019-11-12T16:24:43.706Z", updated_at: "2019-11-12T16:24:43.706Z"}
// 6: {id: 7, name: "Soul", created_at: "2019-11-12T16:24:43.709Z", updated_at: "2019-11-12T16:24:43.709Z"}
// 7: {id: 8, name: "Country", created_at: "2019-11-12T16:24:43.714Z", updated_at: "2019-11-12T16:24:43.714Z"}
// 8: {id: 9, name: "Blues", created_at: "2019-11-12T16:24:43.717Z", updated_at: "2019-11-12T16:24:43.717Z"}
// 9: {id: 10, name: "Hip Hop", created_at: "2019-11-12T16:24:43.720Z", updated_at: "2019-11-12T16:24:43.720Z"}
// 10: {id: 11, name: "Stage And Screen", created_at: "2019-11-12T16:24:43.724Z", updated_at: "2019-11-12T16:24:43.724Z"}
// 11: {id: 12, name: "Electronic", created_at: "2019-11-12T16:24:43.727Z", updated_at: "2019-11-12T16:24:43.727Z"}
// 12: {id: 13, name: "Latin", created_at: "2019-11-12T16:24:43.730Z", updated_at: "2019-11-12T16:24:43.730Z"}
