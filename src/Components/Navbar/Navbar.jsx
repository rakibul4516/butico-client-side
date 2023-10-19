import { HiMoon, HiSun } from 'react-icons/hi2';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';
import { ThemeContext } from '../../Context/Context';


const Navbar = () => {
    const { users, userSignOut } = useContext(AuthContext)
    const [isDropdown, setIsDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {theme,setTheme} = useContext(ThemeContext)

    const navitems = <>
        <div className="flex md:flex-row flex-col lg:gap-3 md:gap-1 max-sm:gap-2 items-center text-white font-semibold">
            <NavLink to='/' className='activeroute inline-block w-full lg:px-4 px-2 py-2 text-center text-gray-800 max-md:bg-white rounded-md shadow hover:bg-gray-100'>Home</NavLink>
            <NavLink to='/addproduct' className='activeroute inline-block w-full lg:px-4 px-2 py-2 text-center text-gray-800 max-md:bg-white rounded-md shadow hover:bg-gray-100'>Add</NavLink>
            <NavLink to='/mycart' className='activeroute inline-block w-full lg:px-4 px-2 py-2 text-center text-gray-800 max-md:bg-white rounded-md shadow hover:bg-gray-100'>Cart</NavLink>
            <NavLink to='/login' className='activeroute inline-block w-full lg:px-4 px-2 py-2 text-center text-gray-800 max-md:bg-white rounded-md shadow hover:bg-gray-100'>Login</NavLink>
            <NavLink to='/register' className='activeroute inline-block w-full lg:px-4 px-2 py-2 text-center text-gray-800 max-md:bg-white rounded-md shadow hover:bg-gray-100'>Register</NavLink>

        </div>
    </>

    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    // Logout section
    const HandelLogout = () => {
        userSignOut()
    }

    //Dark mode implemant

    return (
        <nav className="shadow dark:bg-gray-900  relative">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="flex items-center">
                    <h1 className="text-3xl font-semibold dark:bg-white">BUTICO</h1>
                </div>

                <div className="flex items-center md:order-2">
                    {theme ==='light' ? <HiMoon className='text-4xl cursor-pointer' onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} /> : <HiSun className='text-4xl cursor-pointer text-white' onClick={() => {setTheme('light');localStorage.setItem('theme','light')}} />}
                    
                    {
                        users ? <div className="">
                            <button
                                type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded={isDropdown}
                                onClick={toggleDropdown}
                            >
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={users ? users?.photoURL : "https://i.ibb.co/jynfFrz/image-removebg-preview-2.png"} />
                            </button>
                            <div
                                className={`${isDropdown ? 'block' : 'hidden'
                                    } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-10 top-16`}

                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">
                                        {users?.displayName ? users?.displayName : 'User Name'}
                                    </span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                        {users?.email}
                                    </span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={HandelLogout}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            : <NavLink to='/login' className=' inline-block w-full px-4 py-2 text-center text-gray-800 bg-green-500 rounded-md shadow hover:bg-gray-100 mx-3'>Login</NavLink>
                    }
                    {/* small Dropdown menu */}

                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navitems}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;


