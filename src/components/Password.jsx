import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';

const Password = () => {

     const [password, setPassword] = useState("");
     const [showPass, setShowPass] = useState(false);

     const navigate = useNavigate();

     const correctPassword = "SEATAOO-000";

     const handlePassword = (e) => {
          setPassword(e.target.value);
     }

     const handleSubmit = () => {
          if (password === correctPassword) {
               localStorage.setItem("password", password);
               Toast.successMsg("Login Sucessfully");
               navigate("/home");
               
          } else {
               Toast.errorMsg("Password is not correct")
          }
     }

     useEffect(() => {
          localStorage.removeItem('password')
     })

     return (
          <>
               <div className="container-fluid vh-100 bg-light">
                    <div className="row h-100 d-flex justify-content-center align-items-center">
                         <div className="col col-md-6 col-lg-4 col-xl-3">
                              <div className="card bg-white shadow-lg border-0 rounded-0">
                                   <div className="card-body">
                                        <label>Enter password: <span className='text-danger'>*</span></label>
                                        <input
                                             type={showPass ? "text" : "password"}
                                             className='form-control my-2'
                                             placeholder='Enter password'
                                             onChange={handlePassword} />
                                        <input
                                             type="checkbox"
                                             onChange={(e) => { setShowPass(!showPass) }}
                                        /> Show password
                                        <div className='d-grid mt-3'>
                                             <button className='btn btn-danger rounded-0' onClick={handleSubmit}>Done</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Password