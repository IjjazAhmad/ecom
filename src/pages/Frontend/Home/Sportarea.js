import React from 'react'
import { images } from '../../../assets/supportSection'
export default function Sportarea() {
    return (
        <>
            <div className="support-area pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className=" box d-flex justify-content-center align-items-center flex-wrap mb-3">
                                <div className="support-icon">
                                <img className="animated" src={images.icon1} alt=""/>
                                </div>
                                <div className="support-content">
                                    <h5>Free Shipping</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className=" box d-flex justify-content-center align-items-center flex-wrap mb-3">
                                <div className="support-icon">
                                <img className="animated" src={images.icon2} alt=""/>
                                </div>
                                <div className="support-content">
                                    <h5>Support 24/7</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className=" box d-flex justify-content-center align-items-center flex-wrap mb-3">
                                <div className="support-icon">
                                <img className="animated" src={images.icon3} alt=""/>
                                </div>
                                <div className="support-content">
                                    <h5>Money Return</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className=" box d-flex justify-content-center align-items-center flex-wrap mb-3">
                                <div className="support-icon">
                                <img className="animated" src={images.icon4} alt=""/>
                                </div>
                                <div className="support-content">
                                    <h5>Order Discount</h5>
                                    <p>Free shipping on all order</p>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
