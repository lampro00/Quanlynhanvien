import React, { Component } from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/Staff">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/Staff">
                    <span className="fa fa-user-circle fa-lg"></span> Nhân Viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Department">
                    <span className="fa fa-info fa-lg"></span> Phòng Ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Salary">
                    <span className="fa fa-list fa-lg"></span> Bảng lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
