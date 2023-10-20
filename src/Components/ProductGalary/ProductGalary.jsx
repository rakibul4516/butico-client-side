import { useEffect, useState } from "react";

const ProductGalary = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://butico-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className="carousel carousel-center h-96 w-full p-4 space-x-4 bg-neutral rounded-box">
            {
                products.map((product) => <>
                    <div className="carousel-item relative">
                        <img src={product.photo} alt="Burger" className="rounded-box w-96 object-cover" />
                        <div className="absolute bottom-0 w-full left-0 py-2 px-6 bg-black bg-opacity-60">
                            <h2 className="text-3xl font-semibold text-white h-16 ">{product.productName}</h2>
                        </div> 
                    </div>

                </>)
            }
        </div >
    );
};

export default ProductGalary;