import React, { useMemo, useState } from 'react'
import ProductCard from '../../../components/Card/ProductCard'
import { Input, Select } from 'antd';
import { UesProductContext } from '../../Contaxt/ProductContext';
import { Link } from 'react-router-dom';
import SecNav from '../../../components/Header/SecNav';
const { Search } = Input;


export default function Shope() {
  const { allProduct, dispatch } = UesProductContext()
  const [filterProduct, setFilterProduct] = useState(allProduct);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [sortOrder, setSortOrder] = useState('lowest');
  const handleCategory = (category) => {
    setSelectedCategory(category);
    updateFilterProducts(category, selectedSize);
  };

  const handleSize = (size) => {
    setSelectedSize(size);
    updateFilterProducts(selectedCategory, size);
  };

  const updateFilterProducts = (category, size) => {
    let newProducts = allProduct;

    if (category !== 'all') {
      newProducts = newProducts.filter((x) => x.categories === category);
    }

    if (size !== 'all') {
      newProducts = newProducts.filter((x) => x.size === size);
    }

    setFilterProduct(newProducts);
  };


  const onSearch = (searchValue) => {
    const filteredProducts = allProduct.filter((product) =>
      product.productName.toLowerCase().includes(searchValue.toLowerCase()) || product.oneLineDetail.toLowerCase().includes(searchValue.toLowerCase()) || product.brand.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterProduct(filteredProducts);
  };

  const sortProducts = (order, products) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (order === 'lowest') {
        return priceA - priceB;
      } else if (order === 'highest') {
        return priceB - priceA;
      }
      return 0;
    });

    setFilterProduct(sortedProducts);
  };
  const handleChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    // Sort the products based on the selected order
    sortProducts(order, filterProduct);
  };
  return (
    <div className="shop">
      <SecNav name ="SHOP" />

      <div className="container mt-5">
        <div className="searchManu">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-3 ">

              <Search
                status="warning"
                placeholder="Search product"
                onChange={(e) => onSearch(e.target.value)}
                allowClear
                className='searchbar'
              />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
             
              <select id='sort' onChange={handleChange} className='me-3 mb-3 form-select w-100'>
                <option value="lowest">Lowest To Highest</option>
                <option value="highest">Highest To Lowest</option>
              </select>
              <span className=''>Showing {filterProduct.length} of {allProduct.length} results</span>
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
                    <input type="radio" onClick={() => { handleCategory("all") }} value={"all"} name="allCate" id="all1" className=' me-2 my-2 p-3' />
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
                    <input type="radio" onClick={() => { handleSize("all") }} name="allSize" id="all" className=' me-2 my-2 p-3' />
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
                  filterProduct.map((product, i) => {
                    if (i < 9) {
                      return (
                        <div className="col-6 col-md-6 col-lg-4 " key={product.id}>
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
                              <h4><Link to={`/detail/${product.uid}`}>{product.productName}</Link></h4>
                              <p>{product.oneLineDetail}</p>
                              <div className="product-bottom-details">
                                <div className="product-price"><small>${product.price}</small>${product.dscPrice}</div>
                                <div className="product-links">
                                  <Link to={`/detail/${product.uid}`}><i className="fa-solid fa-eye"></i></Link>
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
