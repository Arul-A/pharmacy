import React, { useState } from 'react';
import axios from 'axios';
import whatsapp from '../images/whatsapp.png';
import emailjs from 'emailjs-com';
import order from '../images/orders.webp';

const Orders = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [fileObject, setFileObject] = useState(null);
    const [message, setMessage] = useState('');

    const getFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setFileObject(e.target.files[0]);
    };

    const clearForm = () => {
        setName('');
        setMobile('');
        setAddress('');
        setFile(null);
        setFileObject(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Upload the file to ImgBB and get the URL
            const formData = new FormData();
            formData.append('image', fileObject);

            const imgbbApiKey = '887f90fb738c65c2efbb3819ef5b926c';
            const imgbbResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData);
            const fileURL = imgbbResponse.data.data.url;

            // Prepare email data
            const emailData = {
                name: name,
                mobile: mobile,
                address: address,
                file_url: fileURL
            };

            // Send email using EmailJS
            emailjs.send('service_k3ggyvk', 'template_8qk5sw9', emailData, 'bs7HhtKuhui3P-8_A')
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setMessage("Order placed. We'll reach you soon!");
                    clearForm();
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    setMessage('Error placing order.');
                });
        } catch (error) {
            console.error('Error uploading image:', error);
            setMessage('Error uploading image.');
        }
    };

    return (
        <section id='orders' className="flex flex-col md:flex-row py-8 px-4 bg-[#B1CBE4]">
            <div className="py-2 px-4 w-full md:w-2/3">
                <h1 className='text-center font-bold text-3xl mb-4 mt-5'>Order Your Medicines</h1>
                <div>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-2 text-xl font-semibold mb-4'>
                        <p className='text-nowrap md:text-xl'>You can place an order through WhatsApp.</p>
                        <p className='flex justify-center items-center gap-3'>
                            Click the icon
                            <a href='https://wa.me/+91 8072663220' target='_blank' rel="noreferrer">
                                <img src={whatsapp} alt="whatsapp" className='w-[32px] h-[32px]'/>
                            </a>
                        </p>
                    </div>
                    <h2 className='text-xl text-center font-semibold'>(or)</h2>
                    <h2 className='text-xl mb-4 text-center font-semibold'>Just upload your prescription here & Fill the form.</h2>
                    <div className='flex flex-col md:flex-row justify-center items-center mt-4 font-semibold'>
                        <div>
                            <input type='file' name='pres' className='mb-4 ml-24' onChange={getFile} />
                            <div className='flex flex-col items-center justify-center mt-4 md:mt-0'>
                                {file ? (
                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={file} alt="image preview" className='w-[250px] h-[200px] border-2 border-black text-center hover:scale-110 transition-transform duration-300 ease-in-out rounded-xl' />
                                        <p className='mt-2'>Ensure your image is clear</p>
                                    </div>
                                ) : (
                                    <div className='w-[250px] h-[200px] border-2 rounded-xl border-black flex justify-center items-center'>
                                        Image preview
                                    </div>
                                )}
                                {!file && (
                                    <p>No image uploaded</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl text-center mt-4 font-semibold'>Enter your details</h2>
                            <p className='text-center mt-2'>Help us to reach you...</p>
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-4 p-3 w-full md:w-[400px] mx-auto'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='w-full md:w-[300px] mb-4 p-2 rounded border'
                                    required
                                />
                                <input
                                    type='text'
                                    name='mobile'
                                    placeholder='Enter your mobile number'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className='w-full md:w-[300px] mb-4 p-2 rounded border'
                                    required
                                />
                                <textarea
                                    name='address'
                                    placeholder='Enter your address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='w-full md:w-[300px] h-[100px] p-2 rounded border mb-4'
                                    required
                                ></textarea>
                                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    {message && <p className='text-center mt-4'>{message}</p>}
                </div>
            </div>
            <div className='w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0'>
                <img src={order} alt="order illustration" className='w-[300px] h-[300px] md:h-[450px]' />
            </div>
        </section>
    );
};

export default Orders;
