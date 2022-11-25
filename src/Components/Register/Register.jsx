import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import joi from 'joi';

export default function Register() {
    
    let navigate = useNavigate();
    let [isLoading , setIsLoading] = useState(false);
    let [error , setError] = useState();
    let [errorList , setErrorList] = useState([]);
    
    let [user ,setUser] = useState({
        first_name:"",
        last_name :"",
        email :"",
        age :"",
        password :"",
    });

    function getUserData (e) {
        let myUser = {...user};
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
        console.log(myUser)
    }

    async function sendUserData () {
       let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user);
       console.log(data);
       if (data.message == "success"){
        setIsLoading(false);
        navigate("/")
       }else{
        setIsLoading(false);
        setError(data.message)
       }
    }

    function submitRegisterData (e) {
        setIsLoading(true);
        e.preventDefault();
        let validation = validateFormData();
        if(validation.error){
            setIsLoading(false);
            setErrorList(validation.error.details);
            console.log(errorList)
        }else{
            sendUserData();

        }

    }

    function validateFormData () {
       let scheme = joi.object({
            first_name:joi.string().min(3).max(10).required(),
            last_name :joi.string().min(3).max(10).required(),
            email :joi.string().email({tlds:{allow: false}}).required(),
            age :joi.number().min(16).max(80).required(),
            password :joi.string().pattern(/^[A-Z]/).min(4).required(),
        });
        return scheme.validate(user,{ abortEarly: false});
    }

  return <>
<div className="container my-5 p-4">
    <div className="row g-0 py-5 px-3">
        <div className="col-md-6"><div className="coverPage"></div></div>
        <div className="col-md-6"><div className="itemLogin text-center py-5 p-4">
            <h3>Create My Account!</h3>
            <form onSubmit={submitRegisterData} className='text-center'>
                <div className="d-flex">
                    <div className='w-50 my-2 me-3'><input onChange={getUserData} name='first_name' type="text" placeholder='First Name' className='bg-dark text-white w-100 border-0 p-2 rounded' />
                        <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "first_name")[0]?.message}</p></div>
                    <div className='w-50 my-2 ms-3'><input onChange={getUserData} name='last_name' type="text" placeholder='Last Name' className='bg-dark text-white w-100 border-0 p-2 rounded' />
                        <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "last_name")[0]?.message}</p></div>
                </div>
                <div><input onChange={getUserData} name='email' type="email" placeholder='Email Adress' className='bg-dark text-white border-0 w-100 p-2 w-50 my-2 rounded' />
                    <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "email")[0]?.message}</p></div>
                <div><input onChange={getUserData} name='age' type="number" placeholder='Age' className='bg-dark text-white border-0 w-100 p-2 w-50 my-2 rounded' />
                    <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "age")[0]?.message}</p></div>
                <div><input onChange={getUserData} name='password' type="password" placeholder='Password' className='bg-dark text-white border-0 w-100 p-2 w-50 my-2 rounded' />
                    <p className='alert-warning rounded'>{errorList.filter((err)=>err.context.label == "password")[0]?"'password' must be at least 4 characters long and start with a capital letter":""}</p></div>
                <button className='loginBtn p-2 w-100 my-2 border-main text-white rounded'>
                    {isLoading == true?<i className='fas fa-spinner fa-spin text-white'></i>: "Create Acount"}</button>
                <p className='fs-7 m-0 text-muted '>This site is protected by reCAPTCHA and the Google <a className='text-muted' href="https://policies.google.com/privacy">Privacy Policy.
                </a> and <a className='text-muted' href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                <hr />
                <p>Already a member?<Link className='noHover text-decoration-none text-third' to="/">Log in&gt;</Link></p>     
            </form>
        </div></div>
    </div>
    </div>
  </>
}
