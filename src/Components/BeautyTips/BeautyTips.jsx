import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const BeautyTips = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="text-gray-600 body-font bg-[#f6e5e5]">
            <div className="flex text-center justify-center pt-5">
                <h1 className="text-4xl text-black font-bold">Natural Beauty Tips</h1>
            </div>
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div data-aos="fade-right" className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co/VjFNZbz/914-HGk-Kduj-L-UL1500.jpg"/>
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">Hydration is Key</h2>
                            <p className="leading-relaxed text-base">To maintain healthy and glowing skin, make hydration a top priority. Drink plenty of water throughout the day to keep your skin well-hydrated from the inside. Additionally, use a good moisturizer to keep your skin moisturized externally. Hydrated skin is less likely to develop fine lines and wrinkles and will look radiant and youthful.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">Sunscreen, Your Skin is Best Friend</h2>
                            <p className="leading-relaxed text-base"> Sunscreen is your first line of defense against harmful UV rays that can cause premature aging, dark spots, and skin damage. Make it a daily habit to apply sunscreen with at least SPF 30 before going outdoors. It not only protects your skin but also helps maintain an even skin tone.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">Quality Sleep for a Radiant Complexion</h2>
                            <p className="leading-relaxed text-base">Getting enough quality sleep is essential for overall health and beauty. During deep sleep, your body repairs and regenerates cells, including skin cells. Lack of sleep can lead to a dull complexion and dark under-eye circles. Aim for 7-9 hours of sleep per night to wake up with a refreshed and radiant look.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeautyTips;