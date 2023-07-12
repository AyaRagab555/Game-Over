
import axios from 'axios';
import React from 'react';
import logo from "../assets/logo.png"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import joi from 'joi';

    

export default function Login({saveUserData}) {
  let navigate = useNavigate();
  let [isLoading , setIsLoading] = useState(false);
  let [error , setError] = useState();
  let [errorList , setErrorList] = useState([]);
  let [user ,setUser] = useState({
    email :"",
    password :"",
});
  
  function getUserData (e) {
      let myUser = {...user};
      myUser[e.target.name]=e.target.value;
      setUser(myUser);
      console.log(myUser)
  }
  
  async function sendLoginUserData () {
     let {data} = await axios.post(`https://movies-api.routemisr.com/signin`,user);
     console.log(data);
     if (data.message == "success"){
      setIsLoading(false);
      localStorage.setItem("userToken" , data.token)
      saveUserData();
      navigate("/home")
     }else{
      setIsLoading(false);
      setError(data.message)
     }
  }
  
  function submitLoginData (e) {
      setIsLoading(true);
      e.preventDefault();
      let validation = validateLoginFormData();
      if(validation.error){
          setIsLoading(false);
          setErrorList(validation.error.details);
          console.log(errorList)
      }else{
          sendLoginUserData();
  
      }
  
  }
  
  function validateLoginFormData () {
     let scheme = joi.object({
          email :joi.string().email({tlds:{allow: false}}).required(),
          password :joi.string().pattern(/^[A-Z]/).min(4).required(),
      });
      return scheme.validate(user,{ abortEarly: false});
  }
  return <>
<div className="container my-5 p-4">
    <div className="row g-0 py-5 px-3">
        <div className="col-md-6"><div className="coverPage"></div></div>
        <div className="col-md-6"><div className="itemLogin text-center p-5">
        <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "email")[0]?"invaled email":""}</p>
        <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "password")[0]?"incorrect password":""}</p>
            <img src={logo} className="w-25 m-3"/>
            <h3>Log in to GameOver</h3>
            <form onSubmit={submitLoginData} className='text-center'>
                <input onChange={getUserData} name="email" type="email" placeholder='Email' className='p-2 w-100 my-2 rounded' />
                <input onChange={getUserData} name="password" type="password" placeholder='Password' className='p-2 w-100 my-2 rounded' />
                <button type='submit' className='loginBtn p-2 w-100 my-2 border-main rounded'>
                  {isLoading == true?<i className='fas fa-spinner fa-spin text-white'></i>: "Login"}</button>
                <hr />
                <a className='noHover d-block text-decoration-none text-third pointer' onClick={()=>alert("ههه اعمل اكونت جديد")}>Forget Password?</a>
                <p className='m-0 '>Not a member yet? <Link className="noHover text-decoration-none text-third" to="register">Create Account&gt;</Link></p>
            </form>
        </div></div>
    </div>
    </div>
  </>
}
