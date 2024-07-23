import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png'
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return (
        <header className="bg-[#3FA6EB] flex justify-between items-center px-4 py-2 text-white fixed w-full">
            <div className='flex justify-center items-center md:gap-6 gap-2 md:ml-6'>
                <Link to='/'><img src={logo} alt="logo" className='w-10 h-10 rounded-full cursor-pointer' /></Link>
                <p className='text-xl font-bold'>Green Plus Pharmacy</p>
            </div>

            <nav className='hidden md:block'>
                <ul className='flex justify-center items-center gap-3'>
                    <Link to='/' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Home</Link>
                    <Link to='/orders' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Buy now</Link>
                    <Link to='/services' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Services</Link>
                    <Link to='/doctors' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Doctors</Link>
                    <Link to='/booking' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Book Appointment</Link>
                    <Link to='/contacts' className='hover:bg-[#2CA801] hover:text-gray-200 p-2'>Contacts</Link>
                </ul>

            </nav>

            <button className='block md:hidden text-xl' onClick={()=>setToggleMenu(!toggleMenu)}>
                {toggleMenu ? <FaTimes />:<FaBars />}
            </button>
            {toggleMenu && <nav className='block md:hidden mobile-nav'>
                <ul className='flex flex-col justify-center items-center gap-3 m-5'>
                <Link to='/' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Home</Link>
                    <Link to='/orders' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Buy now</Link>
                    <Link to='/services' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Services</Link>
                    <Link to='/doctors' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Doctors</Link>
                    <Link to='/booking' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Book Appointment</Link>
                    <Link to='/contacts' className='hover:bg-[#2CA801] hover:text-gray-200 p-2' onClick={()=>setToggleMenu(!toggleMenu)}>Contacts</Link>
                </ul>

            </nav> }

        </header>
    );
};

export default Header;
