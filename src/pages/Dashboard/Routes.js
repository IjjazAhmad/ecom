import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import AddProduct from '../../components/AddProduct'
import Order from './Order'
import Users from './Users'
export default function AdminRoutesIndex() {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  )
}
