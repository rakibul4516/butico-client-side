import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const type = form.type.value;
        var validTypes = ["L'Oréal","Estée Lauder","Chanel","Dior","Revlon"];

        if(!validTypes.includes(type)){
            Swal.fire({
                title: 'Failed!',
                text: "You must submit type =>L'Oréal,Estée Lauder,Chanel,Dior,Revlon ",
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        const price = form.price.value;
        const rating = form.rating.value;
        const desc = form.desc.value;
        const photo = form.photo.value;
        const product = {productName,type,price,rating,desc,photo}

        //Post method 
        fetch('https://butico-server.vercel.app/products',{
            method:"POST",
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
                    text: 'Product added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset()
            }
            console.log(result)
        })

    }



    return (
        <div>
            <div className="w-11/12 mx-auto dark:text-white lg:p-20">
                <div className="text-center my-6">
                    <h1 className="text-3xl font-extrabold drop-shadow-2xl my-2">Add New Product</h1>
                </div>
                <form onSubmit={handleAddProduct} className="">
                    <div className="md:flex gap-5 mb-5 w-full">
                        <div className="md:flex flex-col items-start w-full gap-2">
                            <label className="text-lg font-semibold px-3">Product Name</label>
                            <input type="text" placeholder="Product Name" name="productName" className="input input-bordered input-info w-full" />
                        </div>
                        <div className="md:flex flex-col items-start w-full gap-2">
                            <label className="text-lg font-semibold px-3"> Product Brand/Type</label>
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-5">
                        <div className="md:flex flex-col items-start w-full gap-2">
                            <label className="text-lg font-semibold px-3">Price</label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered input-info w-full" />
                        </div>
                        <div className="md:flex flex-col items-start w-full gap-2">
                            <label className="text-lg font-semibold px-3">Rating</label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    <div className=" mb-5">
                        <div className="flex flex-col items-start w-full">
                            <label className="text-lg font-semibold px-3">Description</label>
                            <input type="text" name="desc" placeholder="Description" className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    <div className=" mb-5">
                        <div className="flex flex-col items-start w-full">
                            <label className="text-lg font-semibold px-3">Photo URL</label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-active  w-full bg-[#E527B2] hover:bg-rose-200 font-bold text-white">Add Product</button>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;