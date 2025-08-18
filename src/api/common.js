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

export const todoList = async () => {
  try {
    const todoData = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?spm=a2ty_o01.29997173.0.0.737bc921azUwQJ"
    );
    return todoData.data
  } catch (err) {
    throw err;
  }
};
