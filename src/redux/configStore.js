import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Staff } from "./Staff";
import { DEPARTMENTS } from "../shared/staffs";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Department } from "./Department";
import { Salary } from "./Salary";
// import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staff: Staff,
      department: Department,
      salary: Salary,
      //   ...createForms({
      //     feedback: InitialFeedback,
      //   }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
