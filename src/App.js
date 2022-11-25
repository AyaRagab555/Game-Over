
import React, { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import jwtDecode from "jwt-decode";
import RoutLayout from './Components/RoutLayout/RoutLayout.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Home from './Components/Home/Home.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import All from './Components/All/All.jsx';
import GameDetails from './Components/GameDetails/GameDetails.jsx';
import SortGames from './Components/SortGames/SortGames.jsx';
import CategoryGames from './Components/CategoryGames/CategoryGames.jsx';
import Platform from './Components/Platform/Platform.jsx';


export default function App () {
  let [userData , setUserData ]= useState("");

  useEffect(()=>{
    if(localStorage.getItem("userToken") !== null){
      saveUserData();
    }
  },[])

  function saveUserData (){
    let incodedeToken = jwtDecode(localStorage.getItem("userToken"))
    setUserData(incodedeToken);
    console.log(incodedeToken)
  }

  let myRouter = createBrowserRouter([
    {path:"/",element:<RoutLayout userData={userData} setUserData={setUserData}/>,children: [
      {index: true, element: <Login saveUserData={saveUserData}/>},
      {path:"register" ,element: <Register/>},
      {path:"home" ,element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
      {path:"all" ,element:<ProtectedRoute userData={userData}><All/></ProtectedRoute>},
      {path:"gameDetails/:id" ,element:<ProtectedRoute userData={userData}><GameDetails/></ProtectedRoute>},
      {path:"sortGames/:sortBy" ,element:<ProtectedRoute userData={userData}><SortGames/></ProtectedRoute>},
      {path:"categoryGames/:category" ,element:<ProtectedRoute userData={userData}><CategoryGames/></ProtectedRoute>},
      {path:"Platform/:platform" ,element:<ProtectedRoute userData={userData}><Platform/></ProtectedRoute>},
    ]}
  ]);

  
  return <RouterProvider router={myRouter}/>
}


