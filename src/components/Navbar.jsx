import React from 'react'
import { BiLogoVenmo } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-[#272639] py-4 absolute top-0 left-0 right-0 z-50">
            <div className="max-w-[95%] mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center text-white text-xl lg:text-2xl px-2 font-bold">
                    <BiLogoVenmo className='text-3xl lg:text-4xl' />
                    ersus
                </div>

                <div className="hidden md:flex space-x-4 lg:space-x-8">
                    <a href="#about" className="text-white text-sm lg:text-base hover:text-gray-300">ABOUT</a>
                    <a href="#how-to-use" className="text-white text-sm lg:text-base hover:text-gray-300">HOW TO USE</a>
                    <a href="#features" className="text-white text-sm lg:text-base hover:text-gray-300">FEATURES</a>
                </div>

                <button className="bg-[#E94F37] text-white px-4 lg:px-10 py-2 lg:py-5 text-sm lg:text-base flex items-center gap-2 hover:bg-[#d64632]">
                    <FaCircle className="hidden lg:block" />
                    ORDER NOW
                </button>
            </div>
        </nav>
    )
}

export default Navbar 