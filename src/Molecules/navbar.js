import React from 'react';
import "../Assets/CSS/navbar.css"
import logo from "../Assets/images/logo.png"
import Data from "../Assets/Json/products.json"
import Data1 from "../Assets/Json/services.json"

export default function Navbar() {

  return (
    <div className="navbar px-5 justify-content-between" id="navbar">
      <img src={logo} alt="logo" className="nav-img"/>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/AboutUs">About</a>
        <a href="#Services" className="dropdown">
          <div className="dropbtn">Services</div>
          <div className="dropdown-content mt-3" id="dropdown">
            {Data1 && Data1.map((items, index)=>{
              var Servicename=items.ServiceName;
              var url=items.urlname;
              return(
                <>
                  <a href={`/${url}`}>{Servicename}</a>
                </>
              );
            })}
          </div>
        </a>
        <a href="#Products" className="dropdown">
          <div className="dropbtn">Products</div>
          <div className="dropdown-content mt-3" id="dropdown1">
            {Data && Data.map((items, index)=>{
              var Prodname=items.ProdName;
              return(
                <>
                  <a href={`/${Prodname}`}>{Prodname}</a>
                </>
              );
            })}
          </div>
        </a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}