import Image from "next/image";

export default function Footer(){
    return(
        <div className="bg-[rgb(33,33,114)] pt-12 pb-6 px-10 font-[sans-serif] tracking-wide">
            <div className="max-w-screen-xl ml-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {/* Column 1 */}
                    <div className="pt-14">
                        <Image 
                            className="logo"
                            src="/dawood.png"
                            alt="img"
                            width={112}
                            height={101} 
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="text-sm text-white w-[400px] text-justify -ml-40 pt-14">
                        The foundation stone of the Dawood College was laid by the former President of Pakistan (Late) Field Marshal Muhammad Ayub Khan in 1962. The Government of Sindh through an Act of the Provincial Assembly elevated the College to the status of University in 2013.
                    </div>

                    {/* Column 3 */}
                    <div className="pl-20">
                        <h4 className="text-xl mb-6 text-[rgb(211,86,28)] font-bold">Quick links</h4>
                        <ul className="space-y-4 pl-2">
                        <li>
                            <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Admissions</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Undergraduate Program</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Postgraduate Program</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Student Portal</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">FAQ</a>
                        </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-xl mb-6 text-[rgb(211,86,28)] font-bold">Campuses</h4>
                        <ul className="space-y-4 pl-2">
                        <li>
                            <a href="javascript:void(0)" className="text-[rgb(211,86,28)] hover:text-white text-md"><b>Jinnah Campus</b></a>
                            <p className="text-white text-sm">Dawood University of Engineering & Technology, New M. A. Jinnah Road, Karachi, Sindh, Pakistan (74800).</p>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="text-[rgb(211,86,28)] hover:text-white text-md"><b>Iqbal Campus</b></a>
                            <p className="text-white text-sm">Dawood University of Engineering & Technology, Block 17 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan, (75300).</p>
                        </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t text-center border-white pt-6 mt-14 -ml-20 -mr-10">
                    <p className="text-gray-300 text-[15px]">Copyright &copy; 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}