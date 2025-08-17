"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowsSpin } from "react-icons/fa6";

const Dashboard = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("DACINC_AUTH_TOKEN");
    if (storedToken) {
      setToken(storedToken);
    } else {
      router.push("/login");
    }
  }, [router]);
  const handleLogout = () => {
    localStorage.removeItem("DACINC_AUTH_TOKEN");
    router.push("/login");
  };
  if (!token) {
    return (
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <div className=" flex items-center justify-center text-5xl text-blue-500 text-center font-extrabold">
          <FaArrowsSpin className="animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-amber-50 items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold text-customColor mb-4">
        Welcome back User 👋
      </h1>
      <button
        onClick={handleLogout}
        className="bg-customColor hover:bg-customColorDark hover:scale-110 hover:transition-all hover:duration-500 text-white px-6 py-4 rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
