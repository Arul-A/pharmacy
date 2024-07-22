import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Orders from './components/Orders'
import Doctors from './components/Doctors'
import Booking from './components/Booking'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contacts' element={<Contacts />} />

        </Routes>

        <Footer />
      </BrowserRouter>



    </div>
  )
}

export default App