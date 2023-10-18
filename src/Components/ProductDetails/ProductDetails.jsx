import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    console.log(id)
    //fetch data 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])

    //filter data
    const filteredProduct = products.filter((product) =>
        product._id == id
    );

    //handle add to cart button 
    const handleAddToCart = (data) =>{
        console.log(data)
        fetch('http://localhost:5000/carts',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                {
                    filteredProduct.map((product) => <>
                        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={product.photo} />
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product.productName}</h1>
                                <p className="mb-8 leading-relaxed">{product.desc}</p>
                                <div className="flex justify-center">
                                    
                                    <button onClick={()=>handleAddToCart(product)} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </section>

        </div>
    );
};

export default ProductDetails;