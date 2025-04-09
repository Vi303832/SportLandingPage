import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosTennisball } from "react-icons/io";
import { FaRunning } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import model from "../model.png"

const Content = () => {
    return (
        <div className="relative pt-28">
            {/* Main Text */}
            <div className="max-w-[95%] mx-auto">
                <h1 className="text-white text-[clamp(2rem,9vw,9rem)] flex items-center justify-center font-bold leading-none z-10 relative tracking-tighter whitespace-nowrap">
                    LEVEL UP YOUR HEALTH
                </h1>

                <hr className="w-full h-1 bg-white mt-2" />

                {/* Model Image */}
                <div className="relative h-full w-full">
                    <div className="absolute top-20 w-md max-md:top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-20">
                        <img
                            src={model}
                            alt="Tennis Player"
                            className="h-[600px] relative right-10 max-md:h-[400px] object-cover"
                        />
                    </div>
                </div>

                {/* Additional Content */}
                <div className="mt-32 relative z-30 flex flex-col items-start gap-4">
                    <FaRunning className="text-3xl text-green-400" />
                    <div className="text-white text-2xl font-semibold">Join The<br />Movement</div>
                    <a href="#join" className="text-white text-sm flex items-center gap-1 hover:underline">
                        OUR COMMUNITY <GoArrowUpRight className="text-lg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Content
