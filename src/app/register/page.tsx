"use client";
import Image from "next/image";
import Link from "next/link";

export default function CEET() {
  const role = localStorage.getItem("role");
  console.log(role);

  return (
    <div className="parentContainer">
        <button onClick={()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            window.location.href = "/"
        }} className="">Logout</button>
      <div className="flex">
        <div>
          <h1 className="text-[30px] ml-[63px] pt-4 text-center">
            Register Now
          </h1>
          <div className="flex ml-[120px] mt-12 gap-12">
            {/* Student Container */}
            {role === "Student" ? (
              <div className="con5 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172] mt-50 mr-50">
                <h2 className="text-center text-[30px]">ALUMNI</h2>
                <br />
                <div className="w-[220px] h-[50px] text-white bg-[#212172] rounded-[15px] p-[10px] pl-[33px] transition duration-500 border-[3px] border-white ml-[20px] mt-[35px]">
                  <Link href="/register/add-alumni">ADD INFORMATION</Link>
                </div>
                <div className="w-[220px] h-[50px] text-white bg-[#212172] rounded-[15px] p-[10px] pl-[33px] transition duration-500 border-[3px] border-white ml-[20px] mt-[25px]">
                  <Link href="/register/view-alumni">VIEW INFORMATION</Link>
                </div>
              </div>
            ) : (
              <div className="con4 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172] mt-50 mr-50">
                <h2 className="text-center text-[30px]">STUDENT</h2>
                <br />
                <div className="w-[220px] h-[50px] text-white bg-[#212172] rounded-[15px] p-[10px] pl-[33px] transition duration-500 border-[3px] border-white ml-[20px] mt-[35px]">
                  <Link href="/register/add-student">ADD INFORMATION</Link>
                </div>
                <div className="w-[220px] h-[50px] text-white bg-[#212172] rounded-[15px] p-[10px] pl-[33px] transition duration-500 border-[3px] border-white ml-[20px] mt-[25px]">
                  <Link href="/register/view-student">VIEW INFORMATION</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <Image
          className="justify-end ml-[153px] scale-up-center"
          src="/cse1.jpg"
          alt="img"
          width={428}
          height={220}
        />
      </div>
    </div>
  );
}
