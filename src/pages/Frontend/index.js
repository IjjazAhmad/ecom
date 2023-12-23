import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Contact from './Contact'
import Shop from './Shop/Shop'
import Cart from './Cart'
export default function index() {
  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop/:productId' element={<ProductDetail />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart/:cartProductId' element={<Cart />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}
