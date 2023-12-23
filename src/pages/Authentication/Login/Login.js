import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebase';
const initialState = { email: "", password: "" }
export default function Login() {
  const navegate = useNavigate() 
  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSignin = e => {
    e.preventDefault()
    const { email, password } = state
    if(!email){
      return window.notify("Plz Enter Email", "error")
    }
    if(password.length<6){
      return window.notify("Password contain 6 character", "error")
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      navegate("/")
      
     window.notify("user Login successfuly", "success")
     // ...
    })
    .catch((error) => {
      window.notify("something want worng plz Try again", "error")
    
    });
setState(initialState)


  }

  return (
    <div className="formDiv">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6  col-lg-4 ">
            <form>
              <div className="card pt-4 px-2">
                <h2 className='text-center pb-3'>Login</h2>

                <div className="row">
                  <div className="col-12">

                    <div className="mb-3">
                      <input type="email" className="form-control" id="email" placeholder='Email' name='email' value={state.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <input type="password" className="form-control" id="password" placeholder='Password' name='password' value={state.password} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                    <Link to='/auth/signin' className='text-white float-end nav-link'>Forget Password?</Link>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3  text-center ">
                      <button className="btn btn-danger text-white w-50 my-3" onClick={handleSignin} >Login</button>
                      <div>If don't have an account? <Link to='/auth/register'>Register</Link> here</div>
                      <div>Copyright &copy; ijjazahmad.com</div>
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}
