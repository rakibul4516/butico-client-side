import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../Context/Context";

const Root = () => {
    //dark theme code 
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
    }, [])
    return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} h-full`} >
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </ThemeContext.Provider>
    );
};

export default Root;