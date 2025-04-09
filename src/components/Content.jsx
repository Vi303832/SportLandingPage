import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosTennisball } from "react-icons/io";
import { FaRunning } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";
import model from "../model.png"
import rope from "../rope.png"

const Content = () => {
    return (
        <div className="relative pt-28 min-h-screen">
            {/* Main Text */}
            <div className="max-w-[95%] mx-auto">
                <h1 className="text-white text-[clamp(2rem,9vw,9rem)] flex items-center justify-center font-bold leading-none z-10 relative tracking-tighter whitespace-nowrap">
                    LEVEL UP YOUR HEALTH
                </h1>

                <hr className="w-full h-1 bg-white mt-2 opacity-10" />

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
                <div className="my-32 relative z-30 flex flex-col items-start gap-4">
                    <FaRunning className="text-3xl text-green-400" />
                    <div className="text-white text-2xl font-semibold">Join The<br />Movement</div>
                    <a href="#join" className="text-white text-sm flex items-center gap-1 hover:underline">
                        OUR COMMUNITY <GoArrowUpRight className="text-lg" />
                    </a>

                </div>
                <div className='h-70 w-full bg-amber-800'>
                    <div className='absolute bottom-0 flex  items-end z-20    left-0'>

                        <div className="  w-[700px] max-md:w-[500px] h-[300px] flex items-center justify-between bg-[#3B82F6] overflow-hidden px-10 relative ">
                            <div className="">
                                <h2 className="text-white text-4xl font-bold mb-4">OTHER WINNER GEAR<br />BY VERSUS</h2>
                                <div className="flex gap-4">
                                    <span className="text-white text-sm bg-black/30 px-4 py-2 rounded-full">#TENNISRACKET</span>
                                    <span className="text-white text-sm bg-black/30 px-4 py-2 rounded-full">#RUBBERGLOVES</span>
                                </div>
                            </div>
                            <img
                                src={rope}
                                alt="Tennis Equipment"
                                className="w-50 object-contain opacity-90"
                            />
                            <div className="absolute top-4 right-4">
                                <GoArrowUpRight className="text-white text-2xl" />
                            </div>
                        </div>
                        {/*ss*/}
                        <div className="w-[500px] h-[200px] bg-white flex items-center p-10 ">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-bold">Why us?</h2>
                                <p className="text-gray-600 text-sm">Versus sports products will help you improve your training and success on the court.</p>
                            </div>
                            <div className="relative h-full ">

                                <FaCirclePlay className="text-red-500 text-5xl absolute -top-5 -right-5" />
                            </div>

                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default Content
