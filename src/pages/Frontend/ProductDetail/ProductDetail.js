import React, { useEffect, useState } from 'react'

import { images } from '../../../assets/heroSection';
import { Link, useParams } from 'react-router-dom';
import { Image } from 'antd';
import { UesProductContext } from '../../Contaxt/ProductContext';
import SecNav from '../../../components/Header/SecNav';
export default function ProductDetail() {
    const { productId } = useParams();
    const { allProduct } = UesProductContext()

    const [state, setState] = useState("")
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


    useEffect(() => {
        Information()
    }, [])
    const Information = () => {
        setState(<ul id='Det'>
            <li className="ql-indent-1">
                <strong style={{ color: "rgb(0, 0, 0)" }}>Weight</strong>
                <span style={{ color: "rgb(0, 0, 0)" }}></span>&nbsp; 400 g</li>
            <li className="ql-indent-1">
                <strong style={{ color: "rgb(0, 0, 0)" }}>Dimensions</strong>
                <span style={{ color: "rgb(0, 0, 0)" }}></span>10 x 10 x 15 cm</li>
            <li className="ql-indent-1">
                <strong style={{ color: "rgb(0, 0, 0)" }}>Materials</strong>
                <strong>&nbsp;</strong>60% cotton, 40% polyester</li>
            <li className="ql-indent-1">
                <strong style={{ color: "rgb(0, 0, 0)" }}>Other Info</strong>&nbsp; American heirloom jean shorts pug seitan letterpress</li>
        </ul>)
    }
    const Description = () => {
        setState(<p id='par'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quae labore quod perspiciatis nemo, doloribus amet odio nesciunt tempore aliquam soluta itaque cum enim delectus sit error repellat laborum in architecto eius omnis. Beatae tempora, maiores velit fuga, alias sapiente accusantium ea quibusdam molestias, dignissimos repudiandae quis assumenda odio consequatur?</p>)
    }
    const Reviews = () => {
        setState(<p id='par' className='w-70 text-center'>This is my very first order through site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again...</p>)
    }


    // useEffect(() => {
    //  const productDetail = allProduct.filter((product) => {
    //         return (
    //             product.uid === productId
    //         )
    //     })
    //     console.log("🚀 ~ file: ProductDetail.js:59 ~ productDetail ~ productDetail:", productDetail)

    // }, [])
    return (
        <>
        <SecNav name ="PRODUCT DETAILS" />
            <div className="productdetail pb-4">


                <div className="container ">
                    <div className="row">

                        <div className="wrapper">
                            {
                                allProduct.map((product) => {
                                    if (product.uid === productId) {
                                        return (
                                            <>
                                                <div className="col-12 col-md-6 col-lg-8 content">
                                                    <span>{product.brand}</span>
                                                    <h1>{product.productName}</h1>
                                                    <div>
                                                    <div dangerouslySetInnerHTML={{__html: product.fullDetail}}></div>
                                                    </div>
                                                    <ul>
                                                        <li>SIZE</li>
                                                        <li className="bg">sm</li>
                                                        <li className="bg">md</li>
                                                        <li className="bg">lg</li>
                                                        <li className="bg">xl</li>
                                                    </ul>
                                                    <ul>
                                                        <li>COLOR</li>
                                                        <li className="color" style={{ background: `${product.clr}` }}></li>
                                                        {/* <li className="color" style={{ background: "black" }}></li>
                                                        <li className="color"></li> */}
                                                    </ul>
                                                    <div className="button">
                                                        <Link href="#">{product.dscPrice}</Link><Link className="cart-btn" ><i className="cart-icon ion-bag"></i> ADD TO CART</Link>
                                                    </div>
                                                    <div className="Button">
                                                        <div className="input-group-prepend">
                                                            <button className="btn" type="button" onClick={decNum}>-</button>
                                                        </div>
                                                        <input type="text" className="form-control" value={num < 10 ? "0" + num : num} onChange={handleChange} />
                                                        <div className="input-group-prepend">
                                                            <button className="btn" type="button" onClick={incNum}>+</button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-12 col-md-6 col-lg-4 imgDiv">
                                                    <Image.PreviewGroup
                                                        items={[
                                                            `${product.imgUrl}`,
                                                            // `${images.slider2}`,
                                                            // `${images.slider3}`,
                                                        ]}
                                                    >
                                                        <Image src={product.imgUrl} />
                                                    </Image.PreviewGroup>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row">
                    <div className="col">
                        <ul className="nav fw-bold justify-content-center mt-5">
                            <li className="nav-item ">
                                <p className="nav-link" role="button" onClick={Information} >Additional Information</p>
                            </li>
                            <li className="nav-item ">
                                <p className="nav-link" role="button" onClick={Description} >Description</p>
                            </li>
                            <li className="nav-item ">
                                <p className="nav-link " role="button" onClick={Reviews} >Reviews (2)</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        {state}
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center d-flex justify-content-center align-items-center my-4">
                        <div className='line' ></div><h3> Related Products!</h3> <div className='line'></div>
                    </div>
                </div>
                <div className="row ">
                    {
                        allProduct.map((product, i) => {
                            if (i < 3) {
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
                                                <h4><Link href="">{product.productName}</Link></h4>
                                                <p>{product.oneLineDetail}</p>
                                                <div className="product-bottom-details">
                                                    <div className="product-price"><small>${product.price}</small>${product.dscPrice}</div>
                                                    <div className="product-links">
                                                        <Link to={`/detail/${product.uid}`}><i className="fa-solid fa-eye"></i></Link>
                                                        <Link href=""><i className="fa fa-heart"></i></Link>
                                                        <Link href=""><i className="fa fa-shopping-cart"></i></Link>
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


        </>
    )
}
