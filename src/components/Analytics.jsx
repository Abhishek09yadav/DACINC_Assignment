"use client";
import { fetchTodos } from "@/api/common";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Analytics = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      setLoading(true);
      const todoData = await fetchTodos();
      setTodos(todoData);
      console.log("todo data", todoData);
    } catch (err) {
      toast.error("something went wromg");
      console.log("err in fetching todos", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex justify-center items-center">
      <h1 className="text-3xl font-extrabold text-center text-green-500 ">
        Analytics Dashboard
      </h1>
      <div className="flex flex-row flex-wrap">
        {/* chart 1 */}
        <div className=""></div>
        {/* chart 2 */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Analytics;
