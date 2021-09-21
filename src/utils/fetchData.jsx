import axios from "axios";

export const getDataAPI = async (url, token) => {
  return await axios.get(`${url}`, {
    headers: {
      Accept: "application/json",
      Authorisation: `Bearer ${token}`,
    },
  });
};

export const postDataAPI = async (url, post) => {
  return await axios.post(`${url}`, post, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const patchDataAPI = async (url, post, token) => {
  return await axios.patch(`${url}`, post, {
    headers: { Authorization: token },
  });
};

export const putDataAPI = async (url, id, post) => {
  return await axios.put(`${url}/${id}`, post);
};

export const deleteDataAPI = async (url, id) => {
  return await axios.delete(`${url}/${id}`);
};
