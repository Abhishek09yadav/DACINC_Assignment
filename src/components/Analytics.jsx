"use client";
import { fetchTodos } from "@/api/common";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
  const completedTodos = todos.filter((t) => t.completed).length;
  const pendingTodos = todos.filter((t) => !t.completed).length;
  const pieChartData = [
    { name: "completed", value: completedTodos },
    { name: "pending", value: pendingTodos },
  ];

  const COLORS = ["#10B981", "#EF4444"];

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col  items-center">
      <h1 className="text-3xl font-extrabold text-center text-green-500 pt-24">
        Analytics Dashboard
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 my-24 ">
        {/* chart 1 */}
        <div className=" rounded-lg shadow-lg p-6">
          <h2 className="text-xl text-green-700 font-semibold  mb-6 text-center">
            Task Status: Completed vs Pending
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                  fill="#8884d8"
                >
                  {pieChartData.map((value, index) => (
                    <Cell
                      key={`${index}`}
                      fill={COLORS[index % COLORS.length]}
                    ></Cell>
                  ))}
                </Pie>
                <Tooltip />
                <Legend/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* chart 2 */}
        <div className=" rounded-lg shadow-lg p-6">
          <h2 className="text-xl text-green-700 font-semibold mb-6 text-center">
            Number of Todos per User
          </h2>
          <div className="min-h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
