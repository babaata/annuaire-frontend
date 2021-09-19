import axios from 'axios'

export const getDataAPI = async(url, token) =>{

  const res = await axios.get( `${url}`,{
    headers: {
      Accept: "application/json",
      Authorisation: `Bearer ${token}`
    }
})
  return res; 
}


export const postDataAPI = async(url, post) =>{
  
  const res = await axios.post( `${url}`,post, {
      headers: {
        Accept: "application/json",
      }
  })
  return res;
}


export const patchDataAPI = async(url,post, token) =>{
  const res = await axios.patch( `${url}`, post,{
    headers: {Authorization: token}
  })
  return res;
}

export const putDataAPI = async(url, id, post) =>{
  const res = await axios.put( `${url}/${id}`,post)
  return res;
}

export const deleteDataAPI = async(url, id) =>{
  const res = await axios.delete( `${url}/${id}`)
  return res;
}

