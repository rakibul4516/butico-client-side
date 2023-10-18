import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
    const brands = useLoaderData()
    // const name =brands.name;
    console.log(brands)
    //     const filteredProducts = data.filter((product) =>
    //         product.name === params.name
    //     );
    return (
        <div>
            this is product page
        </div>
    );
};

export default ProductPage;