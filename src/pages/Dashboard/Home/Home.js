import React from 'react'
import DashboardCart from '../../../components/Card/DashboardCart'
import { images } from '../../../assets/dashboard/cart'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="NEW ORDERS" total="24534" percent="200% (30days)" icon="fa-money-check-dollar" img={images.cart1} bg="#7ac74f" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="TOTAL INCOME" total="Rs323,443" percent="increased by 7.35%" icon="fa-sack-dollar" img={images.cart2} bg="#f8961e" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="TOTAL EXPENCE" total="7543" percent="increased by 7.35%" icon="fa-file-lines" img={images.cart3} bg="#1982c4" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="NEW USERS" total="3265" percent="343% (30days)" icon="fa-user" img={images.cart4} bg="#001f54" />
          </div>
        </div>
      </div>
    </>
  )
}
