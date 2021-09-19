import { AUTH } from "../actions/authAction";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      return action.payload;

    default:
      return state;
  }
};

export default authReducer;
