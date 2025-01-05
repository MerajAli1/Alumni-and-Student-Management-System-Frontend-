export default function Student(){
    return(
    <div className="bg-[rgb(197,204,223)] w-auto">
        <div className="py-16">

            {/* Student Information Form */}
            <div className="ml-[460px] text-black border-4 border-[rgb(33,33,114)] rounded-[8px] shadow-lg p-[20px] w-[480px]">
            <h1 className="text-3xl text-center pb-2">Add Student Information</h1><br />

            {/* form fields */}
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
                    <legend>Department</legend>
                        <select name="department" id="depart" className="border-[3px] border-[#212172] rounded-[4px] bg-[#cbd7fa] py-1 pl-3 w-full text-gray-700">
                            <option value="" disabled selected>Choose your Department</option>
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