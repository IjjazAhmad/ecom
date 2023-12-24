import React, { useState } from 'react'
import { images } from '../../../assets/heroSection'
import { Link } from 'react-router-dom';
import { UesCartProductContext } from '../../Contaxt/CartProductContaxt';
import SecNav from '../../../components/Header/SecNav';
export default function Cart() {
   const {name} = UesCartProductContext()
    
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div className="cart">
            <SecNav name ="CART" />
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <h3 className='mt-5'>Your cart items</h3>
                        <div className="table-responsive border">
                            <table className="table table-hover align-middle align-middle">
                                <thead className='table-light'>
                                    <tr>
                                        <th scope="col">IMAGE</th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">UNIT PRICE</th>
                                        <th scope="col">QTY</th>
                                        <th scope="col">SUBTOTAL</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <img src={images.slider5} alt="loading.." /> </td>
                                        <td>Product name <br /> color: white <br />Size: x</td>
                                        <td className='text-decoration-line-through'>&#8377; 3464</td>
                                        <td>
                                            <div className="Button">
                                                <button className="btn" type="button" onClick={decNum}>-</button>

                                                <input type="text" className="form-control" value={num < 10 ? "0" + num : num} onChange={handleChange} />
                                                <button className="btn" type="button" onClick={incNum}>+</button>

                                            </div>
                                        </td>
                                        <td>&#8377; 3064</td>
                                        <td><i className="fa-solid fa-xmark" style={{ color: "#d68b0a" }}></i></td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-6">
                        <div className="Button">
                            <button type="button" className="btn"><Link to={"/shop"} className='nav-link'>CONTINUE SHOPPING</Link></button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="Button float-end">
                            <button className="btn" type="button ">CLEAR SHOPING CART</button>

                        </div>
                    </div>
                </div>

                <div className="row justify-content-end mt-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="checkoutCart p-5">
                            <p className='fw-bold'>Cart Total</p>
                            <span>Total items </span><span className='float-end'>2</span> <br /><br />
                            <span>Total price </span><span className='float-end'>&#8377; 3464</span>
                            <div className="Button w-100 mt-4">
                                <div >
                                    <button className="btn w-100" type="button">CONTINUE SHOPPING</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
