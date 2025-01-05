"use client";

import axios from "axios";
import { useState } from "react";
// import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../BASE_URL/BASE_URL";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const handleLogIn = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/user/adminLogin`, {
        email: email,
        password: password,
      });

      if (res.data.status === "Failed") {
        toast.error(res.data.msg);
      } else {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("Login successful!");
        // router.push("/dashboard");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 4000);
      }
    } catch (error) {
      toast.error("There was an error logging in!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="parentContainer items-center pb-20 gap-20">
        <form className="max-w-sm w-85 p-10 rounded-lg ml-[500px] pt-20" onSubmit={handleLogIn}>
          <div className="mb-12">
            <h3 className="text-black text-3xl">Log in to Exclusive</h3>
            <p className="text-black text-sm mt-6">Enter your details below</p>
          </div>
          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mt-12">
            <div>
              <button type="submit" className="w-full py-2.5 px-6 text-sm tracking-wide rounded-sm text-white bg-[rgb(33,33,114)] hover:bg-blue-700 focus:outline-none" disabled={loading}>
                {loading ? "Logging In..." : "Log In"}
              </button>
            </div>
            <button className="mt-2 ml-20 text-[rgb(33,33,114)] hover:text-blue-700 outline-none">Forgot Password?</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
