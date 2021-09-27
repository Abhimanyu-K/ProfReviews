import React, { Component } from "react";
import SearchBar from "./SearchBar";

import "./Search.css";

class Search extends Component {
  state = {
    profilesdb: [],
    isValid: false,
    postLoading: true,
  };

  render() {
   
    return (
      <React.Fragment>
        <div className="app">
          
          <SearchBar
<<<<<<< HEAD:Client/src/component/Search/Search.js
            placeholder="Search By College or Domain Name... "
            value={this.props.value}
||||||| 78a714d:prof/src/component/Search/Search.js
            placeholder="Search By College Name... "
=======
            placeholder="Search By College or Domain Name... "
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/Search.js
            logo={this.getLogoHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
