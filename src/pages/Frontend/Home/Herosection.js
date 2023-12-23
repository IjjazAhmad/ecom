import React from 'react'
import { images } from '../../../assets/heroSection/index';
import { Button, Carousel } from 'antd';
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
                <div className="container section d-flex flex-wrap">
                  <div className="left">
                    <h6>Smart Product</h6>
                    <h2>Summer Offer <br />2024 Collection</h2>
                    <div className="text-center">
                      <Button danger className='w-50' type="dashed" ghost>
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                      <img src={images.slider4} alt="" />
                    </div>
                  </div>
                </div>
                <div className="container section d-flex flex-wrap">
                  <div className="left">
                    <h6>Smart Product</h6>
                    <h2>Summer Offer <br />2024 Collection</h2>
                    <div className="text-center">
                      <Button danger className='w-50' type="dashed" ghost>
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                      <img src={images.slider2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="section d-flex flex-wrap">
                  <div className="left">
                    <h6>Smart Product</h6>
                    <h2>Summer Offer <br />2024 Collection</h2>
                    <div className="text-center">
                      <Button danger className='w-50' type="dashed" ghost>
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="sliderimg animate__animated animate__slideInUp animate__slow ">
                      <img src={images.slider1} alt="" />
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
