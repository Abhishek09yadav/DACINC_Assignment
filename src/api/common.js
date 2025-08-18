// Auth

import axios from "axios";
import axiosClient from "./axiosClient";

export const handleLogin = async (formData) => {
  try {
    const res = await axiosClient.post("/login", formData, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchTodos = async () => {
  try {
    const tododata = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return tododata.data;
  } catch (err) {
    throw err;
  }
};
