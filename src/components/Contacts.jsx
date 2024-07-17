import React from 'react'
import greenplus from '../images/greenplus.jpg'
import insta from '../images/insta.png';
import fb from '../images/fb.png';
import whatsapp from '../images/whatsapp.png';
import gmail from '../images/gmail.png';
import loc from '../images/loc.jpg';


const Contacts = () => {
    return (
        <section id='contacts' className='py-8 px-4 bg-[#5FC6EF]'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-3xl font-bold mb-4 mt-5'>Contact us</h1>
                <img src={loc} alt="location" className='w-[32px] h[32-px]' />
                <address>
                    Green plus pharmacy, <br />
                    East pondy road, <br />
                    Koliyanur X road, <br />
                    Villupuram - 605 103
                </address>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center gap-6 mt-5'>
                <div>
                    <img src={greenplus} alt="greenplus img" className='w-[550px] h-[350px] rounded-lg' />
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249747.9228698832!2d79.24884988671876!3d12.022077100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5357773c0319ff%3A0x93317899446320f0!2sGREEN%20PLUS%20PHARMACY!5e0!3m2!1sen!2sus!4v1721127216447!5m2!1sen!2sus" width='400px' height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-lg md:w-[500px]'></iframe>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5 font-bold text-xl gap-2'>
                <p className='text-center'>If you have any queries or you need free consultation from our experts...</p>
                <p className='border-b-2 border-black'>Contact Details</p>
                <p>Name: A.Arul BCA</p>
                <p>Timing: 10AM to 11PM</p>
                <p>Mobile No: +91 8072663220</p>
                <p>Email: akarul2100@gmail.com</p>
                <p>Feel free to reach us the from below links...</p>
                <div className='flex gap-3 mt-5'>
                    <a href='https://www.instagram.com/arul21021/?igsh=eHhybGY3MjN3NWky' target='_blank' rel="noreferrer"><img src={insta} alt="instagram" className='w-[32px] h-[32px]' /></a>
                    <a href="https://www.facebook.com/arulak.vaithi" target='_blank' rel="noreferrer"><img src={fb} alt="facebook" className='w-[32px] h-[32px]'/></a>
                    <a href='https://wa.me/+91 8072663220' target='_blank' rel="noreferrer"><img src={whatsapp} alt="whatsapp" className='w-[32px] h-[32px]'/></a>
                    <a href="mailto:akarul2100@gmail.com"><img src={gmail} alt="whatsapp" className='w-[32px] h-[32px]' /></a>

                </div>
            </div>
        </section>
    )
}

export default Contacts