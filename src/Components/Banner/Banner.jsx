import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="">
            <div className="grid grid-cols-2 relative">
                <div data-aos="zoom-out-right">
                    <img src="https://imageupload.io/ib/Kv2WMbdCQJHGvLS_1697582521.webp" alt="" className="w-full h-96" />
                </div>
                <div data-aos="zoom-out-left">
                    <img src="https://imageupload.io/ib/ZDThM2BPjBXbKxZ_1697582600.jpg" alt="" className="w-full h-96" />
                </div>
                <div className="absolute h-full bg-black bg-opacity-50 w-full">
                    <div className="flex justify-center py-44">
                        <h1 className="text-5xl z-10 text-white">hello world</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;