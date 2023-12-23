import React from 'react'
import Routes from './Routes'
// import {images} from '../../../assets/heroSection'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-ui-kit/css/mdb.min.css';
import { Link } from 'react-router-dom';
export default function Dashboard() {
    return (
        <>
            <div className="dashBoard">


                <div className="container-fluid">
                    <div className="row">
                        <div className="col">

                            {/* <!--Main Navigation--> */}
                            <header>
                                {/* <!-- Sidebar --> */}
                               
                                <nav
                                    id="sidebarMenu"
                                    tabIndex="-1"
                                    className="collapse d-lg-block sidebar collapse "
                                >
                                    <div className="position-sticky ">
                                        <div className="list-group list-group-flush mx-3 mt-4 ">
                                            <Link to={"/dashboard/home"}

                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                                aria-current="true"
                                            >
                                                <i className="fas fa-tachometer-alt fa-fw me-3"></i
                                                ><span>Home</span>
                                            </Link>
                                            <Link to={"product"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            >
                                                <i className="fas fa-chart-area fa-fw me-3"></i
                                                ><span>Product</span>
                                            </Link>
                                            <Link to={'addproduct'}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fas fa-lock fa-fw me-3"></i><span>Add Product</span></Link>
                                            
                                            
                                            <Link to={"order"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>
                                            <Link to={"users"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link >
                                            <Link to={"sales"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></Link>
                                            <Link to={"calender"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fas fa-calendar fa-fw me-3"></i
                                            ><span>Calendar</span></Link >
                                            <Link to={"/"}
                                                
                                                className="list-group-item list-group-item-action py-2 ripple  text-white"
                                            ><i className="fa-solid fa-circle-left fa-fw me-3"></i><span>Back</span></Link >
                                        </div>
                                    </div>
                                </nav>
                                {/* <!-- Sidebar --> */}

                                {/* <!-- Navbar --> */}
                                <nav
                                    id="main-navbar"
                                    className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                                >
                                    {/* <!-- Container wrapper --> */}
                                    <div className="container">
                                   
                                        {/* <!-- Toggle button --> */}

                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-mdb-toggle="collapse"
                                            data-mdb-target="#sidebarMenu"
                                            aria-controls="sidebarMenu"
                                            // aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <i className="fas fa-bars"></i>
                                        </button>

                                        {/* <!-- Brand --> */}
                                        <Link to={'home'} className="navbar-brand">
                                            {/* <img
                                            src={images.slider3}
                                            height="25"
                                            alt=""
                                            loading="lazy"
                                        /> */}
                                            Logo
                                        </Link>
                                        {/* <!-- Search form --> */}
                                        <form className="d-none d-md-flex input-group w-auto my-auto">
                                            <input
                                                autoComplete="off"
                                                type="search"
                                                className="form-control rounded ms-5"
                                                placeholder='Search...'
                                                style={{ minWidth: "225px" }}
                                            />
                                            <span className="input-group-text border-0"
                                            ><i className="fas fa-search"></i
                                            ></span>
                                        </form>

                                        {/* <!-- Right links --> */}
                                        <ul className="navbar-nav ms-auto d-flex flex-row">
                                            {/* <!-- Notification dropdown --> */}
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                                    
                                                    id="navbarDropdownMenuLink"
                                                    role="button"
                                                    data-mdb-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fas fa-bell"></i>
                                                    <span className="badge rounded-pill badge-notification bg-danger"
                                                    >1</span>
                                                </a>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li><a className="dropdown-item" >Some news</a></li>
                                                    <li><a className="dropdown-item" >Another news</a></li>
                                                    <li>
                                                        <a className="dropdown-item" >Something else here</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            {/* <!-- Avatar --> */}
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                                    
                                                    id="navbarDropdownMenuLink"
                                                    role="button"
                                                    data-mdb-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                                        className="rounded-circle"
                                                        height="22"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </a>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li><Link to={'profile'} className="dropdown-item" >My profile</Link></li>
                                                   
                                                    <li><Link  className="dropdown-item" >Logout</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Container wrapper --> */}
                                </nav>
                                {/* <!-- Navbar --> */}
                            </header>
                            {/* <!--Main Navigation--> */}

                            {/* <!--Main layout--> */}
                            <main style={{ marginTop: "58px" }}>
                                <div className="container pt-4">
                                    <Routes />

                                </div>
                            </main>
                            {/* <!--Main layout--> */}

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
