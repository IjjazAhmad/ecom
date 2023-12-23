import React, { useMemo, useState } from 'react'
import ProductCard from '../../../components/Card/ProductCard'
import { Input, Select } from 'antd';
import { UesProductContext } from '../../Contaxt/ProductContext';
import { Link } from 'react-router-dom';
const { Search } = Input;


export default function Shope() {
  const { allProduct, sorting, dispatch } = UesProductContext()

  const [fiterproduct, setfiterproduct] = useState(allProduct)



  const handleCategory = (product) => {

    const newproduct = allProduct.filter((x) => {
      return x.categories === product
    })
    console.log("🚀 ~ file: Shop.js:21 ~ //newproduct ~ llproducts:", newproduct)
    setfiterproduct(newproduct)


  };
  const handleCategoryall = () => {


    setfiterproduct(allProduct)


  };
  const handleSizeall = () => {


    setfiterproduct(allProduct)


  };



  const handleSize = (Product) => {
    const newproduct = allProduct.filter((x) => {
      return x.size === Product
    })
    console.log("🚀 ~ file: Shop.js:21 ~ //newproduct ~ llproducts:", newproduct)
    setfiterproduct(newproduct)

  };

  const handleChange = () => {
    dispatch({ type: "highest" })
  };
  const onSearch = (e) => console.log(e.target.value);


  return (
    <div className="shop">
      <div className="nav">
        <div className="menue  bg-body-tertiary w-100">
          <div className="container">
            <div className="row">
              <div className="col ">
                <p className='fs-4 text-center'>HOME / SHOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="searchManu">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-3 ">
              <Search status='warning' placeholder="search product" onChange={onSearch} allowClear className='searchbar' />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <select id='sort' onClick={handleChange} className='me-3 mb-3 form-select w-25'>
                <option value="lowest">Lowest To Highest</option>
                <option value="highest">Highest To Lowest</option>
              </select>
              <span className=''>Showing 8 of 144 result</span>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-wrap-reverse">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="sidebar ">
              <div className="row">
                <div className="col-6 col-md-12 col-lg-12">
                  <div className="Categories">
                    <p className='fs-5 fw-bold mt-5'>Categories</p>
                    <input type="radio" onClick={() => { handleCategoryall("all") }} value={"all"} name="allCate" id="all1" className=' me-2 my-2 p-3' />
                    <label htmlFor="all1">All Categories</label> <br />

                    <input type="radio" onClick={() => { handleCategory("men") }} value={"men"} name="allCate" id="men" className=' me-2 my-2 p-3' />
                    <label htmlFor="men">Men </label> <br />
                    <input type="radio" onClick={() => { handleCategory("women") }} value={"women"} name="allCate" id="women" className=' me-2 my-2 p-3' />
                    <label htmlFor="women">Women </label> <br />
                    <input type="radio" onClick={() => { handleCategory("kids") }} value={"kids"} name="allCate" id="kids" className=' me-2 my-2 p-3' />
                    <label htmlFor="kids">Kids </label> <br />

                  </div>
                </div>

                {/* <div className="col-6 col-md-12 col-lg-12">
                  <div className="Colors">
                    <p className='fs-5 fw-bold mt-5'>Colors</p>
                    <input type="checkbox" name="all" id="all" className=' me-2 my-2 p-3' />
                    <label htmlFor="all">All Color</label> <br />
                    <input type="checkbox" name="White" id="White" className=' me-2 my-2 p-3' />
                    <label htmlFor="White">White </label> <br />
                    <input type="checkbox" name="all" id="all" className=' me-2 my-2 p-3' />
                    <label htmlFor="all">Black </label> <br />
                    <input type="checkbox" name="all" id="all" className=' me-2 my-2 p-3' />
                    <label htmlFor="all">Brown </label> <br />
                    <input type="checkbox" name="all" id="all" className=' me-2 my-2 p-3' />
                    <label htmlFor="all">Yellow </label> <br />

                  </div>
                </div> */}

                <div className="col-6 col-md-12 col-lg-12">
                  <div className="Size">
                    <p className='fs-5 fw-bold mt-5'>Size</p>
                    <input type="radio" onClick={() => { handleSizeall("all") }} name="allSize" id="all" className=' me-2 my-2 p-3' />
                    <label htmlFor="all">All Sizes</label> <br />
                    <input type="radio" onClick={() => { handleSize("sm") }} name="allSize" id="sm" className=' me-2 my-2 p-3' />
                    <label htmlFor="sm">SM </label> <br />
                    <input type="radio" onClick={() => { handleSize("md") }} name="allSize" id="md" className=' me-2 my-2 p-3' />
                    <label htmlFor="md">M </label> <br />
                    <input type="radio" onClick={() => { handleSize("l") }} name="allSize" id="l" className=' me-2 my-2 p-3' />
                    <label htmlFor="l">L </label> <br />
                    <input type="radio" onClick={() => { handleSize("xl") }} name="allSize" id="xl" className=' me-2 my-2 p-3' />
                    <label htmlFor="xl">XL </label> <br />
                    <input type="radio" onClick={() => { handleSize("xxl") }} name="allSize" id="xxl" className=' me-2 my-2 p-3' />
                    <label htmlFor="xxl">XXL </label> <br />

                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="searchResult ">
              <div className="row">
                {
                  fiterproduct.map((product, i) => {
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
                                  <Link to={product.uid}><i className="fa-solid fa-eye"></i></Link>
                                  <a href=""><i className="fa fa-heart"></i></a>
                                  <Link to={product.uid}><i className="fa fa-shopping-cart"></i></Link>
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
        </div>
      </div>

      <div className="container paginat ">
        <div className="row">
          <div className="col">
            <ul className="pagination modal-4 float-end">
              <li><a href="#" className="prev">
                <i className="fa fa-chevron-left"></i>
                Previous
              </a>
              </li>
              <li><a href="#">1</a></li>
              <li> <a href="#">2</a></li>
              <li> <a href="#" className="active">3</a></li>
              <li> <a href="#">4</a></li>
              <li><a href="#" className="next"> Next
                <i className="fa fa-chevron-right"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>



  )
}
