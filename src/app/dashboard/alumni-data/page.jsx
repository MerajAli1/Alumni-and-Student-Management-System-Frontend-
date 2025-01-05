"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "http://localhost:5000";

export default function AlumniData() {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchAlumni = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found, please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${BASE_URL}/api/user/adminHomePage`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setAlumni(res.data.alumni);
        toast.success("Data fetched successfully!");
      } catch (error) {
        toast.error("There was an error fetching the data!");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found, please log in.");
      return;
    }

    try {
      await axios.put(
        `${BASE_URL}/api/user/updateAlumni/${selectedAlumni._id}`,
        selectedAlumni,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      toast.success("Alumni updated successfully!");
      setIsUpdateModalOpen(false);
      setAlumni((prev) =>
        prev.map((alumni) =>
          alumni._id === selectedAlumni._id ? selectedAlumni : alumni
        )
      );
    } catch (error) {
      toast.error("There was an error updating the alumni!");
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found, please log in.");
      return;
    }

    try {
      await axios.delete(
        `${BASE_URL}/api/user/deleteAlumni/${selectedAlumni._id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      toast.success("Alumni deleted successfully!");
      setIsDeleteModalOpen(false);
      setAlumni((prev) =>
        prev.filter((alumni) => alumni._id !== selectedAlumni._id)
      );
    } catch (error) {
      toast.error("There was an error deleting the alumni!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
      <ToastContainer />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h1 className="text-3xl text-center py-4 bg-blue-600 text-white">
            Alumni Data
          </h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  S.No
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Full Name
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Father Name
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  CNIC
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Date of Birth
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Roll No
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Address
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Phone Number
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Department
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Picture
                </th>
                <th className="py-3 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {alumni?.map((alumni, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4 text-sm text-gray-700">{i + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.fullname}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.fathername}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.cnic}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.dateOfBirth}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.rollno}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.address}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.phoneNumber}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {alumni.department}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <img
                      className="rounded-full h-16 w-16 object-cover"
                      src={alumni?.image}
                      alt="not found"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => {
                        setSelectedAlumni(alumni);
                        setIsUpdateModalOpen(true);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setSelectedAlumni(alumni);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isUpdateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4">Update Alumni</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={selectedAlumni.fullname}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    fullname: e.target.value,
                  })
                }
                placeholder="Full Name"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.fathername}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    fathername: e.target.value,
                  })
                }
                placeholder="Father Name"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.cnic}
                onChange={(e) =>
                  setSelectedAlumni({ ...selectedAlumni, cnic: e.target.value })
                }
                placeholder="CNIC"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.dateOfBirth}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    dateOfBirth: e.target.value,
                  })
                }
                placeholder="Date of Birth"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.rollno}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    rollno: e.target.value,
                  })
                }
                placeholder="Roll No"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.address}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    address: e.target.value,
                  })
                }
                placeholder="Address"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.phoneNumber}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="Phone Number"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.email}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedAlumni.department}
                onChange={(e) =>
                  setSelectedAlumni({
                    ...selectedAlumni,
                    department: e.target.value,
                  })
                }
                placeholder="Department"
                className="mb-4 p-2 border rounded w-full"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setIsUpdateModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this alumni?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
