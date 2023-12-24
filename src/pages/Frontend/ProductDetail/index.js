import React from 'react'
import ProductDetail from './ProductDetail'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export default function index() {
  return (
    <>
      <Header />
      <main>
        <ProductDetail />
      </main>
      <Footer />
    </>
  )
}
