import axios from "axios"
import { deleteDataAPI, getDataAPI, getDataAPIPro, postDataAPI, putDataAPI } from "../../utils/fetchData"

export const CREATE_PROFIL = 'CREATE_PROFIL'
export const READ_PROFIL = 'READ_PROFIL'
export const INFO_PROFIL = 'INFO_PROFIL'
export const UPDATE_PROFIL = 'UPDATE_PROFIL'
export const DELETE_PROFIL = 'DELETE_PROFIL'
export const ERROR_PROFIL = 'ERROR_PROFIL'
export const LOADING_PROFIL = 'LOADING_PROFIL'

export const createProfil = (data) =>{
  return async(dispatch) =>{
    try {
      
    dispatch({type: "NOTIFY", payload: {loading: true}})
    // const res = await postDataAPI('product', {...data})
    // console.log(res);    
    
    
    //   dispatch({
    //     type: "NOTIFY",
    //     payload: {
    //       success: res.data
    //     }
    //   })
  
      dispatch({
        type: CREATE_PROFIL,
        payload: {...data}
      })

      dispatch({type: "NOTIFY", payload: {}})
    
    } catch (err) {
      dispatch({
        type: "NOTIFY",
        payload: {
          error: err.response.data
      }
    })
    }
    
  }
}

export const readProfil = () =>{
  return async(dispatch)=>{
    dispatch({type: "NOTIFY", payload: {loading: true}})
    const res = await getDataAPI('product')
  
    dispatch({
      type: READ_PROFIL,
      payload: {items: res.data.items},
     
    })

    dispatch({type: "NOTIFY", payload: {}})
  }
} 

export const infoProfil = () =>{
  return async(dispatch)=>{
    const res = await axios.get(`https://cmder.deta.dev/product`) 
    
    dispatch({
      type: INFO_PROFIL,
      payload: {total: res.data.total}
     
    })
  }
}

export const updateProfil = (data, id) =>{
  return async(dispatch)=>{
    console.log(data,id);
    dispatch({type: "NOTIFY", payload: {loading: true}})
      await putDataAPI('product', data, id)
    dispatch({
      type: UPDATE_PROFIL,
      payload: {data, id}
    })
    dispatch({type: "NOTIFY", payload: {}})
  }
}

export const deleteProduct = (id) =>{
  return async(dispatch)=>{
    const res = await deleteDataAPI('product', id)
    console.log(res);
    dispatch({
      type: DELETE_PROFIL,
      payload: id
    })
  }
}