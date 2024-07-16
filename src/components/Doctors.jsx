import React from 'react';
import sarah from '../images/sarah.avif';
import lee from '../images/Lee.jpg';
import david from '../images/David.jpg';
import emily from '../images/emily.avif';

const Doctors = () => {
  const doctors = [
    {
      img: sarah,
      name: 'Dr. Sarah Johnson MD',
      specialization: 'Cardiology',
      description: 'Diagnosing and treating heart conditions, providing comprehensive cardiac care to patients.',
      days: 'Monday & Friday',
      time: '5 PM to 7 PM'
    },
    {
      img: lee,
      name: 'Dr. Michael Lee MBBS',
      specialization: 'Pediatrics',
      description: 'Offering expertise in pediatric care and developmental assessments for child health.',
      days: 'Tuesday & Thursday',
      time: '2 PM to 4 PM'
    },
    {
      img: emily,
      name: 'Dr. Emily Smith MD',
      specialization: 'Dermatology',
      description: 'Specializing in skin care, diagnosing and treating various skin conditions.',
      days: 'Wednesday & Saturday',
      time: '3 PM to 6 PM'
    },
    {
      img: david,
      name: 'Dr. David Brown DO',
      specialization: 'Orthopedics',
      description: 'Expert in bone and joint care, helping patients with musculoskeletal issues.',
      days: 'Monday & Wednesday',
      time: '10 AM to 1 PM'
    }
  ];

  return (
    <section id='doctors' className='py-8 px-4 bg-[#5FC6EF]'>
      <h1 className='text-center text-3xl font-bold mb-8 mt-5'>Meet our Doctors</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>
        {doctors.map((doctor, index) => (
          <div key={index} className='bg-[#9dfc7d] border-2 border-gray-200 shadow-lg rounded-lg p-5 w-full md:w-2/3 lg:w-2/3 mx-auto flex flex-col items-center'>
            <img src={doctor.img} alt={`${doctor.name} profile`} className='w-[200px] h-[200px] rounded-full mb-4' />
            <h2 className='text-xl font-semibold mb-2'>{doctor.name}</h2>
            <p className='font-medium'>{doctor.specialization}</p>
            <p className='text-center mb-2'>{doctor.description}</p>
            <p className='text-sm text-gray-700'><strong>Day:</strong> {doctor.days}</p>
            <p className='text-sm text-gray-700'><strong>Time:</strong> {doctor.time}</p>
            <p className='text-center mt-4 text-blue-600'>You can book appointments with {doctor.name} through our booking system.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
