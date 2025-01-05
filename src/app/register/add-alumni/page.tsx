"use client"
import { useState } from "react";

const 

export default function Alumni(){
    return(
    <div className="bg-[rgb(197,204,223)] w-auto">
        <div className="py-16">

            {/* Alumni Information Form */}
            <div className="ml-[460px] text-black border-4 border-[rgb(33,33,114)] rounded-[8px] shadow-lg p-[20px] w-[480px]">
            <h1 className="text-3xl text-center pb-2">Add Alumni Information</h1><br />

            {/* form  fields*/}
            <form>
                <fieldset>
                    <legend>Full Name</legend>
                    <input type="text" placeholder="Enter your full name" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Father Name</legend>
                    <input type="text" placeholder="Enter your father name" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>CNIC</legend>
                    <input type="text" placeholder="Enter your cnic no" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Date of Birth</legend>
                    <input type="text" placeholder="Enter your date of birth" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Roll No</legend>
                    <input type="text" placeholder="Enter your roll no" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Address</legend>
                    <input type="tel" placeholder="Enter your address" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Phone Number</legend>
                    <input type="tel" placeholder="Enter your phone number" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <legend>Address</legend>
                    <input type="text" placeholder="Enter your address" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full" required/>
                    <br />
                    <br />
                    <button type="submit" className="my-4 py-1 px-4 rounded-[5px] text-[#cbd7fa] bg-[#212172] hover:text-black hover:border-2 hover:border-[#212172] hover:bg-[rgb(197,204,223)]">SUBMIT</button>
                </fieldset>
            </form>
            </div>
        </div>
    </div>
    )
}