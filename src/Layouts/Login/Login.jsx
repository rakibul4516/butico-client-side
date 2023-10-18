import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import {  useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {handleUserLogin,loginWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        //Register
        handleUserLogin(email,password)
        .then(result =>{
            console.log(result)
            navigate(location?.state ? location.state: '/');
        })
        .catch(error=>{
            console.log(error)
        })
        
    }


    //LogIn with google

    const googleLogin = () =>{
        loginWithGoogle()
        .then(result=>{
            console.log(result)
            navigate(location?.state ? location.state: '/');
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={googleLogin} className="btn btn-active  w-10/12 mx-auto mb-5 bg-[#E527B2] hover:bg-rose-200 font-bold text-white">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;