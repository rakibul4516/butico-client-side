import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {
    const [error, setError] = useState('')
    const { handleUserRegister } = useContext(AuthContext)
    const navigate = useNavigate()
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
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Sign Up',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate('/')

            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div className="lg:grid lg:grid-cols-5 flex flex-col-reverse">
            <div className="w-full col-span-3">
                <img src="https://i.ibb.co/x1dNsx7/banner2df.jpg" alt="banner" className="h-full w-full" />
            </div>
            <div className=" col-span-2 top-32 right-5 p-8 space-y-3 rounded-xl bg-rose-100 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSignUp} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Name</label>
                        <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Photo URL</label>
                        <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Gmail</label>
                        <input type="email" name="email" placeholder="Gmail" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>

                    {
                        error?<p className="text-red-600 py-2">{error}</p>:''
                    }

                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" className="underline dark:text-gray-100">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;