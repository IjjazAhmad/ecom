import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'

import Contact from './Contact'
import Shop from './Shop/'
import About from './About'
import Cart from './Cart'
import Blog from './Blog'
import Heart from './Heart'
export default function index() {
  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/heart' element={<Heart />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}
