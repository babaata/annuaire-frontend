import { getDataAPI, postDataAPI } from "../../utils/fetchData";

export const AUTH = "AUTH"
export const NOTIFY = "NOTIFY"
export const ERROR = "ERROR"
export const LOADING = "LOADING"


export const login = (data) =>  async(dispatch)=>{

    dispatch({type: NOTIFY, payload: {loading: true}})

    dispatch({type: LOADING})
    
    const res = await postDataAPI("https://babaata.eviltech.org/api/user/login", data)
     
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
        type: NOTIFY,
        payload: {
          error: res.data.message
      }
    })
    }
}

export const register = (data) => async (dispatch) => {

  dispatch({type: NOTIFY, payload: {loading: true}})
    const res = await postDataAPI("https://babaata.eviltech.org/api/user/create",data);

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
          success: "register success"
        }
      })
    }else{
      dispatch({
        type: NOTIFY,
        payload: {
          message: res.data.message,
          email: res.data.errors.email[0],
          password: res.data.errors.password[0],
          username: res.data.errors.username[0],
        }
      })
    }

};

export const logout = (token) => async (dispatch) => {
  try {

    localStorage.removeItem('firstLogin')
     
    const res = await getDataAPI('https://babaata.eviltech.org/api/user/logout', token)

    dispatch({
      type: AUTH,
      payload: {},
    });
  } catch (err) {}
};
