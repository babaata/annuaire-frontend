import {combineReducers} from 'redux'
import auth from './reducers/authReducer'
import profil from './reducers/profileReducer'


export default combineReducers({
  auth,
  profil
})