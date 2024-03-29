import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configStore";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";
const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
