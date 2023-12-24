import React from 'react'
import Frontend from './Frontend'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Authentication from './Authentication'
import Profile from './Profile'
import PrivateRoute from '../components/PrivateRoutes'
import { ToastContainer } from 'react-toastify'
import { useAuthContext } from './Contaxt/AuthContaxt'
import ProductDetail from './Frontend/ProductDetail'
export default function Index() {
  const {user} =useAuthContext()
  return (
    <>
     
        <Routes>
          <Route path='/*' element={<Frontend/>} />
          <Route path='/detail/:productId' element={<ProductDetail />} />
          <Route path='/auth/*' element={<Authentication/>} />
          {
            user.role === "admin" ?
            <Route path='dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
            : <Route path='*' element={<h1>Page Not Found</h1>} />
          }
          <Route path='/user/*' element={<PrivateRoute Component={Profile} />} />
        </Routes>
        <ToastContainer />
    </>
  )
}
