import {combineReducers} from 'redux'
import auth from './reducers/authReducer'
import profil from './reducers/profileReducer'
import notify from './reducers/notifyReducer'
import error from './reducers/errorReducer'


export default combineReducers({
  auth,
  profil,
  notify,
  error
})