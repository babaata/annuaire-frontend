import { combineReducers } from "redux";
import auth from "./reducers/authReducer";
import profil from "./reducers/profileReducer";
import notify from "./reducers/notifyReducer";
import error from "./reducers/errorReducer";
import experiences from "./reducers/experienceReducer";

export default combineReducers({
  auth,
  profil,
  experiences,
  notify,
  error,
});
