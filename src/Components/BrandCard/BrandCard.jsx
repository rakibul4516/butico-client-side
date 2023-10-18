import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
    const [brands, setbrands] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(result => {
                setbrands(result)
            })
    }, [])
    console.log(brands)
    
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto my-5 gap-5">
            {
                brands?.map(brand => <>
                    <Link to={`/product/${brand._id}`}>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <img src={brand.image} alt="" className="object-cover object-center w-full rounded-t-md h-44 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracki">{brand.name}</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>)
            }
        </div>
    );
};

export default BrandCard;