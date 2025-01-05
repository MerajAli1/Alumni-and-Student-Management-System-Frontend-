"use client"
import Link from "next/link";

export default function Dashboard() {

  return (
    <div className="parentContainer">
      <button onClick={()=>{
        localStorage.removeItem("token");
        window.location.href = "/login";
      }} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
      <div className="flex gap-40 text-center ml-[300px] pt-[140px]">
        <div className="con6 tracking-in-expand-fwd-top w-[300px] h-[300px] text-[#352F44] text-2xl bg-[#CBD7FA] rounded-[20px] p-[15px] pt-[120px] border-[3px] border-[#212172] mt-50 mr-50">
          <Link href="/dashboard/student-data">Student Data</Link>
        </div>
        <div className="con6 tracking-in-expand-fwd-top w-[300px] h-[300px] text-[#352F44] text-2xl bg-[#CBD7FA] rounded-[20px] p-[15px] pt-[120px] border-[3px] border-[#212172] mt-50 mr-50">
          <Link href="/dashboard/alumni-data">Alumni Data</Link>
        </div>
      </div>
    </div>
  );
}
