"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="bg-amber-50 min-h-screen">
    <h1 className="font-semibold text-4xl text-center text-emerald-500 undeline pt-9 underline">DACNC Assignment</h1>
      <div className="flex justify-center items-center gap-2 m-4 p-5">
        <button
          className="btn btn-primary py-4 px-6"
          onClick={() => router.push("/login")}
        >
          Login Page
        </button>
        <button
          className="btn btn-primary py-4 px-6"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Page;
