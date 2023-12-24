import React, { useState } from 'react'
import { UesProductContext } from '../../Contaxt/ProductContext'
import { Link } from 'react-router-dom'


export default function Dailydeal() {
    const { allProduct, setAllProduct } = UesProductContext()
const [filterPro, setFilterPro] =useState()
const handleLink=(e)=>{
let typ = e.target.accessKey
let filterpro =  allProduct.filter((product)=>{
    return product.deals === typ
  })
  console.log("🚀 ~ file: Dailydeal.js:13 ~ filterpro ~ filterpro:", filterpro)
  
  setFilterPro(filterpro)

}

    return (
        <>
            <div className="dailydeal">
                <div className="container">
                    <div className="row">
                        <div className="col text-center d-flex justify-content-center align-items-center my-4">
                            <div className='line' ></div><h3> DAILY DEALS!</h3> <div className='line'></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <ul className="nav fw-bold justify-content-center">
                                <li className="nav-item mx-5">
                                    <span accessKey="newArrival" role="button" onClick={handleLink}>New Arrivals</span>
                                </li>
                                <li className="nav-item mx-5">
                                    <span accessKey="bestSeller" role="button" onClick={handleLink}>Best Sellers</span>
                                </li>
                                <li className="nav-item mx-5">
                                    <span accessKey="saleItem" role="button" onClick={handleLink}>Sale Items</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {!filterPro?
                            allProduct.map((product, i) => {
                                if (i < 9) {
                                    return (
                                        <div className="col-6 col-md-6 col-lg-4 " key={i}>
                                            <div className="product-card">
                                                {product.offer ?

                                                    <div className="badge">{product.offer}</div>
                                                    :
                                                    <div className="badge"></div>

                                                }
                                                <div className="product-tumb">
                                                    <img src={product.imgUrl} alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <span className="product-catagory">{product.brand}</span>
                                                    <h4><a href="">{product.productName}</a></h4>
                                                    <p>{product.oneLineDetail}</p>
                                                    <div className="product-bottom-details">
                                                        <div className="product-price"><small>${product.price}</small>${product.dscPrice}</div>
                                                        <div className="product-links">
                                                            <Link to={`/detail/${product.uid}`} ><i className="fa-solid fa-eye"></i></Link>
                                                            <Link ><i className="fa fa-heart"></i></Link>
                                                            <Link to={product.uid}><i className="fa fa-shopping-cart"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            :
                            filterPro.map((product, i) => {
                                if (i < 9) {
                                    return (
                                        <div className="col-6 col-md-6 col-lg-4 " key={i}>
                                            <div className="product-card">
                                                {product.offer ?

                                                    <div className="badge">{product.offer}</div>
                                                    :
                                                    <div className="badge"></div>

                                                }
                                                <div className="product-tumb">
                                                    <img src={product.imgUrl} alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <span className="product-catagory">{product.brand}</span>
                                                    <h4><a href="">{product.productName}</a></h4>
                                                    <p>{product.oneLineDetail}</p>
                                                    <div className="product-bottom-details">
                                                        <div className="product-price"><small>${product.price}</small>${product.dscPrice}</div>
                                                        <div className="product-links">
                                                            <a href="/productdetail"><i className="fa-solid fa-eye"></i></a>
                                                            <a href=""><i className="fa fa-heart"></i></a>
                                                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </div>


        </>
    )
}
