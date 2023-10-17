import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";

const Register = () => {
    const [error, setError] = useState('')
    const { handleUserRegister } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)


        //password validation
        if (password.length < 6) {
            // Password is too short
            setError('Password should be at least 8 characters');
            return;
        } else if (!(/[A-Z]/.test(password))) {
            setError('Password should contain at least one uppercase letter (A-Z)');
            return;
        } else if (!(/[@#$%^&+=!]/.test(password))) {
            setError('Password should contain at least one special character (@#$%^&+=!)')
            return;
        }
        //Register
        handleUserRegister(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="text" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {error?<p className="text-red-600 py-5">Error: {error}</p>:null}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;