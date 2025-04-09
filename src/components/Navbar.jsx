import React from 'react'
import { BiLogoVenmo } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="bg-[#272639] py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center text-white text-2xl  px-2 font-bold">
                    <BiLogoVenmo className='text-4xl' />
                    ersus
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-white hover:text-gray-300">ABOUT</a>
                    <a href="#how-to-use" className="text-white hover:text-gray-300">HOW TO USE</a>
                    <a href="#features" className="text-white hover:text-gray-300">FEATURES</a>
                </div>

                <button className="bg-[#E94F37] text-white px-10 py-5  flex items-center gap-2 hover:bg-[#d64632]">
                    <FaCircle />
                    ORDER NOW
                </button>
            </div>
        </nav>
    )
}

export default Navbar 