import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="">
            <div className="grid relative">
                <div data-aos="zoom-out-left">
                    <img src="https://imageupload.io/ib/ZDThM2BPjBXbKxZ_1697582600.jpg" alt="" className="w-full object-fill md:h-[100vh] h-96" />
                </div>
                <div className="md:p-6 md:py-28 py-24 dark:text-gray-900 bg-black w-full h-full bg-opacity-60 absolute">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
                            <h2 className="text-center text-white lg:text-6xl text-4xl tracki font-bold">Up to
                                <br className="sm:hidden" /> 50% Off
                            </h2>
                            <div className="space-x-2 text-center text-white py-2 lg:py-0">
                                <span>Plus free shipping! Use code:</span>
                                <span className="font-bold text-lg">BUTICO</span>
                            </div>
                            <Link to='/' className="px-5 mt-4 lg:mt-0 text-white bg-[#E527B2] py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;