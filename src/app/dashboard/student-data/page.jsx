"use client";

import { BASE_URL } from "@/app/BASE_URL/BASE_URL";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StudentData() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
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
        setStudents(res.data.students);
        toast.success("Data fetched successfully!");
      } catch (error) {
        toast.error("There was an error fetching the data!");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
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
        `${BASE_URL}/api/user/updateStudent/${selectedStudent._id}`,
        selectedStudent,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      toast.success("Student updated successfully!");
      setIsUpdateModalOpen(false);
      setStudents((prev) =>
        prev.map((student) =>
          student._id === selectedStudent._id ? selectedStudent : student
        )
      );
    } catch (error) {
      toast.error("There was an error updating the student!");
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
        `${BASE_URL}/api/user/deleteStudent/${selectedStudent._id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      toast.success("Student deleted successfully!");
      setIsDeleteModalOpen(false);
      setStudents((prev) =>
        prev.filter((student) => student._id !== selectedStudent._id)
      );
    } catch (error) {
      toast.error("There was an error deleting the student!");
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
            Student Data
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
              {students?.map((student, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4 text-sm text-gray-700">{i + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.fullname}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.fathername}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.cnic}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.dateOfBirth}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.rollno}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.address}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.phoneNumber}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.email}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {student.department}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <img
                      className="rounded-full h-16 w-16 object-cover"
                      src={student?.image}
                      alt="not found"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => {
                        setSelectedStudent(student);
                        setIsUpdateModalOpen(true);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setSelectedStudent(student);
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
            <h2 className="text-2xl mb-4">Update Student</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={selectedStudent.fullname}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    fullname: e.target.value,
                  })
                }
                placeholder="Full Name"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.fathername}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    fathername: e.target.value,
                  })
                }
                placeholder="Father Name"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.cnic}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    cnic: e.target.value,
                  })
                }
                placeholder="CNIC"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.dateOfBirth}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    dateOfBirth: e.target.value,
                  })
                }
                placeholder="Date of Birth"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.rollno}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    rollno: e.target.value,
                  })
                }
                placeholder="Roll No"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.address}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    address: e.target.value,
                  })
                }
                placeholder="Address"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.phoneNumber}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="Phone Number"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.email}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={selectedStudent.department}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
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
            <p>Are you sure you want to delete this student?</p>
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
