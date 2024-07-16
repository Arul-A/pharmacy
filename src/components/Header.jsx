import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png'
import '../App.css'

const Header = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return (
        <header className="bg-[#3FA6EB] flex justify-between items-center px-4 py-2 text-white fixed w-full">
            <div className='flex justify-center items-center md:gap-6 gap-2 md:ml-6'>
                <img src={logo} alt="logo" className='w-10 h-10 rounded-full' />
                <p className='text-xl font-bold'>Green Plus Pharmacy</p>
            </div>

            <nav className='hidden md:block'>
                <ul className='flex justify-center items-center gap-3'>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#home">Home</a></li>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#orders">Buy Now</a></li>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#services">Services</a></li>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#doctors">Doctors</a></li>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#booking">Book Appointment</a></li>
                    <li className='hover:bg-[#2CA801] hover:text-gray-200 p-2'><a href="#contacts">Contacts</a></li>
                </ul>

            </nav>

            <button className='block md:hidden text-xl' onClick={()=>setToggleMenu(!toggleMenu)}>
                {toggleMenu ? <FaTimes />:<FaBars />}
            </button>
            {toggleMenu && <nav className='block md:hidden mobile-nav'>
                <ul className='flex flex-col justify-center items-center gap-3 m-5'>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#home">Home</a></li>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#orders">Buy Now</a></li>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#services">Services</a></li>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#doctors">Doctors</a></li>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#booking">Book Appointment</a></li>
                    <li className='hover:border-b-2 hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}><a href="#contacts">Contacts</a></li>
                </ul>

            </nav> }

        </header>
    );
};

export default Header;
