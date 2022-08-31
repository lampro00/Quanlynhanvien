import * as ActionTypes from ".//actionTypes";

export const Department = (
  state = { isLoading: true, errMess: null, Department: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Department: action.payload,
      };

    case ActionTypes.DEPARTMENT_LOADING:
      return { ...state, isLoading: true, errMess: null, Department: [] };

    case ActionTypes.DEPARTMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        Department: [],
      };

    default:
      return state;
  }
};
