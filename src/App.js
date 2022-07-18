import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
<<<<<<< lab03.2

=======
import Menu from "./components/MenuComponents";
>>>>>>> local
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
<<<<<<< lab03.2
    return <Menu dishes={this.state.dishes} />;
=======
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante con Funsion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
>>>>>>> local
  }
}

export default App;
