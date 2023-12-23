import React from 'react'
import { UesProductContext } from '../../Contaxt/ProductContext'
// import UesProductContext from '../../Contaxt/ProductContext'

export default function Product() {
    // const { documents } = UesProductContext()
    const { allProduct } = UesProductContext()

    return (
        <>
            <div className="product" >
                <div className="container">
                    <div className="row">
                        {
                            allProduct.map((product, i) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4 " key={i}>
                                        <div className="product-card">
                                            <div className="badge"></div>
                                            <div className="product-tumb">
                                                <img src={product.imgUrl} alt="" />
                                            </div>
                                            <div className="product-details">
                                                <span className="product-catagory">{product.categories}</span>
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
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
