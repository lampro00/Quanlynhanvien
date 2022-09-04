import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import RenderStaff from "./StaffComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import RenderDepartment from "./DepartmentComponent.js";
import StaffList from "./StaffListComponent";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import RenderSalary from "./SalaryComponent";
import RenderDepartmentID from "./DepartmentIDCompomnet";
import { connect } from "react-redux";
import {
  fetchStaff,
  addStaff,
  fetchDepartment,
  fetchSalary,
  postStaff,
  deleteStaff,
} from "../redux/actionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    staff: state.staff,
    department: state.department,
    salary: state.salary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postStaff: (
    id,
    name,
    departmentId,
    doB,
    startDate,
    salaryScale,
    annualLeave,
    overTime
  ) => {
    dispatch(
      postStaff(
        id,
        name,
        departmentId,
        doB,
        startDate,
        salaryScale,
        annualLeave,
        overTime
      )
    );
  },
  fetchStaff: () => {
    dispatch(fetchStaff());
  },
  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  deleteStaff: (id) => {
    dispatch(deleteStaff(id));
  },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchStaff();
    this.props.fetchDepartment();
    this.props.fetchSalary();
  }

  render() {
    console.log(this.props.department.Department);
    const StaffWithId = (props) => {
      return (
        <RenderStaff
          Department={this.props.department.Department}
          Staff={
            this.props.staff.Staff.filter(
              (Staff) => Staff.id === parseInt(props.match.params.a, 10)
            )[0]
          }
          staffLoading={this.props.staff.isLoading}
          staffErrMess={this.props.staff.errMess}
        />
      );
    };
    const DepartmentWithId = (props) => {
      return (
        <RenderDepartmentID
          Staff={this.props.staff.Staff}
          Department={
            this.props.department.Department.filter(
              (department) => department.name === props.match.params.b
            )[0]
          }
          departmentLoading={this.props.department.isLoading}
          departmentErrMess={this.props.department.errMess}
        />
      );
    };

    return (
      <div>
        <Header staffs={this.props.staffs} />
        <Switch>
          <Route
            exact
            path="/Staff"
            component={() => (
              <StaffList
                staffs={this.props.staff}
                postStaff={this.props.postStaff}
                deleteStaff={this.props.deleteStaff}
              />
            )}
          />

          <Route path="/Nhanvien/:a" component={StaffWithId} />
          <Route
            exact
            path="/Department"
            component={() => (
              <RenderDepartment department={this.props.department} />
            )}
          />
          <Route exact path="/Department/:b" component={DepartmentWithId} />
          <Route
            exact
            path="/Salary"
            component={() => <RenderSalary salary={this.props.salary} />}
          />
          <Redirect to="/Staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
