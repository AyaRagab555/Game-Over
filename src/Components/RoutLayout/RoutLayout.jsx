import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import {Outlet} from "react-router-dom"

export default function RoutLayout({userData , setUserData}) {
  return <>
    <NavBar userData={userData} setUserData={setUserData}/>
        <Outlet></Outlet>
  </>
};
