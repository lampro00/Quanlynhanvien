import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
