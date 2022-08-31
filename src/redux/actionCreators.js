import * as AT from "./actionTypes";

import { baseUrl } from "../shared/BaseUrl";

// Staff--------------------------------
export const addStaff = (Staff) => ({ type: AT.ADD_STAFF, payload: Staff });

export const staffFailed = (err) => ({ type: AT.STAFF_FAILED, payload: err });

export const StaffLoading = () => ({ type: AT.STAFF_LOADING });

export const fetchStaff = () => (dispatch) => {
  dispatch(StaffLoading(true));

  return fetch("https://rjs101xbackend.herokuapp.com/staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((Staff) => dispatch(addStaff(Staff)))
    .catch((error) => dispatch(staffFailed(error.message)));
};
//-------------------department---------------------------
export const addDepartment = (Department) => ({
  type: AT.ADD_DEPARTMENT,
  payload: Department,
});

export const DepartmentFailed = (err) => ({
  type: AT.DEPARTMENT_FAILED,
  payload: err,
});

export const DepartmentLoading = () => ({ type: AT.DEPARTMENT_LOADING });

export const fetchDepartment = () => (dispatch) => {
  dispatch(DepartmentLoading(true));

  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((Department) => dispatch(addDepartment(Department)))
    .catch((error) => dispatch(DepartmentFailed(error.message)));
};
//--------------------SALARY----------------
export const addSalary = (Salary) => ({
  type: AT.ADD_SALARY,
  payload: Salary,
});

export const SalaryFailed = (err) => ({
  type: AT.SALARY_FAILED,
  payload: err,
});

export const SalaryLoading = () => ({ type: AT.SALARY_LOADING });

export const fetchSalary = () => (dispatch) => {
  dispatch(SalaryLoading(true));

  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((Salary) => dispatch(addSalary(Salary)))
    .catch((error) => dispatch(SalaryFailed(error.message)));
};
