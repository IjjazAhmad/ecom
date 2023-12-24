import React from 'react'
import GoogleMap from './GoogleMap'
import { Link } from 'react-router-dom'
import { Button, Input } from 'antd'
import SecNav from '../../../components/Header/SecNav'
const { TextArea } = Input

export default function Contact() {
  return (
    <>
      <div className="contact">
      <SecNav name ="CONTACT" />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='d-flex justify-content-center my-3'>
                <GoogleMap />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="bg-light leftSection mb-3">
                <div className="row space ">
                  <div className="col-4">
                    <div className="float-end icon">
                      <i className="fa-solid fa-phone border rounded-circle p-3 border-3"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <Link to={"tell:+923267876344"} target='blank' className='nav-link'>03267876344</Link>
                    <Link to={"https://wa.me/+923267876344"} target='blank' className='nav-link'>03267876344</Link>
                  </div>
                </div>
                <div className="row space">
                  <div className="col-4">
                    <div className="float-end icon">
                      <i className="fa-solid fa-earth-asia border rounded-circle p-3 border-3"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <Link to={"mailto:ijjazahmad705@gmail.com"} target='blank' className='nav-link'>ijjazahmad705@ gmail.com</Link>
                    <Link to={"/"} target='blank' className='nav-link'>ecomstore.web.app</Link>
                  </div>
                </div>
                <div className="row space">
                  <div className="col-4">
                    <div className="float-end icon">
                      <i className="fa-solid fa-location-dot border rounded-circle p-3 border-3 "></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <span>Faisalabad Pakistan</span><br />
                    <span>Manawala Sufyan Town, Str# 04</span>

                  </div>
                </div>
                <div className="row space">
                  <div className="col text-center">
                    <h3 className='my-4'>Follow Us</h3>
                    <Link to={"/"}><i className="fa-brands fa-facebook me-3 fs-4 " style={{ color: "#0523b8" }}></i></Link>
                    <Link to={"/"}><i className="fa-brands fa-twitter me-3 fs-4" style={{ color: "#439ad0" }}></i></Link>
                    <Link to={"/"}><i className="fa-brands fa-pinterest-p me-3 fs-4" style={{ color: "#d70404" }}></i></Link>
                    <Link to={"/"}><i className="fa-brands fa-linkedin-in me-3 fs-4" style={{ color: " #a12517" }}></i></Link>
                    <Link to={"/"}><i className="fa-brands fa-youtube fs-4" style={{ color: "#f50000" }}></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 ">
              <div className="bg-light rightSection">
                <div className="row justify-content-center ">
                  <div className="col-12 col-md-8 col-lg-8">
                    <h3>Get In Touch</h3>

                  </div>

                </div>
                <div className="row space justify-content-center ">
                  <div className="col-6 col-md-4 col-lg-4">
                    <Input placeholder="Name" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <Input placeholder="Email*" />
                  </div>
                </div>
                <div className="row space justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <Input placeholder="Subject*" />
                  </div>
                </div>
                <div className="row space justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <TextArea rows={8} placeholder="Your Message*" maxLength={6} />
                  </div>
                </div>
                <div className="button text-center">
                  <Button type="button" className='btn btn-warning w-50'>SEND</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
