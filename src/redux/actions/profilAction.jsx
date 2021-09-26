import axios from "axios"
import { deleteDataAPI, getDataAPI, getDataAPIPro, postDataAPI, putDataAPI } from "../../utils/fetchData"

export const CREATE_PROFIL = 'CREATE_PROFIL'
export const READ_PROFIL = 'READ_PROFIL'
export const INFO_PROFIL = 'INFO_PROFIL'
export const UPDATE_PROFIL = 'UPDATE_PROFIL'
export const DELETE_PROFIL = 'DELETE_PROFIL'
export const ERROR_PROFIL = 'ERROR_PROFIL'
export const LOADING_PROFIL = 'LOADING_PROFIL'



export const readProfil = (token) =>{
  return async(dispatch)=>{
    dispatch({type: "NOTIFY", payload: {loading: true}})
    const res = await getDataAPI('user/me', token)
  
    dispatch({
      type: READ_PROFIL,
      payload: {profil: res.data},
     
    })

    dispatch({type: "NOTIFY", payload: {}})
  }
} 

export const infoProfil = () =>{
  return async(dispatch)=>{
    const res = await axios.get(``) 
    
    dispatch({
      type: INFO_PROFIL,
      payload: {total: res.data.total}
     
    })
  }
}

export const updateProfil = (data, id) =>{
  return async(dispatch)=>{

    dispatch({type: "NOTIFY", payload: {loading: true}})
      await postDataAPI('user/update', data, id)
    dispatch({
      type: UPDATE_PROFIL,
      payload: {data: data.user, id}
    })
    dispatch({type: "NOTIFY", payload: {}})
  }
}

export const deleteProduct = (id) =>{
  return async(dispatch)=>{
    const res = await deleteDataAPI('', id)
    console.log(res);
    dispatch({
      type: DELETE_PROFIL,
      payload: id
    })
  }
}