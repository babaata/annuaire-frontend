import axios from 'axios'
import { postDataAPI } from '../../utils/fetchData'

export const AUTH = "AUTH"
export const NOTIFY = "NOTIFY"


export const login = (data) =>  async(dispatch)=>{
  try {


    // dispatch({type: NOTIFY, payload: {loading: true}})
    const res = await postDataAPI("https://babaata.eviltech.org/api/user/login", data)
     
    dispatch({
      type: AUTH, 
      payload: {
        data: res.data
      }
    })

    localStorage.setItem('firstLogin', true)

    dispatch({
      type: NOTIFY,
      payload: {
        success: "login sucess"
      }
    })

  
  } catch (err) {
     
    }
}

export const refreshToken = (auth) => async(dispatch)=>{

    try {
    
      dispatch({
        type: AUTH, 
        
      })
  
    } catch (err) {
    
    }
  
}

export const register = (data) => async(dispatch) =>{

  
  try {  
    const res = await postDataAPI("https://babaata.eviltech.org/api/user/create", data)

      dispatch({
        type: AUTH, 
        payload: res.data
      })

      localStorage.setItem('firstLogin', true)

      dispatch({
        type: NOTIFY,
        payload: {
          success: "register sucess"
        }
      })
  
  } catch (err) {
 
    }
}

export const logout = () => async(dispatch) =>{
  try {

    dispatch({
      type: AUTH, 
      payload: {}
    })
  } catch (err) {

  }
}


