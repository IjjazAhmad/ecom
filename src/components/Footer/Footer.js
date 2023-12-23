import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="row row-cols-2 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top">
          <div className="col mb-3">
            <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              Navbar
            </Link>
            <p className="text-body-secondary">© 2023</p>
          </div>

          <div className="col mb-3">

          </div>

          <div className="col mb-3">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About Us</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Store Location</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Contact</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Order Tracking</Link></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Useful Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Returns</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Support Police</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Size guide</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Follows Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FaceBook</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Twitter</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Youtube</Link></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>SUBSCRIBE</h5>
            <ul className="nav flex-column">
              <p>Get E-mail updates about our latest shop and special offers.</p>

              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">SUBSCRIBE</Link></li>

            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
