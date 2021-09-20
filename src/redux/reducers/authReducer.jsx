import { AUTH, LOADING } from "../actions/authAction";

const initState = {isLoading: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      return action.payload;

    case LOADING: return {...state, isLoading: true}default:
      return state;
  }
};

export default authReducer;
