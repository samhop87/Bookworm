import React, { Component } from "react";
import WormBox from "./WormBox";

class SearchForm extends Component {
  state = { searchText: "" };
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    // e.currentTarget.reset();
  };

  // handleReset = e => {
  //   e.preventDefault();
  //   e.currentTarget.value = "";
  // e.currentTarget.reset();
  // e.currentTarget.value = "";
  // document.getElementById("ice-cream-flavors").innerHTML = "";
  // };

  render() {
    return (
      <React.Fragment>
        <WormBox input={this.state} />

        {/* THE SEARCH DROP DOWN */}
        <div className="search-box">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <select
              type="text"
              id="ice-cream-flavors"
              onChange={this.onSearchChange}
              ref={input => (this.query = input)}
              placeholder="Genres"
              className="input-box"
            >
              <option>Pick an option</option>
              <option className="horror" value="Horror">
                Horror
              </option>{" "}
              />
              <option className="comedy" value="Comedy">
                Comedy
              </option>{" "}
              />
              <option className="classics" value="Classics">
                Classics
              </option>{" "}
              />
              <option className="non-fiction" value="Non-fiction">
                Non-fiction
              </option>{" "}
              />
              <option className="science-fiction" value="Science fiction">
                Science fiction
              </option>{" "}
              />
              <option className="romance" value="Romance">
                Romance
              </option>{" "}
              />
              <option className="adventure" value="Adventure">
                Adventure
              </option>{" "}
              />
            </select>
            <button type="submit" id="submit" className="search-button">
              SUBMIT{" "}
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchForm;
