import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Subscribe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="bg-[url('https://i.ibb.co/3czQV7L/sm-BG-2-service.jpg')] w-full h-full  bg-cover bg-center bg-no-repeat">
            <section className=" w-full h-72 py-14">
            <h3 className="text-3xl pt-10 px-5 lg:px-28">Newsletter</h3>
                <div className="flex lg:justify-start px-5 lg:px-28 ">
                    <div data-aos="fade-right" className="flex flex-row ">
                        <input type="text" placeholder="example@email.com" className="w-full p-3 rounded-l-lg sm:w-2/3 border-yellow-200 bg-[#e2dada]" />
                        <button type="button" className="w-3/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-[#E527B2] dark:text-gray-900">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;