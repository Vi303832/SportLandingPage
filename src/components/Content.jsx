import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosTennisball } from "react-icons/io";
import model from "../model.png"

const Content = () => {
    return (
        <div className="relative        pt-10">
            {/* Main Text */}
            <h1 className="text-white text-[clamp(50px,10vw,150px)] flex items-center justify-center font-bold leading-none z-10 relative tracking-tight whitespace-nowrap px-4">
                REFINE YOUR SWING
            </h1>

            <hr className="w-[95%] relative h-1 mx-auto bg-white" />
            {/* Model Image */}
            <div className="relative h-full w-full  ">
                <div className="absolute top-20  w-md max-md:top-15  left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-20">
                    <img
                        src={model}
                        alt="Tennis Player"
                        className="h-[600px] relative right-10 max-md:h-[400px]    object-cover"
                    />
                </div>
            </div>


            {/* Additional Content can be added below */}
            <div className="mt-32 relative z-30">
                {/* Future content will go here */}
            </div>
        </div>
    )
}

export default Content
