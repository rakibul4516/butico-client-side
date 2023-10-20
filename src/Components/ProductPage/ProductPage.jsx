import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Advertice from "../Advertise/Advertice";
import ReactStars from 'react-rating-star-with-type'

const ProductPage = () => {
    const [products, setProducts] = useState([])
    const [star, setStar] = useState(5);

    const { name } = useLoaderData()
    console.log(name)

    useEffect(() => {
        fetch('https://butico-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const filteredProducts = products.filter((product) =>
        product.brand === name
    );

    //Ratings
    const onChange = (nextValue) => {
        setStar(nextValue)
    }
    return (
        <div className="">
            {
                (filteredProducts.length > 0) ? <div className="">
                    <div className="">
                        <Advertice filteredProducts={filteredProducts}></Advertice>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 w-11/12 md:w-10/12 mx-auto gap-8 my-10" >
                        {
                            filteredProducts?.map(product => <>

                                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div>
                                        <img className=" rounded-t-lg h-80 lg:h-64 w-full object-cover" src={product.photo} alt="product image" />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <div>
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
                                        </div>
                                        <div className="flex text-sm gap-2 flex-wrap my-3 justify-between">
                                            <div className="flex gap-2 items-center">
                                                <ReactStars
                                                    onChange={onChange}
                                                    value={product.rating}
                                                    edit={true}
                                                    activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]} />
                                                <p className="text-sm">{product.rating}</p>
                                            </div>
                                            <p className="text-lg md:font-semibold">{product.type}</p>
                                            <p className="text-lg md:font-semibold">{product.brand}</p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                            <div className="flex gap-4 justify-between">
                                                <Link to={`/update/${product._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
                                                <Link to={`/product/details/${product._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        }
                    </div>
                </div> : <div className="flex justify-center items-center h-[80vh]"><h3 className="text-center text-4xl font-semibold">Product Not Added</h3></div>
            }
        </div>


    );
};

export default ProductPage;