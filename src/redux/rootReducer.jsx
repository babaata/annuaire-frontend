import { combineReducers } from "redux";
import auth from "./reducers/authReducer";
import profil from "./reducers/profileReducer";
import notify from "./reducers/notifyReducer";
import error from "./reducers/errorReducer";
import experiences from "./reducers/experienceReducer";
import userInformations from "./reducers/userReducer";

export default combineReducers({
  auth,
  profil,
  experiences,
  userInformations,
  notify,
  error,
});
