import { SET_CONNECTED_USER, GET_CONNECTED_USER } from "../actions/userAction";

const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CONNECTED_USER:
      return { connectedUser: action.payload };

    case GET_CONNECTED_USER:
      return state.connectedUser;

    default:
      return state;
  }
};

export default userReducer;
