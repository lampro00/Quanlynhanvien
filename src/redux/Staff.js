import * as ActionTypes from ".//actionTypes";

export const Staff = (
  state = { isLoading: true, errMess: null, Staff: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        Staff: action.payload,
      };

    case ActionTypes.STAFF_LOADING:
      return { ...state, isLoading: true, errMess: null, Staff: [] };

    case ActionTypes.STAFF_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, Staff: [] };

    default:
      return state;
  }
};
