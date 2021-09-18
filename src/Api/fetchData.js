import React from "react";
import axios from "axios";
const baseApiUrl = process.env.REACT_APP_API;

export const getData = async (url, token = "") => {
  const res = await axios.get(`${baseApiUrl}/api/${url}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-auth-token": token,
    },
  });
  return await res.data;
};

export const postData = async (url, post, token = "") => {
  const res = await axios.post(
    `${baseApiUrl}/api/${url}`,
    JSON.stringify(post),
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return await res.data;
};
