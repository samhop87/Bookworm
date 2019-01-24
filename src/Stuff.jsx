import React, { Component } from "react";
import SpotlightAuthor from "./SpotlightAuthor";

class Stuff extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="spotlight-content">
          <h2 className="spotlight-title">AUTHOR SPOTLIGHT</h2>
          <SpotlightAuthor author={this.props} />
        </div>
      </React.Fragment>
    );
  }
}

export default Stuff;
