import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <div className="h-20 w-full bg-blue-400 flex items-center justify-start p-4 text-lg font-bold text-white  space-x-10">
                <a href = "/" className = "flex items-center justify-start">
                    <img className="h-12  overflow-hidden objact-contain" src="templates/default/images/logo/en_en.png" alt="eTalk"/>
                </a>
                <Link className="hover:text-red-300" to="/">Home</Link>
                <Link className="hover:text-red-300" to="/plan">Plan Page</Link>
                <Link className="hover:text-red-300" to="/banner">Banner Page</Link>
                <Link className="hover:text-red-300" to="/student">Student</Link>
                <Link className="hover:text-red-300" to="/">News</Link>
                <Link className="hover:text-red-300" to="/">Contact Us</Link>              
            </div>
        </div>
    );
};

export default Header;