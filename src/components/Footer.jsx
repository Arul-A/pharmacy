import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2CA801] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className='flex flex-col md:flex-row gap-2 md:gap-4'>
            <Link to='/' className="hover:underline">Home</Link>
            <Link to='/orders' className="hover:underline">Buy now</Link>
            <Link to='/booking' className="hover:underline">Booking Appointment</Link>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/arulak.vaithi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/arul21021/?igsh=eHhybGY3MjN3NWky" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/+91 8072663220" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        &copy; {new Date().getFullYear()} Pharmacy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
