import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from 'react-rating-star-with-type'
import Swal from 'sweetalert2'

const ProductDetails = () => {
    const [products, setProducts] = useState([])
    const [star, setStar] = useState(5);

    const { id } = useParams()
    //fetch data 
    useEffect(() => {
        fetch('https://butico-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    //filter data
    const filteredProduct = products.filter((product) =>
        product._id == id
    );

    //handle add to cart button 
    const handleAddToCart = (data) => {
        console.log(data)
        fetch('https://butico-server.vercel.app/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.acknowledged==true){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added to cart',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    //ratings

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                {
                    filteredProduct.map((product) => <>
                        <section className="text-gray-600 dark:text-white body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-11/12 mx-auto flex flex-wrap">
                                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.photo} />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font dark:text-white text-gray-500 tracking-widest">{product.type}</h2>
                                        <h1 className="text-gray-900 text-3xl dark:text-white title-font font-medium mb-1">{product.productName}</h1>
                                        <div className="flex text-sm gap-2">

                                            <ReactStars
                                                onChange={onChange}
                                                value={product.rating}
                                                edit={true}
                                                activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}                                            />
                                            <p className="">{product.rating}</p>
                                        </div>
                                        <p className="leading-relaxed">{product.desc}</p>
                                        <div className="flex py-5">
                                            <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">${product.price}</span>
                                            <button onClick={() => handleAddToCart(product)} className="flex ml-auto text-white bg-[#E527B2] border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded">Cart</button>
                                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>)
                }
            </section>

        </div>
    );
};

export default ProductDetails;