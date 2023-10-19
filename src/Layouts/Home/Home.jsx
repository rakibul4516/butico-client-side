import Banner from "../../Components/Banner/Banner";
import BeautyTips from "../../Components/BeautyTips/BeautyTips";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCard></BrandCard>
            <BeautyTips></BeautyTips>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;