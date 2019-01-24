import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Stuff from "./Stuff";
import Contact from "./Contact";
import Booklist from "./Booklist";
import SearchForm from "./SearchForm";
import Home from "./Home";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      author: []
    };
  }

  // componentDidMount() {
  //   let convert = require("xml-js");
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show/18541?format=xml&key=3wsb9GmbuMOvUaujbmFImQ`
  //   )
  //     .then(response => response.text())
  //     .then(data => {
  //       let result = convert.xml2json(data, { compact: false, spaces: 4 });
  //       let resobj = JSON.parse(result);
  //       let obj = resobj.elements[0].elements[1].elements;
  //       console.log(obj);
  //       return obj;
  //     })

  //     .then(obj => {
  //       this.setState({ author: [obj] });
  //       console.log(this.state.author);
  //     })
  //     .catch(error => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }

  performSearch = query => {
    let convert = require("xml-js");
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=3wsb9GmbuMOvUaujbmFImQ&q=${query}`
    )
      .then(response => response.text())
      .then(data => {
        // console.log(data);
        // let parser = new DOMParser();
        // let xml = parser.parseFromString(data, "text/xml");
        let result = convert.xml2json(data, { compact: false, spaces: 4 });
        let obj = JSON.parse(result);

        return obj;
      })

      // .then(myJson => console.log(JSON.stringify(myJson)))
      // .then(response => parser.parseFromString(response, "text/xml"))
      // .then(response => convert.xml2json(response))

      // convert.xml2js(myJson, { compact: false, spaces: 4 }))

      .then(obj => {
        this.setState({
          books: obj.elements["0"].elements[1].elements[6].elements
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <HashRouter>
        <div>
          <div className="container">
            <h1>Bookworm</h1>
            <ul className="header">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stuff">Spotlight</NavLink>
              </li>
              <li>
                <NavLink to="/contact">About</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <Home />
                    <SearchForm onSearch={this.performSearch} />
                    <Booklist data={this.state.books} />{" "}
                  </React.Fragment>
                )}
              />
              <Route
                path="/stuff"
                render={() => <Stuff author={this.state.author} />}
              />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
