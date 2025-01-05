import Link from "next/link"
import Image from "next/image";

export default function Header() {
    return (
        <header className="list-none flex text-white h-[70px] bg-[rgb(33,33,114)]">
            {/* Logo Section */}
            <div className="flex text-center justify-center space-x-5 pt-5 pb-5 pl-12">
                <Image 
                    className="h-[51px] -mt-2.5"
                    src="/logo1.png"
                    alt="Site Logo"
                    width={70}
                    height={51} 
                />
            </div>
            {/* Navigation Section */}
            <nav className="flex gap-[30px] text-[15px] tracking-[2px] ml-[50px] pt-[24px]">
                <h3>DAWOOD UNIVERSITY OF ENGINEERING AND TECHNOLOGY</h3>
                <ul className="flex justify-end mr-16 ml-[250px] gap-[20px] text-right">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/register">REGISTER</Link></li>
                    <li><Link href="/signup">SIGN UP</Link></li>
                </ul>
            </nav>
        </header>
    );
}
