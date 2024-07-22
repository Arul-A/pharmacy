import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      phone,
      date,
      time,
      doctor
    };

    emailjs.send('service_k3ggyvk', 'template_gvmtg4g', bookingData, 'bs7HhtKuhui3P-8_A')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setMessage('Your appointment has been booked successfully!');
        clearForm();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setMessage('Error booking appointment. Please try again later.');
      });
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setDate('');
    setTime('');
    setDoctor('');
  };

  return (
    <section id='booking' className='flex flex-col justify-center items-center bg-[#B1CBE4] py-12 px-6 md:px-0'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3'>
        <h1 className='text-2xl font-bold text-center mb-6'>Book an Appointment</h1>
        <p className='text-center mb-6'>Kindly check our <Link to='/doctors' className="text-blue-500 underline">doctors page</Link> before booking an appointment.</p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              required
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              required
            />
          </div>
          <div>
            <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
              Date
            </label>
            <input
              type='date'
              id='date'
              name='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              required
            />
          </div>
          <div>
            <label htmlFor='time' className='block text-sm font-medium text-gray-700'>
              Time
            </label>
            <input
              type='time'
              id='time'
              name='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              required
            />
          </div>
          <div>
            <label htmlFor='doctor' className='block text-sm font-medium text-gray-700'>
              Doctor
            </label>
            <select
              id='doctor'
              name='doctor'
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              required
            >
              <option value=''>Select a Doctor</option>
              <option value='Dr. Sarah Johnson MD'>Dr. Sarah Johnson MD</option>
              <option value='Dr. Michael Lee MBBS'>Dr. Michael Lee MBBS</option>
              <option value='Dr. Emily Smith MD'>Dr. Emily Smith MD</option>
              <option value='Dr. David Brown DO'>Dr. David Brown DO</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300'
          >
            Book Appointment
          </button>
        </form>
        {message && <p className='mt-4 text-center text-green-500'>{message}</p>}
      </div>
    </section>
  );
};

export default Booking;
