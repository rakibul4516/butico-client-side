import Banner from "../../Components/Banner/Banner";
import BeautyTips from "../../Components/BeautyTips/BeautyTips";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Subscribe from "../../Components/Subscribe/Subscribe";
import ProductGalary from "../../Components/ProductGalary/ProductGalary";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCard></BrandCard>
            <BeautyTips></BeautyTips>
            <ProductGalary></ProductGalary>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;