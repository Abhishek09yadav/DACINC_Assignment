"use client";
import axiosClient from "@/api/axiosClient";
import { handleLogin } from "@/api/common";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSendFill } from "react-icons/bs";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleLogin(formData);
      if (data?.data?.token) {
        localStorage.setItem("DACINC_AUTH_TOKEN", data?.data?.token);
      }
      console.log("login success", data);

      toast.success("welcome back");
      router.push("/dashboard");
    } catch (error) {
      console.log("error during login", error);
      toast.error(error?.response?.data?.error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center my-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
        <p className="text-gray-500 mt-2">Sign in to your account</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 shadow-md p-10 rounded-md shadow-blue-200 "
      >
        <div className="flex flex-col max-w-5xl gap-1 my-3">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            name="email"
            required
            onChange={handleChange}
            type="email"
            value={formData.email}
            placeholder="type email..."
            className=" border p-3 rounded-md border-customColor outline-none caret-customColor focus:ring-2 focus:ring-customColorDark"
          />
        </div>
        <div className="flex flex-col max-w-5xl gap-1 my-3">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            name="password"
            required
            onChange={handleChange}
            type="password"
            value={formData.password}
            placeholder="type password..."
            className=" border p-3 rounded-md border-customColor outline-none caret-customColor focus:ring-2 focus:ring-customColorDark"
          />
        </div>
        <button
          className="relative p-3 w-48 h-12 group shadow-md rounded-md text-black text-center cursor-pointer mt-6 "
          type="submit"
        >
          <span className="absolute inset-0 rounded-sm flex items-center justify-center  text-white bg-customColor transform transition-all duration-300 ease-in-out w-[30px] group-hover:w-full h-full ">
            <BsSendFill className="group-hover:translate-x-16 group-hover:animate-bounce " />
          </span>
          <span className="relative group-hover:text-white z-10">Login</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
