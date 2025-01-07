"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../BASE_URL/BASE_URL";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const email = JSON.parse(localStorage.getItem("email"));
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP code.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/user/verifyOtp`, {
        email: email,
        otp,
      });
      const token = res.data.token;
      // console.log(res.data.role);
      localStorage.setItem("role", JSON.stringify(res.data.role));
      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
        toast.success("OTP verified successfully!");
        setTimeout(() => {
          window.location.href = "/register";
        }, 2000);
      }
    } catch (error) {
      toast.error("There was an error verifying the OTP.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          OTP Verification
        </h2>
        <form onSubmit={handleVerifyOtp}>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              Enter 6-digit OTP code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              maxLength="6"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
