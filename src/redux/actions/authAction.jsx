import axios from 'axios'
import { postDataAPI } from '../../utils/fetchData'

export const AUTH = "AUTH"
export const NOTIFY = "NOTIFY"
export const ERROR = "ERROR"


export const login = (data) =>  async(dispatch)=>{

    dispatch({type: NOTIFY, payload: {loading: true}})
    
    const res = await postDataAPI("https://babaata.eviltech.org/api/user/login", data)

    console.log(res.data.status);
     
    if(res.data.status){
      dispatch({
        type: AUTH, 
        payload: {
          data: res.data
        }
      })
  
      localStorage.setItem('firstLogin', res.data.access_token)
  
      dispatch({
        type: NOTIFY,
        payload: {
          success: "login success"
        }
      })
    }else{
      dispatch({
        type: ERROR,
        payload: {
          error: res.data.message
        }
      })
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

    if(res.data.status){

      dispatch({
        type: AUTH, 
        payload: res.data
      })

      localStorage.setItem('firstLogin', res.data.api_token)


      dispatch({
        type: NOTIFY,
        payload: {
          success: "register sucess"
        }
      })
    }else{
      dispatch({
        type: AUTH, 
        payload: res.data
      })
    }
  
  } catch (err) {
 
    }
}

export const logout = () => async(dispatch) =>{
  try {

    localStorage.removeItem('firstLogin')

    dispatch({
      type: AUTH, 
      payload: {}
    })
  } catch (err) {

  }
}


