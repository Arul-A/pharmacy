import React from 'react'
import delivery from '../images/delivery1.png'
import consultation from '../images/consultation.png'
import vaccine from '../images/vaccine.png'
import pres from '../images/pres.png'
import fat from '../images/fat.png'
import diabetic from '../images/diabetic.png'
import bp from '../images/bp.png'

const Services = () => {
  return (
    <section id='services' className='bg-[#5FC6EF] py-8'>
      <h1 className='text-center text-3xl mb-8 mt-5'>Services We Provide</h1>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={delivery} alt="delivery" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Free Delivery</h1>
          <p>Enjoy the convenience of having your medications delivered right to your doorstep at no extra cost.</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={consultation} alt="consultation img" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Free Consultation</h1>
          <p>Speak with our licensed pharmacists for personalized medication advice and guidance.</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={vaccine} alt="vaccine img" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Vaccinations & Immunizations</h1>
          <p>Stay up-to-date with routine vaccinations for flu, pneumonia, shingles, and more.</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={pres} alt="prescription" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Prescription Services</h1>
          <p>Easily refill your prescriptions online or in-store. Submit new prescriptions from your healthcare provider.</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={bp} alt="bp img" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Blood Pressure Monitoring</h1>
          <p>Regularly check your blood pressure with our easy in-store service.</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center'>
          <img src={fat} alt="fat img" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Cholesterol Testing</h1>
          <p>Monitor your cholesterol levels with our quick and accurate tests.</p>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center sm:col-span-2 md:col-span-2 lg:col-span-1'>
          <img src={diabetic} alt="diabetic img" className='w-[50px] h-[50px] mb-4' />
          <h1 className='text-xl font-semibold mb-2'>Diabetes Screening</h1>
          <p> Get screened for diabetes and receive guidance on managing the condition.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
