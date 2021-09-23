import axios from "axios";

export const getDataAPI = async (url, token) => {
  return await axios.get(`https://babaata.eviltech.org/api/${url}`, {
    headers: {
      Authorisation: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
};

export const postDataAPI = async (url, post) => {
  return await axios.post(`https://babaata.eviltech.org/api/${url}`, post, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const patchDataAPI = async (url, post, token) => {
  return await axios.patch(`https://babaata.eviltech.org/api/${url}`, post, {
    headers: { Authorization: token },
  });
};

export const putDataAPI = async (url, id, post) => {
  return await axios.put(`https://babaata.eviltech.org/api/${url}/${id}`, post);
};

export const deleteDataAPI = async (url, id) => {
  return await axios.delete(`https://babaata.eviltech.org/api${url}/${id}`);
};
