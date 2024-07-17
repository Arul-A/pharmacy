import React from 'react';
import bg from '../images/logo.png';
import insta from '../images/insta.png';
import fb from '../images/fb.png';
import whatsapp from '../images/whatsapp.png';


const Home = () => {
    return (
        <section id='home' className="bg-[#B1CBE4] flex-col md:flex-row flex justify-between items-center px-10 py-16">
            <div className='w-1/2 flex items-center justify-center'>
                <img src={bg} alt="bg" className='w-[200px] h-[200px] md:w-[400px] md:h-[350px] rounded-full' />
            </div>
            <div className='w-full md:w-1/2 px-4 py-5 flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold mb-1'>Green Plus Pharmacy,</h2>
                <h3 className='py-2 font-bold text-xl text-nowrap'>Your Trusted Partner in Health and Wellness</h3>
                <h1 className='text-2xl text-center font-semibold'>Our Vision</h1>
                <p className='py-2 text-xl md:text-lg'>At Green Plus Pharmacy, we are dedicated to providing you with the highest quality pharmaceutical care.</p>
                <p className='text-xl md:text-lg'>Our mission is to enhance the well-being of our community by offering a wide range of health products, personalized services, and expert advice.</p>
                <div className='mt-8 flex gap-4'>
                    <a href="#orders" className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-md transition duration-300 block text-center'>
                        Buy Now
                    </a>
                    <a href="#booking" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition duration-300 block text-center'>
                        Book Appointment
                    </a>
                </div>
                <p className='mt-4 text-xl'>Follow Us:</p>
                <div className='icons flex gap-4 text-4xl mt-2'>
                    <a href='https://www.instagram.com/arul21021/?igsh=eHhybGY3MjN3NWky' target='_blank' rel="noreferrer"><img src={insta} alt="instagram" /></a>
                    <a href="https://www.facebook.com/arulak.vaithi" target='_blank' rel="noreferrer"><img src={fb} alt="facebook" /></a>
                    <a href='https://wa.me/+91 8072663220' target='_blank' rel="noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
                </div>
            </div>
        </section>
    );
};

export default Home;
