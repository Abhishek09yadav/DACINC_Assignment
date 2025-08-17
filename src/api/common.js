// Auth

import axiosClient from "./axiosClient";

export const handleLogin = (formData) =>
  axiosClient
    .post("/login", formData, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
    .then((data) => {
      return data;
      // console.log(data);
    })
    .catch((err) => {
      // toast.error(err?.response?.data?.error);
      // console.log(err);
      throw err;
    });
