import React, { useState } from 'react';
import Icon from '../assets/paw-icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header w-full flex items-center justify-between p-6">
            <div className="left-content flex items-center gap-2 md:pl-6">
                <img src={Icon} className="md:w-9 w-7" />
                <Link to='/'>
                    <div className="title text-indigo-950 text-xl font-bold">CatHub</div>
                </Link>
            </div>
            <div className="right-content">
                <div className="flex items-center xl:pr-16 md:pr-10 sm:pr-0">
                    <div className="hidden md:flex gap-5 font-semibold text-indigo-950">
                        <Link to='/' className=' hover:text-indigo-900'>Home</Link>
                        <Link to='/breeds' className=' hover:text-indigo-900'>Breeds</Link>
                        <Link to='/care' className=' hover:text-indigo-900'>Care</Link>
                        <Link to='/info' className=' hover:text-indigo-900'>General Info</Link>
                    </div>
                    <button className="md:hidden" onClick={handleMenuToggle}>
                        <svg className="w-6 h-6 text-indigo-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col gap-2 mt-4 font-semibold text-indigo-950">
                        <Link to='/' className='hover:text-indigo-900' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to='/breeds' className='hover:text-indigo-900' onClick={() => setIsMenuOpen(false)}>Breeds</Link>
                        <Link to='/care' className='hover:text-indigo-900' onClick={() => setIsMenuOpen(false)}>Care</Link>
                        <Link to='/info' className='hover:text-indigo-900' onClick={() => setIsMenuOpen(false)}>General Info</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
