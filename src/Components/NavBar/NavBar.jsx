import React from 'react';
import logo from "../assets/logo.png"
import {Link , useNavigate} from "react-router-dom";

export default function Navbar({userData ,setUserData}) {
  let navigate = useNavigate();
  function LogOut (){
    localStorage.removeItem("userToken");
    setUserData(null)
    navigate("/")
  }
  return <>
  <nav className="navbar navbar-expand-lg bg-main fixed-top shadow">
    <div className="container">
      <a className="navbar-brand text-white" href="/"><img src={logo}/>Game Over</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<>
        <ul className="navs navbar-nav d-flex align-items-center list-unstyled me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="all">All</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={`Platform/pc`}>pc</Link></li>
              <li><Link className="dropdown-item" to={`Platform/browser`}>browser</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            sort-by</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={`sortGames/release-date`}>release-date</Link></li>
              <li><Link className="dropdown-item" to={`sortGames/popularity`}>popularity</Link></li>
              <li><Link className="dropdown-item" to={`sortGames/alphabetical`}>alphabetical</Link></li>
              <li><Link className="dropdown-item" to={`sortGames/relevance`}>relevance</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={`categoryGames/racing`}>racing</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/sports`}>sports</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/social`}>social</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/shooter`}>shooter</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/open-world`}>open-world</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/zombie`}>zombie</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/fantasy`}>fantasy</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/action-rpg`}>action-rpg</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/action`}>action</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/flight`}>flight</Link></li>
              <li><Link className="dropdown-item" to={`categoryGames/battle-royale`}>battle-royale</Link></li>
            </ul>
          </li>
        </ul>
        <Link className="p-2" to="/"><button onClick={LogOut} className='btn-outline-third'>Log Out</button></Link></>
      : <ul className="navs d-flex align-items-center list-unstyled ms-auto mb-2 mb-lg-0">
          <li >
            <Link className="p-2 me-2" to="/">Login</Link>
          </li>
          <li >
            <Link className="p-2" to="register"><button className='btn-outline-third'>Join Free</button></Link>
          </li>
         
          </ul>}
      </div>
    </div>
  </nav>
</>}
