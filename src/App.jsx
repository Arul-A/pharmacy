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

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Services />
      <Orders />
      <Doctors />
      <Booking />
      <Contacts />
      <Footer />
      
      
    </div>
  )
}

export default App