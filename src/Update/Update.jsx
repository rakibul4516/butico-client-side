import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const productsdata = useLoaderData()
    const {_id,productName,type,price,rating,desc,photo} = productsdata || {}
    console.log(productsdata)
    const handleUpdateProduct = (event) =>{
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const desc = form.desc.value;
        const photo = form.photo.value;
        const product = {productName,type,price,rating,desc,photo}

        //Post method 
        fetch(`https://butico-server.vercel.app/products/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(product),
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.acknowledged==true){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset()
            }
        })
    }
    return (
        <div>
            <div>
                <div className="w-11/12 dark:text-white mx-auto lg:p-20">
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-extrabold drop-shadow-2xl my-2">Update Product</h1>
                    </div>
                    <form onSubmit={handleUpdateProduct} className="">
                        <div className="md:flex gap-5 mb-5 w-full">
                            <div className="md:flex flex-col items-start w-full gap-2">
                                <label className="text-lg font-semibold px-3">Product Name</label>
                                <input type="text"  placeholder="Product Name" name="productName" defaultValue={productName} className="input input-bordered input-info w-full" />
                            </div>
                            <div className="md:flex flex-col items-start w-full gap-2">
                                <label className="text-lg font-semibold px-3"> Product Brand/Type</label>
                                <input type="text" defaultValue={type} name="type" placeholder="Product Type" className="input input-bordered input-info w-full" />
                            </div>
                        </div>
                        <div className="md:flex gap-5 mb-5">
                            <div className="md:flex flex-col items-start w-full gap-2">
                                <label className="text-lg font-semibold px-3">Price</label>
                                <input type="text" defaultValue={price} placeholder="Price" name="price" className="input input-bordered input-info w-full" />
                            </div>
                            <div className="md:flex flex-col items-start w-full gap-2">
                                <label className="text-lg font-semibold px-3">Rating</label>
                                <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered input-info w-full" />
                            </div>
                        </div>
                        <div className=" mb-5">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-lg font-semibold px-3">Description</label>
                                <input type="text" defaultValue={desc} name="desc" placeholder="Description" className="input input-bordered input-info w-full" />
                            </div>
                        </div>
                        <div className=" mb-5">
                            <div className="flex flex-col items-start w-full">
                                <label className="text-lg font-semibold px-3">Photo URL</label>
                                <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered input-info w-full" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-active  w-full bg-[#E527B2] hover:bg-rose-200 font-bold text-white">Add Product</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Update;