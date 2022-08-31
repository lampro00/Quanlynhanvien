import * as ActionTypes from ".//actionTypes";

export const Salary = (
  state = { isLoading: true, errMess: null, Salary: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SALARY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Salary: action.payload,
      };

    case ActionTypes.SALARY_LOADING:
      return { ...state, isLoading: true, errMess: null, Salary: [] };

    case ActionTypes.SALARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        Salary: [],
      };

    default:
      return state;
  }
};
