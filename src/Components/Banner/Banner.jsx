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
                <div data-aos="fade-up">
                    <img src="https://i.ibb.co/3Mp9k4J/pexels-matheus-bertelli-3856027.jpg" alt="" className="w-full h-96" />
                </div>
                <div data-aos="fade-down">
                    <img src="https://i.ibb.co/khM1BT9/pexels-keira-burton-6146960.jpg" alt="" className="w-full h-96" />
                </div>
                <div className="absolute h-full bg-black bg-opacity-50 w-full">
                    <div className="flex justify-center py-48">
                        <h1 className="text-5xl z-10 text-white">hello world</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;