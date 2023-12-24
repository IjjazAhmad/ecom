import React from 'react'
import 'mdb-ui-kit/css/mdb.min.css';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Contaxt/AuthContaxt';
import { signOut } from 'firebase/auth';
import { message } from 'antd';
import { auth } from '../../config/firebase';
export default function Profile() {
  const { isAuth, user, dispatch } = useAuthContext()
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
        message.success("Signout successful");
        dispatch({ type: "LOGOUT" });
        
      })
      .catch(err => {
        message.error("Signout not successful")
      })
  }
  return (
    <>

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb " className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0 w-50">
                  <li className="breadcrumb-item"><Link to={"/"} >Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
                <div className="float-end" style={{marginTop:"-31px"}}>
                <button type="button" className="btn btn-secondary" onClick={handleLogout}>Logout</button>
                </div>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">{user.firstName}</h5>
                  <div className="d-flex justify-content-center mb-2">
                    <div className="Button">
                      <button type="button" className="btn"><Link to={"/cart"} className='nav-link'>VIEW CART</Link></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.role}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
