"use client";
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "../BASE_URL/BASE_URL";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (!email || !password || !department) {
      toast.error("Please fill in all fields!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/user/adminSignup`, {
        email: email,
        password: password,
        department: department,
      });
      console.log(res.data.status);
      

      if (res.data.status === "Failed") {
        toast.error("Duplicate email or Department already exists!");
      } else {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("Sign up successful!");
        setEmail("");
        setPassword("");
        setDepartment("");
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 3000);
      }
    } catch (error) {
      toast.error("There was an error signing up!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="parentContainer font-[sans-serif]">
      <div className="items-center mb-20 ml-[420px]">
        <div className="mb-12">
          <h3 className="text-black text-3xl">Create an account</h3>
          <p className=" text-black text-sm mt-6">Enter your details below </p>
        </div>

        <form className="max-w-sm w-85 p-10 mx-20" onSubmit={handleSignUp}>
          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="text"
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Email or Phone Number"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6">
            <select
              onChange={(e) => setDepartment(e.target.value)}
              name="department"
              id="depart"
              className="text-gray-700 rounded-[4px] px-2 py-3 w-full"
            >
              <option value="" disabled selected>
                Choose your Department
              </option>
              <option value="CSE">Computer System Engineering</option>
              <option value="ESE">Electronic Engineering</option>
              <option value="TE">Telecommunication Engineering</option>
              <option value="PG">Petroleum & Gas Engineering</option>
              <option value="IEM">Industrial Engineering & Management</option>
              <option value="MME">Metallurgy & Materials Engineering</option>
              <option value="EE">Energy & Environment Engineering</option>
              <option value="CH">Chemical Engineering</option>
              <option value="AR">Architecture & Planning</option>
              <option value="CHM">Chemistry</option>
              <option value="MTH">Mathematics</option>
              <option value="CS">Computer Science</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="CY">Cyber Security</option>
              <option value="DS">Data Science</option>
            </select>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-[rgb(33,33,114)] hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
        <ToastContainer />
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have account?{" "}
          <Link href="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
