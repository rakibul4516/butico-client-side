import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import ThemeContext from "../Context/Context";
import Footer from "../Components/Footer/Footer"
const Root = () => {
    //dark theme code 
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
    }, [])
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} h-full`} >
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </ThemeContext.Provider>

        </div>
    );
};

export default Root;