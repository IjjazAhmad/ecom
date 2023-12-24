import React from 'react'
import { images } from '../../../assets/heroSection/index';
import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
// const contentStyle = {

//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
// };
export default function Herosection() {
  return (
    <>
      <div className="heroSection">
        <div className="container-fluid ">
          <div className="row">
            <div className="col">

              <Carousel autoplay>
                <div className="container section">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <div className="left">
                        <h6>Smart Product</h6>
                        <h2>Summer Offer <br />2024 Collection</h2>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-8">
                            <div className="text-center">
                              <Link to={"/shop"} className='w-100 btn btn-outline-danger' >
                                SHOP NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="right">
                        <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                          <img src={images.slider4} alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container section">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <div className="left">
                        <h6>Smart Product</h6>
                        <h2>Summer Offer <br />2024 Collection</h2>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-8 ">
                            <div className="text-center">
                              <Link to={"/shop"} className='w-100 btn btn-outline-danger' >
                                SHOP NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                      <div className="right">
                        <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                          <img src={images.slider2} alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container section">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <div className="left">
                        <h6>Smart Product</h6>
                        <h2>Summer Offer <br />2024 Collection</h2>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-8">
                            <div className="text-center">
                              <Link to={"/shop"} className='w-100 btn btn-outline-danger' >
                                SHOP NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="right">
                        <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                          <img src={images.slider1} alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
