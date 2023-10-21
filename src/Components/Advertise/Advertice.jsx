
import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'

const Advertice = ({filteredProducts}) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next slide
            sliderRef.current.slickNext();
        }, 5000); // 5000 milliseconds (5 seconds)

        return () => {
            clearInterval(interval);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
            <div className="">
                <div className="w-full mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="w-full md:h-[100vh] h-96">
                                <img
                                    src={product.banner}
                                    alt={`Image ${index}`}
                                    className="w-full h-full object-fill"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
        </div>
    );
};

Advertice.propTypes = {
    filteredProducts:PropTypes.array
}

export default Advertice;