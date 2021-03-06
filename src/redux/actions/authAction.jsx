import { getDataAPI, postDataAPI } from "../../utils/fetchData";
import { setConnectedUser } from "./userAction";

export const AUTH = "AUTH";
export const NOTIFY = "NOTIFY";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

export const login = (data) => async (dispatch) => {
  dispatch({ type: NOTIFY, payload: { loading: true } });

  const res = await postDataAPI("user/login", data);

  if (res.data.access_token) {
    dispatch({
      type: AUTH,
      payload: {
        data: res.data,
      },
    });

    const userResponse = await getDataAPI("user/me", res.data?.access_token);

    if (userResponse.data?.user) {
      dispatch(setConnectedUser(userResponse.data?.user));
    }

    localStorage.setItem("firstLogin", res.data?.access_token);

    dispatch({
      type: NOTIFY,
      payload: {
        success: "register success",
      },
    });
  } else {
    dispatch({
      type: NOTIFY,
      payload: {
        error: res.data,
      },
    });
  }

  return res.data;
};

export const register = (data) => async (dispatch) => {
  dispatch({ type: NOTIFY, payload: { loading: true } });
  const res = await postDataAPI("user/create", data);

  if (res.data.access_token) {
    dispatch({
      type: AUTH,
      payload: {
        data: res.data,
      },
    });

    const userResponse = await getDataAPI("user/me", res.data?.access_token);

    if (userResponse.data?.user) {
      dispatch(setConnectedUser(userResponse.data?.user));
    }

    localStorage.setItem("firstLogin", res.data?.access_token);

    dispatch({
      type: NOTIFY,
      payload: {
        success: "register success",
      },
    });
  } else {
    dispatch({
      type: NOTIFY,
      payload: {
        error: res.data,
      },
    });
  }

  return res.data;
};

export const logout = (token) => async (dispatch) => {
  try {
    localStorage.removeItem("firstLogin");

    const res = await getDataAPI(
      "https://babaata.eviltech.org/api/user/logout",
      token
    );

    dispatch({
      type: AUTH,
      payload: {},
    });
  } catch (err) {}
};
