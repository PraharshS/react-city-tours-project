import React, { Component } from "react";
import Navbar from "./components/NavBar/Navbar";
import TourList from "./components/TourList";

import "./App.scss";
import Tour from "./components/Tour/tour";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
