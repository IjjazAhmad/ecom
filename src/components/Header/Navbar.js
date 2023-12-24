import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../pages/Contaxt/AuthContaxt'
import { UserOutlined, HeartOutlined, ShoppingCartOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
export default function Navbar() {
  
  const [navbar, setNavbar] = useState(false)
  const { isAuth, user } = useAuthContext()

  const changebg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changebg);


  return (
    <div className='header'>
      <div className="row">
        <div className="col m-0">
          <div className=" m-0">
            <nav className={navbar ? "navbar active navbar-dark " : "navbar navbar-dark "}>
              <div className="container navbar-expand-lg">
                <Link to="/" className="navbar-brand" >LOGO</Link>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">LOGO</h5>
                    <CloseOutlined className='fs-4 ' data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="navbar-nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link"  >Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/shop" className="nav-link"  >Shop</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/blog" className="nav-link"  >Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link" >Contact Us</Link>
                      </li>
                    </ul>
                    <div className="d-flex searchContainer">
                      <input type="text" placeholder="Search..." />
                      <div className="search"></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center "  >
                  {isAuth && user.role === "admin" ?
                    <div className="Button me-2">
                      <Link to={"/dashboard/home"} className=' btn btn-warning'>Dashboard</Link>
                    </div> :
                    ""

                  }
                  {isAuth ?
                    <Link to="/user" className="nav-link  me-2 fs-4"><Avatar icon={<UserOutlined />} /> </Link>
                    :
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Profile
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link to={'auth/login'} className="dropdown-item" >Login</Link></li>
                        <li><Link to={'auth/register'} className="dropdown-item" >Register</Link></li>
                      </ul>
                    </div>
                  }
                  <Badge count={1} className='me-2' >
                    <Link to='/heart' className="nav-link fs-4 text-warning"><HeartOutlined /></Link>
                  </Badge>
                  <Badge count={1}  >
                    <Link to='/cart' className="nav-link  fs-4 text-warning" ><ShoppingCartOutlined /></Link>
                  </Badge>
                  <MenuOutlined className="navbar-toggler ms-2 " aria-expanded="false" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
