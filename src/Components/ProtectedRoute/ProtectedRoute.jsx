import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    let navigate = useNavigate();
    if(props.userData == null){
        navigate("/")
    }else{
        return props.children;
    }
  return <>
    
  </>
}
