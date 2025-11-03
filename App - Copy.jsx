import React from 'react'
import Footer from './Componant/Footer'
import Navbar from './Componant/Navbar'   // <-- sirf ek import rakho

import { Route, Routes } from 'react-router-dom'
import CartDtails from './Componant/CartDtails'
import Carts from "./Componant/Carts"
import Section from './Componant/Section'
import Contact from './Componant/Pages/Contact'
import About from './Componant/Pages/About'

const App = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fff,rgba(255,228,230,0.35))] text-slate-900">
      <Navbar />
      <Section />

      <Routes>
        <Route path="/" element={<Carts />} />
        <Route path="/cart/:id" element={<CartDtails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

