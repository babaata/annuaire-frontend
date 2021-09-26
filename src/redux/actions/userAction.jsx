export const GET_CONNECTED_USER = "GET_CONNECTED_USER";
export const SET_CONNECTED_USER = "SET_CONNECTED_USER";

export const getConnectedUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CONNECTED_USER,
    });
  };
};

export const setConnectedUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_CONNECTED_USER,
      payload: user,
    });
  };
};
