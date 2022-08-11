import React, { Component, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isModalOpen: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name1 = target.name;

    this.setState({
      [name1]: value,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSearch() {
    this.setState({ input: this.username.value.toUpperCase() });
  }

  render(props) {
    const search = this.props.staffs.filter((el) => {
      if (el.name.toUpperCase().includes(this.state.input) === true) {
        return el;
      }
    });
    const Nhanvien = search.map((staff) => {
      return (
        <div className="col-6 col-xl-2 col-md-4 ">
          <Link to={`/Nhanvien/${staff.id}`}>
            <CardImg src={staff.image} alt="Nhân viên"></CardImg>
            <Card>
              <CardTitle className="text-center">{staff.name}</CardTitle>
            </Card>
          </Link>
        </div>
      );
    });

    return (
      <div className="container p-4 background-color">
        <div className="row mb-3">
          <div className="col-12 col-md-4">
            <h2>Nhân Viên</h2>
          </div>
          <div className="input col-12 col-md-5">
            <Input
              type="text"
              id="username"
              name="username"
              innerRef={(input) => (this.username = input)}
            />
            <Button className="button" onClick={this.handleSearch}>
              <span class="fa fa-search ml-" aria-hidden="true"></span>
            </Button>
          </div>
        </div>
        <div className="row">{Nhanvien}</div>
      </div>
    );
  }
}

export default StaffList;
